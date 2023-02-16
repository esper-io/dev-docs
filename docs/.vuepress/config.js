module.exports = {
  "config": {
    "port":"8080"
  },
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
        //"east",
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
                  title: 'SUNFYRE_V8',
                  path: "release-notes/sdk/rel-4.0"
                },
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
                  title: 'v7.0',
                  path: "release-notes/provisioner/pro-rel-7"
                },
                {
                  title: 'v6.2.0',
                  path: "release-notes/provisioner/pro-rel-1.0"
                },
              ],
            },
            {
              title: 'Esper Agent release notes',
              children: [
                {
                  title: 'Esper Agent v7.9.3222',
                  path: "release-notes/esper-agent/v7.9.3222"
                },
                {
                  title: 'Esper Agent v7.9.3216',
                  path: "release-notes/esper-agent/v7.9.3216"
                },
                {
                  title: 'Esper Agent v7.9.3192',
                  path: "release-notes/esper-agent/v7.9.3192"
                },
                {
                  title: 'Esper Agent v7.9.3181',
                  path: "release-notes/esper-agent/v7.9.3181"
                },
                {
                  title: 'Esper Agent v7.9.3109',
                  path: "release-notes/esper-agent/v7.9.3109"
                },
                {
                  title: 'Esper Agent v7.9.3105',
                  path: "release-notes/esper-agent/v7.9.3105"
                },
                {
                  title: 'Esper Agent v7.9.3102',
                  path: "release-notes/esper-agent/v7.9.3102"
                },
                {
                  title: 'Esper Agent v7.9.3101',
                  path: "release-notes/esper-agent/v7.9.3101"
                },
                {
                  title: 'Esper Agent v7.9.3085',
                  path: "release-notes/esper-agent/v7.9.3085"
                },
                {
                  title: 'Esper Agent v7.9.3037',
                  path: "release-notes/esper-agent/v7.9.3037"
                },{
                  title: 'Esper Agent v7.9.3027',
                  path: "release-notes/esper-agent/v7.9.3027"
                },{
                  title: 'Esper Agent v7.9.3016',
                  path: "release-notes/esper-agent/v7.9.3016"
                },{
                  title: 'Esper Agent v7.9.3004',
                  path: "release-notes/esper-agent/v7.9.3004"
                },
                {
                  title: 'Esper Agent v7.9.2998',
                  path: "release-notes/esper-agent/v7.9.2998"
                },
                {
                  title: 'Esper Agent v7.9.2301',
                  path: "release-notes/esper-agent/v7.9.2301"
                },
                {
                  title: 'Esper Agent v7.9.2269',
                  path: "release-notes/esper-agent/v7.9.2269"
                },
                {
                  title: 'Esper Agent v7.9.1597',
                  path: "release-notes/esper-agent/v7.9.1597"
                },
                {
                  title: 'Esper Agent v7.9.0828',
                  path: "release-notes/esper-agent/v7.9.0828"
                },
                {
                  title: 'Esper Agent v7.9.0219',
                  path: "release-notes/esper-agent/v7.9.0219"
                },
                {
                  title: 'Esper Agent v7.8.7875',
                  path: "release-notes/esper-agent/v7.8.7875"
                },    
                {
                  title: 'Esper Agent v7.8.7718',
                  path: "release-notes/esper-agent/v7.8.7718"
                },
                {
                  title: 'Esper Agent v7.8.6435',
                  path: "release-notes/esper-agent/ea-86-1"
                },
                {
                  title: 'Esper Agent v7.8.5502',
                  path: "release-notes/esper-agent/v7.8.5502"
                },
                {
                  title: 'Esper Agent v7.8.5434',
                  path: "release-notes/esper-agent/v7.8.5434"
                },
                {
                  title: 'View all >',
                  path: 'release-notes/esper-agent/',
                }
              ],
            },
            {
              title: 'Console release notes',
              children: [
                {
                  title: '104.0 (February 2023)',
                  path: "release-notes/general/devrel-104"
                },
                {
                  title: '102.0 (January 2023)',
                  path: "release-notes/general/devrel-102"
                },
                {
                  title: '99.0 (December 2022)',
                  path: "release-notes/general/devrel-99"
                },
                {
                  title: '97.0 (November 2022)',
                  path: "release-notes/general/devrel-97"
                },
                {
                  title: '95.0 (October 2022)',
                  path: "release-notes/general/devrel-95"
                },
                {
                  title: '93.0 (September 2022)',
                  path: "release-notes/general/devrel-93"
                },
                {
                  title: '91.0 (August 2022)',
                  path: "release-notes/general/devrel-91"
                },
                {
                  title: '86.0 (June 2022)',
                  path: "release-notes/general/devrel-86"
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
        // "faq/"
         {
           title: 'Frequently Asked Questions',
           collapsable: true,
           children: [
             {
               title: 'Technical',
               path: "faq/technical.md",
             },
             {
              title: 'General',
              path: "faq/general.md",
            },
            {
              title: 'Temporary',
              path: "faq/temporary.md"
            }
        //     {
        //       title: 'Non-technical',
        //       //path: "faq/non-technical/README.md",
        //        children: [
        //        {
        //          title: 'v6.2.0',
        //          path: "release-notes/provisioner/pro-rel-1.0"
        //        },
        //       //   // {
        //       //   //   title: 'SUNFYRE_V6',
        //       //   //   path: "release-notes/sdk/rel-2.0"
        //       //   // },
        //       //   // {
        //       //   //   title: 'SUNFYRE_V5',
        //       //   //   path: "release-notes/sdk/rel-1.0"
        //       //   // },
        //       ],
        //     },
            
            
           ]
         } 

      ],
    },
    displayAllHeaders: false,
  },
  
}
