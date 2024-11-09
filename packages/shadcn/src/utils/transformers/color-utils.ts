import * as RadixColors from "@radix-ui/colors"
import Color from "colorjs.io"
import BezierEasing from "bezier-easing"
import { PREFIXES } from "./sparkstack_transform-css-vars"

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
			new Color(str).to("oklch"),
		),
	]),
) as Record<(typeof scaleNames)[number], ArrayOf12<Color>>;

const darkColors = Object.fromEntries(
	scaleNames.map((scaleName) => [
		scaleName,
		Object.values(RadixColors[`${scaleName}DarkP3`]).map((str) =>
			new Color(str).to("oklch"),
		),
	]),
) as Record<(typeof scaleNames)[number], ArrayOf12<Color>>;

const lightGrayColors = Object.fromEntries(
	grayScaleNames.map((scaleName) => [
		scaleName,
		Object.values(RadixColors[`${scaleName}P3`]).map((str) =>
			new Color(str).to("oklch"),
		),
	]),
) as Record<(typeof grayScaleNames)[number], ArrayOf12<Color>>;

const darkGrayColors = Object.fromEntries(
	grayScaleNames.map((scaleName) => [
		scaleName,
		Object.values(RadixColors[`${scaleName}DarkP3`]).map((str) =>
			new Color(str).to("oklch"),
		),
	]),
) as Record<(typeof grayScaleNames)[number], ArrayOf12<Color>>;


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
  const allColors = Object.entries(scales).flatMap(([name, scale]) =>
    scale.map(color => ({
      scale: name,
      color,
      distance: source.deltaEOK(color)
    }))
  ).sort((a, b) => a.distance - b.distance)

  // Remove non-unique scales
  const closestColors = allColors.filter(
    (color, i, arr) =>
      i === arr.findIndex((value) => value.scale === color.scale),
  )

  // If the next two closest colors are both grays, remove the second one until it's not a gray anymore
  const grayScaleNamesStr = grayScaleNames as readonly string[]
  const allAreGrays = closestColors.every((color) =>
    grayScaleNamesStr.includes(color.scale),
  )
  if (!allAreGrays && grayScaleNamesStr.includes(closestColors[0].scale)) {
    while (grayScaleNamesStr.includes(closestColors[1].scale)) {
      closestColors.splice(1, 1)
    }
  }

  let colorA = closestColors[0]
  let colorB = closestColors[1]

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
    new Color(Color.mix(scaleA[i], scaleB[i], ratio)).to("oklch"),
  ) as ArrayOf12<Color>

  const baseColor = scale
    .slice()
    .sort((a, b) => source.deltaEOK(a) - source.deltaEOK(b))[0]

  const ratioC = source.coords[1] / baseColor.coords[1]

  scale.forEach((color) => {
    color.coords[1] = Math.min(
      source.coords[1] * 1.5,
      color.coords[1] * ratioC,
    )
    color.coords[2] = source.coords[2]
  })

  if (scale[0].coords[0] > 0.5) {
    const lightnessScale = scale.map(({ coords }) => coords[0])
    const backgroundL = Math.max(0, Math.min(1, backgroundColor.coords[0]))
    const newLightnessScale = transposeProgressionStart(
      backgroundL,
      [1, ...lightnessScale],
      lightModeEasing,
    )

    newLightnessScale.shift()

    newLightnessScale.forEach((lightness, i) => {
      scale[i].coords[0] = lightness
    })

    return scale
  }

  let ease: typeof darkModeEasing = [...darkModeEasing]
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
    ease,
  )

  newLightnessScale.forEach((lightness, i) => {
    scale[i].coords[0] = lightness
  })

  return scale
}

function transposeProgressionStart(
  to: number,
  arr: number[],
  curve: [number, number, number, number],
): number[] {
  return arr.map((n, i, arr) => {
    const lastIndex = arr.length - 1
    const diff = arr[0] - to
    const fn = BezierEasing(...curve)
    return n - diff * fn(1 - i / lastIndex)
  })
}

// function formatHex(str: string): string {
//   if (!str.startsWith("#")) return str
//   if (str.length === 4) {
//     const [hash, r, g, b] = str.split("")
//     return hash + r + r + g + g + b + b
//   }
//   if (str.length === 5) {
//     const [hash, r, g, b, a] = str.split("")
//     return hash + r + r + g + g + b + b + a + a
//   }
//   return str
// }

// function toOklchString(color: Color): string {
//   const L = +(color.coords[0] * 100).toFixed(1)
//   return color
//     .to("oklch")
//     .toString({ precision: 4 })
//     .replace(/(\S+)(.+)/, `oklch(${L}%$2`)
// }

// export interface GeneratedColors {
//   // Accent colors
//   accentScale: ArrayOf12<string>
//   accentScaleWideGamut: ArrayOf12<string>
//   accentScaleAlpha: ArrayOf12<string>
//   accentScaleAlphaWideGamut: ArrayOf12<string>
//   accentContrast: string

//   // Gray colors
//   grayScale: ArrayOf12<string>
//   grayScaleWideGamut: ArrayOf12<string>
//   grayScaleAlpha: ArrayOf12<string>
//   grayScaleAlphaWideGamut: ArrayOf12<string>
//   graySurface: string
//   graySurfaceWideGamut: string

//   // Special colors
//   accentSurface: string
//   accentSurfaceWideGamut: string
//   background: string

//   // Additional special values
//   accentText: string
//   accentBorder: string
//   accentRing: string
//   accentRingOffset: string
//   accentOutline: string
//   accentShadow: string
//   accentIndicator: string
//   accentTrack: string
//   accentHover: string
//   accentActive: string

//   // Gray variants
//   grayText: string
//   grayBorder: string
//   grayRing: string
//   grayRingOffset: string
//   grayOutline: string
//   grayShadow: string
// }

// export function generateRadixColors({
//   appearance,
//   ...args
// }: {
//   appearance: "light" | "dark"
//   accent: string
//   gray: string
//   background: string
// }): GeneratedColors {
//   const allScales = appearance === "light" ? lightColors : darkColors
//   const backgroundColor = new Color(args.background).to("oklch")

//   const grayBaseColor = new Color(args.gray).to("oklch")
//   const grayScaleColors = getScaleFromColor(
//     grayBaseColor,
//     allScales,
//     backgroundColor,
//   )

//   const accentBaseColor = new Color(args.accent).to("oklch")
//   const accentScaleColors = getScaleFromColor(
//     accentBaseColor,
//     allScales,
//     backgroundColor,
//   )

//   // Convert colors to strings
//   const accentScale = accentScaleColors.map(color =>
//     color.to("srgb").toString({ format: "hex" })) as ArrayOf12<string>

//   const accentScaleWideGamut = accentScaleColors.map(toOklchString) as ArrayOf12<string>

//   const accentScaleAlpha = accentScale.map(color =>
//     getAlphaColorSrgb(color, background)) as ArrayOf12<string>

//   const accentScaleAlphaWideGamut = accentScaleWideGamut.map(color =>
//     getAlphaColorP3(color, background)) as ArrayOf12<string>

//   const [accent9Color, accentContrastColor] = getStep9Colors(
//     accentScaleColors,
//     accentBaseColor,
//   )

//   const accentContrast = accentContrastColor.to("srgb").toString({ format: "hex" })

//   const grayScale = grayScaleColors.map(color =>
//     color.to("srgb").toString({ format: "hex" })) as ArrayOf12<string>

//   const grayScaleWideGamut = grayScaleColors.map(toOklchString) as ArrayOf12<string>

//   const grayScaleAlpha = grayScale.map(color =>
//     getAlphaColorSrgb(color, background)) as ArrayOf12<string>

//   const grayScaleAlphaWideGamut = grayScaleWideGamut.map(color =>
//     getAlphaColorP3(color, background)) as ArrayOf12<string>

//   const graySurface = appearance === "light" ? "#ffffffcc" : "rgba(0, 0, 0, 0.05)"
//   const graySurfaceWideGamut = appearance === "light"
//     ? "color(display-p3 1 1 1 / 80%)"
//     : "color(display-p3 0 0 0 / 5%)"

//   const accentSurface = appearance === "light"
//     ? getAlphaColorSrgb(accentScale[1], background, 0.8)
//     : getAlphaColorSrgb(accentScale[1], background, 0.5)

//   const accentSurfaceWideGamut = appearance === "light"
//     ? getAlphaColorP3(accentScaleWideGamut[1], background, 0.8)
//     : getAlphaColorP3(accentScaleWideGamut[1], background, 0.5)

//   const backgroundHex = backgroundColor.to("srgb").toString({ format: "hex" })

//   // Add special accent variants
//   const accentText = accentScale[11]
//   const accentBorder = accentScaleAlpha[3]
//   const accentRing = accentScaleAlpha[3]
//   const accentRingOffset = accentScaleAlpha[3]
//   const accentOutline = accentScaleAlpha[3]
//   const accentShadow = accentScaleAlpha[3]
//   const accentIndicator = accentScale[8]
//   const accentTrack = accentScale[8]
//   const accentHover = accentScale[9]
//   const accentActive = accentScale[10]

//   // Add gray variants
//   const grayText = grayScale[11]
//   const grayBorder = grayScaleAlpha[3]
//   const grayRing = grayScaleAlpha[3]
//   const grayRingOffset = grayScaleAlpha[3]
//   const grayOutline = grayScaleAlpha[3]
//   const grayShadow = grayScaleAlpha[3]

//   return {
//     accentScale,
//     accentScaleWideGamut,
//     accentScaleAlpha,
//     accentScaleAlphaWideGamut,
//     accentContrast,
//     grayScale,
//     grayScaleWideGamut,
//     grayScaleAlpha,
//     grayScaleAlphaWideGamut,
//     graySurface,
//     graySurfaceWideGamut,
//     accentSurface,
//     accentSurfaceWideGamut,
//     background: backgroundHex,
//     accentText,
//     accentBorder,
//     accentRing,
//     accentRingOffset,
//     accentOutline,
//     accentShadow,
//     accentIndicator,
//     accentTrack,
//     accentHover,
//     accentActive,
//     grayText,
//     grayBorder,
//     grayRing,
//     grayRingOffset,
//     grayOutline,
//     grayShadow,
//   }
// }


export const generateRadixColors = ({
	appearance,
	...args
}: {
	appearance: "light" | "dark";
	accent: string;
	gray: string;
	background: string;
}) => {
	const allScales = appearance === "light" ? lightColors : darkColors;
	const grayScales = appearance === "light" ? lightGrayColors : darkGrayColors;
	const backgroundColor = new Color(args.background).to("oklch");

	const grayBaseColor = new Color(args.gray).to("oklch");
	const grayScaleColors = getScaleFromColor(
		grayBaseColor,
		grayScales,
		backgroundColor,
	);

	const accentBaseColor = new Color(args.accent).to("oklch");

	let accentScaleColors = getScaleFromColor(
		accentBaseColor,
		allScales,
		backgroundColor,
	);

	// Enforce srgb for the background color
	const backgroundHex = backgroundColor.to("srgb").toString({ format: "hex" });

	// Make sure we use the tint from the gray scale for when base is pure white or black
	const accentBaseHex = accentBaseColor.to("srgb").toString({ format: "hex" });
	if (accentBaseHex === "#000" || accentBaseHex === "#fff") {
		accentScaleColors = grayScaleColors.map((color) =>
			color.clone(),
		) as ArrayOf12<Color>;
	}

	const [accent9Color, accentContrastColor] = getStep9Colors(
		accentScaleColors,
		accentBaseColor,
	);

	accentScaleColors[8] = accent9Color;
	accentScaleColors[9] = getButtonHoverColor(accent9Color, [accentScaleColors]);

	// Limit saturation of the text colors
	accentScaleColors[10].coords[1] = Math.min(
		Math.max(accentScaleColors[8].coords[1], accentScaleColors[7].coords[1]),
		accentScaleColors[10].coords[1],
	);
	accentScaleColors[11].coords[1] = Math.min(
		Math.max(accentScaleColors[8].coords[1], accentScaleColors[7].coords[1]),
		accentScaleColors[11].coords[1],
	);

	const accentScaleHex = accentScaleColors.map((color) =>
		color.to("srgb").toString({ format: "hex" }),
	) as ArrayOf12<string>;

	const accentScaleWideGamut = accentScaleColors.map(
		toOklchString,
	) as ArrayOf12<string>;

	const accentScaleAlphaHex = accentScaleHex.map((color) =>
		getAlphaColorSrgb(color, backgroundHex),
	) as ArrayOf12<string>;

	const accentScaleAlphaWideGamutString = accentScaleHex.map((color) =>
		getAlphaColorP3(color, backgroundHex),
	) as ArrayOf12<string>;

	const accentContrastColorHex = accentContrastColor
		.to("srgb")
		.toString({ format: "hex" });

	const grayScaleHex = grayScaleColors.map((color) =>
		color.to("srgb").toString({ format: "hex" }),
	) as ArrayOf12<string>;

	const grayScaleWideGamut = grayScaleColors.map(
		toOklchString,
	) as ArrayOf12<string>;

	const grayScaleAlphaHex = grayScaleHex.map((color) =>
		getAlphaColorSrgb(color, backgroundHex),
	) as ArrayOf12<string>;

	const grayScaleAlphaWideGamutString = grayScaleHex.map((color) =>
		getAlphaColorP3(color, backgroundHex),
	) as ArrayOf12<string>;

	const accentSurfaceHex =
		appearance === "light"
			? getAlphaColorSrgb(accentScaleHex[1], backgroundHex, 0.8)
			: getAlphaColorSrgb(accentScaleHex[1], backgroundHex, 0.5);

	const accentSurfaceWideGamutString =
		appearance === "light"
			? getAlphaColorP3(accentScaleWideGamut[1], backgroundHex, 0.8)
			: getAlphaColorP3(accentScaleWideGamut[1], backgroundHex, 0.5);

	return {
		accentScale: accentScaleHex,
		accentScaleAlpha: accentScaleAlphaHex,
		accentScaleWideGamut: accentScaleWideGamut,
		accentScaleAlphaWideGamut: accentScaleAlphaWideGamutString,
		accentContrast: accentContrastColorHex,

		grayScale: grayScaleHex,
		grayScaleAlpha: grayScaleAlphaHex,
		grayScaleWideGamut: grayScaleWideGamut,
		grayScaleAlphaWideGamut: grayScaleAlphaWideGamutString,

		graySurface: appearance === "light" ? "#ffffffcc" : "rgba(0, 0, 0, 0.05)",
		graySurfaceWideGamut:
			appearance === "light"
				? "color(display-p3 1 1 1 / 80%)"
				: "color(display-p3 0 0 0 / 5%)",

		accentSurface: accentSurfaceHex,
		accentSurfaceWideGamut: accentSurfaceWideGamutString,

		background: backgroundHex,
	};
};


// export function generateCssVariables(colors: GeneratedColors): string {
//   const allScales = generateAllRadixScales()

//   return `
// /* Base Radix Color Scales */
// :root[data-theme="light"],
// .light,
// .light-theme {
// ${Object.entries(allScales)
//   .filter(([name]) => name.endsWith('-light'))
//   .map(([name, scale]) => {
//     const baseName = name.replace('-light', '')
//     return Object.entries(scale)
//       .map(([key, value]) => {
//         // Extract RGB values from the color
//         const color = new Color(value)
//         const [r, g, b] = color.to("srgb").coords
//         // Convert to 0-255 range and round
//         const rgb = [r, g, b].map(c => Math.round(c * 255)).join(' ')
//         return `  --${baseName}${key}: ${rgb};`
//       })
//       .join('\n')
//   }).join('\n\n')}
// }

// :root[data-theme="dark"],
// .dark,
// .dark-theme {
// ${Object.entries(allScales)
//   .filter(([name]) => name.endsWith('-dark'))
//   .map(([name, scale]) => {
//     const baseName = name.replace('-dark', '')
//     return Object.entries(scale)
//       .map(([key, value]) => {
//         // Extract RGB values from the color
//         const color = new Color(value)
//         const [r, g, b] = color.to("srgb").coords
//         // Convert to 0-255 range and round
//         const rgb = [r, g, b].map(c => Math.round(c * 255)).join(' ')
//         return `  --${baseName}${key}: ${rgb};`
//       })
//       .join('\n')
//   }).join('\n\n')}
// }

// /* Gray Scale Aliases */
// ${grayScaleNames.map(name => `
// [data-gray-color="${name}"] {
//   --gray1: var(--${name}1);
//   --gray2: var(--${name}2);
//   --gray3: var(--${name}3);
//   --gray4: var(--${name}4);
//   --gray5: var(--${name}5);
//   --gray6: var(--${name}6);
//   --gray7: var(--${name}7);
//   --gray8: var(--${name}8);
//   --gray9: var(--${name}9);
//   --gray10: var(--${name}10);
//   --gray11: var(--${name}11);
//   --gray12: var(--${name}12);
// }`).join('\n')}

/* Color Scale Aliases */
// ${scaleNames.map(name => `
// [data-accent-color="${name}"] {
//   --accent1: var(--${name}1);
//   --accent2: var(--${name}2);
//   --accent3: var(--${name}3);
//   --accent4: var(--${name}4);
//   --accent5: var(--${name}5);
//   --accent6: var(--${name}6);
//   --accent7: var(--${name}7);
//   --accent8: var(--${name}8);
//   --accent9: var(--${name}9);
//   --accent10: var(--${name}10);
//   --accent11: var(--${name}11);
//   --accent12: var(--${name}12);

//   /* Semantic mappings for this color */
//   --accent-base: var(--${name}9);
//   --accent-foreground: var(--${name}11);
//   --accent-background: var(--${name}3);
//   --accent-border: var(--${name}7);
//   --accent-ring: var(--${name}8);

//   /* Interactive states */
//   --accent-hover: var(--${name}10);
//   --accent-active: var(--${name}11);
//   --accent-disabled: var(--${name}6);

//   :root[data-theme="light"],
//   .light,
//   .light-theme {
//     /* Alpha variants */
//     ${PREFIXES.map(prefix => `
//     --${prefix}-${name}-A1: var(--${name}A1);
//     --${prefix}-${name}-A2: var(--${name}A2);
//     --${prefix}-${name}-A3: var(--${name}A3);
//     --${prefix}-${name}-A4: var(--${name}A4);
//     --${prefix}-${name}-A5: var(--${name}A5);
//     --${prefix}-${name}-A6: var(--${name}A6);
//     --${prefix}-${name}-A7: var(--${name}A7);
//     --${prefix}-${name}-A8: var(--${name}A8);
//     --${prefix}-${name}-A9: var(--${name}A9);
//     --${prefix}-${name}-A10: var(--${name}A10);
//     --${prefix}-${name}-A11: var(--${name}A11);
//     --${prefix}-${name}-A12: var(--${name}A12);
//   `).join('\n')}
//   }

//   [data-gray-color="${name}"] {
//     /* Alpha variants */
//     ${PREFIXES.map(prefix => `
//     --${prefix}-gray-A1: var(--${name}A1);
//     --${prefix}-gray-A2: var(--${name}A2);
//     --${prefix}-gray-A3: var(--${name}A3);
//     --${prefix}-gray-A4: var(--${name}A4);
//     --${prefix}-gray-A5: var(--${name}A5);
//     --${prefix}-gray-A6: var(--${name}A6);
//     --${prefix}-gray-A7: var(--${name}A7);
//     --${prefix}-gray-A8: var(--${name}A8);
//     --${prefix}-gray-A9: var(--${name}A9);
//     --${prefix}-gray-A10: var(--${name}A10);
//     --${prefix}-gray-A11: var(--${name}A11);
//     --${prefix}-gray-A12: var(--${name}A12);
//   `).join('\n')}
//   }

//   :root[data-theme="dark"],
//   .dark,
//   .dark-theme {
//     /* Alpha variants */
//     ${PREFIXES.map(prefix => `
//     --${prefix}-${name}-A1: var(--${name}A1);
//     --${prefix}-${name}-A2: var(--${name}A2);
//     --${prefix}-${name}-A3: var(--${name}A3);
//     --${prefix}-${name}-A4: var(--${name}A4);
//     --${prefix}-${name}-A5: var(--${name}A5);
//     --${prefix}-${name}-A6: var(--${name}A6);
//     --${prefix}-${name}-A7: var(--${name}A7);
//     --${prefix}-${name}-A8: var(--${name}A8);
//     --${prefix}-${name}-A9: var(--${name}A9);
//     --${prefix}-${name}-A10: var(--${name}A10);
//     --${prefix}-${name}-A11: var(--${name}A11);
//     --${prefix}-${name}-A12: var(--${name}A12);
//   `).join('\n')}
//   }
// }

// /* Semantic Variables */
// :root {
//   /* Base colors */
//   --background: var(--gray1);
//   --foreground: var(--gray12);

//   /* Text */
//   --text-primary: var(--gray12);
//   --text-secondary: var(--gray11);
//   --text-muted: var(--gray10);
//   --text-contrast: var(--gray1);

//   /* Borders */
//   --border: var(--gray6);
//   --border-hover: var(--gray8);
//   --border-focus: var(--accent7);

//   /* Ring */
//   --ring: var(--accent7);
//   --ring-hover: var(--accent8);
//   --ring-active: var(--accent9);

//   /* Surface */
//   --surface: var(--gray3);
//   --surface-hover: var(--gray4);
//   --surface-active: var(--gray5);
//   --surface-muted: var(--gray2);

//   /* Overlay */
//   --overlay: var(--grayA6);
//   --overlay-hover: var(--grayA7);
//   --overlay-active: var(--grayA8);

//   /* Shadows */
//   --shadow-color: var(--grayA5);
//   --shadow-color-hover: var(--grayA6);

//   /* Focus */
//   --focus-ring: var(--accent7);
//   --focus-ring-offset: var(--background);

//   /* Status */
//   --success: var(--green9);
//   --warning: var(--yellow9);
//   --error: var(--red9);
//   --info: var(--blue9);
// }

// /* Wide Gamut Support */
// @supports (color: color(display-p3 1 1 1)) {
//   :root[data-theme="light"],
//   .light,
//   .light-theme {
//     ${Object.entries(allScales)
//       .filter(([name]) => name.endsWith('-light'))
//       .map(([name, scale]) => {
//         const baseName = name.replace('-light', '')
//         return Object.entries(scale)
//           .map(([key, value]) => `  --${baseName}${key}-p3: ${value};`)
//           .join('\n')
//       }).join('\n\n')}
//   }

//   :root[data-theme="dark"],
//   .dark,
//   .dark-theme {
//     ${Object.entries(allScales)
//       .filter(([name]) => name.endsWith('-dark'))
//       .map(([name, scale]) => {
//         const baseName = name.replace('-dark', '')
//         return Object.entries(scale)
//           .map(([key, value]) => `  --${baseName}${key}-p3: ${value};`)
//           .join('\n')
//       }).join('\n\n')}
//   }
// }`
// }

// Add this after the existing color scale definitions
// export function generateAllRadixScales() {
//   const scales: Record<string, Record<string, string>> = {}

//   // Generate light mode scales
//   for (const scaleName of scaleNames) {
//     scales[`${scaleName}-light`] = Object.fromEntries(
//       Object.entries(RadixColors[`${scaleName}P3`]).map(([key, value]) => [
//         key.replace(scaleName, ''),
//         value
//       ])
//     )
//   }

//   // Generate dark mode scales
//   for (const scaleName of scaleNames) {
//     scales[`${scaleName}-dark`] = Object.fromEntries(
//       Object.entries(RadixColors[`${scaleName}DarkP3`]).map(([key, value]) => [
//         key.replace(`${scaleName}Dark`, ''),
//         value
//       ])
//     )
//   }

//   return scales
// }

// function getAlphaColorSrgb(
//   targetColor: string,
//   backgroundColor: string,
//   targetAlpha?: number
// ): string {
//   const [r, g, b, a] = getAlphaColor(
//     new Color(targetColor).to("srgb").coords,
//     new Color(backgroundColor).to("srgb").coords,
//     255,
//     255,
//     targetAlpha
//   )

//   return formatHex(new Color("srgb", [r, g, b], a).toString({ format: "hex" }))
// }

// function getAlphaColorP3(
//   targetColor: string,
//   backgroundColor: string,
//   targetAlpha?: number
// ): string {
//   const [r, g, b, a] = getAlphaColor(
//     new Color(targetColor).to("p3").coords,
//     new Color(backgroundColor).to("p3").coords,
//     255,
//     1000,
//     targetAlpha
//   )

//   return new Color("p3", [r, g, b], a)
//     .toString({ precision: 4 })
//     .replace("color(p3 ", "color(display-p3 ")
// }

// function getAlphaColor(
//   targetRgb: number[],
//   backgroundRgb: number[],
//   rgbPrecision: number,
//   alphaPrecision: number,
//   targetAlpha?: number
// ): [number, number, number, number] {
//   const [tr, tg, tb] = targetRgb.map((c) => Math.round(c * rgbPrecision))
//   const [br, bg, bb] = backgroundRgb.map((c) => Math.round(c * rgbPrecision))

//   if (!tr || !tg || !tb || !br || !bg || !bb) {
//     throw Error("Color is undefined")
//   }

//   let desiredRgb = 0
//   if (tr > br || tg > bg || tb > bb) {
//     desiredRgb = rgbPrecision
//   }

//   const alphaR = (tr - br) / (desiredRgb - br)
//   const alphaG = (tg - bg) / (desiredRgb - bg)
//   const alphaB = (tb - bb) / (desiredRgb - bb)

//   const isPureGray = [alphaR, alphaG, alphaB].every((alpha) => alpha === alphaR)

//   if (!targetAlpha && isPureGray) {
//     const V = desiredRgb / rgbPrecision
//     return [V, V, V, alphaR]
//   }

//   const clampRgb = (n: number) =>
//     Number.isNaN(n) ? 0 : Math.min(rgbPrecision, Math.max(0, n))
//   const clampA = (n: number) =>
//     Number.isNaN(n) ? 0 : Math.min(alphaPrecision, Math.max(0, n))
//   const maxAlpha = targetAlpha ?? Math.max(alphaR, alphaG, alphaB)

//   const A = clampA(Math.ceil(maxAlpha * alphaPrecision)) / alphaPrecision
//   let R = clampRgb(((br * (1 - A) - tr) / A) * -1)
//   let G = clampRgb(((bg * (1 - A) - tg) / A) * -1)
//   let B = clampRgb(((bb * (1 - A) - tb) / A) * -1)

//   R = Math.ceil(R)
//   G = Math.ceil(G)
//   B = Math.ceil(B)

//   const blendedR = blendAlpha(R, A, br)
//   const blendedG = blendAlpha(G, A, bg)
//   const blendedB = blendAlpha(B, A, bb)

//   if (desiredRgb === 0) {
//     if (tr <= br && tr !== blendedR) {
//       R = tr > blendedR ? R + 1 : R - 1
//     }
//     if (tg <= bg && tg !== blendedG) {
//       G = tg > blendedG ? G + 1 : G - 1
//     }
//     if (tb <= bb && tb !== blendedB) {
//       B = tb > blendedB ? B + 1 : B - 1
//     }
//   }

//   if (desiredRgb === rgbPrecision) {
//     if (tr >= br && tr !== blendedR) {
//       R = tr > blendedR ? R + 1 : R - 1
//     }
//     if (tg >= bg && tg !== blendedG) {
//       G = tg > blendedG ? G + 1 : G - 1
//     }
//     if (tb >= bb && tb !== blendedB) {
//       B = tb > blendedB ? B + 1 : B - 1
//     }
//   }

//   R = R / rgbPrecision
//   G = G / rgbPrecision
//   B = B / rgbPrecision

//   return [R, G, B, A]
// }

// function blendAlpha(
//   foreground: number,
//   alpha: number,
//   background: number,
//   round = true
// ): number {
//   if (round) {
//     return Math.round(background * (1 - alpha)) + Math.round(foreground * alpha)
//   }
//   return background * (1 - alpha) + foreground * alpha
// }

export type { ArrayOf12 }
