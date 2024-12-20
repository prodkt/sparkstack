import Link from "next/link"

import { siteConfig } from "@/config/site"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeSwitcher } from "@/components/mode-switcher"
// import { ThemeToggle } from "@/components/theme-toggle"
import { ProdktModeToggle } from "@/registry/default/prodkt/prodkt-mode-toggle"
import { ThemeSwitcher } from "@/registry/default/prodkt/theme-switcher"
import { Button } from "@/registry/new-york/ui/button"

export function SiteHeader() {
  return (
    <header className="bg-background supports-[backdrop-filter]:bg-ghost-a6 dark:border-border sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="flex h-14 items-center px-4">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex place-content-center place-items-center items-center justify-center gap-0.5">
            <Button variant="ghost" size="icon" className="size-8 px-0">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="size-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            {/* <ThemeToggle /> */}
            {/* <ModeSwitcher /> */}
            <ProdktModeToggle />
            <ThemeSwitcher />
          </nav>
        </div>
      </div>
    </header>
  )
}
