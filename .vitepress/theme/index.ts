import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import { YouTubeEmbed } from '@miletorix/vitepress-youtube-embed'
import '@miletorix/vitepress-youtube-embed/style.css'
import RoadmapDisplay from './components/RoadmapDisplay.vue';

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('YouTubeEmbed', YouTubeEmbed);
    ctx.app.component('RoadmapDisplay', RoadmapDisplay);
  }
}