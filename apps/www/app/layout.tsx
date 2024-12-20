import "@/styles/sparkstack_globals.css"
import type { Metadata, Viewport } from "next"
import { fontMono, fontSans } from "@/plugins/type/nextFont-custom"

import { META_THEME_COLORS, siteConfig } from "@/config/site"
import { themeScript } from "@/lib/theme-script"
import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { ThemeProvider } from "@/components/providers"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Toaster as NewYorkSonner } from "@/registry/default/ui/sonner"
import {
  Toaster as DefaultToaster,
  Toaster as NewYorkToaster,
} from "@/registry/default/ui/toaster"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "shadcn",
      url: "https://shadcn.com",
    },
    {
      name: "Bryan Funk",
      url: "https://prodkt.cloud",
    },
  ],
  creator: "shadcn & Bryan Funk",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.dark,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-dvh bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider>
          <div vaul-drawer-wrapper="" className="min-h-dvh">
            <div className="relative flex min-h-screen flex-col bg-background">
              {children}
            </div>
          </div>
          <TailwindIndicator />
          <ThemeSwitcher />
          <Analytics />
          <NewYorkToaster />
          <DefaultToaster />
          <NewYorkSonner />
        </ThemeProvider>
      </body>
    </html>
  )
}
