module.exports = {
  base: "/",
  title: "Esper Dev Docs",
  description: "Esper documentation",
  plugins: ["vuepress-plugin-reading-time", "@vuepress/back-to-top"],
  themeConfig: {
    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
    },
    lastUpdated: "Last Updated",
    head: [
      ['link', { rel: 'icon', href: `favicon.ico` }],
    ['link', { rel: 'manifest', href: 'manifest.json' }],
    ],
    logo: `/esper.svg`,
    nav: [
      { text: "SDK", link: "/home/pythonsdk.md" },
      { text: "CLI", link: "/home/espercli.md" },
      { text: "API", link: "https://esper-io.github.io/esper-api-spec/" },
      { text: "Blog", link: "https://blog.esper.io" },
      { text: "Product Documentation", link: "https://consoledocs.esper.io" }
    ],
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
        "emulator",
        "devicekit",
        "pythonsdk",
        "espercli",
        "api",
        "tutorials",
        "support",
        "faq",
        ["devconsole/", "Dev Console"],
      ]
    },
    displayAllHeaders: false
  }
};
