"use client"

import { cn } from "@/lib/utils"
import { useSidebarToggle } from "@/registry/new-york/hooks/use-sidebar-toggle"
import { useStore } from "@/registry/new-york/hooks/use-store"
import { Footer } from "@/registry/new-york/prodkt/footers/footer-01"
import { Sidebar } from "@/registry/new-york/prodkt/layouts/web-app-01/aside-01/sidebar"

export default function AdminPanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const sidebar = useStore(useSidebarToggle, (state) => state)

  if (!sidebar) return null

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        {children}
      </main>
      <footer
        className={cn(
          "transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <Footer />
      </footer>
    </>
  )
}
