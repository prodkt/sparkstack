"use client"

import * as React from "react"
import { Provider as JotaiProvider } from "jotai"

import { TooltipProvider } from "@/registry/default/ui/tooltip"

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode
}) {
  return (
    <JotaiProvider>
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
    </JotaiProvider>
  )
}
