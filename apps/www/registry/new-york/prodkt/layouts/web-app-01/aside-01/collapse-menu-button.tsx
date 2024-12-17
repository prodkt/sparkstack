import { useState } from "react"
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu"
import { ChevronDown, Dot, LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariantsConfig } from "@/registry/new-york/lib/button-variants"
import { Button } from "@/registry/new-york/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york/ui/tooltip"

// Extract variant type directly from the config
type ButtonVariant = keyof typeof buttonVariantsConfig.variants.variant

export type Submenu = {
  href: string
  label: string
  active?: boolean
  buttonVariant?: ButtonVariant
}

interface CollapseMenuButtonProps {
  icon: LucideIcon
  label: string
  active: boolean
  submenus: Submenu[]
  isOpen: boolean | undefined
  buttonVariant?: ButtonVariant
}

export function CollapseMenuButton({
  icon: Icon,
  label,
  active,
  submenus,
  buttonVariant,
  isOpen,
}: CollapseMenuButtonProps) {
  const isSubmenuActive = submenus.some((submenu) => submenu.active)
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive)

  return isOpen ? (
    <Collapsible
      open={isCollapsed}
      onOpenChange={setIsCollapsed}
      className="w-full"
    >
      <CollapsibleTrigger
        className="[&[data-state=open]>div>div>svg]:rotate-180 mb-1"
        asChild
      >
        <Button
          variant={isSubmenuActive ? buttonVariant : (buttonVariant ?? "ghost")}
          className="justify-start w-full h-10 px-[11px]"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <span className="mr-4">
                <Icon size={18} />
              </span>
              <p
                className={cn(
                  "max-w-[150px] truncate text-[var(--gray-12)]",
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-96 opacity-0"
                )}
              >
                {label}
              </p>
            </div>
            <div
              className={cn(
                "whitespace-nowrap",
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-96 opacity-0"
              )}
            >
              <ChevronDown
                size={18}
                className="transition-transform duration-200"
              />
            </div>
          </div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {submenus.map(({ href, label, active, buttonVariant }) => (
          <Button
            key={label}
            variant={buttonVariant ?? "ghost"}
            className="justify-start w-full h-8 mb-1"
            asChild
          >
            <a href={href}>
              <span className="ml-0 mr-4">
                <Dot size={18} />
              </span>
              <p
                className={cn(
                  "max-w-[170px] truncate text-[var(--gray-11)]",
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-96 opacity-0"
                )}
              >
                {label}
              </p>
            </a>
          </Button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  ) : (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant={
                  active
                    ? (buttonVariant ?? "ghost")
                    : (buttonVariant ?? "ghost")
                }
                className="justify-start w-full h-8 mb-1"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <span className={cn(isOpen === false ? "" : "mr-0")}>
                      <Icon size={18} />
                    </span>
                    <p
                      className={cn(
                        "max-w-[200px] truncate text-[var(--gray-10)]",
                        isOpen === false ? "opacity-0" : "opacity-100"
                      )}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="right" align="start" alignOffset={2}>
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent
        side="right"
        sideOffset={4}
        align="start"
        className="p-0 -translate-y-5 bg-transparent border-0 shadow-none backdrop-blur-none rounded-s-none"
      >
        <div className="relative left-0 w-4 h-4">
          <div className="absolute left-0 top-px w-4 h-4 border-b border-l border-l-[var(--gray-3)] border-t-[var(--ghost-a1)] rounded-bl-full z-[1]"></div>
          <div className="absolute left-0 w-4 h-4  bg-[#0B0B0D] gradientMask-bottomLeft z-[0]"></div>
        </div>
        <div className="p-0 rounded-e-2xl  bg-gradient-to-r from-[#0B0B0D] to-[var(--gray-1)] shadow-lg">
          <div className="ms-4 border py-1 px-1 border-l-0 rounded-e-xl min-w-[190px] shadow-lg">
            <div className="min-w-[190px] -translate-x-4 -me-4">
              <DropdownMenuLabel className="max-w-[190px] truncate bg-transparent text-[var(--gray-11)] font-normal">
                {label}
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="h-px border-0 border-transparent backdrop-blur-none ms-2 bg-gradient-to-r from-transparent via-transparent to-[var(--gray-9)] gradientMask-5" />
              {submenus.map(({ href, label }, index) => (
                <DropdownMenuItem key={index} asChild>
                  <a
                    className="cursor-pointer !font-light text-[var(--gray-10)]"
                    href={href}
                  >
                    <p className="max-w-[180px] truncate !font-light">
                      {label}
                    </p>
                  </a>
                </DropdownMenuItem>
              ))}
              <DropdownMenuArrow className="fill-border" />
            </div>
          </div>
        </div>
        <div className="relative left-0 w-4 h-4">
          <div className="absolute left-0 -top-px w-4 h-4 border-t border-l border-l-[var(--gray-3)] rounded-tl-full z-[1]"></div>
          <div className="absolute left-0 w-4 h-4  bg-[#0B0B0D] gradientMask-bottomLeft z-[0] rotate-90"></div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
