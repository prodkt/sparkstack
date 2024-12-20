export function fixImport(content: string) {
  const regex = /@\/(.+?)\/((?:.*?\/)?(?:components|layouts|ui|hooks|lib|effects|prodkt|icons|logomarks|logos))\/([\w-]+)/g

  const replacement = (
    match: string,
    path: string,
    type: string,
    component: string
  ) => {
    if (type.endsWith("components")) {
      return `@/components/${component}`
    } else if (type.endsWith("ui")) {
      return `@/components/ui/${component}`
    } else if (type.endsWith("prodkt")) {
      return `@/components/prodkt/${component}`
    } else if (type.endsWith("layouts")) {
      return `@/layout/${component}`
    } else if (type.endsWith("effects")) {
      return `@/components/effects/${component}`
    } else if (type.endsWith("logomark")) {
      return `@/components/logomarks/${component}`
    } else if (type.endsWith("logo")) {
      return `@/components/logos/${component}`
    } else if (type.endsWith("hooks")) {
      return `@/hooks/${component}`
    } else if (type.endsWith("lib")) {
      return `@/lib/${component}`
    }

    return match
  }

  return content.replace(regex, replacement)
}
