"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
// import { Icons } from "@/registry/default/icons"
import Logomark from "@/assets/prodkt/logomark"
import Logotype from "@/assets/prodkt/logotype"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/registry/default/ui/navigation-menu"
import {
  HomeIcon,
  ProjectsIcon,
  ChangelogIcon,
  AboutIcon,
  CodeblocksIcon,
  ContactIcon,
  BlogIcon,
} from "./icons"

const components: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
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

export function SiteNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuLink href="/" className={cn(navigationMenuTriggerStyle(), "gap-x-2 font-siteheader")}>
              <HomeIcon />Home
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink href="/about" className={cn(navigationMenuTriggerStyle(), "gap-x-2 font-siteheader")}>
              <AboutIcon />About
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="gap-x-2 font-siteheader"><ProjectsIcon />Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 bg-gradient-to-tl from-gray-a2 to-gray-a1 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-gray-a3 to-gray-a1 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logomark className="h-6 w-6" />
                    <div className="mb-8 mt-4">
                      <Logotype className="h-3 w-auto" />
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>

              <Logomark className="pointer-events-none absolute bottom-1 right-2 z-0 h-64 w-auto cursor-not-allowed select-none opacity-[0.02] will-change-contents" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-siteheader gap-x-2"><CodeblocksIcon />Codeblocks</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink href="/changelog" className={cn(navigationMenuTriggerStyle(), "gap-x-2 font-siteheader")}>
              <BlogIcon />Blog
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink href="/changelog" className={cn(navigationMenuTriggerStyle(), "gap-x-2 font-siteheader")}>
              <ChangelogIcon />Changelog
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink href="/contact" className={cn(navigationMenuTriggerStyle(), "gap-x-2 font-siteheader")}>
              <ContactIcon />Contact
            </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
