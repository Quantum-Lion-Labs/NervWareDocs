import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NervWare Docs",
  description: "NervBox Modding Docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: 'NervWare.svg',
    siteTitle: 'Docs',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'About',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Roadmap', link: '/roadmap' }
        ]
      },
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'Creating a Spawnable', link: '/spawnable' },
          { text: 'Creating a Level', link: '/level' },
          { text: 'Grips Overview', link: '/grips' },
          { text: 'Relink Mod Data to Existing Mod', link: '/recovery' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Quantum-Lion-Labs/NervWare' },
      { icon: 'discord', link: 'https://discord.com/invite/nj3kcrz3nP' }
    ],

    search: {
      provider: 'local'
    }
  },

  cleanUrls: true
})
