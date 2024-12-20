// import { fontFamily } from 'tailwindcss/defaultTheme'
// import { fontFamily } from 'tailwindcss/defaultTheme'
import {
  KeyValuePair,
  ResolvableTo,
  ThemeConfig,
} from "tailwindcss/types/config"

import { variableFontFamilies, variableFontFamily } from "../type/fontFamily"
import { fontWeight, fontWeights } from "../type/fontWeight"
import { fontScales } from "../type/scale"

export interface SparkstackThemeConfig {
  fontFamily: FontFamily
  fontFamilies: FontFamilies
  fontWeight: FontWeight
  fontScale: FontScale
}

export type FontFamilies = ThemeConfig["fontFamily"] & {
  FontFamily: FontFamily
}

export type FontScale = ThemeConfig["fontSize"] &
  ResolvableTo<
    KeyValuePair<
      number,
      | number[]
      | [number, number]
      | [number, number, number]
      | [
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
        ]
      | string
      | [fontSize: string, lineHeight: string]
      | [
          fontSize: string,
          configuration: Partial<{
            lineHeight: string
            letterSpacing: string
            fontWeight: FontWeight
          }>,
        ]
    >
  >

export type FontWeightOptions = {
  thin: string
  hairline: string
  extralight: string
  "extra-light": string
  light: string
  normal: string
  regular: string
  medium: string
  demibold: string
  semibold: string
  bold: string
  extrabold: string
  "extra-bold": string
  black: string
}

export type FontFamilyOptions = {
  mono: string[]
  sans: string[]
  sansCondensed: string[]
  sansHebrew: string[]
  serif: string[]
  bahnschrift: string[]
  heading: string[]
  body: string[]
  legal: string[]
  helper: string[]
}

// export type FontFamilies = SparkstackThemeConfig['fontFamily'] & {
//   mono: string | string[]
//   sans: string | string[]
//   sansCondensed?: string | string[]
//   sansHebrew?: string | string[]
//   serif?: string | string[]
//   bahnschrift?: string | string[]
//   heading?: string | string[]
//   body?: string | string[]
//   legal?: string | string[]
//   helper?: string | string[]
// }

export type FontFamily = ThemeConfig["fontFamily"] & FontFamilyOptions
export type FontWeight = ThemeConfig["fontWeight"] & FontWeightOptions

export {
  variableFontFamily,
  variableFontFamilies,
  fontWeight,
  fontWeights,
  fontScales,
}
