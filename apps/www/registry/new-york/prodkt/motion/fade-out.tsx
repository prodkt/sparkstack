"use client"

import { createContext, useContext } from "react"
import { motion, useReducedMotion } from "framer-motion"

const FadeOutStaggerContext = createContext(false)

const viewport = { once: true, margin: "0px 0px 0px" }

export function FadeOut(
  props: React.ComponentPropsWithoutRef<typeof motion.div>
) {
  let shouldReduceMotion = useReducedMotion()
  let isInStaggerGroup = useContext(FadeOutStaggerContext)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    />
  )
}

export function FadeOutStagger({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return (
    <FadeOutStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeOutStaggerContext.Provider>
  )
}
