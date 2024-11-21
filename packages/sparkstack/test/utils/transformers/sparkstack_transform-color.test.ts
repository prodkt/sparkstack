import { generateRadixColors, generateCssVariables } from "@/src/utils/transformers/color-utils"
import * as RadixColors from "@radix-ui/colors"
import Color from "colorjs.io"
import { promises as fs } from "node:fs"
import path from "node:path"
import { expect, test, describe } from "vitest"

describe("Color Transformation System", () => {
  test("shows Radix color mappings and transformations", async () => {
    const outputDir = path.join(__dirname, "color-transform-output")
    await fs.mkdir(outputDir, { recursive: true })

    // Test mapping to closest Radix scales
    const testColors = [
      {
        name: "blue-mapping",
        input: {
          appearance: "light" as const,
          accent: "#0090ff", // Should map close to Radix blue
          gray: "#64748b",
          background: "#ffffff"
        },
        expectedRadixScale: "blue"
      },
      {
        name: "red-mapping",
        input: {
          appearance: "light" as const,
          accent: "#ff0000", // Should map close to Radix red
          gray: "#64748b",
          background: "#ffffff"
        },
        expectedRadixScale: "red"
      },
      {
        name: "violet-mapping",
        input: {
          appearance: "light" as const,
          accent: "#8b5cf6", // Should map close to Radix violet
          gray: "#64748b",
          background: "#ffffff"
        },
        expectedRadixScale: "violet"
      }
    ]

    for (const { name, input, expectedRadixScale } of testColors) {
      // Get our generated colors
      const colors = generateRadixColors(input)

      // Get the actual Radix scale for comparison
      const radixScale = Object.values(RadixColors[expectedRadixScale + "P3"]) as string[]
      const radixColors = radixScale.map(color => new Color(color).to("oklch"))

      // Create analysis
      const analysis = {
        testCase: {
          name,
          input,
          expectedRadixScale
        },
        comparison: {
          // Original Radix scale
          radixScale: {
            original: radixScale,
            oklch: radixColors.map(c => c.toString()),
          },
          // Our generated scale
          generatedScale: {
            hex: colors.accentScale,
            oklch: colors.accentScaleWideGamut,
          },
          // Show how close we got to the Radix scale
          deltaE: colors.accentScale.map((color, i) => ({
            step: i + 1,
            difference: new Color(color).deltaEOK(radixColors[i])
          }))
        },
        fullTransformation: {
          accent: {
            scale: colors.accentScale,
            alphaScale: colors.accentScaleAlpha,
            wideGamut: colors.accentScaleWideGamut,
          },
          gray: {
            scale: colors.grayScale,
            alphaScale: colors.grayScaleAlpha,
            wideGamut: colors.grayScaleWideGamut,
          }
        }
      }

      // Write detailed analysis
      const analysisPath = path.join(outputDir, `${name}-radix-analysis.json`)
      await fs.writeFile(
        analysisPath,
        JSON.stringify(analysis, null, 2),
        'utf-8'
      )

      // Write visual comparison CSS
      const cssPath = path.join(outputDir, `${name}-radix-comparison.css`)
      const cssShowcase = `
/* ${name} - Comparison with Radix ${expectedRadixScale} scale */
/* Input color: ${input.accent} */

/* Original Radix Scale */
.radix-scale {
  ${radixScale.map((color, i) =>
    `--radix-${expectedRadixScale}-${i + 1}: ${color};`
  ).join('\n  ')}
}

/* Our Generated Scale */
.generated-scale {
  ${colors.accentScale.map((color, i) =>
    `--generated-${i + 1}: ${color};`
  ).join('\n  ')}
}

/* Side by Side Comparison */
.comparison {
  ${radixScale.map((radixColor, i) => `
  /* Step ${i + 1} */
  --radix-${i + 1}: ${radixColor};
  --generated-${i + 1}: ${colors.accentScale[i]};
  --delta-e-${i + 1}: ${new Color(colors.accentScale[i]).deltaEOK(radixColors[i])};`
  ).join('\n')}
}

/* Alpha Scale Comparison */
.alpha-comparison {
  ${colors.accentScaleAlpha.map((color, i) =>
    `--alpha-${i + 1}: ${color};`
  ).join('\n  ')}
}

/* Wide Gamut Comparison */
@supports (color: color(display-p3 1 1 1)) {
  .wide-gamut-comparison {
    ${colors.accentScaleWideGamut.map((color, i) =>
      `--p3-${i + 1}: ${color};`
    ).join('\n  ')}
  }
}
`
      await fs.writeFile(cssPath, cssShowcase, 'utf-8')

      // Basic assertions
      expect(colors.accentScale).toHaveLength(12)
      expect(radixScale).toHaveLength(12)

      // Log output locations
      console.log(`
Test case: ${name}
Analysis file: ${analysisPath}
CSS Comparison: ${cssPath}
      `)

      // Test that our generated colors are reasonably close to Radix colors
      colors.accentScale.forEach((color, i) => {
        const deltaE = new Color(color).deltaEOK(radixColors[i])
        // DeltaE should be relatively small if we're mapping correctly
        expect(deltaE).toBeLessThan(50) // Adjust threshold as needed
      })
    }
  })
})
