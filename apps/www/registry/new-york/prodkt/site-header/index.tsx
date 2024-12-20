"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { DesignerMarksButton } from "@/registry/new-york/prodkt/designer-marks-button"
import { Logo, Logomark } from "@/registry/new-york/prodkt/logo"
import { ProdktModeToggle } from "@/registry/new-york/prodkt/prodkt-mode-toggle"
import { ThemeSwitcher } from "@/registry/new-york/prodkt/theme-switcher"

import { SiteNavigation } from "./nav"
import { NavMobile } from "./nav-mobile"

export function SiteHeader() {
  return (
    <div className="absolute w-full flex flex-row items-center gap-1 top-0 z-50">
      <div className="flex flex-row items-center h-full ps-2">
        <a
          href="/"
          aria-label="Home"
          className="py-2 px-2 h-full focus-visible:outline-none focus-visible:bg-secondary rounded-lg"
        >
          <Logomark className="h-6 w-auto sm:hidden" />
          <Logo className="h-6 w-auto hidden sm:block" />
        </a>
      </div>
      <div className="flex flex-row items-center p-2">
        <NavMobile />
        <SiteNavigation />
      </div>
      <div className="flex flex-row items-center gap-2 ml-auto p-2">
        <div className="flex flex-row items-center -space-x-[3px]">
          <DesignerMarksButton variant="outline">Login</DesignerMarksButton>
          <DesignerMarksButton variant="outline">Signup</DesignerMarksButton>
        </div>
        <div className="flex flex-row items-center gap-1">
          <ProdktModeToggle />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}
