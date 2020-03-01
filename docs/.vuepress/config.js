module.exports = {
  base: '/',
  title: 'Esper Docs',
  description: 'Esper documentation',
  plugins: [
    ['vuepress-plugin-reading-time', true],
    ['@dovyp/vuepress-plugin-clipboard-copy', true],
    ['@vuepress/back-to-top', true],
    ['@vuepress/plugin-medium-zoom', true],
    [
      ('@vuepress/google-analytics',
      {
        ga: 'UA-141392027-1', // UA-00000000-0
      }),
    ],
    [
      'check-md',
      {
        pattern: '**/*.md',
      },
    ],
  ],
  head: [
    [
      'script',
      { src: '//js.hs-scripts.com/5868902.js', async: true, defer: true },
    ],
    [
      'script',
      {},
      `(function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:1485078,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `,
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    esper_tenant_name: 'foo',
    serviceWorker: {
      updatePopup: true, // Boolean | Object, default to undefined.
    },
    algolia: {
      apiKey: 'd18aabe96ec6834a5c269f0b13b9a880',
      indexName: 'esper',
    },
    lastUpdated: 'Last Updated',
    logo: `/esper.svg`,
    nav: [
      {
        text: 'API docs',
        link: 'https://api.esper.io'
      },{
        text: 'Products',
        ariaLabel: 'Products',
        items: [
          {
            text: 'Commercial Android',
            link: 'https://esper.io/hardware'
          },
          
          {
            text: 'Custom Device',
            link: 'https://esper.io/custom-device'
          },
          
          {
            text: 'Esper Test Lab',
            link: 'https://esper.io/test-lab/'
          },
          {
            text: 'Esper Androidx86',
            link: 'https://esper.io/android-x86/'
          },
          {
            text: 'Esper Virtual Devices',
            link: 'https://esper.io/android-virtual-device/'
          },
          
        ]
      },
      { text: 'Blog', link: 'https://blog.esper.io' },
      { text: 'SIGNUP', link: 'https://esper.io/signup' },
    ],
    docsRepo: 'esper-io/dev-docs/',
    docsDir: 'docs',
    docsBranch: 'develop',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    sidebar: {
      "/home/": [
        "",
        "requirements",
        "gettingstarted",
        "provisioner",
        "console",
        "esperplugin",
        "pythonsdk",
        "espercli",
        "api",
        "remote-adb",
      ]
    },
    displayAllHeaders: false,
  },
}
