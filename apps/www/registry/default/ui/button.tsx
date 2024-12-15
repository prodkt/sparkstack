"use client"

import * as React from "react"
import { useCallback } from "react"
import dynamic from "next/dynamic"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"
import { useRipple } from "@/registry/default/hooks/use-ripple"
import {
  buttonVariants,
  type ButtonProps,
} from "@/registry/default/lib/buttonUtils"

export * from "@/registry/default/lib/buttonUtils"

const Ripple = dynamic(
  () => import("@/registry/default/ui/ripple").then((mod) => mod.default),
  {
    ssr: false,
  }
)

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
    const { ripples, onClick: onRippleClickHandler, onClear } = useRipple()

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
