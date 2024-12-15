import { blocks } from "@/registry/registry-blocks"
import { charts } from "@/registry/registry-charts"
import { examples } from "@/registry/registry-examples"
import { hooks } from "@/registry/registry-hooks"
<<<<<<< HEAD
import { icons as iconsRegistry } from "@/registry/registry-icons"
=======
import { internal } from "@/registry/registry-internal"
>>>>>>> 2f869a2590e90f79890e6fa00cbfcbf8a241b034
import { lib } from "@/registry/registry-lib"
import { prodkt } from "@/registry/registry-prodkt"
import { themes } from "@/registry/registry-themes"
import { ui } from "@/registry/registry-ui"
<<<<<<< HEAD
import { v0 } from "@/registry/registry-v0"
import type { Registry } from "@/registry/schema"
=======
import { Registry } from "@/registry/schema"
>>>>>>> 2f869a2590e90f79890e6fa00cbfcbf8a241b034

export const registry: Registry = [
  ...ui,
  ...blocks,
  ...charts,
  ...lib,
  ...hooks,
  ...themes,
<<<<<<< HEAD
  ...v0,
  ...prodkt,
=======

  // Internal use only.
  ...internal,
  ...examples,
>>>>>>> 2f869a2590e90f79890e6fa00cbfcbf8a241b034
]

export const icons = Object.values(iconsRegistry).flat()
