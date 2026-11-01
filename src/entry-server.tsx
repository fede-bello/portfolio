import React from "react";
import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import { routes } from "./routes";

// Re-exported so scripts/prerender.mjs shares the same routes, meta and language config.
export { getPageMeta, LOCALIZED_ROUTES } from "./i18n/meta";
export { getLangFromPath, localizePath, stripLang, LANGS, OG_LOCALES } from "./i18n/config";

export async function render(url: string): Promise<string> {
  const handler = createStaticHandler(routes);
  const context = await handler.query(new Request(url));

  if (context instanceof Response) {
    throw context;
  }

  const router = createStaticRouter(routes, context);
  return renderToString(
    <React.StrictMode>
      <StaticRouterProvider router={router} context={context} />
    </React.StrictMode>
  );
}
