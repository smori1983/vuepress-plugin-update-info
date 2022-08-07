module.exports = {
  title: 'vuepress-plugin-frontmatter-update-info',
  dest: 'example/.vuepress/dist',

  themeConfig: {
    search: false,
    sidebar: [
      {
        collapsable: false,
        sidebarDepth: 0,
        title: 'Main',
        children: [
          '/debug.md',
          '/update_info.md',
        ],
      },
      {
        collapsable: false,
        sidebarDepth: 0,
        title: 'Pages',
        children: [
          '/pages/page001.md',
          '/pages/page002.md',
          '/pages/page003.md',
          '/pages/page004.md',
          '/pages/page101.md',
          '/pages/page102.md',
          '/pages/page103.md',
          '/pages/page104.md',
          '/pages/page105.md',
          '/pages/page106.md',
        ],
      }
    ],
  },

  plugins: [
    [require('../../src')],
  ],

  markdown: {
    extendMarkdown: (md) => {
      md.set({ breaks: true });
    },
  },
};
