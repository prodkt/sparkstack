import { SheetMenu } from "@/registry/new-york/prodkt/layouts/web-app-01/aside-01/sheet-menu"
import { UserNav } from "@/registry/new-york/prodkt/layouts/web-app-01/aside-01/user-nav"

interface NavbarProps {
  title: string
}

export function Navbar({ title }: Readonly<NavbarProps>) {
  return (
    <header className="sticky top-0 z-10 w-full bg-[var(--gray-1)] shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="flex items-center mx-4 sm:mx-8 h-14">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className="font-bold">{title}</h1>
        </div>
        <div className="flex items-center justify-end flex-1 space-x-2">
          <UserNav />
        </div>
      </div>
    </header>
  )
}
