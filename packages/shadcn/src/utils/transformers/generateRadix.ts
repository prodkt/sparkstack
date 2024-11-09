import fs from "fs";
import path from "path";
import allColorScales from "../../color";

const outputDir = "./dist/color";

const supportsP3AtRule = "@supports (color: color(display-p3 1 1 1))";
const matchesP3MediaRule = "@media (color-gamut: p3)";


for (const key of Object.keys(allColorScales).filter((key) => !key.includes("P3"))){
  let selector = ":root, .light, .light-theme";

  if (key === "blackA" || key === "whiteA") {
    selector = ":root";
  }

  if (key.includes("Dark")) {
    selector = ".dark, .dark-theme";
  }

    const srgbValues = Object.entries(allColorScales).find(([name]) => name === key)?.[1];

    if (!srgbValues) {
      throw new Error(`Could not find color scale for ${key}`);
    }

    const srgbCssProperties = Object.entries(srgbValues as Record<string, unknown>)
      .map(([name, value]) => [toCssCasing(name), value])
      .map(([name, value]) => `  --${name}: ${value};`)
      .join("\n");

    const srgbCssRule = `${selector} {\n${srgbCssProperties}\n}`;

    const p3Values = Object.entries(allColorScales).find(
      ([name]) => name === `${key}P3` || name === key.replace(/.$/, "P3A")
    )?.[1];

    if (!p3Values) {
      throw new Error(`Could not find color scale for ${key}P3`);
    }

    const p3CssProperties = Object.entries(p3Values)
      .map(([name, value]) => [toCssCasing(name), value])
      .map(([name, value]) => `      --${name}: ${value};`)
      .join("\n");

    let p3CssRule = `    ${selector} {\n${p3CssProperties}\n    }`;
    p3CssRule = `  ${matchesP3MediaRule} {\n${p3CssRule}\n  }`;
    p3CssRule = `${supportsP3AtRule} {\n${p3CssRule}\n}`;

    fs.writeFileSync(
      path.join(outputDir, `${toFileName(key)}.css`),
      `${srgbCssRule}\n\n${p3CssRule}`
  );
}

function toCssCasing(str: string) {
  return str
    .replace(/([a-z])(\d)/, "$1-$2")
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase();
}

function toFileName(str: string) {
  return toCssCasing(str).replace(/-a$/, "-alpha");
}
