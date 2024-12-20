import type React from "react"
import { MouseEvent, forwardRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

import { cn } from "@/lib/utils"
import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string | React.ReactNode
  description?: React.ReactNode
  image?: React.ReactNode
  duration?: number
  color?: string
  style?: React.CSSProperties
}

export const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  function FeatureCardComponent(
    {
      className,
      label,
      description,
      image,
      children,
      duration = 14,
      style,
      color = "primary",
      ...props
    },
    ref
  ) {
    let mouseX = useMotionValue(0)
    let mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
      let { left, top } = currentTarget.getBoundingClientRect()

      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }
    return (
      <div
        className={cn(
          "relative rounded-[calc(var(--radius-2xl)+5px)] p-[1px]",
          className
        )}
        {...props}
        style={
          {
            "--color": `var(--${color}-a6)`,
          } as React.CSSProperties
        }
        ref={ref}
      >
        <div
          className="bg-feature-test animate-github-stars-border absolute inset-0 z-[-1] m-auto size-[100%] origin-center -translate-x-1/2 -translate-y-1/2 overflow-hidden object-center blur-2xl"
          style={
            {
              "--duration": `${duration}s`,
            } as React.CSSProperties
          }
        ></div>
        <div
          className={cn(
            `after:bg-ghost-a9 after:bg-noise outline-gray-a2 from-ghost-a12 to-card-ghost-a11 relative flex size-full h-full items-stretch justify-start overflow-hidden rounded-[calc(var(--radius-2xl)+5px)] bg-gradient-to-br p-0 shadow-[inset_0_0_30px_-20px_var(--gray-3),inset_0_0_0px_1px_var(--gray-a2)] outline outline-1 outline-offset-[-1px] after:pointer-events-none after:absolute after:inset-0 after:z-[0] after:size-full after:select-none`
          )}
          role="region"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              // Handle interaction
            }
          }}
          onMouseMove={handleMouseMove}
        >
          <CardHeader className="relative z-[5] flex h-full max-w-sm flex-col items-start justify-between gap-4 p-4 md:p-6 lg:p-10">
            <CardTitle
              className="text-balance bg-clip-text pb-1 pr-1 text-2xl font-semibold leading-[95%] text-transparent"
              style={{
                background: `linear-gradient(to bottom right, var(--${color}-10), var(--${color}-12))`,
                clipPath: `text`,
                WebkitBackgroundClip: `text`,
                WebkitTextFillColor: `transparent`,
                color: `transparent`,
              }}
            >
              {label}
            </CardTitle>

            <CardDescription className="mb-0 mt-auto gap-2 text-balance text-sm">
              {description}
            </CardDescription>
          </CardHeader>
          <motion.div
            className="items-around bg-ghost-a11 absolute inset-0 z-[2] flex size-full flex-col justify-around p-px"
            style={{
              background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(100, 100, 100, 0.3),
              transparent 90%
            )
          `,
            }}
          >
            {image}
            {children}

            <div className={`bg-ghost-a9 absolute inset-0 z-[-1] blur-[90px]`}>
              {" "}
            </div>

            <div
              className={`absolute inset-0 z-[0] size-72 -translate-x-1/3 translate-y-3/4 rounded-full bg-[var(--color)] blur-[90px]`}
            >
              {" "}
            </div>
          </motion.div>
        </div>
      </div>
    )
  }
)
