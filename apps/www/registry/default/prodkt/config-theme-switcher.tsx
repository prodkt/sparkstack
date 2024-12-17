"use client"

import * as React from "react"
import { Circle } from "lucide-react"

import {
  META_PRODKT_THEMES,
  META_THEMES,
  META_THEME_COLORS,
  siteConfig,
} from "@/config/site"
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
  name?: string
  primaryColor?: string
  grayColor?: string
  secondaryColor?: string
  accentColor?: string
}

type ProdktThemes = (typeof META_PRODKT_THEMES)[0]
const prodktThemes: ProdktThemes[] = [...META_PRODKT_THEMES]

const radixColors = [
  {
    value: "amber",
    label: "Amber",
  },
  {
    value: "blue",
    label: "Blue",
  },
  {
    value: "bronze",
    label: "Bronze",
  },
  {
    value: "brown",
    label: "Brown",
  },
  {
    value: "crimson",
    label: "Crimson",
  },
  {
    value: "cyan",
    label: "Cyan",
  },
  {
    value: "gold",
    label: "Gold",
  },
  {
    value: "grass",
    label: "Grass",
  },
  {
    value: "green",
    label: "Green",
  },
  {
    value: "indigo",
    label: "Indigo",
  },
  {
    value: "iris",
    label: "Iris",
  },
  {
    value: "jade",
    label: "Jade",
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
    value: "orange",
    label: "Orange",
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
    value: "red",
    label: "Red",
  },
  {
    value: "ruby",
    label: "Ruby",
  },
  {
    value: "sky",
    label: "Sky",
  },
  {
    value: "teal",
    label: "Teal",
  },
  {
    value: "tomato",
    label: "Tomato",
  },
  {
    value: "violet",
    label: "Violet",
  },
  {
    value: "yellow",
    label: "Yellow",
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
  gold: "sand",
  yellow: "sand",
  amber: "sand",
  orange: "sand",
  brown: "sand",
}

const secondaryColorMapping: Record<string, string> = {
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
  gold: "sand",
  yellow: "sand",
  amber: "sand",
  orange: "sand",
  brown: "sand",
}

const accentColorMapping: Record<string, string> = {
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
  gold: "sand",
  yellow: "sand",
  amber: "sand",
  orange: "sand",
  brown: "sand",
}

// export type ProdktTheme = META_THEMES
// interface ProdktViewport extends Viewport {
//   themeColor: string
//   defaultMode: string
//   theme: ProdktTheme
// }
// export const prodktViewport: ProdktViewport = {
//   themeColor: META_THEME_COLORS.dark,
//   defaultMode:
//     META_PRODKT_THEMES.find((theme) => theme.name === "default")?.defaultMode ||
//     "system",
//   theme: META_PRODKT_THEMES.find((theme) => theme.name === "default") || {
//     name:
//       META_PRODKT_THEMES.find((theme) => theme.name === "default")?.name ||
//       "default",
//     defaultMode:
//       META_PRODKT_THEMES.find((theme) => theme.name === "default")
//         ?.defaultMode || "system",
//     primaryColor:
//       META_PRODKT_THEMES.find((theme) => theme.name === "default")
//         ?.primaryColor || "lime",
//     accentColor:
//       META_PRODKT_THEMES.find((theme) => theme.name === "default")
//         ?.accentColor || "ghost",
//     secondaryColor:
//       META_PRODKT_THEMES.find((theme) => theme.name === "default")
//         ?.secondaryColor || "mint",
//     grayColor:
//       META_PRODKT_THEMES.find((theme) => theme.name === "default")?.grayColor ||
//       "olive",
//   },
// }

export function ConfigThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [selectedTheme, setSelectedTheme] = React.useState<ProdktThemes | null>(
    null
  )
  const [selectedGray, setSelectedGray] = React.useState<ProdktThemes | null>(
    null
  )
  const [selectedSecondary, setSelectedSecondary] =
    React.useState<ProdktThemes | null>(null)
  const [selectedAccent, setSelectedAccent] =
    React.useState<ProdktThemes | null>(null)
  // const [selectedGray, setSelectedGray] = React.useState<Theme | "mauve">("mauve")
  // const [selectedSecondary, setSelectedSecondary] = React.useState<Theme | "violet">("violet")
  // const [selectedAccent, setSelectedAccent] = React.useState<Theme | "violet">("violet")

  const setThemeCookie = (value: string) => {
    document.cookie = `primary-color=${prodktThemes.find((theme) => theme.name === value)?.primaryColor};path=/;max-age=31536000` // 1 year expiry
    localStorage.setItem(
      "primary-color",
      prodktThemes.find((theme) => theme.name === value)?.primaryColor || "lime"
    )
    document.documentElement.setAttribute(
      "data-primary-color",
      prodktThemes.find((theme) => theme.name === value)?.primaryColor || "lime"
    )

    // Set the corresponding gray color based on the mapping
    const mappedGray = prodktThemes.find(
      (theme) => theme.name === value
    )?.grayColor
    if (mappedGray) {
      document.cookie = `gray-color=${mappedGray};path=/;max-age=31536000`
      localStorage.setItem("gray-color", mappedGray)
      document.documentElement.setAttribute("data-gray-color", mappedGray)
    }

    const mappedSecondary = prodktThemes.find(
      (theme) => theme.name === value
    )?.secondaryColor
    if (mappedSecondary) {
      document.cookie = `secondary-color=${mappedSecondary};path=/;max-age=31536000`
      localStorage.setItem("secondary-color", mappedSecondary)
      document.documentElement.setAttribute(
        "data-secondary-color",
        mappedSecondary
      )
    }

    const mappedAccent = prodktThemes.find(
      (theme) => theme.name === value
    )?.accentColor
    if (mappedAccent) {
      document.cookie = `accent-color=${mappedAccent};path=/;max-age=31536000`
      localStorage.setItem("accent-color", mappedAccent)
      document.documentElement.setAttribute("data-accent-color", mappedAccent)
    }
  }

  const [theme, setThemeState] = React.useState<META_THEMES | null>(null)
  const [gray, setGrayState] = React.useState<META_THEMES | null>(null)
  const [secondary, setSecondaryState] = React.useState<META_THEMES | null>(
    null
  )
  const [accent, setAccentState] = React.useState<META_THEMES | null>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const storedTheme = localStorage.getItem("primary-color")
    const foundTheme =
      prodktThemes.find((theme) => theme.name === storedTheme) ||
      prodktThemes[0]

    setSelectedTheme(foundTheme)
    setThemeState(foundTheme)
    setGrayState(foundTheme)
    setSecondaryState(foundTheme)
    setAccentState(foundTheme)

    setThemeCookie(foundTheme.name)
  }, [])

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
                  stroke={`var(--${selectedTheme.primaryColor || "lime"}-9)`}
                  fill={`var(--${selectedTheme.primaryColor || "lime"}-a7)`}
                  className={`ring-offset- shrink-0 scale-[2] ring-offset-0 focus-visible:rounded-full before:focus-visible:rounded-full after:focus-visible:rounded-full${
                    selectedTheme.primaryColor || "lime"
                  }-9 text-shadow-${selectedTheme.primaryColor || "lime"}-9 text-${
                    selectedTheme.primaryColor || "lime"
                  }-9 stroke-${selectedTheme.primaryColor || "lime"}-9 fill-${
                    selectedTheme.primaryColor || "lime"
                  }-a7`}
                />
                <span className="sr-only">{selectedTheme.name}</span>
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
                {prodktThemes.map((theme) => (
                  <CommandItem
                    key={theme.name}
                    value={theme.name}
                    onSelect={(value) => {
                      const selectedTheme =
                        prodktThemes.find((theme) => theme.name === value) ||
                        null
                      setSelectedTheme(selectedTheme)
                      setThemeState(selectedTheme)
                      setThemeCookie(value)
                      setOpen(false)
                    }}
                    style={{
                      border: `1px solid var(--${theme.primaryColor}-4)`,
                      backgroundColor: `var(--${theme.primaryColor}-1)`,
                    }}
                    className={`after:bg-[var(-- relative bg-inherit after:absolute after:inset-0 after:z-10${theme.primaryColor}-4)] max-w-1/2 flex w-auto shrink grow-0 basis-1/2 flex-col items-start justify-start gap-1 px-3 py-2 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 `}
                  >
                    <div className="flex flex-row items-center space-x-[-4px]">
                      <Circle
                        stroke={`var(--${theme.primaryColor || "lime"}-9)`}
                        fill={`var(--${theme.primaryColor || "lime"}-9)`}
                        className={cn(
                          `!text- h-4 w-4 shrink-0${
                            theme.primaryColor || "lime"
                          }-9 !stroke-${theme.primaryColor || "lime"}-9 !fill-${
                            theme.primaryColor || "lime"
                          }-9`,
                          theme.primaryColor === selectedTheme?.primaryColor
                            ? "opacity-100"
                            : "opacity-40"
                        )}
                      />
                      <Circle
                        stroke={`var(--${theme.primaryColor || "lime"}-7)`}
                        fill={`var(--${theme.primaryColor || "lime"}-7)`}
                        className={cn(
                          `!text- h-4 w-4 shrink-0${
                            theme.primaryColor || "lime"
                          }-9 !stroke-${theme.primaryColor || "lime"}-9 !fill-${
                            theme.primaryColor || "lime"
                          }-9`,
                          theme.primaryColor === selectedTheme?.primaryColor
                            ? "opacity-100"
                            : "opacity-40"
                        )}
                      />
                      <Circle
                        stroke={`var(--${theme.primaryColor || "lime"}-5)`}
                        fill={`var(--${theme.primaryColor || "lime"}-5)`}
                        className={cn(
                          `!text- h-4 w-4 shrink-0${
                            theme.primaryColor || "lime"
                          }-9 !stroke-${theme.primaryColor || "lime"}-9 !fill-${
                            theme.primaryColor || "lime"
                          }-9`,
                          theme.primaryColor === selectedTheme?.primaryColor
                            ? "opacity-100"
                            : "opacity-40"
                        )}
                      />
                    </div>
                    <span className="text-sm">{theme.name}</span>
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
