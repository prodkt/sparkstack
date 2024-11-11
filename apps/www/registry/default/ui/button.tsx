"use client"

import * as React from "react"
import { useCallback } from "react"
import dynamic from "next/dynamic"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import type { HTMLSparkStackProps } from "@/types/sparkstack"
import { cn } from "@/lib/utils"
import * as RippleHook from "@/registry/default/hooks/use-ripple"

const Ripple = dynamic(
  () => import("@/registry/default/ui/ripple").then((mod) => mod.default),
  {
    ssr: false,
  }
)

const buttonVariants = cva(
  "relative inline-flex place-content-center place-items-center content-center items-center justify-center gap-2 overflow-hidden whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive-hover",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "hover:bg-secondary-hover bg-secondary text-secondary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "selected:text-link-selected focus:text-link-focus text-link underline-offset-4 hover:text-link-hover hover:underline active:text-link-active disabled:text-link-disabled",
      },
      size: {
        default: "h-9 rounded-md px-3 py-2",
        sm: "h-8 rounded-md px-3",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9  rounded-md p-0 [&_svg]:size-5",
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
      ripples,
      onClick: onRippleClickHandler,
      onClear,
    } = RippleHook.useRipple()

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onRippleClickHandler(e)
        onClick?.(e)
      },
      [onClick, onRippleClickHandler]
    )

    const getRippleProps = useCallback(
      () => ({ ripples, onClear }),
      [ripples, onClear]
    )

    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className="flex items-center justify-center p-0"
        ref={ref}
        onClick={handleClick}
      >
        <span
          {...props}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
          {!disableRipple && <Ripple {...getRippleProps()} />}
        </span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
