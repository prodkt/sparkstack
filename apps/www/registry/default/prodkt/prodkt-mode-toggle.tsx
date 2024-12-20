"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

export function ProdktModeToggle() {
  const [theme, setThemeState] = React.useState<"light" | "dark" | "system">(
    () => {
      if (typeof window === "undefined") return "system"
      return (
        (localStorage.getItem("theme") as "light" | "dark" | "system") ||
        "system"
      )
    }
  )

  const getEffectiveTheme = (newTheme: "light" | "dark" | "system") => {
    if (newTheme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    }
    return newTheme
  }

  const updateTheme = (newTheme: "light" | "dark" | "system") => {
    if (typeof window !== "undefined") {
      const effectiveTheme = getEffectiveTheme(newTheme)

      // Update state and storage
      setThemeState(newTheme)
      localStorage.setItem("theme", newTheme)

      // Update DOM
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(effectiveTheme)
      document.documentElement.setAttribute("data-theme", effectiveTheme)
    }
  }

  // Listen for system theme changes
  React.useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handleChange = () => {
        const effectiveTheme = getEffectiveTheme("system")
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(effectiveTheme)
        document.documentElement.setAttribute("data-theme", effectiveTheme)
      }

      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [theme])

  return (
    <DropdownMenu>
      <div className="rounded-full focus-visible:rounded-full [&_button]:rounded-full [&_button]:focus-visible:rounded-full">
        <DropdownMenuTrigger
          className="rounded-full [&_button]:rounded-full [&_button]:focus-visible:rounded-full"
          asChild
        >
          <Button
            variant="ghost"
            size="icon"
            className="sparkstack-border rounded-full focus-visible:rounded-full"
          >
            <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => updateTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
