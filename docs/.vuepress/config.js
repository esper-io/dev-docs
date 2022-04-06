module.exports = {
  base: '/',
  title: 'Esper Docs',
  description: 'Learn more about Esper’s documentation.',
  plugins: [
    ['vuepress-plugin-reading-time', true],
    ['@dovyp/vuepress-plugin-clipboard-copy', true],
    ['@vuepress/back-to-top', true],
    ['@vuepress/plugin-medium-zoom', true],
    [
      'sitemap',
      {
          hostname: 'https://docs.esper.io',
      },
    ],
    [ 'robots', {
      host: 'https://docs.esper.io',
      allowAll: true,    
    } 
    ],
    // [
    //   ('@vuepress/google-analytics',
    //   {
    //     ga: 'UA-141392027-1', // UA-00000000-0
    //   }),
    // ],
    ['vuepress-plugin-google-tag-manager', { gtm: 'GTM-WSQ32KQ'}],
    [
      'check-md',
      {
        pattern: '**/*.md',
      },
    ],
  ],
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { property: "og:image", content:"https://docs.esper.io/images/Android-device-management.png" }],
    ['meta', { property: "twitter:card", content:"summary_large_image" }]
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
            link: 'https://www.esper.io/hardware'
          },
          
          {
            text: 'Custom Device',
            link: 'https://www.esper.io/custom-device'
          },
          
          {
            text: 'Esper Test Lab',
            link: 'https://www.esper.io/test-lab/'
          },
          {
            text: 'Esper Androidx86',
            link: 'https://www.esper.io/android-x86/'
          },
          {
            text: 'Esper Virtual Devices',
            link: 'https://www.esper.io/android-virtual-device/'
          },
          
        ]
      },
      { text: 'Blog', link: 'https://blog.esper.io' },
      { text: 'SIGNUP', link: 'https://www.esper.io/signup' },
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
        "devicesdk",
        // {
        //   title: 'Guides and Tutorials',
        //   collapsable: false,
        //   children: [
        //     {
        //       ""
        //     },
        //   ]
        // },

        {
          title: 'Release notes',
          collapsable: true,
          children: [
            {
              title: 'Device SDK release notes',
              children: [
                {
                  title: 'SUNFYRE_V6',
                  path: "release-notes/sdk/rel-1.0"
                },
              ],
            },
            {
              title: 'Console release notes',
              children: [
                {
                  title: '81.0 (April 2022)',
                  path: "release-notes/general/devrel-81"
                },
                {
                  title: '77.0 (February 2022)',
                  path: "release-notes/general/devrel-77"
                },
                {
                  title: '76.0 (January 2022)',
                  path: "release-notes/general/devrel-76"
                },
                {
                  title: '73.0 (December 2021)',
                  path: "release-notes/general/devrel-73"
                },
                {
                  title: 'View all >',
                  path: 'release-notes/',
                }
              ],
            },
          ]
        }
        // "tutorials",
        // "support",
        // "faq"


      ],
    },
    displayAllHeaders: false,
  },
}
