module.exports = {
  base: '/Anzu/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/icons/robot-face-icon-512.png' },
    ],
  ],
  plugins: [['@vuepress/pwa', { serviceWorker: true, updatePopup: true }]],
  title: 'Anzu',
  description: 'Anzu, the Open-Source LINE Bot Documentation',
  themeConfig: {
    smoothScroll: true,
    repo: 'lauslim12/Anzu',
    nav: [
      {
        text: 'Introduction',
        link: '/',
      },
      {
        text: 'Getting Started',
        link: '/getting-started',
      },
      {
        text: 'Commands',
        link: '/commands',
      },
      {
        text: 'Automation',
        link: '/automation',
      },
      {
        text: 'Contribution',
        link: '/contribution',
      },
    ],
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        children: [''],
      },
      {
        title: 'Getting Started',
        collapsable: false,
        children: [
          '/getting-started',
          '/getting-started/requirements',
          '/getting-started/installation',
          '/getting-started/configurations',
        ],
      },
      {
        title: 'Commands',
        collapsable: false,
        children: [
          '/commands',
          '/commands/admin-commands',
          '/commands/behavior-commands',
          '/commands/error-commands',
          '/commands/task-commands',
        ],
      },
      {
        title: 'Automation',
        collapsable: false,
        children: ['/automation', '/automation/setup-automation'],
      },
      {
        title: 'Contribution',
        collapsable: false,
        children: [
          '/contribution',
          '/contribution/CONTRIBUTING',
          '/contribution/CHANGELOG',
          '/contribution/LICENSE',
          '/contribution/credits',
        ],
      },
    ],
  },
};
