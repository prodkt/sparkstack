"use client"

import React from "react"
import {
  motion,
  type AnimationProps,
  type HTMLMotionProps,
} from "framer-motion"

import { cn } from "@/lib/utils"

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode
  className?: string
}

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        {...animationProps}
        {...props}
        className={cn(
          "relative rounded-lg size-full px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,var(--primary-11)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_var(--primary-11)]",
          className
        )}
      >
        <span className="relative block size-full text-sm uppercase tracking-wide text-ghost-a9 dark:font-light dark:text-ghost-a11">
          {children}
        </span>
        <span
          style={{
            mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            maskComposite: "exclude",
          }}
          className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,var(--primary-10)_calc(var(--x)+20%),var(--primary-11))_calc(var(--x)+25%),var(--primary)_calc(var(--x)+100%))] p-px"
        ></span>
      </motion.button>
    )
  }
)

ShinyButton.displayName = "ShinyButton"

export default ShinyButton
