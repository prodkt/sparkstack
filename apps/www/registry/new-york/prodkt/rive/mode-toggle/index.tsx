"use client"

import { useEffect, useState } from "react"
import Rive, {
  Alignment,
  Fit,
  Layout,
  useRive,
  useRiveFile,
} from "@rive-app/react-canvas"

/* eslint-disable no-undef */
let RiveModule: any = null
let isLoadingModule = false
const callbacks: ((module: any) => void)[] = []

function loadRiveModule(cb: (module: any) => void) {
  if (isLoadingModule) {
    callbacks.push(cb)
  } else if (RiveModule) {
    cb(RiveModule)
  } else {
    console.log("loading module")
    isLoadingModule = true
    import("@rive-app/react-canvas").then((module) => {
      isLoadingModule = false
      RiveModule = module.default
      cb(RiveModule)
      for (let cb of callbacks) {
        cb(RiveModule)
      }
    })
  }
}

export default function RiveModeToggle() {
  // Initialize state based on localStorage/system preference
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")
      return savedTheme
        ? savedTheme === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches
    }
    return false
  })

  const { riveFile, status } = useRiveFile({
    src: "../../assets/rive/nexsale_mode_toggle.riv",
  })

  const RiveAnimation = "../../assets/rive/nexsale_mode_toggle.riv"

  const { rive, RiveComponent } = useRive({
    src: RiveAnimation,
    stateMachines: "modeMachine",
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  })

  useEffect(() => {
    if (rive) {
      const input = rive
        .stateMachineInputs("modeMachine")
        ?.find((input) => input.name === "isDark")

      if (input) {
        input.value = isDark
      }
    }
  }, [rive, isDark])

  const toggleMode = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)

    // Update localStorage and class
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newIsDark ? "dark" : "light")
      document.documentElement.classList[newIsDark ? "add" : "remove"]("dark")
    }
  }

  // Handle system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = (e: MediaQueryListEvent) => {
      const newIsDark = e.matches
      setIsDark(newIsDark)
      localStorage.setItem("theme", newIsDark ? "dark" : "light")
      document.documentElement.classList[newIsDark ? "add" : "remove"]("dark")
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return (
    <div className="size-[36px] rounded-full relative flex items-center justify-center">
      <div
        className="z-[1] relative size-[48px] min-w-[48px] min-h-[48px] inset-0 justify-center items-center overflow-hidden"
        onClick={toggleMode}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            toggleMode()
          }
        }}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        <RiveComponent />
      </div>
      <div className="size-[36px] absolute m-auto rounded-full dark:bg-background flex items-center justify-center z-0 inset-0" />
    </div>
  )
}
