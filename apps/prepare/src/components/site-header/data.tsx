
import {
  HomeIcon,
  ProjectsIcon,
  ChangelogIcon,
  AboutIcon,
  CodeblocksIcon,
  ContactIcon,
  BlogIcon,
} from "@/registry/icons/prodkt-navigation"

export const components: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    icon: ( <HomeIcon /> ),
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
    icon: ( <AboutIcon /> ),
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    icon: ( <ProjectsIcon /> ),
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
    icon: ( <CodeblocksIcon /> ),
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    icon: ( <ContactIcon /> ),
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    icon: ( <ContactIcon /> ),
  },
]



export const actions = [
  {
    title: 'Home',
    href: '/',
    icon: ( <HomeIcon aria-hidden="true" className="size-6" /> ),
    iconForeground: 'text-foreground',
    iconBackground: 'bg-background',
    iconRing: '',
  },
  {
    title: 'About',
    href: '/about',
    icon: ( <AboutIcon aria-hidden="true" className="size-6" /> ),
    iconForeground: 'text-foreground',
    iconBackground: 'bg-background',
    iconRing: '',
  },
  {
    title: 'Projects',
    href: '/project',
    icon: (<ProjectsIcon aria-hidden="true" className="size-6" />),
    iconForeground: 'text-foreground',
    iconBackground: 'bg-background',
    iconRing: '',
  },
  {
    title: 'Codeblocks',
    href: '/codeblocks',
    icon: (<CodeblocksIcon aria-hidden="true" className="size-6" />),
    iconForeground: 'text-foreground',
    iconBackground: 'bg-background',
    iconRing: '',
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: (<BlogIcon aria-hidden="true" className="size-6" />),
    iconForeground: 'text-foreground',
    iconBackground: 'bg-background',
    iconRing: '',
  },
  {
    title: 'Changelog',
    href: '/changelog',
    icon: (<ChangelogIcon aria-hidden="true" className="size-6" />),
    iconForeground: 'text-foreground',
    iconBackground: 'bg-background',
    iconRing: '',
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: (<ContactIcon aria-hidden="true" className="size-6" />),
    iconForeground: 'text-foreground',
    iconBackground: 'bg-background',
    iconRing: '',
  },
]
