import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = resolve(__dirname, "..");
const BASE_URL = "https://fedebello.com";

const routes = ["/", "/experience", "/projects", "/publications", "/contact"];

const pageMeta = {
  "/": {
    title: "Federico Bello | Portfolio",
    description:
      "Lead ML Engineer at Tryolabs. Graph Neural Networks, AI systems & applied mathematics. Explore Federico Bello's projects and publications.",
  },
  "/experience": {
    title: "Experience | Federico Bello",
    description:
      "Federico Bello's professional experience as Lead ML Engineer at Tryolabs, including past roles in ML engineering and academic teaching.",
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

// Keep the raw SPA shell as 404.html so unknown routes hydrate cleanly
writeFileSync(resolve(root, "dist/404.html"), template);
console.log("Written → dist/404.html (SPA shell)");

const { render } = await import(resolve(root, "dist-server/entry-server.js"));

for (const route of routes) {
  process.stdout.write(`Pre-rendering ${route} ...`);

  const html = await render(`${BASE_URL}${route}`);
  const meta = pageMeta[route];

  const output = template
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

  const segment = route === "/" ? "" : route.slice(1);
  const outDir = segment
    ? resolve(root, "dist", segment)
    : resolve(root, "dist");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, "index.html"), output);

  console.log(` done → dist/${segment ? segment + "/" : ""}index.html`);
}

console.log("\nPre-rendering complete.");
