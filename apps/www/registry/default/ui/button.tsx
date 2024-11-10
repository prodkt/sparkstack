import * as React from "react"
import { useCallback } from "react"
// import Ripple from "@/registry/default/ui/ripple"
import dynamic from "next/dynamic"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import type { HTMLSparkStackProps } from "@/types/sparkstack"
// const useRipple = dynamic(() => import("@/registry/default/hooks/use-ripple").then(mod => mod.useRipple), { ssr: false })
import { cn } from "@/lib/utils"
import { useRipple } from "@/registry/default/hooks/use-ripple"
import RippleProps from "@/registry/default/ui/ripple"

const Ripple = dynamic(() => import("@/registry/default/ui/ripple"), {
  ssr: false,
})

const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center place-content-center place-items-center content-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive-hover",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-link hover:text-link-hover active:text-link-active selected:text-link-selected focus:text-link-focus disabled:text-link-disabled underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 [&_svg]:size-5 w-10 px-0 py-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends HTMLSparkStackProps<"button">,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  disableRipple?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      disableRipple = false,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const {
      onClick: onRippleClickHandler,
      onClear: onClearRipple,
      ripples,
    } = useRipple()

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onRippleClickHandler(e)
        onClick?.(e)
      },
      [onClick, onRippleClickHandler]
    )

    const getRippleProps = useCallback(
      () => ({ ripples, onClear: onClearRipple }),
      [ripples, onClearRipple]
    )

    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className="flex items-center justify-center p-0"
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        <span className={cn(buttonVariants({ variant, size, className }))}>
          {children}
          {!disableRipple && <Ripple {...getRippleProps()} />}
        </span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
