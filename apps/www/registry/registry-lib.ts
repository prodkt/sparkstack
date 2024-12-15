import { Registry } from "@/registry/schema"

export const lib: Registry = [
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
