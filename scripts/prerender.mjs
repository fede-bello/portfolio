import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = resolve(__dirname, "..");
const BASE_URL = "https://www.fedebello.com";

// Routes, meta and language helpers come from the app itself (src/i18n), via the SSR bundle.
const {
  render,
  getPageMeta,
  getLangFromPath,
  localizePath,
  stripLang,
  LANGS,
  LOCALIZED_ROUTES,
  OG_LOCALES,
} = await import(resolve(root, "dist-server/entry-server.js"));

const absoluteUrl = (path) => (path === "/" ? `${BASE_URL}/` : `${BASE_URL}${path}`);

/** [hreflang, url] pairs for every language version of a route, plus x-default (English). */
function alternatesFor(route) {
  return [
    ...LANGS.map((lang) => [lang, absoluteUrl(localizePath(route, lang))]),
    ["x-default", absoluteUrl(localizePath(route, "en"))],
  ];
}

const template = readFileSync(resolve(root, "dist/index.html"), "utf-8");

const notFoundHtml = template
  .replace(
    '<meta name="robots" content="index, follow" />',
    '<meta name="robots" content="noindex, nofollow" />'
  )
  .replace(/<title>[^<]*<\/title>/, "<title>Page Not Found | Federico Bello</title>");
writeFileSync(resolve(root, "dist/404.html"), notFoundHtml);
console.log("Written → dist/404.html (SPA shell, noindex)");

for (const route of LOCALIZED_ROUTES) {
  process.stdout.write(`Pre-rendering ${route} ...`);

  const html = await render(`${BASE_URL}${route}`);
  const meta = getPageMeta(route);
  const lang = getLangFromPath(route);
  const url = absoluteUrl(route);
  const hreflangTags = alternatesFor(route)
    .map(([hreflang, href]) => `<link rel="alternate" hreflang="${hreflang}" href="${href}" />`)
    .join("\n    ");

  const output = template
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${meta.description}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${meta.title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${meta.description}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${meta.title}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${meta.description}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<link rel="canonical" href="[^"]*" \/>)/, `$1\n    ${hreflangTags}`)
    .replace('<html lang="en"', `<html lang="${lang}"`)
    .replace(
      '<meta property="og:locale" content="en_US" />',
      `<meta property="og:locale" content="${OG_LOCALES[lang]}" />`
    );

  const segment = route === "/" ? "" : route.slice(1);
  const outDir = segment ? resolve(root, "dist", segment) : resolve(root, "dist");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, "index.html"), output);

  console.log(` done → dist/${segment ? segment + "/" : ""}index.html`);
}

// Sitemap: every localized page, each listing its language alternates.
const lastmod = new Date().toISOString().slice(0, 10);
const priorities = { "/": "1.0", "/contact": "0.5" };
const sitemapEntries = LOCALIZED_ROUTES.map((route) => {
  const page = stripLang(route);
  const isHome = page === "/";
  const priority = priorities[page] ?? "0.8";
  const links = alternatesFor(route)
    .map(
      ([hreflang, href]) =>
        `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>`
    )
    .join("\n");
  return [
    "  <url>",
    `    <loc>${absoluteUrl(route)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${page === "/contact" ? "yearly" : "monthly"}</changefreq>`,
    `    <priority>${isHome && getLangFromPath(route) !== "en" ? "0.9" : priority}</priority>`,
    links,
    "  </url>",
  ].join("\n");
});
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries.join("\n")}
</urlset>
`;
writeFileSync(resolve(root, "dist/sitemap.xml"), sitemap);
console.log(`Written → dist/sitemap.xml (${LOCALIZED_ROUTES.length} URLs)`);

console.log("\nPre-rendering complete.");
