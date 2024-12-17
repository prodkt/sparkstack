import { SetStateAction } from "react"

export const siteConfig = {
  name: "sparkstack/ui",
  url: "https://sparkstack.prodkt.cloud",
  ogImage: "https://sparkstack.prodkt.cloud/og.jpg",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  links: {
    twitter: "https://twitter.com/prodkt_",
    github: "https://github.com/prodkt/sparkstack",
  },
}

export type SiteConfig = typeof siteConfig

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const META_THEME_MODES = {
  light: "light",
  dark: "dark",
  system: "system",
}





export const META_CUSTOM_COLORS = [
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
  {
    value: "ghost",
    label: "Ghost",
  },
]

export const META_CUSTOM_GRAY_COLORS = [
  {
    value: "ghost",
    label: "Ghost",
  },
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


export interface META_THEMES {
  name: string
  defaultMode?: string
  primaryColor?: string
  accentColor?: string
  secondaryColor?: string
  grayColor?: string
}


export const META_PRODKT_THEMES: META_THEMES[] = [
  {
    name: "default",
    defaultMode: META_THEME_MODES.dark,
    primaryColor: META_CUSTOM_COLORS.find((color) => color.value === "purple")?.value || "purple",
    accentColor: META_CUSTOM_COLORS.find((color) => color.value === "ghost")?.value || "ghost",
    secondaryColor: META_CUSTOM_GRAY_COLORS.find((color) => color.value === "indigo")?.value || "indigo",
    grayColor: META_CUSTOM_GRAY_COLORS.find((color) => color.value === "olive")?.value || "olive",
  },
  {
    name: "prodkt",
    defaultMode: META_THEME_MODES.dark,
    primaryColor: META_CUSTOM_COLORS.find((color) => color.value === "crimson")?.value || "crimson",
    accentColor: META_CUSTOM_COLORS.find((color) => color.value === "ghost")?.value || "ghost",
    secondaryColor: META_CUSTOM_GRAY_COLORS.find((color) => color.value === "sky")?.value || "sky",
    grayColor: META_CUSTOM_GRAY_COLORS.find((color) => color.value === "mauve")?.value || "mauve",
  },
  {
    name: "virgo",
    defaultMode: META_THEME_MODES.dark,
    primaryColor: META_CUSTOM_COLORS.find((color) => color.value === "green")?.value || "green",
    accentColor: META_CUSTOM_COLORS.find((color) => color.value === "ghost")?.value || "ghost",
    secondaryColor: META_CUSTOM_GRAY_COLORS.find((color) => color.value === "mint")?.value || "mint",
    grayColor: META_CUSTOM_GRAY_COLORS.find((color) => color.value === "olive")?.value || "olive",
  },
]
