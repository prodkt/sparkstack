// Core component that receives mouse positions and renders pointer and content

import React, { useEffect, useState } from "react"
import { AnimatePresence, motion, useMotionValue } from "framer-motion"

import { cn } from "@/lib/utils"

export const FollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: string
  title?: string | React.ReactNode
}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const ref = React.useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [isInside, setIsInside] = useState<boolean>(false) // Add this line

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX
      const scrollY = window.scrollY
      x.set(e.clientX - rect.left + scrollX)
      y.set(e.clientY - rect.top + scrollY)
    }
  }
  const handleMouseLeave = () => {
    setIsInside(false)
  }

  const handleMouseEnter = () => {
    setIsInside(true)
  }
  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={
        {
          // cursor: "none",
        }
      }
      ref={ref}
      className={cn("w-full h-auto text-nowrap text-xs", className)}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} title={title} />}
      </AnimatePresence>
      {children}
    </div>
  )
}

export const FollowPointer = ({
  x,
  y,
  title,
}: {
  x: any
  y: any
  title?: string | React.ReactNode
}) => {
  const colors = ["var(--brand-9)"]
  return (
    // <div className="absolute z-50 w-4 h-4 rounded-full">
    <motion.div
      // @ts-ignore
      className="absolute z-50 w-4 h-4 rounded-full"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="w-6 h-6 text-[var(--brand-1)] transform -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] stroke-[var(--brand-11)]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Pointer</title>
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
      </svg>
      {/* <div
				className={
					'px-2 pt-1.5 pb-1 bg-[var(--gray-9)] text-white whitespace-nowrap text-xs rounded-xl flex items-center justify-center min-w-fit'
				}
			> */}
      <motion.div
        // @ts-ignore
        className="flex justify-center border ring-1 ring-[var(--ghost-aa1)] items-center bg-[var(--gray-1)] px-2 pt-1.5 pb-1 rounded-2xl min-w-fit text-foreground"
        style={{
          //   backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        }}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
      >
        {title || "Welcome to Prodkt!"}
      </motion.div>
      {/* </div> */}
    </motion.div>
    // </div>
  )
}
