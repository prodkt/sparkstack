import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { useSidebarToggle } from "@/registry/new-york/hooks/use-sidebar-toggle"
import { useStore } from "@/registry/new-york/hooks/use-store"
import { Menu } from "@/registry/new-york/prodkt/layouts/web-app-01/aside-01/menu"
import { SidebarToggle } from "@/registry/new-york/prodkt/layouts/web-app-01/aside-01/sidebar-toggle"
import { Logomark } from "@/registry/new-york/prodkt/logo/logomark"
import { Logotype } from "@/registry/new-york/prodkt/logo/logotype"

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state)

  if (!sidebar) return null

  return (
    <motion.aside
      layout
      transition={{
        opacity: { ease: "linear" },
        type: "spring",
        stiffness: 100,
        layout: { duration: 0.1 },
      }}
      className={cn(
        "fixed top-0 z-[60] prodkt-aside rounded-tl-2xl rounded-bl-2xl p-0 translate-x-0 transition-[width]",
        sidebar?.isOpen === false ? "w-[56px]" : "w-56"
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <motion.div
        layout
        transition={{
          opacity: { ease: "linear" },
          type: "spring",
          stiffness: 100,
          layout: { duration: 0.1 },
        }}
        className="relative bottom-0 flex flex-col h-full px-0 mb-0 overflow-y-auto rounded-tl-2xl rounded-bl-2xl bg-background"
      >
        <a
          href="/"
          className={cn(
            "transition-transform text-[var(--ghost-a12)] hover:text-[var(--ghost-a11)] flex items-center justify-start gap-2.5 px-5 py-4",
            sidebar?.isOpen === false ? "translate-x-[0]" : "translate-x-0"
          )}
        >
          <Logomark className="w-9 h-9 min-h-9 min-w-9" />
          <h1
            className={cn(
              "whitespace-nowrap transition-[transform,opacity,display,width]",
              sidebar?.isOpen === false
                ? "-translate-x-96 opacity-0"
                : "translate-x-0 opacity-100"
            )}
          >
            <Logotype
              className={cn(
                "w-auto h-4 whitespace-nowrap ease-in-out duration-700 transition-[transform,opacity,display,width]",
                sidebar?.isOpen === false
                  ? "-translate-x-96 opacity-0 w-0"
                  : "translate-x-0 opacity-100"
              )}
            />
          </h1>
        </a>
        <Menu isOpen={sidebar?.isOpen} />
      </motion.div>
    </motion.aside>
  )
}
