import { createContentlayerPlugin } from "next-contentlayer2"
import path from 'path'

const __dirname = path.resolve()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  distDir: ".next",
  // basePath: '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  webpack: (config, { isServer }) => {  // Add { isServer } here
    config.module.rules.push({
      test: /\.riv$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    });
    config.module.rules.push({
      test: /\.splinecode$/,
      type: "asset/resource",
    });

    config.stats = {
      ...config.stats,
      warningsFilter: [
        /@ts-morph\/common\/dist\/typescript\.js/,
        /\[webpack\.cache\.PackFileCacheStrategy\/webpack\.FileSystemInfo\]/,
        /Parsing of.*@contentlayer2\/core.*failed/
      ],
    }
    // Add ts-morph to externals if on server
    if (isServer) {
      config.externals = [
        ...(config.externals || []),
        "@ts-morph/common",
        "ts-morph",
      ]
    }

    return config
  },
  experimental: {
    // outputFileTracingRoot: path.join(__dirname, '../../'),
    // outputFileTracingRoot: process.cwd(),
    serverComponentsExternalPackages: ["@ts-morph/common", "ts-morph"],
    outputFileTracingIncludes: {
      "/blocks/*": ["./registry/**/*"],
    },
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ["localhost", "prodkt.cloud"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/components",
        destination: "/docs/components/accordion",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/accordion",
        permanent: true,
      },
      {
        source: "/examples",
        destination: "/examples/mail",
        permanent: false,
      },
      {
        source: "/docs/primitives/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
      {
        source: "/figma",
        destination: "/docs/figma",
        permanent: true,
      },
      {
        source: "/docs/forms",
        destination: "/docs/components/form",
        permanent: false,
      },
      {
        source: "/docs/forms/react-hook-form",
        destination: "/docs/components/form",
        permanent: false,
      },
      {
        source: "/sidebar",
        destination: "/docs/components/sidebar",
        permanent: true,
      },
      {
        source: "/react-19",
        destination: "/docs/react-19",
        permanent: true,
      },
    ]
  },
}

const withContentlayer = createContentlayerPlugin({
//   // Additional Contentlayer config options
})

export default nextConfig

// export default withContentlayer(nextConfig)
