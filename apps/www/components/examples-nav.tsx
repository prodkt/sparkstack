"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/registry/default/ui/scroll-area"

const examples = [
  {
    name: "Examples",
    href: "/examples/cards",
    code: "https://github.com/prodkt/sparkstack/tree/main/apps/www/app/(app)/examples/mail",
  },
  {
    name: "Mail",
    href: "/examples/mail",
    code: "https://github.com/prodkt/sparkstack/tree/main/apps/www/app/(app)/examples/mail",
  },
  {
    name: "Dashboard",
    href: "/examples/dashboard",
    code: "https://github.com/prodkt/sparkstack/tree/main/apps/www/app/(app)/examples/dashboard",
  },
  {
    name: "Tasks",
    href: "/examples/tasks",
    code: "https://github.com/prodkt/sparkstack/tree/main/apps/www/app/(app)/examples/tasks",
  },
  {
    name: "Playground",
    href: "/examples/playground",
    code: "https://github.com/prodkt/sparkstack/tree/main/apps/www/app/(app)/examples/playground",
  },
  {
    name: "Forms",
    href: "/examples/forms",
    code: "https://github.com/prodkt/sparkstack/tree/main/apps/www/app/(app)/examples/forms",
  },
  {
    name: "Music",
    href: "/examples/music",
    code: "https://github.com/prodkt/sparkstack/tree/main/apps/www/app/(app)/examples/music",
  },
  {
    name: "Authentication",
    href: "/examples/authentication",
    code: "https://github.com/prodkt/sparkstack/tree/main/apps/www/app/(app)/examples/authentication",
  },
]

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  const pathname = usePathname()

  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("flex items-center", className)} {...props}>
          <ExampleLink
            example={{ name: "Examples", href: "/", code: "" }}
            isActive={pathname === "/"}
          />
          {examples.map((example) => (
            <ExampleLink
              key={example.href}
              example={example}
              isActive={pathname?.startsWith(example.href) ?? false}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}

function ExampleLink({
  example,
  isActive,
}: {
  example: (typeof examples)[number]
  isActive: boolean
}) {
  return (
    <Link
      href={example.href}
      key={example.href}
      className="text-muted-foreground hover:text-primary data-[active=true]:bg-muted data-[active=true]:text-primary flex h-7 items-center justify-center rounded-full px-4 text-center text-sm font-medium transition-colors"
      data-active={isActive}
    >
      {example.name}
    </Link>
  )
}
