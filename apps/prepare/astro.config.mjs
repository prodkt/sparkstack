import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind({
    nesting: true,
  }),
  react({
      experimentalReactChildren: true,
    }),
  ],
  // your configuration options here...
  // https://docs.astro.build/en/reference/configuration-reference/
})
