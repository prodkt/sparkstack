import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/registry/default/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/default/ui/drawer"
import { actions } from "./data"


import { MenuIcon, X } from "lucide-react"

export function NavMobile() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 769px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="lg:hidden" asChild>
          <Button variant="ghost" size="icon" className="sparkstack-border rounded-full">
            <MenuIcon className="size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <MobileNavActions />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="lg:hidden" asChild>
          <Button variant="ghost" size="icon" className="sparkstack-border rounded-full">
            <MenuIcon className="size-4" />
          </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[90dvh]">
        <DrawerHeader className="pt-2">
          <DrawerClose asChild className="absolute top-1 right-1">
            <Button variant="outline" size="icon"><X /></Button>
          </DrawerClose>
        </DrawerHeader>
        <MobileNavActions />
      </DrawerContent>
    </Drawer>
  )
}



export function MobileNavActions() {
  return (
    <div className="grid gap-2 p-4 md:p-0 grid-cols-2 overflow-x-hidden overflow-y-auto rounded-lg shadow">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={cn(
            actionIdx === 0 ? 'rounded-tl-lg' : 'rounded-tl-lg',
            actionIdx === 1 ? 'rounded-tr-lg' : 'rounded-tr-lg',
            actionIdx === actions.length - 2 ? 'rounded-bl-lg' : 'rounded-bl-lg',
            actionIdx === actions.length - 1 ? 'rounded-br-lg' : 'rounded-br-lg',
            'group basis-1/2 bg-gray-a2 relative p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary',
          )}
        >
          <div>
            <span
              className={cn(
                'sparkstack-border',
                'inline-flex rounded-xl p-2',
              )}
            >
              {action.icon}
            </span>
          </div>
          <div className="mt-4">
            <h3 className="font-extrabold text-foreground">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span aria-hidden="true" className="absolute inset-0" />
                {action.title}
              </a>
            </h3>

          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-6 text-border group-hover:text-primary"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="size-4">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  )
}
