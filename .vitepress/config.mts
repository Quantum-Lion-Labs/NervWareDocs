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
          { text: 'Creating a Spawnable', link: '/spawnable'},
          { text: 'Creating a Level', link: '/level' },
          { text: 'Packaging your Mod', link: '/packaging'},
          { text: 'Testing your Mod', link: '/testing'},
          { text: 'Grips Overview', link: '/grips' },
          { text: 'Relink Mod Data to Existing Mod', link: '/recovery' },
          { text: 'Thumbnail Creator', link: '/thumbnail'},
          { text: 'Impact Properties', link: '/impact_painter'},
          { text: 'Spawnable Best Practices', link: '/spawnable_practices'}
        ]
      },
      {
        text: 'Component Reference',
        items: [
          { text: 'Audio Clip Player', link: '/audioclip_player'},
          { text: 'Collision Sender', link: '/collision_sender'},
          { text: 'Gamemode Info', link: '/gamemode_info'},
          { text: 'Slottable Object', link: '/slottable_object'},
          { text: 'Grip Events', link: '/grip_events'},
          { text: 'Trigger Events', link: '/trigger_events'},
          { text: 'Kill Trigger', link: '/kill_trigger'},
          { text: 'Actuator', link: '/actuator'},
          { text: 'Actuate Events', link: '/actuate_events'},
          { text: 'Blades', link: '/blades'}
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
