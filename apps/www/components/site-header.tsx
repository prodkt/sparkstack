import Link from "next/link"

import { siteConfig } from "@/config/site"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeSwitcher } from "@/components/mode-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/registry/new-york/ui/button"

export function SiteHeader() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur dark:border-border">
      <div className="flex h-14 items-center px-4">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex place-content-center place-items-center items-center justify-center gap-0.5">
            <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <ThemeToggle />
            <ModeSwitcher />
          </nav>
        </div>
      </div>
    </header>
  )
}
