module.exports = {
  base: '/Anzu/',
  title: 'Anzu',
  description: 'Anzu LINE Bot Documentation',
  themeConfig: {
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
        text: 'GitHub',
        link: 'https://github.com/lauslim12/Anzu',
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
          '/getting-started/installation',
          '/getting-started/configurations',
        ],
      },
      {
        title: 'Commands',
        collapsable: false,
        children: [
          '/commands/admin-commands',
          '/commands/behavior-commands',
          '/commands/error-commands',
          '/commands/task-commands',
        ],
      },
      {
        title: 'Automation',
        collapsable: false,
        children: ['/automation/setup-cron', '/automation/setup-schedulers'],
      },
      {
        title: 'Contribution',
        collapsable: false,
        children: ['/contribution/contributing', '/contribution/license'],
      },
    ],
  },
};
