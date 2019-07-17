const autometa_options = {
  site: {
    name   : 'Esper docs',
    twitter: 'Esper docs',
  },
  canonical_base: 'https://docs.esper.io',
};

const feed_options = {
  canonical_base: 'https://docs.esper.io',
}

module.exports = {
  base: "/",
  title: "Docs",
  description: "Esper documentation",
  plugins: [
    ["vuepress-plugin-reading-time", true],
    ["@dovyp/vuepress-plugin-clipboard-copy", true],
    ["@vuepress/back-to-top", true],
    ["@vuepress/plugin-medium-zoom", true],
    [ 'autometa', autometa_options ],
    [ 'feed', feed_options ],
    [ 
      '@vuepress/google-analytics',
      {
        'ga': 'UA-141392027-1' // UA-00000000-0
      }
    ]  
  ],
  themeConfig: {
    esper_tenant_name: "foo",
    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
    },
    algolia: {
      apiKey: "d18aabe96ec6834a5c269f0b13b9a880",
      indexName: "esper"
    },
    lastUpdated: "Last Updated",
    head: [
      [
        "script",
        { src: "//js.hs-scripts.com/5868902.js", async: true, defer: true }
      ][("link", { rel: "icon", href: `favicon.ico` })],
      ["link", { rel: "manifest", href: "manifest.json" }]
    ],
    logo: `/esper.svg`,
    nav: [{ text: "Blog", link: "https://blog.esper.io" }],
    docsRepo: "esper-io/dev-docs",
    docsDir: "docs",
    docsBranch: "develop",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    sidebar: {
      "/home/": [
        "",
        "requirements",
        "gettingstarted",
        "esperplugin",
        "emulator",
        "pythonsdk",
        "espercli",
        "api",
        ["devconsole/", "Dev Console"],
        "tutorials",
        "support",
        "faq"
      ]
    },
    displayAllHeaders: true
  }
};
