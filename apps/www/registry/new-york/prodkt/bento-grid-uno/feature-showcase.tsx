import React, { forwardRef } from "react"

import { cn } from "@/lib/utils"

interface FeatureShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: React.ReactNode
  icon?: React.ReactNode
}

export const FeatureShowcase = forwardRef<HTMLDivElement, FeatureShowcaseProps>(
  function FeatureShowcaseComponent(
    { className, heading, icon, children, ...props },
    ref
  ) {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col justify-between space-y-8", className)}
        {...props}
      >
        {heading && icon && (
          <div className="flex w-full max-w-5xl flex-col space-y-4">
            {icon && <div className="flex">{icon}</div>}
            {heading && (
              <h3 className="text-xl font-normal tracking-tighter xl:text-3xl bg-gradient-to-r  from-primary-foreground-inverse to-primary-foreground bg-clip-text text-transparent">
                {heading}
              </h3>
            )}
          </div>
        )}
        {children}
      </div>
    )
  }
)

export function FeatureShowcaseIconContainer(
  props: React.PropsWithChildren<{
    className?: string
  }>
) {
  return (
    <div className={"flex"}>
      <div
        className={cn(
          "flex items-center justify-center space-x-4 rounded-lg p-0 font-semibold",
          props.className
        )}
      >
        {props.children}
      </div>
    </div>
  )
}
