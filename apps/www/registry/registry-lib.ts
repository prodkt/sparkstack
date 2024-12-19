import { Registry } from "@/registry/schema"

export const lib: Registry = [
  {
    name: "buttonUtils",
    type: "registry:lib",
    dependencies: ["class-variance-authority"],
    files: [
      {
        path: "lib/buttonUtils.ts",
        type: "registry:lib",
      },
    ],
  },
  {
    name: "button-variants",
    type: "registry:lib",
    registryDependencies: ["utils"],
    files: [
      {
        path: "lib/button-variants.ts",
        type: "registry:lib",
      },
    ],
  },
  {
    name: "utils",
    type: "registry:lib",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "lib/utils.ts",
        type: "registry:lib",
      },
    ],
  },
  {
    name: "dom-animation",
    type: "registry:lib",
    dependencies: ["framer-motion"],
    files: [
      {
        path: "lib/dom-animation.ts",
        type: "registry:lib",
      },
    ],
  },
]
