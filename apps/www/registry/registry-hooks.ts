import { Registry } from "@/registry/schema"

export const hooks: Registry = [
  {
    name: "use-store",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-store.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-sidebar-toggle",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-sidebar-toggle.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-mobile",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-mobile.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-toast",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-toast.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-ripple",
    type: "registry:hook",
    dependencies: ["dom-animation"],
    files: [
      {
        path: "hooks/use-ripple.ts",
        type: "registry:hook",
      },
      {
        path: "lib/dom-animation.ts",
        type: "registry:lib",
      },
    ],
  },
]
