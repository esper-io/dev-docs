const autometa_options = {
  site: {
    name: "Esper docs",
    twitter: "Esper docs"
  },
  canonical_base: "https://docs.esper.io"
};

const feed_options = {
  canonical_base: "https://docs.esper.io"
};

module.exports = {
  base: "/",
  title: "Docs",
  description: "Esper documentation",
  plugins: [
    ["vuepress-plugin-reading-time", true],
    ["@dovyp/vuepress-plugin-clipboard-copy", true],
    ["@vuepress/back-to-top", true],
    ["@vuepress/plugin-medium-zoom", true],
    ["autometa", autometa_options],
    ["feed", feed_options],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-141392027-1" // UA-00000000-0
      }
    ]
  ],
  head: [
    [
      "script",
      { src: "//js.hs-scripts.com/5868902.js", async: true, defer: true }
    ],[
      "script",
      {},
      `(function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:1485078,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `],
    ["link", { rel: "manifest", href: "manifest.json" }]
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
    logo: `/esper.svg`,
    nav: [
      { text: "Blog", link: "https://blog.esper.io" },
      { text: "SIGNUP", link: "https://esper.io/signup" }
    ],
    docsRepo: "esper-io/dev-docs/",
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
        "provisioner",
        "pythonsdk",
        "espercli",
        "api",
        "console",
        "tutorials",
        "support",
        "faq"
      ]
    },
    displayAllHeaders: true
  }
};
