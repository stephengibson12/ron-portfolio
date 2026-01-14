import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    prerender: {
      entries: [
        '/',
        '/music',
        '/music/nunisynth',
        '/academic',
        '/academic/lambda-calc-eval',
        '/academic/coding-pro',
        '/games',
        '/games/blood-blaze',
        '/games/blur-blaze',
        '/electronics',
        '/electronics/asynchonous-reluctance-motor',
        '/electronics/nodemcu-car',
        '/analytics',
        '/analytics/crypto-pump-notifier',
        '/analytics/corona-analytics'
      ]
    }
  }
};

export default config;
