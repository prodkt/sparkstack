import React, { type CSSProperties } from "react"

import { cn } from "@/lib/utils"

interface TracerProps {
  mainCircleSize?: number
  mainCircleOpacity?: number
  numCircles?: number
  className?: string
}

export const Tracer = React.memo(function Tracer({
  mainCircleSize = 45,
  mainCircleOpacity = 0.08,
  numCircles = 8,
  className,
}: TracerProps) {
  return (
    <div
      className={cn(
        "pointer-events-none select-none absolute inset-0 [mask-image:linear-gradient(to_top,white,transparent)]",
        className
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 8
        const opacity = mainCircleOpacity - i * 0.012
        const animationDelay = `${i * 0.1}s`
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid"
        const borderOpacity = 5 + i * 4
        // const borderOpacity = 5 + i * 4
        const borderRadius = 1 + i * 0.15

        return (
          <div
            key={i}
            className={`absolute animate-tracer bg-primary-a5 shadow-xl border border-primary-a10 ring-1 ring-primary-a10 shadow-[inset_0_0_30px_5px_var(--primary-a10)] [--i:${i}]`}
            style={
              {
                width: `${size}%`,
                height: `${size}%`,
                opacity,
                animationDelay,
                borderStyle,
                borderRadius: `${borderRadius}rem`,
                borderWidth: "1px",
                // borderColor: `var(--primary-a9)`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        )
      })}
    </div>
  )
})

Tracer.displayName = "Tracer"
