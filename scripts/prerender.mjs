import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = resolve(__dirname, "..");
const BASE_URL = "https://www.fedebello.com";

const routes = ["/", "/es", "/fr", "/experience", "/projects", "/publications", "/contact"];

const langs = { "/es": "es", "/fr": "fr" };
const ogLocales = { en: "en_US", es: "es_ES", fr: "fr_FR" };
const hreflangRoutes = { en: "/", es: "/es", fr: "/fr" };
const hreflangTags = [
  ...Object.entries(hreflangRoutes).map(
    ([lang, path]) =>
      `<link rel="alternate" hreflang="${lang}" href="${BASE_URL}${path === "/" ? "/" : path}" />`
  ),
  `<link rel="alternate" hreflang="x-default" href="${BASE_URL}/" />`,
].join("\n    ");

const pageMeta = {
  "/": {
    title: "Federico Bello (Fede Bello) | Machine Learning Engineer, ENS Paris-Saclay",
    description:
      "Federico Bello (Fede Bello), Machine Learning Engineer and MVA student at ENS Paris-Saclay, Sophie Germain Scholar. Graph Neural Networks, AI systems & applied mathematics. Portfolio, projects and publications.",
  },
  "/es": {
    title: "Federico Bello (Fede Bello) | Ingeniero de Machine Learning, ENS Paris-Saclay",
    description:
      "Federico Bello (Fede Bello), ingeniero de Machine Learning uruguayo, estudiante del máster MVA en la ENS Paris-Saclay y becario Sophie Germain. Redes neuronales en grafos, sistemas de IA y matemáticas aplicadas.",
  },
  "/fr": {
    title: "Federico Bello (Fede Bello) | Ingénieur Machine Learning, ENS Paris-Saclay",
    description:
      "Federico Bello (Fede Bello), ingénieur Machine Learning, étudiant du master MVA à l'ENS Paris-Saclay et boursier Sophie Germain. Réseaux de neurones sur graphes, systèmes d'IA et mathématiques appliquées.",
  },
  "/experience": {
    title: "Experience | Federico Bello",
    description:
      "Federico Bello's professional experience, including Lead ML Engineer at Tryolabs, other ML engineering roles, and academic teaching and research.",
  },
  "/projects": {
    title: "Projects | Federico Bello",
    description:
      "ML and software engineering projects by Federico Bello — end-to-end AI systems, signal processing, and open-source work.",
  },
  "/publications": {
    title: "Publications | Federico Bello",
    description:
      "Research publications and conference talks by Federico Bello, covering Graph Neural Networks, anomaly detection, and DNA storage.",
  },
  "/contact": {
    title: "Contact | Federico Bello",
    description:
      "Get in touch with Federico Bello — open to collaborations, research opportunities, and interesting ML problems.",
  },
};

const template = readFileSync(resolve(root, "dist/index.html"), "utf-8");

const notFoundHtml = template
  .replace(
    '<meta name="robots" content="index, follow" />',
    '<meta name="robots" content="noindex, nofollow" />'
  )
  .replace(/<title>[^<]*<\/title>/, "<title>Page Not Found | Federico Bello</title>");
writeFileSync(resolve(root, "dist/404.html"), notFoundHtml);
console.log("Written → dist/404.html (SPA shell, noindex)");

const { render } = await import(resolve(root, "dist-server/entry-server.js"));

for (const route of routes) {
  process.stdout.write(`Pre-rendering ${route} ...`);

  const html = await render(`${BASE_URL}${route}`);
  const meta = pageMeta[route];

  const lang = langs[route] ?? "en";
  const isLangCluster = route === "/" || route in langs;

  let output = template
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /(<meta name="description" content=")[^"]*(")/,
      `$1${meta.description}$2`
    )
    .replace(
      /(<meta property="og:title" content=")[^"]*(")/,
      `$1${meta.title}$2`
    )
    .replace(
      /(<meta property="og:description" content=")[^"]*(")/,
      `$1${meta.description}$2`
    )
    .replace(
      /(<meta property="og:url" content=")[^"]*(")/,
      `$1${BASE_URL}${route}$2`
    )
    .replace(
      /(<meta name="twitter:title" content=")[^"]*(")/,
      `$1${meta.title}$2`
    )
    .replace(
      /(<meta name="twitter:description" content=")[^"]*(")/,
      `$1${meta.description}$2`
    )
    .replace(
      /(<link rel="canonical" href=")[^"]*(")/,
      `$1${BASE_URL}${route}$2`
    );

  output = output
    .replace('<html lang="en"', `<html lang="${lang}"`)
    .replace(
      '<meta property="og:locale" content="en_US" />',
      `<meta property="og:locale" content="${ogLocales[lang]}" />`
    );
  if (isLangCluster) {
    output = output.replace(
      /(<link rel="canonical" href="[^"]*" \/>)/,
      `$1\n    ${hreflangTags}`
    );
  }

  const segment = route === "/" ? "" : route.slice(1);
  const outDir = segment
    ? resolve(root, "dist", segment)
    : resolve(root, "dist");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, "index.html"), output);

  console.log(` done → dist/${segment ? segment + "/" : ""}index.html`);
}

console.log("\nPre-rendering complete.");
