import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NervWare Docs",
  description: "NervBox Modding Docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/installation' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Quantum-Lion-Labs/NervWare' }
    ]
  }
})
