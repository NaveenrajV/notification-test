const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\office\\notification-test\\.docz\\.cache\\dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("D:\\office\\notification-test\\README.md"))),
  "component---src-features-mdx": hot(preferDefault(require("D:\\office\\notification-test\\src\\Features.mdx"))),
  "component---src-myfile-mdx": hot(preferDefault(require("D:\\office\\notification-test\\src\\myfile.mdx"))),
  "component---src-structure-mdx": hot(preferDefault(require("D:\\office\\notification-test\\src\\Structure.mdx"))),
  "component---src-props-mdx": hot(preferDefault(require("D:\\office\\notification-test\\src\\Props.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\office\\notification-test\\.docz\\src\\pages\\404.js")))
}

