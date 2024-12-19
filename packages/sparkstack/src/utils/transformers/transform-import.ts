import { Config } from "@/src/utils/get-config"
import { Transformer } from "@/src/utils/transformers"

export const transformImport: Transformer = async ({ sourceFile, config }) => {
  const importDeclarations = sourceFile.getImportDeclarations()

  for (const importDeclaration of importDeclarations) {
    const moduleSpecifier = updateImportAliases(
      importDeclaration.getModuleSpecifierValue(),
      config
    )

    importDeclaration.setModuleSpecifier(moduleSpecifier)

    // Replace `import { cn } from "@/lib/utils"`
    if (moduleSpecifier == "@/lib/utils") {
      const namedImports = importDeclaration.getNamedImports()
      const cnImport = namedImports.find((i) => i.getName() === "cn")
      if (cnImport) {
        importDeclaration.setModuleSpecifier(
          moduleSpecifier.replace(/^@\/lib\/utils/, config.aliases.utils)
        )
      }
    }
  }

  return sourceFile
}

function updateImportAliases(moduleSpecifier: string, config: Config) {
  // Not a local import.
  if (!moduleSpecifier.startsWith("@/")) {
    return moduleSpecifier
  }

  // Not a registry import.
  if (!moduleSpecifier.startsWith("@/registry/")) {
    // We fix the alias and return.
    const alias = config.aliases.components.split("/")[0]
    return moduleSpecifier.replace(/^@\//, `${alias}/`)
  }

  if (moduleSpecifier.match(/^@\/registry\/(.+)\/ui/)) {
    return moduleSpecifier.replace(
      /^@\/registry\/(.+)\/ui/,
      config.aliases.ui ?? `${config.aliases.components}/ui`
    )
  }

  if (moduleSpecifier.match(/^@\/registry\/(.+)\/prodkt/)) {
    return moduleSpecifier.replace(
      /^@\/registry\/(.+)\/prodkt/,
      config.aliases.prodkt ?? `${config.aliases.components}/prodkt`
    )
  }

  if (moduleSpecifier.match(/^@\/registry\/(.+)\/logomark/)) {
    return moduleSpecifier.replace(
      /^@\/registry\/(.+)\/logomark/,
      config.aliases.logomarks ?? `${config.aliases.components}/logomarks`
    )
  }

  if (moduleSpecifier.match(/^@\/registry\/(.+)\/logos/)) {
    return moduleSpecifier.replace(
      /^@\/registry\/(.+)\/logos/,
      config.aliases.logos ?? `${config.aliases.components}/logos`
    )
  }

  if (moduleSpecifier.match(/^@\/registry\/(.+)\/effects/)) {
    return moduleSpecifier.replace(
      /^@\/registry\/(.+)\/effects/,
      config.aliases.effects ?? `${config.aliases.components}/effects`
    )
  }

  if (
    config.aliases.components &&
    moduleSpecifier.match(/^@\/registry\/(.+)\/components/)
  ) {
    return moduleSpecifier.replace(
      /^@\/registry\/(.+)\/components/,
      config.aliases.components
    )
  }

  if (config.aliases.lib && moduleSpecifier.match(/^@\/registry\/(.+)\/lib/)) {
    return moduleSpecifier.replace(
      /^@\/registry\/(.+)\/lib/,
      config.aliases.lib
    )
  }

  if (
    config.aliases.hooks &&
    moduleSpecifier.match(/^@\/registry\/(.+)\/hooks/)
  ) {
    return moduleSpecifier.replace(
      /^@\/registry\/(.+)\/hooks/,
      config.aliases.hooks
    )
  }

  return moduleSpecifier.replace(
    /^@\/registry\/[^/]+/,
    config.aliases.components
  )
}
