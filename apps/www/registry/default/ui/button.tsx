"use client"

import * as React from "react"
import { Fragment, useCallback } from "react"
import dynamic from "next/dynamic"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"
import { useRipple } from "@/registry/default/hooks/use-ripple"
import {
  buttonVariants,
  buttonVariantsConfig,
  nexsaleButtonVariants,
  nexsaleButtonVariantsConfig,
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
      bordered,
      nexsale = false,
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

    const combinedClassName = cn(
      "flex items-center justify-center p-0",
      nexsale
        ? nexsaleButtonVariants({
            variant:
              variant as keyof typeof nexsaleButtonVariantsConfig.variants.variant,
            size: size as keyof typeof nexsaleButtonVariantsConfig.variants.size,
            bordered,
            className,
          })
        : buttonVariants({
            variant:
              variant as keyof typeof buttonVariantsConfig.variants.variant,
            size: size as keyof typeof buttonVariantsConfig.variants.size,
            className,
          })
    )

    const content = (
      <Fragment>
        {children}
        {!disableRipple && <Ripple {...getRippleProps()} />}
      </Fragment>
    )

    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        {...props}
        className={combinedClassName}
        ref={ref}
        onClick={handleClick}
      >
        {asChild ? children : content}
      </Comp>
    )
  }
) as React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
> & {
  displayName?: string
}

Button.displayName = "Button"

export { Button, buttonVariants, nexsaleButtonVariants }
