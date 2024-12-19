import { ChevronLeft, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"

interface SidebarToggleProps {
  isOpen: boolean | undefined
  setIsOpen?: () => void
}

export function SidebarToggle({
  isOpen,
  setIsOpen,
}: Readonly<SidebarToggleProps>) {
  return (
    <div className="absolute z-20 visible">
      <p
        className={cn(
          "absolute top-[80px] transition-all ease-in-out duration-500 text-[0.55rem] font-medium text-[var(--gray-9)] pb-4 pt-2 px-0 max-w-[248px] uppercase tracking-[0.15rem] truncate",
          isOpen === false
            ? "right-[76px] opacity-0"
            : "-right-[142px] delay-150 opacity-100"
        )}
      >
        Explore my work
      </p>
      <Button
        onClick={() => setIsOpen?.()}
        className={cn(
          "h-[30px] w-[30px] max-h-[30px] top-[80px] rounded-[12px] after:rounded-[12px] transition-all ease-in-out duration-700",
          isOpen === false
            ? " -right-[13px] "
            : "-right-[208px] ring-[var(--red-a5)] bg-[var(--red-a6)] hover:after:bg-[var(--red-a5)] hover:stroke-[var(--red-12)]"
        )}
        variant="toolbar"
        size="icon"
      >
        <ChevronLeft
          className={cn(
            "h-5 w-5 transition-transform ease-in-out duration-700 text-[currentColor]",
            isOpen === false
              ? "absolute rotate-180"
              : "fill-[var(--red-10)] stroke-[var(--red-10)] absolute rotate-0 opacity-0"
          )}
        />{" "}
        <X
          className={cn(
            "h-5 w-5 transition-transform ease-in-out duration-700 text-[currentColor]",
            isOpen === false
              ? "absolute opacity-0 rotate-180"
              : "fill-[var(--red-10)] stroke-[var(--red-10)] absolute opacity-100 rotate-0"
          )}
        />
      </Button>
    </div>
  )
}
