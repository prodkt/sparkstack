import { MenuIcon } from "lucide-react"

import { Menu } from "@/registry/new-york/prodkt/layouts/web-app-01/aside-01/menu"
import { Logo } from "@/registry/new-york/prodkt/logo"
import { Button } from "@/registry/new-york/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/registry/new-york/ui/sheet"

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="default" size="icon">
          <MenuIcon size={18} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col h-full px-3 sm:w-72" side="left">
        <SheetHeader>
          <a href="/" className="px-6 py-2">
            <Logo className="w-32 min-h-6 min-w-6" />
          </a>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  )
}
