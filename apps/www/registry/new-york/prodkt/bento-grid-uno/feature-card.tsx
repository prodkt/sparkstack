import type React from "react"
import { MouseEvent, forwardRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

import { cn } from "@/lib/utils"
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string | React.ReactNode
  description: React.ReactNode
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
          "relative p-[1px] rounded-[calc(var(--radius-2xl)+5px)]",
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
          className="bg-feature-test animate-github-stars-border blur-2xl m-auto overflow-hidden -translate-x-1/2 -translate-y-1/2 origin-center object-center absolute inset-0 z-[-1] size-[100%]"
          style={
            {
              "--duration": `${duration}s`,
            } as React.CSSProperties
          }
        ></div>
        <div
          className={cn(
            `after:absolute  after:bg-ghost-a9 flex items-stretch h-full justify-start after:z-[0] after:inset-0 after:pointer-events-none after:select-none after:size-full after:bg-noise overflow-hidden size-full rounded-[calc(var(--radius-2xl)+5px)] shadow-[inset_0_0_30px_-20px_var(--gray-3),inset_0_0_0px_1px_var(--gray-a2)] outline-1 outline outline-offset-[-1px] outline-gray-a2 p-0 bg-gradient-to-br from-ghost-a12 to-card-ghost-a11 relative`
          )}
          onMouseMove={handleMouseMove}
        >
          <CardHeader className="z-[5] max-w-sm p-4 md:p-10 h-full flex flex-col items-start justify-between gap-4">
            <CardTitle
              className="text-2xl leading-[95%] font-semibold text-balance bg-clip-text text-transparent pb-1 pr-1"
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

            <CardDescription className="mt-auto mb-0 text-sm text-balance gap-2">
              {description}
            </CardDescription>
          </CardHeader>
          <motion.div
            className="p-px z-[2] absolute inset-0 size-full flex flex-col justify-around items-around bg-ghost-a11"
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

            <div className={`absolute inset-0 bg-ghost-a9 blur-[90px] z-[-1]`}>
              {" "}
            </div>

            <div
              className={`absolute -translate-x-1/3 translate-y-3/4 mix-blend-overlay inset-0 bg-[var(--color)] rounded-full size-72 blur-[90px] z-[0]`}
            >
              {" "}
            </div>
          </motion.div>
        </div>

        <div className="designer-marks pointer-events-none absolute inset-0 z-[1] h-full w-full select-none hidden">
          <div className="relative m-0 h-full w-full">
            <div className="absolute m-0 size-2 translate-x-[calc(-25%+0px)] translate-y-[calc(-25%+0px)] border border-gray-a3 backdrop-blur focus-visible:border-primary group-hover:border-primary" />
            <div className="absolute bottom-0 m-0 size-2 translate-x-[calc(-25%+0px)] translate-y-[calc(25%-0px)] border border-gray-a3 backdrop-blur focus-visible:border-primary group-hover:border-primary" />
            <div className="absolute right-0 m-0 size-2 translate-x-[calc(25%-0px)] translate-y-[calc(-25%+0px)] border border-gray-a3 backdrop-blur focus-visible:border-primary group-hover:border-primary" />
            <div className="absolute bottom-0 right-0 m-0 size-2 translate-x-[calc(25%-0px)] translate-y-[calc(25%-0px)] border border-gray-a3 backdrop-blur focus-visible:border-primary group-hover:border-primary" />
          </div>
        </div>
      </div>
    )
  }
)
