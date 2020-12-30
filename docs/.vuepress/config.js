module.exports = {
  base: '/Anzu/',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: 'Anzu',
  description: 'Anzu LINE Bot Documentation',
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
