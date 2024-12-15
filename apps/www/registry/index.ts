import { blocks } from "@/registry/registry-blocks"
import { charts } from "@/registry/registry-charts"
import { examples } from "@/registry/registry-examples"
import { hooks } from "@/registry/registry-hooks"
import { icons as iconsRegistry } from "@/registry/registry-icons"
import { internal } from "@/registry/registry-internal"
import { lib } from "@/registry/registry-lib"
import { prodkt } from "@/registry/registry-prodkt"
import { themes } from "@/registry/registry-themes"
import { ui } from "@/registry/registry-ui"
// import type { Registry } from "@/registry/schema"
import { Registry } from "@/registry/schema"

export const registry: Registry = [
  ...ui,
  ...blocks,
  ...charts,
  ...lib,
  ...hooks,
  ...themes,
  ...prodkt,

  // Internal use only.
  ...internal,
  ...examples,
]

export const icons = Object.values(iconsRegistry).flat()
