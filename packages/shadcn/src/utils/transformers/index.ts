import { promises as fs } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import type { Config } from "@/src/utils/get-config"
import {
  registryBaseColorSchema,
  type BaseColor,
} from "@/src/utils/registry/schema"
import { Project, ScriptKind, type SourceFile } from "ts-morph"
import { z } from "zod"

// import { transformColors } from "./sparkstack_transform-color"
import { transformCssVars } from "./transform-css-vars"
import { transformIcons } from "./transform-icons"
import { transformImport } from "./transform-import"
import { transformJsx } from "./transform-jsx"
import { transformRsc } from "./transform-rsc"
import { transformTwPrefixes } from "./transform-tw-prefix"

export type TransformOpts = {
  filename: string
  raw: string
  config: Config
  baseColor?: BaseColor
  transformJsx?: boolean
}

export type Transformer<Output = SourceFile> = (
  opts: TransformOpts & {
    sourceFile: SourceFile
  }
) => Promise<Output>

const project = new Project({
  compilerOptions: {},
})

async function createTempSourceFile(filename: string) {
  const dir = await fs.mkdtemp(path.join(tmpdir(), "prodkt-"))
  return path.join(dir, filename)
}

export async function transform(
  opts: TransformOpts,
  transformers: Transformer[] = [
    transformImport,
    transformRsc,
    transformColors,
    transformCssVars,
    transformTwPrefixes,
    transformIcons,
  ]
) {
  const tempFile = await createTempSourceFile(opts.filename)
  const sourceFile = project.createSourceFile(tempFile, opts.raw, {
    scriptKind: ScriptKind.TSX,
  })

  for (const transformer of transformers) {
    await transformer({ sourceFile, ...opts })
  }

  if (opts.transformJsx) {
    return await transformJsx({
      sourceFile,
      ...opts,
    })
  }

  return sourceFile.getText()
}
