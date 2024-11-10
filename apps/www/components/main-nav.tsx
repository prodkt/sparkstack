"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Icons.logo className="hidden h-6 w-6" />
        <Image
          src="/images/sparkstack/logo/sparkstack_onDark_200w.png"
          width={200}
          height={36}
          alt="Sparkstack"
          className=""
        />
        <span className="sr-only hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/docs"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Docs
        </Link>
        <Link
          href="/docs/components"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/docs/components") &&
              !pathname?.startsWith("/docs/component/chart")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link>
        <Link
          href="/blocks"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/blocks")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Blocks
        </Link>
        <Link
          href="/charts"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/docs/component/chart") ||
              pathname?.startsWith("/charts")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Charts
        </Link>
        <Link
          href="/themes"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/themes")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Themes
        </Link>
        <Link
          href="/examples"
          className={cn(
            "hover:text-foreground/80 hidden transition-colors lg:inline-block",
            pathname?.startsWith("/examples")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Examples
        </Link>
        <Link
          href="/colors"
          className={cn(
            "hover:text-foreground/80 transition-colors",
            pathname?.startsWith("/colors")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Colors
        </Link>
      </nav>
    </div>
  )
}
