import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import preact from '@astrojs/preact'

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  // これを入れるとSSRができるようになる
  output: 'server',
  adapter: cloudflare({
    mode: 'advanced',
  }),
  integrations: [tailwind(), preact()],
})
