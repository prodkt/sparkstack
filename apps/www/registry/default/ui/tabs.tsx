"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tabListVariants = cva("", {
  variants: {
    variant: {
      default:
        "items-center justify-center rounded-xl bg-gradient-to-b from-gray-1 to-gray-a2 py-[3px] px-[3px] text-muted-foreground shadow-[inset_0_0_1px_1px_var(--gray-a2),inset_0_0_6px_1px_var(--gray-a1),inset_0_-6px_6px_-7px_var(--gray-a2),inset_0_-1px_1px_0px_var(--gray-a2),inset_0_6px_9px_-2px_var(--gray-1)]",
      chrome:
        "relative h-9 gap-0.5 overflow-hidden rounded-lg bg-gray-a1 p-0.5 text-xs uppercase tracking-widest text-muted-foreground opacity-50 shadow-[inset_0px_-3px_3px_0px_var(--gray-a2),0_0_1px_1px_var(--gray-a5),inset_0_0_0_1px_var(--gray-1)] transition-none after:absolute after:inset-0 after:z-[1] after:mx-auto after:size-8 after:translate-y-1/2 after:rounded-full after:bg-gray-1 after:blur-lg",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const tabTriggerVariants = cva("", {
  variants: {
    variant: {
      default:
        "inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gray-3 data-[state=active]:text-foreground data-[state=active]:shadow-[inset_0_0_1px_1px_var(--gray-a2)]",
      chrome:
        "relative h-8 overflow-hidden rounded-md px-4 py-1 text-xs uppercase tracking-widest text-muted-foreground opacity-100 transition-none after:absolute after:inset-0 after:z-[1] after:mx-auto after:size-8 after:translate-y-1/2 after:rounded-full after:bg-gray-2 after:blur-lg data-[state=active]:bg-gray-a3 data-[state=active]:text-foreground data-[state=active]:opacity-100 data-[state=active]:shadow-[inset_0_1px_2px_2px_var(--gray-a4),0_1px_5px_1px_var(--gray-1),inset_0_1px_1px_0px_var(--gray-a6),inset_0_0_0px_1px_var(--gray-a4)] data-[state=active]:after:bg-primary-a1 [&_span]:z-[2] [&_span]:bg-gradient-to-br [&_span]:from-gray-a12 [&_span]:via-gray-a11 [&_span]:to-gray-a12 [&_span]:bg-clip-text [&_span]:text-transparent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    variant?: VariantProps<typeof tabListVariants>["variant"]
  }
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabListVariants({ variant, className }))}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    variant?: VariantProps<typeof tabTriggerVariants>["variant"]
  }
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabTriggerVariants({ variant, className }))}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
