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
        "guides/",
        {
          title: 'Release notes',
          collapsable: true,
          children: [
            {
              title: 'Device SDK release notes',
              children: [
                {
                  title: 'SUNFYRE_V7',
                  path: "release-notes/sdk/rel-3.0"
                },
                {
                  title: 'SUNFYRE_V6',
                  path: "release-notes/sdk/rel-2.0"
                },
                {
                  title: 'SUNFYRE_V5',
                  path: "release-notes/sdk/rel-1.0"
                },
              ],
            },
            {
              title: 'Device Provisioner release notes',
              children: [
                {
                  title: 'v6.2.0',
                  path: "release-notes/provisioner/pro-rel-1.0"
                },
                // {
                //   title: 'SUNFYRE_V6',
                //   path: "release-notes/sdk/rel-2.0"
                // },
                // {
                //   title: 'SUNFYRE_V5',
                //   path: "release-notes/sdk/rel-1.0"
                // },
              ],
            },
            {
              title: 'Esper Agent release notes',
              children: [
               
                {
                  title: 'Esper Agent v7.8.6435',
                  path: "release-notes/esper-agent/ea-86-1"
                },
                // {
                //   title: 'Esper Agent v7.8.5502',
                //   path: "release-notes/esper-agent/ea-86"
                // },
                {
                  title: 'Esper Agent v7.8.5502',
                  path: "release-notes/esper-agent/v7.8.5502"
                },
                {
                  title: 'Esper Agent v7.8.5434',
                  path: "release-notes/esper-agent/v7.8.5434"
                },
                {
                  title: 'Esper Agent v7.8.5391',
                  path: "release-notes/esper-agent/v7.8.5391"
                },
                {
                  title: 'Esper Agent v7.8.5266',
                  path: "release-notes/esper-agent/v7.8.5266"
                },
                {
                  title: 'Esper Agent v7.8.4021',
                  path: "release-notes/esper-agent/v7.8.4021"
                },
                {
                  title: 'Esper Agent v7.6.3452',
                  path: "release-notes/esper-agent/v7.6.3452"
                },
                {
                  title: 'Esper Agent v7.6.2851',
                  path: "release-notes/esper-agent/v7.6.2851"
                },
                {
                  title: 'Esper Agent v7.5.1332',
                  path: "release-notes/esper-agent/v7.5.1332"
                },
                {
                  title: 'Esper Agent v7.6.2504',
                  path: "release-notes/esper-agent/v7.6.2504"
                },
                {
                  title: 'Esper Agent v7.5.2281',
                  path: "release-notes/esper-agent/v7.5.2281"
                },
                {
                  title: 'Esper Agent v7.5.1748',
                  path: "release-notes/esper-agent/v7.5.1748"
                },
                {
                  title: 'Esper Agent v7.5.1332',
                  path: "release-notes/esper-agent/v7.5.1332"
                },
                {
                  title: 'Esper Agent v7.5.0763',
                  path: "release-notes/esper-agent/v7.5.0763"
                },
              ],
            },
            {
              title: 'Console release notes',
              children: [
                {
                  title: '86.0 (June 2022)',
                  path: "release-notes/general/devrel-86"
                },
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
            // {
            //   title: 'Foundation release notes',
            //   children: [
            //     {
            //       title: 'Swan',
            //       path: "release-notes/foundation/swan"
            //     },
            //     {
            //       title: 'Foenix',
            //       path: "release-notes/foundation/foenix"
            //     },
            //     {
            //       title: 'SUNFYRE_V6',
            //       path: "release-notes/sdk/rel-1.0"
            //     },
            //   ],
            // },
          ]
        },
        // "tutorials",
        // "support",
        // "faq"
        {
          title: 'Frequently Asked Questions',
          collapsable: true,
          children: [
            {
              title: 'Technical',
              children: [
                {
                  title: 'SUNFYRE_V7',
                  path: "release-notes/sdk/rel-3.0"
                },
                {
                  title: 'SUNFYRE_V6',
                  path: "release-notes/sdk/rel-2.0"
                },
                {
                  title: 'SUNFYRE_V5',
                  path: "release-notes/sdk/rel-1.0"
                },
              ],
            },
            {
              title: 'Non-technical',
              children: [
                {
                  title: 'v6.2.0',
                  path: "release-notes/provisioner/pro-rel-1.0"
                },
                // {
                //   title: 'SUNFYRE_V6',
                //   path: "release-notes/sdk/rel-2.0"
                // },
                // {
                //   title: 'SUNFYRE_V5',
                //   path: "release-notes/sdk/rel-1.0"
                // },
              ],
            },
            
            
          ]
        }

      ],
    },
    displayAllHeaders: false,
  },
  
}
