const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Cb React Notifications',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: 'D:\\office\\notification-test\\.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Cb React Notifications',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: 'D:\\office\\notification-test',
          templates:
            'D:\\office\\notification-test\\node_modules\\docz-core\\dist\\templates',
          docz: 'D:\\office\\notification-test\\.docz',
          cache: 'D:\\office\\notification-test\\.docz\\.cache',
          app: 'D:\\office\\notification-test\\.docz\\app',
          appPackageJson: 'D:\\office\\notification-test\\package.json',
          gatsbyConfig: 'D:\\office\\notification-test\\gatsby-config.js',
          gatsbyBrowser: 'D:\\office\\notification-test\\gatsby-browser.js',
          gatsbyNode: 'D:\\office\\notification-test\\gatsby-node.js',
          gatsbySSR: 'D:\\office\\notification-test\\gatsby-ssr.js',
          importsJs: 'D:\\office\\notification-test\\.docz\\app\\imports.js',
          rootJs: 'D:\\office\\notification-test\\.docz\\app\\root.jsx',
          indexJs: 'D:\\office\\notification-test\\.docz\\app\\index.jsx',
          indexHtml: 'D:\\office\\notification-test\\.docz\\app\\index.html',
          db: 'D:\\office\\notification-test\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
