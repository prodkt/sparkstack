import * as RadixColors from "@radix-ui/colors"
import BezierEasing from "bezier-easing"
import Color from "colorjs.io"

type ArrayOf12<T> = [T, T, T, T, T, T, T, T, T, T, T, T]
const arrayOf12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const

// prettier-ignore
const grayScaleNames = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'] as const

// prettier-ignore
const scaleNames = [...grayScaleNames, 'tomato', 'red', 'ruby', 'crimson', 'pink',
'plum', 'purple', 'violet', 'iris', 'indigo', 'blue', 'cyan', 'teal', 'jade', 'green',
'grass', 'brown', 'orange', 'sky', 'mint', 'lime', 'yellow', 'amber'] as const

const darkModeEasing = [1, 0, 1, 0] as [number, number, number, number]
const lightModeEasing = [0, 2, 0, 2] as [number, number, number, number]

const lightColors = Object.fromEntries(
  scaleNames.map((scaleName) => [
    scaleName,
    Object.values(RadixColors[`${scaleName}P3`]).map((str) =>
      new Color(str).to("oklch")
    ),
  ])
) as Record<(typeof scaleNames)[number], ArrayOf12<Color>>

const darkColors = Object.fromEntries(
  scaleNames.map((scaleName) => [
    scaleName,
    Object.values(RadixColors[`${scaleName}DarkP3`]).map((str) =>
      new Color(str).to("oklch")
    ),
  ])
) as Record<(typeof scaleNames)[number], ArrayOf12<Color>>

function getTextColor(background: Color): Color {
  const white = new Color("oklch", [1, 0, 0])

  if (Math.abs(white.contrastAPCA(background)) < 40) {
    const [L, C, H] = background.coords
    return new Color("oklch", [0.25, Math.max(0.08 * C, 0.04), H])
  }

  return white
}

function getStep9Colors(
  scale: ArrayOf12<Color>,
  accentBaseColor: Color
): [Color, Color] {
  const referenceBackgroundColor = scale[0]
  const distance = accentBaseColor.deltaEOK(referenceBackgroundColor) * 100

  if (distance < 25) {
    return [scale[8], getTextColor(scale[8])]
  }

  return [accentBaseColor, getTextColor(accentBaseColor)]
}

function getButtonHoverColor(source: Color, scales: ArrayOf12<Color>[]): Color {
  const [L, C, H] = source.coords
  const newL = L > 0.4 ? L - 0.03 / (L + 0.1) : L + 0.03 / (L + 0.1)
  const newC = L > 0.4 && Number.isNaN(H) ? C * 0.93 + 0 : C
  const buttonHoverColor = new Color("oklch", [newL, newC, H])

  let closestColor = buttonHoverColor
  let minDistance = Number.POSITIVE_INFINITY

  for (const scale of scales) {
    for (const color of scale) {
      const distance = buttonHoverColor.deltaEOK(color)
      if (distance < minDistance) {
        minDistance = distance
        closestColor = color
      }
    }
  }

  buttonHoverColor.coords[1] = closestColor.coords[1]
  buttonHoverColor.coords[2] = closestColor.coords[2]
  return buttonHoverColor
}

function getScaleFromColor(
  source: Color,
  scales: Record<string, ArrayOf12<Color>>,
  backgroundColor: Color
): ArrayOf12<Color> {
  let allColors: { scale: string; color: Color; distance: number }[] = []

  Object.entries(scales).forEach(([name, scale]) => {
    for (const color of scale) {
      const distance = source.deltaEOK(color)
      allColors.push({ scale: name, distance, color })
    }
  })

  allColors.sort((a, b) => a.distance - b.distance)

  // Remove non-unique scales
  let closestColors = allColors.filter(
    (color, i, arr) =>
      i === arr.findIndex((value) => value.scale === color.scale)
  )

  // If the next two closest colors are both grays, remove the second one until it's not a gray anymore
  const grayScaleNamesStr = grayScaleNames as readonly string[]
  const allAreGrays = closestColors.every((color) =>
    grayScaleNamesStr.includes(color.scale)
  )
  if (!allAreGrays && grayScaleNamesStr.includes(closestColors[0].scale)) {
    while (grayScaleNamesStr.includes(closestColors[1].scale)) {
      closestColors.splice(1, 1)
    }
  }

  const colorA = closestColors[0]
  const colorB = closestColors[1]

  const a = colorB.distance
  const b = colorA.distance
  const c = colorA.color.deltaEOK(colorB.color)

  const cosA = (b ** 2 + c ** 2 - a ** 2) / (2 * b * c)
  const radA = Math.acos(cosA)
  const sinA = Math.sin(radA)

  const cosB = (a ** 2 + c ** 2 - b ** 2) / (2 * a * c)
  const radB = Math.acos(cosB)
  const sinB = Math.sin(radB)

  const tanC1 = cosA / sinA
  const tanC2 = cosB / sinB
  const ratio = Math.max(0, tanC1 / tanC2) * 0.5

  const scaleA = scales[colorA.scale]
  const scaleB = scales[colorB.scale]
  const scale = arrayOf12.map((i) =>
    new Color(Color.mix(scaleA[i], scaleB[i], ratio)).to("oklch")
  ) as ArrayOf12<Color>

  const baseColor = scale
    .slice()
    .sort((a, b) => source.deltaEOK(a) - source.deltaEOK(b))[0]

  const ratioC = source.coords[1] / baseColor.coords[1]

  scale.forEach((color) => {
    color.coords[1] = Math.min(source.coords[1] * 1.5, color.coords[1] * ratioC)
    color.coords[2] = source.coords[2]
  })

  if (scale[0].coords[0] > 0.5) {
    const lightnessScale = scale.map(({ coords }) => coords[0])
    const backgroundL = Math.max(0, Math.min(1, backgroundColor.coords[0]))
    const newLightnessScale = transposeProgressionStart(
      backgroundL,
      [1, ...lightnessScale],
      lightModeEasing
    )

    newLightnessScale.shift()

    newLightnessScale.forEach((lightness, i) => {
      scale[i].coords[0] = lightness
    })

    return scale
  }

  const ease: typeof darkModeEasing = [...darkModeEasing]
  const referenceBackgroundColorL = scale[0].coords[0]
  const backgroundColorL = Math.max(0, Math.min(1, backgroundColor.coords[0]))
  const ratioL = backgroundColorL / referenceBackgroundColorL

  if (ratioL > 1) {
    const maxRatio = 1.5

    for (let i = 0; i < ease.length; i++) {
      const metaRatio = (ratioL - 1) * (maxRatio / (maxRatio - 1))
      ease[i] = ratioL > maxRatio ? 0 : Math.max(0, ease[i] * (1 - metaRatio))
    }
  }

  const lightnessScale = scale.map(({ coords }) => coords[0])
  const backgroundL = backgroundColor.coords[0]
  const newLightnessScale = transposeProgressionStart(
    backgroundL,
    lightnessScale,
    ease
  )

  newLightnessScale.forEach((lightness, i) => {
    scale[i].coords[0] = lightness
  })

  return scale
}

function transposeProgressionStart(
  to: number,
  arr: number[],
  curve: [number, number, number, number]
): number[] {
  return arr.map((n, i, arr) => {
    const lastIndex = arr.length - 1
    const diff = arr[0] - to
    const fn = BezierEasing(...curve)
    return n - diff * fn(1 - i / lastIndex)
  })
}

function formatHex(str: string): string {
  if (!str.startsWith("#")) return str
  if (str.length === 4) {
    const [hash, r, g, b] = str.split("")
    return hash + r + r + g + g + b + b
  }
  if (str.length === 5) {
    const [hash, r, g, b, a] = str.split("")
    return hash + r + r + g + g + b + b + a + a
  }
  return str
}

function toOklchString(color: Color): string {
  const L = +(color.coords[0] * 100).toFixed(1)
  return color
    .to("oklch")
    .toString({ precision: 4 })
    .replace(/(\S+)(.+)/, `oklch(${L}%$2`)
}

export interface GeneratedColors {
  accentScale: ArrayOf12<string>
  accentScaleWideGamut: ArrayOf12<string>
  accentScaleAlpha: ArrayOf12<string>
  accentScaleAlphaWideGamut: ArrayOf12<string>
  accentContrast: string
  grayScale: ArrayOf12<string>
  grayScaleWideGamut: ArrayOf12<string>
  grayScaleAlpha: ArrayOf12<string>
  grayScaleAlphaWideGamut: ArrayOf12<string>
  graySurface: string
  graySurfaceWideGamut: string
  accentSurface: string
  accentSurfaceWideGamut: string
  background: string
}

export function generateRadixColors({
  appearance,
  accent,
  gray,
  background,
}: {
  appearance: "light" | "dark"
  accent: string
  gray: string
  background: string
}): GeneratedColors {
  const allScales = appearance === "light" ? lightColors : darkColors
  const backgroundColor = new Color(background).to("oklch")

  const grayBaseColor = new Color(gray).to("oklch")
  const grayScaleColors = getScaleFromColor(
    grayBaseColor,
    allScales,
    backgroundColor
  )

  const accentBaseColor = new Color(accent).to("oklch")
  const accentScaleColors = getScaleFromColor(
    accentBaseColor,
    allScales,
    backgroundColor
  )

  // Convert colors to strings
  const accentScale = accentScaleColors.map((color) =>
    color.to("srgb").toString({ format: "hex" })
  ) as ArrayOf12<string>

  const accentScaleWideGamut = accentScaleColors.map(
    toOklchString
  ) as ArrayOf12<string>

  const accentScaleAlpha = accentScale.map((color) =>
    getAlphaColorSrgb(color, background)
  ) as ArrayOf12<string>

  const accentScaleAlphaWideGamut = accentScaleWideGamut.map((color) =>
    getAlphaColorP3(color, background)
  ) as ArrayOf12<string>

  const [accent9Color, accentContrastColor] = getStep9Colors(
    accentScaleColors,
    accentBaseColor
  )

  const accentContrast = accentContrastColor
    .to("srgb")
    .toString({ format: "hex" })

  const grayScale = grayScaleColors.map((color) =>
    color.to("srgb").toString({ format: "hex" })
  ) as ArrayOf12<string>

  const grayScaleWideGamut = grayScaleColors.map(
    toOklchString
  ) as ArrayOf12<string>

  const grayScaleAlpha = grayScale.map((color) =>
    getAlphaColorSrgb(color, background)
  ) as ArrayOf12<string>

  const grayScaleAlphaWideGamut = grayScaleWideGamut.map((color) =>
    getAlphaColorP3(color, background)
  ) as ArrayOf12<string>

  const graySurface =
    appearance === "light" ? "#ffffffcc" : "rgba(0, 0, 0, 0.05)"
  const graySurfaceWideGamut =
    appearance === "light"
      ? "color(display-p3 1 1 1 / 80%)"
      : "color(display-p3 0 0 0 / 5%)"

  const accentSurface =
    appearance === "light"
      ? getAlphaColorSrgb(accentScale[1], background, 0.8)
      : getAlphaColorSrgb(accentScale[1], background, 0.5)

  const accentSurfaceWideGamut =
    appearance === "light"
      ? getAlphaColorP3(accentScaleWideGamut[1], background, 0.8)
      : getAlphaColorP3(accentScaleWideGamut[1], background, 0.5)

  const backgroundHex = backgroundColor.to("srgb").toString({ format: "hex" })

  return {
    accentScale,
    accentScaleWideGamut,
    accentScaleAlpha,
    accentScaleAlphaWideGamut,
    accentContrast,
    grayScale,
    grayScaleWideGamut,
    grayScaleAlpha,
    grayScaleAlphaWideGamut,
    graySurface,
    graySurfaceWideGamut,
    accentSurface,
    accentSurfaceWideGamut,
    background: backgroundHex,
  }
}

export function generateCssVariables(
  colors: GeneratedColors
): Record<string, string> {
  const cssVars: Record<string, string> = {}

  // Add accent colors
  for (let i = 1; i <= 12; i++) {
    cssVars[`accent-${i}`] = colors.accentScale[i - 1]
    cssVars[`accent-${i}-p3`] = colors.accentScaleWideGamut[i - 1]
  }

  // Add accent alpha colors
  for (let i = 1; i <= 12; i++) {
    cssVars[`accent-a${i}`] = colors.accentScaleAlpha[i - 1]
    cssVars[`accent-a${i}-p3`] = colors.accentScaleAlphaWideGamut[i - 1]
  }

  // Add special accent colors
  cssVars.accent = colors.accentScale[0]
  cssVars["accent-text"] = colors.accentScale[11]
  cssVars["accent-border"] = colors.accentScaleAlpha[3]
  cssVars["accent-ring"] = colors.accentScaleAlpha[3]
  cssVars["accent-ring-offset"] = colors.accentScaleAlpha[3]
  cssVars["accent-outline"] = colors.accentScaleAlpha[3]
  cssVars["accent-shadow"] = colors.accentScaleAlpha[3]
  cssVars["accent-contrast"] = colors.accentContrast
  cssVars["accent-surface"] = colors.accentSurface
  cssVars["accent-indicator"] = colors.accentScale[8]
  cssVars["accent-track"] = colors.accentScale[8]

  // Add gray scale colors
  for (let i = 1; i <= 12; i++) {
    cssVars[`gray-${i}`] = colors.grayScale[i - 1]
    cssVars[`gray-${i}-p3`] = colors.grayScaleWideGamut[i - 1]
  }

  // Add gray alpha colors
  for (let i = 1; i <= 12; i++) {
    cssVars[`gray-a${i}`] = colors.grayScaleAlpha[i - 1]
    cssVars[`gray-a${i}-p3`] = colors.grayScaleAlphaWideGamut[i - 1]
  }

  // Add special gray colors
  cssVars.gray = colors.graySurface
  cssVars["gray-surface-p3"] = colors.graySurfaceWideGamut

  // Add background color
  cssVars.background = colors.background

  return cssVars
}

function getAlphaColorSrgb(
  targetColor: string,
  backgroundColor: string,
  targetAlpha?: number
): string {
  const [r, g, b, a] = getAlphaColor(
    new Color(targetColor).to("srgb").coords,
    new Color(backgroundColor).to("srgb").coords,
    255,
    255,
    targetAlpha
  )

  return formatHex(new Color("srgb", [r, g, b], a).toString({ format: "hex" }))
}

function getAlphaColorP3(
  targetColor: string,
  backgroundColor: string,
  targetAlpha?: number
): string {
  const [r, g, b, a] = getAlphaColor(
    new Color(targetColor).to("p3").coords,
    new Color(backgroundColor).to("p3").coords,
    255,
    1000,
    targetAlpha
  )

  return new Color("p3", [r, g, b], a)
    .toString({ precision: 4 })
    .replace("color(p3 ", "color(display-p3 ")
}

function getAlphaColor(
  targetRgb: number[],
  backgroundRgb: number[],
  rgbPrecision: number,
  alphaPrecision: number,
  targetAlpha?: number
): [number, number, number, number] {
  const [tr, tg, tb] = targetRgb.map((c) => Math.round(c * rgbPrecision))
  const [br, bg, bb] = backgroundRgb.map((c) => Math.round(c * rgbPrecision))

  if (!tr || !tg || !tb || !br || !bg || !bb) {
    throw Error("Color is undefined")
  }

  let desiredRgb = 0
  if (tr > br || tg > bg || tb > bb) {
    desiredRgb = rgbPrecision
  }

  const alphaR = (tr - br) / (desiredRgb - br)
  const alphaG = (tg - bg) / (desiredRgb - bg)
  const alphaB = (tb - bb) / (desiredRgb - bb)

  const isPureGray = [alphaR, alphaG, alphaB].every((alpha) => alpha === alphaR)

  if (!targetAlpha && isPureGray) {
    const V = desiredRgb / rgbPrecision
    return [V, V, V, alphaR]
  }

  const clampRgb = (n: number) =>
    Number.isNaN(n) ? 0 : Math.min(rgbPrecision, Math.max(0, n))
  const clampA = (n: number) =>
    Number.isNaN(n) ? 0 : Math.min(alphaPrecision, Math.max(0, n))
  const maxAlpha = targetAlpha ?? Math.max(alphaR, alphaG, alphaB)

  const A = clampA(Math.ceil(maxAlpha * alphaPrecision)) / alphaPrecision
  let R = clampRgb(((br * (1 - A) - tr) / A) * -1)
  let G = clampRgb(((bg * (1 - A) - tg) / A) * -1)
  let B = clampRgb(((bb * (1 - A) - tb) / A) * -1)

  R = Math.ceil(R)
  G = Math.ceil(G)
  B = Math.ceil(B)

  const blendedR = blendAlpha(R, A, br)
  const blendedG = blendAlpha(G, A, bg)
  const blendedB = blendAlpha(B, A, bb)

  if (desiredRgb === 0) {
    if (tr <= br && tr !== blendedR) {
      R = tr > blendedR ? R + 1 : R - 1
    }
    if (tg <= bg && tg !== blendedG) {
      G = tg > blendedG ? G + 1 : G - 1
    }
    if (tb <= bb && tb !== blendedB) {
      B = tb > blendedB ? B + 1 : B - 1
    }
  }

  if (desiredRgb === rgbPrecision) {
    if (tr >= br && tr !== blendedR) {
      R = tr > blendedR ? R + 1 : R - 1
    }
    if (tg >= bg && tg !== blendedG) {
      G = tg > blendedG ? G + 1 : G - 1
    }
    if (tb >= bb && tb !== blendedB) {
      B = tb > blendedB ? B + 1 : B - 1
    }
  }

  R = R / rgbPrecision
  G = G / rgbPrecision
  B = B / rgbPrecision

  return [R, G, B, A]
}

function blendAlpha(
  foreground: number,
  alpha: number,
  background: number,
  round = true
): number {
  if (round) {
    return Math.round(background * (1 - alpha)) + Math.round(foreground * alpha)
  }
  return background * (1 - alpha) + foreground * alpha
}
