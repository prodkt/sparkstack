"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
// import { Icons } from "@/registry/default/icons"
import Logo from "@/assets/prodkt/logo"
import { ThemeSwitcher } from "./theme-switcher"
import {SiteNavigation} from "./nav"
import { ModeToggle } from "./mode-toggle"

export function SiteHeader() {
  return (
    <div className="absolute w-full flex flex-row items-center gap-2 top-0">
      <div className="flex flex-row items-center h-full ps-2">
        <a href="/" aria-label="Home" className="py-2 px-3 h-full focus-visible:outline-none focus-visible:bg-secondary rounded-lg">
      <Logo className="h-6 w-auto" />
        </a>
      </div>
      <div className="flex flex-row items-center p-2">
      <SiteNavigation />
      </div>
      <div className="flex flex-row items-center gap-1 ml-auto p-2">
      <ThemeSwitcher />
      <ModeToggle />
      </div>
    </div>
  )
}
