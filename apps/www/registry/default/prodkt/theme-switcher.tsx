"use client"

import * as React from "react"
import {
  ArrowUpCircle,
  CheckCircle2,
  Circle,
  HelpCircle,
  LucideIcon,
  RectangleHorizontal,
  Square,
  XCircle,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/default/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover"

type Theme = {
  value: string
  label: string
}

const radixColors = [
  {
    value: "tomato",
    label: "Tomato",
  },
  {
    value: "red",
    label: "Red",
  },
  {
    value: "ruby",
    label: "Ruby",
  },
  {
    value: "crimson",
    label: "Crimson",
  },
  {
    value: "pink",
    label: "Pink",
  },
  {
    value: "plum",
    label: "Plum",
  },
  {
    value: "purple",
    label: "Purple",
  },
  {
    value: "violet",
    label: "Violet",
  },
  {
    value: "iris",
    label: "Iris",
  },
  {
    value: "indigo",
    label: "Indigo",
  },
  {
    value: "cyan",
    label: "Cyan",
  },
  {
    value: "teal",
    label: "Teal",
  },
  {
    value: "jade",
    label: "Jade",
  },
  {
    value: "green",
    label: "Green",
  },
  {
    value: "grass",
    label: "Grass",
  },
  {
    value: "lime",
    label: "Lime",
  },
  {
    value: "mint",
    label: "Mint",
  },
  {
    value: "sky",
    label: "Sky",
  },
]

const radixGrayColors = [
  {
    value: "gray",
    label: "Gray",
  },
  {
    value: "mauve",
    label: "Mauve",
  },
  {
    value: "slate",
    label: "Slate",
  },
  {
    value: "sage",
    label: "Sage",
  },
  {
    value: "olive",
    label: "Olive",
  },
  {
    value: "sand",
    label: "Sand",
  },
]

const themes: Theme[] = [...radixColors, ...radixGrayColors]

export function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [selectedTheme, setSelectedTheme] = React.useState<Theme | null>(null)

  const setThemeCookie = (value: string) => {
    document.cookie = `primary-color=${value};path=/;max-age=31536000` // 1 year expiry
    localStorage.setItem("primary-color", value)
    document.documentElement.setAttribute("data-primary-color", value)
  }

  const [theme, setThemeState] = React.useState<Theme | "lime">("lime")

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    // const isThemeState = document.documentElement.attributes.getNamedItem("data-theme")?.value
    const isThemeState = localStorage.getItem("primary-color")
    const foundTheme = themes.find((theme) => theme.value === isThemeState)
    setSelectedTheme(foundTheme || null)
    setThemeState(foundTheme || "lime") // Also update the theme state
    setThemeCookie(foundTheme?.value || "lime")
  }, [setSelectedTheme])

  return (
    <div className="flex items-center space-x-4 [&_button]:rounded-full [&_button]:focus:rounded-full [&_button]:focus-visible:rounded-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="sparkstack-border min-w-fit rounded-full"
          >
            {selectedTheme ? (
              <>
                <Circle
                  size={24}
                  stroke={`var(--${selectedTheme.value || "lime"}-9)`}
                  fill={`var(--${selectedTheme.value || "lime"}-a7)`}
                  className={`ring-offset- shrink-0 scale-[2] ring-offset-0 focus-visible:rounded-full before:focus-visible:rounded-full after:focus-visible:rounded-full${
                    selectedTheme.value || "lime"
                  }-9 text-shadow-${selectedTheme.value || "lime"}-9 text-${
                    selectedTheme.value || "lime"
                  }-9 stroke-${selectedTheme.value || "lime"}-9 fill-${
                    selectedTheme.value || "lime"
                  }-a7`}
                />
                <span className="sr-only">{selectedTheme.label}</span>
              </>
            ) : (
              <>
                <span className="px-2">Set theme</span>
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change theme..." />
            <CommandList className="">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup
                className={`w-full [&>_div]:grid [&>_div]:w-full [&>_div]:grid-flow-row [&>_div]:grid-cols-2 [&>_div]:gap-1`}
              >
                {themes.map((theme) => (
                  <CommandItem
                    key={theme.value}
                    value={theme.value}
                    onSelect={(value) => {
                      const selectedTheme =
                        themes.find((theme) => theme.value === value) || null
                      setSelectedTheme(selectedTheme)
                      setThemeState(selectedTheme || "lime")
                      setThemeCookie(value)
                      setOpen(false)
                    }}
                    style={{
                      border: `1px solid var(--${theme.value}-4)`,
                      backgroundColor: `var(--${theme.value}-1)`,
                    }}
                    className={`after:bg-[var(-- relative bg-inherit after:absolute after:inset-0 after:z-10${theme.value}-4)] max-w-1/2 flex w-auto shrink grow-0 basis-1/2 flex-col items-start justify-start gap-1 px-3 py-2 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 `}
                  >
                    <div className="flex flex-row items-center space-x-[-4px]">
                      <Circle
                        stroke={`var(--${theme.value || "lime"}-9)`}
                        fill={`var(--${theme.value || "lime"}-9)`}
                        className={cn(
                          `!text- h-4 w-4 shrink-0${
                            theme.value || "lime"
                          }-9 !stroke-${theme.value || "lime"}-9 !fill-${
                            theme.value || "lime"
                          }-9`,
                          theme.value === selectedTheme?.value
                            ? "opacity-100"
                            : "opacity-40"
                        )}
                      />
                      <Circle
                        stroke={`var(--${theme.value || "lime"}-7)`}
                        fill={`var(--${theme.value || "lime"}-7)`}
                        className={cn(
                          `!text- h-4 w-4 shrink-0${
                            theme.value || "lime"
                          }-9 !stroke-${theme.value || "lime"}-9 !fill-${
                            theme.value || "lime"
                          }-9`,
                          theme.value === selectedTheme?.value
                            ? "opacity-100"
                            : "opacity-40"
                        )}
                      />
                      <Circle
                        stroke={`var(--${theme.value || "lime"}-5)`}
                        fill={`var(--${theme.value || "lime"}-5)`}
                        className={cn(
                          `!text- h-4 w-4 shrink-0${
                            theme.value || "lime"
                          }-9 !stroke-${theme.value || "lime"}-9 !fill-${
                            theme.value || "lime"
                          }-9`,
                          theme.value === selectedTheme?.value
                            ? "opacity-100"
                            : "opacity-40"
                        )}
                      />
                    </div>
                    <span className="">{theme.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
