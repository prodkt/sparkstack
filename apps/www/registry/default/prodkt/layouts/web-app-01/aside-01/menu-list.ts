import {
  Code2,
  Construction,
  Cpu,
  FigmaIcon,
  FolderArchive,
  Gitlab,
  Route,
} from "lucide-react"

import { buttonVariantsConfig } from "@/registry/new-york/lib/button-variants"

// Extract variant type directly from the config
type ButtonVariant = keyof typeof buttonVariantsConfig.variants.variant

export type Submenu = {
  href: string
  label: string
  active?: boolean | undefined
  buttonVariant?: ButtonVariant
}

type Menu = {
  href: string
  label: string
  active?: boolean | undefined
  icon: any
  submenus: Submenu[]
  buttonVariant?: ButtonVariant
}

type Group = {
  groupLabel: string
  menus: Menu[]
  buttonVariant?: ButtonVariant
}

export function getMenuList(): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/flows",
          label: "Flows",
          icon: Route,
          submenus: [],
          buttonVariant: "outline",
        },
        // {
        // 	href: '',
        // 	label: 'Codeblocks',
        // 	icon: Code2,
        // 	buttonVariant: 'outlineCodeblocks',
        // 	submenus: [
        // 		{
        // 			href: '/codeblocks',
        // 			label: 'All Codeblocks',
        // 			buttonVariant: 'outlineCodeblocks',
        // 		},
        // 		{
        // 			href: '/codeblocks/new',
        // 			label: 'New Codeblock',
        // 			buttonVariant: 'outlineCodeblocks',
        // 		},
        // 	],
        // },
        {
          href: "/design",
          label: "Design Files",
          icon: FigmaIcon,
          submenus: [],
          buttonVariant: "outline",
        },
        {
          href: "/repos",
          label: "Repositories",
          icon: Gitlab,
          submenus: [],
          buttonVariant: "outline",
        },
        {
          href: "/projects/showcase",
          label: "Showcase",
          icon: FolderArchive,
          submenus: [],
          buttonVariant: "outline",
        },
        {
          href: "/codeblocks",
          label: "Codeblocks",
          icon: Code2,
          submenus: [],
          buttonVariant: "outline",
        },
        {
          href: "/projects",
          label: "Projects",
          icon: Construction,
          submenus: [],
          buttonVariant: "outline",
        },
        {
          href: "/technology",
          label: "Technology",
          icon: Cpu,
          submenus: [],
          buttonVariant: "outline",
        },
      ],
    },
    // ,
    // {
    //   groupLabel: "Settings",
    //   menus: [
    //     {
    //       href: "/users",
    //       label: "Users",
    //       icon: Users,
    //       submenus: []
    //     },
    //     {
    //       href: "/account",
    //       label: "Account",
    //       icon: Settings,
    //       submenus: []
    //     }
    //   ]
    // }
  ]
}
