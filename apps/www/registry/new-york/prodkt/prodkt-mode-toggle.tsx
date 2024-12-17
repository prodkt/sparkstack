"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/registry/new-york/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"

export function ProdktModeToggle() {
  const { theme, setTheme } = useTheme()

  const updateTheme = (newTheme: string) => {
    setTheme(newTheme)

    if (typeof window !== "undefined") {
      // Update localStorage
      localStorage.setItem("theme", newTheme)

      // Update cookie
      document.cookie = `data-theme=${newTheme};path=/;max-age=31536000`

      // Update data-theme attribute
      document.documentElement.setAttribute("data-theme", newTheme)

      // Update classes
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark")
        document.documentElement.classList.remove("light")
      } else {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
      }
    }
  }

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
