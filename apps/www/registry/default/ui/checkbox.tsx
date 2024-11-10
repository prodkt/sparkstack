"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer relative h-5 w-5 shrink-0 rounded-sm p-1 transition-all duration-500 overflow-hidden" +
        " flex items-center justify-center" +
        " bg-gray-5" +
        " ring-offset-gray-2 outline-gray-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" +
        " disabled:cursor-not-allowed disabled:opacity-50" +
        " data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" +
        // SVG specific styles
        " [&>svg]:scale-50 [&>svg]:opacity-0 [&>svg]:transition-all" +
        " data-[state=checked]:before:bg-primary" +
        " data-[state=checked]:[&>svg]:scale-100 data-[state=checked]:[&>svg]:delay-300 [&>svg]:duration-300 data-[state=checked]:[&>svg]:opacity-100" +
        // After pseudo-element styles
        " after:absolute after:inset-0 after:m-auto after:size-0.5 after:rounded-sm" +
        " after:bg-primary after:opacity-0 after:transition-all after:duration-100" +
        " data-[state=checked]:after:size-full data-[state=checked]:after:opacity-100",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-3 w-3 z-[1]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
