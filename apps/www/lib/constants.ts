export const APP_NAME = "Prodkt"
export const DEFAULT_META_DESCRIPTION =
  "Production-grade applications by Bryan Funk."
export const IS_PROD = process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
export const IS_PREVIEW = process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
export const API_URL = process.env.NEXT_PUBLIC_API_URL

// Products

export enum PRODUCT_NAMES {
  DATABASE = "Database",
  AUTH = "Authentication",
  STORAGE = "Storage",
  FUNCTIONS = "Edge Functions",
  REALTIME = "Realtime",
  VECTOR = "Vector",
}

export enum PRODUCT_SHORTNAMES {
  DATABASE = "database",
  AUTH = "auth",
  STORAGE = "storage",
  FUNCTIONS = "functions",
  REALTIME = "realtime",
  VECTOR = "vector",
}

// Launch Weeek
export const SAMPLE_TICKET_NUMBER = 1234
export const SITE_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://prodkt.cloud/launch-week"
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/launch-week`
      : "http://localhost:3000/launch-week"
export const SPECIAL_ANNOUNCEMENT_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://prodkt.cloud/ga-week"
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/ga-week`
      : "http://localhost:3000/ga-week"
export const SITE_ORIGIN = new URL(SITE_URL).origin
export const TWITTER_USER_NAME = "prodkt_"
export const LW7_DATE = "April 10th 2023"
export const LW8_DATE = "August 7-11"
export const LW8_LAUNCH_DATE = "2023-08-07T09:00:00.000-07:00"
export const LWX_DATE = "Dec 11-15 / 8am PT"
export const LWX_LAUNCH_DATE = "2023-12-11T08:00:00.000-07:00"
export const LW11_DATE = "April 15-19 / 7am PT"
export const LW11_LAUNCH_DATE = "2024-04-15T07:00:00.000-07:00"
export const LW11_LAUNCH_DATE_END = "2024-04-21T23:59:59.000-07:00"
export const TWEET_TEXT = "👁️⚡👁️"
export const TWEET_TEXT_GOLDEN = `👁️⚡👁️`
export const TWEET_TEXT_PLATINUM = `👁️⚡👁️`
export const TWEET_TEXT_SECRET = `Just found a secret @prodkt_ ticket. \n\nClaim a ticket and guess the word to find it:`
export const SITE_NAME = "Prodkt"

export const HIDDEN_PLACEHOLDER = "**** **** **** ****"
export const COLORS = [
  "brand",
  "scale",
  "tomato",
  "red",
  "crimson",
  "pink",
  "purple",
  "violet",
  "indigo",
  "blue",
  "green",
  "grass",
  "orange",
  "sky",
  "yellow",
  "amber",
  "gold",
  "gray",
  "slate",
]
export type AvailableColors =
  | "brand"
  | "brandAlt"
  | "scale"
  | "tomato"
  | "red"
  | "crimson"
  | "pink"
  | "purple"
  | "violet"
  | "indigo"
  | "blue"
  | "green"
  | "grass"
  | "orange"
  | "sky"
  | "yellow"
  | "amber"
  | "gold"
  | "gray"
  | "slate"

export const SIZE = {
  text: {
    tiny: "text-xs",
    small: "text-sm leading-4",
    medium: "text-sm",
    large: "text-base",
    xlarge: "text-base",
  },
  padding: {
    tiny: "px-2.5 py-1",
    small: "px-3 py-2",
    medium: "px-4 py-2",
    large: "px-4 py-2",
    xlarge: "px-6 py-3",
  },
  height: {
    tiny: "h-[26px]",
    small: "h-[34px]",
    medium: "h-[38px]",
    large: "h-[42px]",
    xlarge: "h-[50px]",
  },
}

// used for internal badges/buttons
// such as Button Group Items or Multi Select items
export const SIZE_INNER = {
  text: {
    tiny: "text-xs",
    small: "text-sm leading-4",
    medium: "text-sm",
    large: "text-base",
    xlarge: "text-base",
  },
  padding: {
    tiny: "px-2.5 py-1",
    small: "px-3 py-2",
    medium: "px-4 py-2",
    large: "px-4 py-2",
    xlarge: "px-6 py-3",
  },
  height: {
    tiny: "h-[24px]",
    small: "h-[28px]",
    medium: "h-[32px]",
    large: "h-[36px]",
    xlarge: "h-[44px]",
  },
}

export const SIZE_VARIANTS = {
  tiny: `${SIZE.text["tiny"]} ${SIZE.padding["tiny"]} ${SIZE.height["tiny"]}`,
  small: `${SIZE.text["small"]} ${SIZE.padding["small"]} ${SIZE.height["small"]}`,
  medium: `${SIZE.text["medium"]} ${SIZE.padding["medium"]} ${SIZE.height["medium"]}`,
  large: `${SIZE.text["large"]} ${SIZE.padding["large"]} ${SIZE.height["large"]}`,
  xlarge: `${SIZE.text["xlarge"]} ${SIZE.padding["xlarge"]} ${SIZE.height["xlarge"]}`,
}

export const SIZE_VARIANTS_INNER = {
  tiny: `${SIZE.text["tiny"]} ${SIZE.padding["tiny"]} ${SIZE_INNER.height["tiny"]}`,
  small: `${SIZE.text["small"]} ${SIZE.padding["small"]} ${SIZE_INNER.height["small"]}`,
  medium: `${SIZE.text["medium"]} ${SIZE.padding["medium"]} ${SIZE_INNER.height["medium"]}`,
  large: `${SIZE.text["large"]} ${SIZE.padding["large"]} ${SIZE_INNER.height["large"]}`,
  xlarge: `${SIZE.text["xlarge"]} ${SIZE.padding["xlarge"]} ${SIZE_INNER.height["xlarge"]}`,
}

export const SIZE_VARIANTS_DEFAULT = "small"
