// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---readme-md": () => import("../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-features-mdx": () => import("../../src/Features.mdx" /* webpackChunkName: "component---src-features-mdx" */),
  "component---src-myfile-mdx": () => import("../../src/myfile.mdx" /* webpackChunkName: "component---src-myfile-mdx" */),
  "component---src-structure-mdx": () => import("../../src/Structure.mdx" /* webpackChunkName: "component---src-structure-mdx" */),
  "component---src-props-mdx": () => import("../../src/Props.mdx" /* webpackChunkName: "component---src-props-mdx" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

