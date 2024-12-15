"use client"

import type React from "react"
import { useCallback, useState } from "react"

import { getUniqueID } from "../lib/utils"

export type RippleType = {
  key: React.Key
  x: number
  y: number
  size: number
}

export interface UseRippleProps {}

export const useRipple = function useRipple() {
  const [ripples, setRipples] = useState<RippleType[]>([])

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      const trigger = event.currentTarget
      const size = Math.max(trigger.clientWidth, trigger.clientHeight)
      const rect = trigger.getBoundingClientRect()

      setRipples((prevRipples) => [
        ...prevRipples,
        {
          key: getUniqueID(prevRipples.length.toString()),
          size,
          x: event.clientX - rect.left - size / 2,
          y: event.clientY - rect.top - size / 2,
        },
      ])
    },
    []
  )

  const onClear = useCallback((key: React.Key) => {
    setRipples((prevState) => prevState.filter((ripple) => ripple.key !== key))
  }, [])

  return { ripples, onClick, onClear } as const
}

export type UseRippleReturn = ReturnType<typeof useRipple>
