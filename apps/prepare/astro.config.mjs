import { defineConfig } from "astro/config";
// const wwwPath = path.resolve(__dirname, "node_modules/www");
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://sparkstack.prodkt.cloud",
  integrations: [
    mdx(),
    sitemap(),
    react({
      experimentalReactChildren: true,
    }),
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
      // Example: Allow writing nested CSS declarations
      // alongside Tailwind's syntax
      nesting: true,
    }),
    partytown({
      // Example: Add dataLayer.push as a forwarding-event.
      // config: {
      //   forward: ["dataLayer.push"],
      // },
    }),
  ],
  experimental: {
    responsiveImages: true,
    svg: {
      mode: "inline", // or 'sprite'
    },
  },
  vite: {
    optimizeDeps: {
      include: ["@splinetool/react-spline"],
    },
    build: {
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks: {
            spline: ["@splinetool/react-spline"],
          },
        },
      },
    },
    assetsInclude: [
      "src/assets/rive/*",
      "src/assets/spline/*",
      "**/*.splinecode",
    ],
    resolve: {
      alias: {
        "@/": "/src",
        "@components": "/src/components",
        "@lib": "/src/lib",
        "@hooks": "/src/hooks",
        "@assets": "/src/assets",
        "@types": "/src/types",
        "@/registry": "/node_modules/www/registry",
        "@/styles": "/node_modules/www/styles",
        "@/ui": "/node_modules/www/ui",
        "@/hooks": "/node_modules/www/hooks",
        "@/lib": "/node_modules/www/lib",
      },
    },
  },
  // your configuration options here...
  // https://docs.astro.build/en/reference/configuration-reference/
});
