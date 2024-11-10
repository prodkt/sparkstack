"use client"

import { useEffect } from "react"

import { Button } from "@/registry/default/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/registry/default/ui/dialog"
import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/registry/default/ui/drawer"

import { ColorWheel } from "./ColorWheel"

/**
 * ThemeToggle component allows users to toggle between different primary and gray colors.
 * @returns The rendered ThemeToggle component.
 */
export function ThemeToggle() {
  // Function to toggle color and update gray color based on the primary
  const toggleColor = (colorType: "primary" | "gray", color: string) => {
    const dataAttribute =
      colorType === "primary" ? "data-primary-color" : "data-gray-color"
    localStorage.setItem(dataAttribute, color)
    document.documentElement.setAttribute(dataAttribute, color)

    if (colorType === "primary") {
      // Check if we need to set the gray color automatically
      const autoGrayColor = grayColorMapping[color]
      if (autoGrayColor) {
        localStorage.setItem("data-gray-color", autoGrayColor)
        document.documentElement.setAttribute("data-gray-color", autoGrayColor)
      }
    }
  }

  // Effect to initialize colors on mount
  useEffect(() => {
    const storedPrimary = localStorage.getItem("data-primary-color")
    if (storedPrimary) {
      document.documentElement.setAttribute("data-primary-color", storedPrimary)
    }
    else {
      document.documentElement.setAttribute("data-primary-color", "violet")
    }

    const storedGray = localStorage.getItem("data-gray-color")
    if (storedGray) {
      document.documentElement.setAttribute("data-gray-color", storedGray)
    }
    else {
      document.documentElement.setAttribute("data-gray-color", "slate")
    }
  }, [])

  // Mapping from primary colors to gray colors
  const grayColorMapping: Record<string, string> = {
    // mauve group
    tomato: "mauve",
    red: "mauve",
    ruby: "mauve",
    crimson: "mauve",
    pink: "mauve",
    plum: "mauve",
    purple: "mauve",
    violet: "mauve",
    // slate group
    iris: "slate",
    indigo: "slate",
    blue: "slate",
    sky: "slate",
    cyan: "slate",
    // sage group
    mint: "sage",
    teal: "sage",
    jade: "sage",
    green: "sage",
    // olive group
    grass: "olive",
    lime: "olive",
    // sand group
    yellow: "sand",
    amber: "sand",
    orange: "sand",
    brown: "sand",
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="aspect-square h-7 w-7 rounded-full border-2 border-border p-0 [&_svg]:size-7"
        >
          <ColorWheel className="size-7" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="mx-auto w-full max-w-sm p-4 text-center">
          <DrawerHeader>
            <DrawerTitle className="mx-auto text-3xl">Theming</DrawerTitle>
            <DrawerDescription className="mx-auto">
              Set your preferred color scheme.
            </DrawerDescription>
          </DrawerHeader>
          <div className="themeColor relative mx-auto flex flex-col items-center justify-center">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--gray-a9)]">
              Current
            </p>
            <ColorWheel
              className="size-20 rounded-full p-4 drop-shadow-xl transition-colors duration-1000"
              wheelColor="primary"
            />
          </div>
          <div className="grid grid-cols-4 gap-4 p-4 pb-0">
            {[
              "bronze",
              "gold",
              "brown",
              "orange",
              "tomato",
              "red",
              "ruby",
              "crimson",
              "pink",
              "plum",
              "purple",
              "violet",
              "iris",
              "indigo",
              "blue",
              "cyan",
              "teal",
              "jade",
              "green",
              "grass",
            ].map((color) => (
              <Button
                key={color}
                variant="outline"
                size="icon"
                className="p-0 [&_svg]:size-12 [&_svg]:shrink-0"
                id={`${color}Scale`}
                onClick={() => {
                  toggleColor("primary", color)
                }}
              >
                <ColorWheel
                  className="size-116 rotate-0 duration-500 ease-out hover:rotate-45 hover:scale-125 hover:duration-1000 hover:ease-in-out"
                  wheelColor={color}
                />
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
