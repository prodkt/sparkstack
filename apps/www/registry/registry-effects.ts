import { Registry } from "@/registry/schema"

export const effects: Registry = [
  {
    name: "marquee",
    type: "registry:effect",
    files: [
      {
        path: "effects/marquee.tsx",
        type: "registry:effect",
      },
    ],
  },
  {
    name: "tracer",
    type: "registry:effect",
    files: [
      {
        path: "effects/tracer.tsx",
        type: "registry:effect",
      },
    ],
  },
  {
    name: "shine",
    type: "registry:effect",
    files: [
      {
        path: "effects/shine.tsx",
        type: "registry:effect",
      },
    ],
  },
]
