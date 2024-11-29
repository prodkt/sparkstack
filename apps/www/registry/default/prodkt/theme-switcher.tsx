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
  tomato: "crimson",
  red: "mint",
  ruby: "mint",
  crimson: "sky",
  pink: "mint",
  plum: "cyan",
  purple: "mint",
  violet: "mint",
  // slate group
  iris: "slate",
  indigo: "violet",
  blue: "sky",
  sky: "cyan",
  cyan: "orange",
  // sage group
  mint: "indigo",
  teal: "violet",
  jade: "violet",
  green: "ruby",
  // olive group
  grass: "ruby",
  lime: "purple",
  // sand group
  gold: "amber",
  yellow: "amber",
  amber: "crimson",
  orange: "pink",
  brown: "plum",
}

const accentColorMapping: Record<string, string> = {
  // mauve group
  tomato: "red",
  red: "ruby",
  ruby: "crimson",
  crimson: "pink",
  pink: "plum",
  plum: "purple",
  purple: "violet",
  violet: "purple",
  // slate group
  iris: "indigo",
  indigo: "blue",
  blue: "sky",
  sky: "blue",
  cyan: "blue",
  // sage group
  mint: "teal",
  teal: "jade",
  jade: "green",
  green: "sage",
  // olive group
  grass: "lime",
  lime: "grass",
  // sand group
  gold: "yellow",
  yellow: "amber",
  amber: "orange",
  orange: "brown",
  brown: "orange",
}

const themes: Theme[] = [...radixColors, ...radixGrayColors]

export function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [selectedTheme, setSelectedTheme] = React.useState<Theme | null>(null)
  const [selectedGray, setSelectedGray] = React.useState<Theme | null>(null)
  const [selectedSecondary, setSelectedSecondary] =
    React.useState<Theme | null>(null)
  const [selectedAccent, setSelectedAccent] = React.useState<Theme | null>(null)
  // const [selectedGray, setSelectedGray] = React.useState<Theme | "mauve">("mauve")
  // const [selectedSecondary, setSelectedSecondary] = React.useState<Theme | "violet">("violet")
  // const [selectedAccent, setSelectedAccent] = React.useState<Theme | "violet">("violet")

  const setThemeCookie = (value: string) => {
    document.cookie = `primary-color=${value};path=/;max-age=31536000` // 1 year expiry
    localStorage.setItem("primary-color", value)
    document.documentElement.setAttribute("data-primary-color", value)

    // Set the corresponding gray color based on the mapping
    const mappedGray = grayColorMapping[value]
    if (mappedGray) {
      document.cookie = `gray-color=${mappedGray};path=/;max-age=31536000`
      localStorage.setItem("gray-color", mappedGray)
      document.documentElement.setAttribute("data-gray-color", mappedGray)
    }

    const mappedSecondary = secondaryColorMapping[value]
    if (mappedSecondary) {
      document.cookie = `secondary-color=${mappedSecondary};path=/;max-age=31536000`
      localStorage.setItem("secondary-color", mappedSecondary)
      document.documentElement.setAttribute(
        "data-secondary-color",
        mappedSecondary
      )
    }

    const mappedAccent = accentColorMapping[value]
    if (mappedAccent) {
      document.cookie = `accent-color=${mappedAccent};path=/;max-age=31536000`
      localStorage.setItem("accent-color", mappedAccent)
      document.documentElement.setAttribute("data-accent-color", mappedAccent)
    }
  }

  const [theme, setThemeState] = React.useState<Theme | "lime">("lime")
  const [gray, setGrayState] = React.useState<Theme | "mauve">("mauve")
  const [secondary, setSecondaryState] = React.useState<Theme | "violet">(
    "violet"
  )
  const [accent, setAccentState] = React.useState<Theme | "violet">("violet")

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const isThemeState = localStorage.getItem("primary-color")
    const isGrayState = localStorage.getItem("gray-color")
    const isSecondaryState = localStorage.getItem("secondary-color")
    const isAccentState = localStorage.getItem("accent-color")

    const foundTheme = themes.find((theme) => theme.value === isThemeState)

    // If we have a primary theme, get its mapped gray color
    const mappedGray = foundTheme ? grayColorMapping[foundTheme.value] : null
    const foundGray = themes.find(
      (theme) => theme.value === (mappedGray || isGrayState)
    )

    const mappedSecondary = foundTheme
      ? secondaryColorMapping[foundTheme.value]
      : null
    const foundSecondary = themes.find(
      (theme) => theme.value === (mappedSecondary || isSecondaryState)
    )

    const mappedAccent = foundTheme
      ? accentColorMapping[foundTheme.value]
      : null
    const foundAccent = themes.find(
      (theme) => theme.value === (mappedAccent || isAccentState)
    )

    setSelectedTheme(foundTheme || null)
    setSelectedGray(foundGray || null)
    setSelectedSecondary(foundSecondary || null)
    setSelectedAccent(foundAccent || null)

    setThemeState(foundTheme || "lime")
    setGrayState(foundGray || "mauve")
    setSecondaryState(foundSecondary || "violet")
    setAccentState(foundAccent || "violet")

    // Update all theme attributes
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
