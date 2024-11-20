"use client"

import React, { useEffect, useRef, useState, type FC } from "react"
import clsx from "clsx"
import { AnimatePresence, motion, useInView } from "framer-motion"
import {
  Fingerprint as AuthenticationIcon,
  BarChart as ChartsIcon,
  PenIcon as DataTablesIcon,
  Table as FormsIcon,
  List as ListIcon,
  Award as WizardsIcon,
} from "lucide-react"

import { Button } from "@/registry/default/ui/button"

type Props = {
  className?: string
}

export const CreativeTabSlider: FC<Props> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  const [activeIndex, setActiveIndex] = useState(0)
  const activeListItem = list[activeIndex]

  const [shouldIncrement, setShouldIncrement] = useState(true)

  useEffect(() => {
    if (!shouldIncrement) {
      return
    }

    let interval: NodeJS.Timeout
    if (inView) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % list.length)
      }, 3000)
    }

    return () => clearInterval(interval)
  }, [shouldIncrement, inView])

  return (
    <div ref={ref} className={clsx(className, "w-full")}>
      <div className={clsx("not-prose", "w-full", "px-4 landing-md:px-10")}>
        <h2
          className={clsx(
            "text-2xl landing-sm:text-[32px]",
            "tracking-tight",
            "text-start",
            "p-0",
            "text-foreground"
          )}
        >
          I love{" "}
          <span
            className={clsx(
              "font-semibold",
              "text-primary-text drop-shadow-[0_0_30px_var(--primary-a9)]"
            )}
          >
            bleeding edge
          </span>{" "}
          technology. Anything between low-code and full-code to design
          primitives and complete design systems.
        </h2>
        <p
          className={clsx(
            "mt-4 landing-sm:mt-6",
            "max-w-md",
            "text-base",
            "text-muted"
          )}
        >
          In my exploration I've started crafting and coding my own tools to
          make the learning process more efficient and always have an outcome.
        </p>
      </div>

      <div className={clsx("mt-8 landing-sm:mt-12 landing-lg:mt-20")}>
        <div
          className={clsx(
            "select-none",
            "relative ring-1 ring-gray-a3 ring-offset-2 ring-offset-gray-a1 outline outline-1 outline-gray-a3 border border-active outline-offset-2 bg-gray-a2",
            "h-[752px] landing-sm:h-[874px] landing-md:h-[984px] landing-lg:h-[688px]",
            "not-prose",
            "pt-4 landing-sm:pt-10 landing-lg:pt-20",
            "pb-4 landing-lg:pb-0",
            "pl-4 landing-sm:pl-10",
            "text-foreground",
            "rounded-2xl landing-sm:rounded-3xl",
            "overflow-hidden",
            "bg-card",
            "bg-noise"
          )}
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              key={activeIndex}
              className={clsx(
                "absolute",
                "inset-0",
                "z-0",
                "landing-xs:bg-creative-tab-slider-glow-position-xs",
                "landing-lg:bg-creative-tab-slider-glow-position-lg",
                "landing-md:bg-creative-tab-slider-glow-position-md",
                "landing-xs:bg-creative-tab-slider-glow-size-xs",
                "landing-lg:bg-creative-tab-slider-glow-size-lg",
                activeListItem.backgroundImage
              )}
              style={{
                backgroundRepeat: "repeat, no-repeat",
              }}
            />
          </AnimatePresence>
          <div
            className={clsx(
              "relative",
              "z-[1]",
              "h-full w-full",
              "flex flex-col justify-start items-start landing-lg:grid landing-lg:grid-cols-12"
            )}
          >
            <div
              className={clsx(
                "not-prose",
                "w-full",
                "relative",
                "pr-6 landing-sm:pr-0",
                "landing-sm:max-w-[540px] landing-md:max-w-[760px] landing-lg:max-w-[416px]",
                "landing-lg:col-span-5",
                "landing-lg:mt-16"
              )}
            >
              <h3
                className={clsx(
                  "text-base landing-sm:text-xl font-semibold",
                  "text-foreground"
                )}
              >
                {activeListItem.title}
              </h3>
              <p className={clsx("mt-6", "text-base", "text-muted")}>
                {activeListItem.description}
              </p>
              <div
                className={clsx(
                  "mt-4 landing-sm:mt-10",
                  "justify-start",
                  "items-start",
                  "max-w-max",
                  "flex flex-wrap",
                  "flex-row",
                  "w-auto",
                  "gap-y-2",
                  "landing-sm:gap-2",
                  "not-prose"
                )}
              >
                {list.map((item, index) => {
                  const active = index === activeIndex
                  const Icon = item.icon

                  return (
                    <Button
                      variant="dashed"
                      size="sm"
                      key={item.iconText}
                      onClick={() => {
                        setShouldIncrement(false)
                        setActiveIndex(index)
                      }}
                      className={clsx(
                        "appearance-none shadow-[0_-2px_10px_-1px_var(--gray-a3),inset_0_-2px_1px_-1px_var(--gray-1)] !bg-gray-1 border-gray-a5 outline-offset-4 outline outline-1 outline-transparent transition-all duration-100",
                        "focus:outline-none",
                        "cursor-pointer",
                        "mr-auto",
                        active
                          ? " shadow-[inset_0_-2px_10px_-1px_var(--gray-1),inset_0_-14px_24px_-24px_var(--gray-a2)] !bg-gray-a2 border-gray-a4 ring-1 ring-gray-a7 border-solid outline-offset-2 !outline-gray-a2 outline outline-2"
                          : "bg-gray-a2",

                        "w-max"
                      )}
                    >
                      <div>
                        <Icon active={active} />
                      </div>
                      <div className={clsx(active ? "" : "")}>
                        {item.iconText}
                      </div>
                    </Button>
                  )
                })}
              </div>
            </div>
            <div
              className={clsx(
                "relative",
                "h-full",
                "mt-4 landing-sm:mt-[72px] landing-lg:mt-0",
                "flex",
                "landing-lg:col-start-7 landing-lg:col-end-13"
              )}
            >
              <div
                className={clsx(
                  "w-full",
                  "h-full",
                  "creative-tab-slider-mask",
                  "z-[1]",
                  "landing-lg:absolute",
                  "top-0 right-0"
                )}
              >
                {list.map((item, index) => {
                  const active = index === activeIndex

                  return (
                    <div
                      key={index}
                      className={clsx(
                        "after:absolute",
                        "after:inset-0",
                        "after:bg-transparent",
                        "after:rounded-l-3xl",
                        "after:z-[50]",
                        "after:overflow-hidden before:overflow-hidden",
                        "after:border after:border-gray-a6 after:border-r-0",
                        "after:shadow-[-1px_0_0_4px_var(--gray-a4),-1px_0_0_2px_var(--gray-1)]",
                        "after:size-full",
                        "after:m-0",
                        "rounded-l-3xl",
                        "object-cover",
                        "object-left-top",
                        "w-full landing-md:w-[954px] landing-lg:w-full",
                        "h-full landing-lg:h-[506px]",
                        "landing-md:pl-20 landing-lg:pl-0",
                        "absolute",
                        "top-0 right-0",
                        active && "delay-300",
                        active ? "translate-x-0" : "translate-x-full",
                        active ? "opacity-100" : "opacity-0",
                        "transition-[transform,opacity] duration-500 ease-in-out"
                      )}
                    >
                      <img
                        key={index}
                        src={item.image1Dark}
                        alt="UI of Prodkt"
                        className={clsx(
                          "z-10",
                          "relative",
                          "rounded-l-3xl",
                          "object-cover",
                          "object-left-top",
                          "w-full landing-md:w-[954px] landing-lg:w-full",
                          "h-full landing-lg:h-[506px]",
                          "landing-md:pl-20 landing-lg:pl-0",
                          "top-0 right-0",
                          // active && "delay-300",
                          active ? "translate-x-0" : "translate-x-full",
                          active ? "opacity-100" : "opacity-0",
                          "transition-[transform,opacity] duration-500 ease-in-out"
                        )}
                      />
                    </div>
                  )
                })}
              </div>

              {list.map((item, index) => {
                const active = index === activeIndex

                return (
                  <div
                    key={index}
                    className={clsx(
                      "block",
                      "z-[2]",
                      "w-[328px] landing-sm:w-[488px]",
                      "absolute",
                      "bottom-0 landing-sm:bottom-[4px] landing-lg:bottom-[78px]",
                      "-left-2 landing-lg:-left-20",
                      "rounded-xl",
                      "text-foreground backdrop-blur",
                      "shadow-creative-tab-slider-code",
                      active && "delay-300",
                      active ? "translate-y-0" : "translate-y-full",
                      active ? "opacity-100" : "opacity-0",
                      "transition-[transform,opacity] duration-500 ease-in-out"
                    )}
                  >
                    <img
                      src={item.image2Dark}
                      alt="Code of Prodkt"
                      className={clsx("rounded-xl", "w-full", "h-full")}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const list = [
  {
    title:
      "Business applications not only share fundamental UI elements, but also the underlying logic.",
    description: `Stop writing repetitive code for CRUD, security and
        state management. Let Refine automatically transform
        your UI elements to enterprise-grade:`,
    icon: (props: { active: boolean }) => (
      <DataTablesIcon
        className={clsx(
          props.active ? "dark:text-[#FA3852] text-[#D22D2D]" : "text-gray-500"
        )}
      />
    ),
    iconText: "Tables",
    image1Dark: "/sparkstack/prodktCraft_appScreenshot_2.avif",
    image2Dark: "/sparkstack/prodktCraft_appScreenshot_3.avif",
    backgroundImage:
      "dark:bg-creative-tab-slider-glow-cyan-dark bg-creative-tab-slider-glow-cyan-light",
  },
  {
    title:
      "Business applications not only share fundamental UI elements, but also the underlying logic.",
    description: `Stop writing repetitive code for CRUD, security and
      state management. Let Refine automatically transform
      your UI elements to enterprise-grade:`,
    icon: (props: { active: boolean }) => (
      <ListIcon
        className={clsx(
          props.active ? "dark:text-[#F98C1F] text-[#F46A25]" : "text-gray-500"
        )}
      />
    ),
    iconText: "List",
    image1Dark: "/sparkstack/prodktCraft_appScreenshot_4.avif",
    image2Dark: "/sparkstack/prodktCraft_appScreenshot_6.avif",
    backgroundImage:
      "dark:bg-creative-tab-slider-glow-orange-dark bg-creative-tab-slider-glow-orange-light",
  },
  {
    title:
      "Business applications not only share fundamental UI elements, but also the underlying logic.",
    description: `Stop writing repetitive code for CRUD, security and
state management. Let Refine automatically transform
your UI elements to enterprise-grade:`,
    icon: (props: { active: boolean }) => (
      <ChartsIcon
        className={clsx(
          props.active ? "dark:text-[#F9D51F] text-[#FF9F1A]" : "text-gray-500"
        )}
      />
    ),
    iconText: "Charts",
    image1Dark: "/sparkstack/prodktCraft_appScreenshot_2.avif",
    image2Dark: "/sparkstack/prodktCraft_appScreenshot_3.avif",
    backgroundImage:
      "dark:bg-creative-tab-slider-glow-yellow-dark bg-creative-tab-slider-glow-yellow-light",
  },
  {
    title:
      "Business applications not only share fundamental UI elements, but also the underlying logic.",
    description: `Stop writing repetitive code for CRUD, security and
  state management. Let Refine automatically transform
  your UI elements to enterprise-grade:`,
    icon: (props: { active: boolean }) => (
      <FormsIcon
        className={clsx(
          props.active ? "dark:text-[#47D1BF] text-[#089191]" : "text-gray-500"
        )}
      />
    ),
    iconText: "Forms",
    image1Dark: "/sparkstack/prodktCraft_appScreenshot_2.avif",
    image2Dark: "/sparkstack/prodktCraft_appScreenshot_3.avif",
    backgroundImage:
      "dark:bg-creative-tab-slider-glow-cyan-dark bg-creative-tab-slider-glow-cyan-light",
  },
  {
    title:
      "Business applications not only share fundamental UI elements, but also the underlying logic.",
    description: `Stop writing repetitive code for CRUD, security and
  state management. Let Refine automatically transform
  your UI elements to enterprise-grade:`,
    icon: (props: { active: boolean }) => (
      <WizardsIcon
        className={clsx(
          props.active ? "dark:text-[#3DB8F5] text-[#1F80E0]" : "text-gray-500"
        )}
      />
    ),
    iconText: "Wizards",
    image1Dark: "/sparkstack/prodktCraft_appScreenshot_2.avif",
    image2Dark: "/sparkstack/prodktCraft_appScreenshot_3.avif",
    backgroundImage:
      "dark:bg-creative-tab-slider-glow-blue-dark bg-creative-tab-slider-glow-blue-light",
  },
  {
    title:
      "Business applications not only share fundamental UI elements, but also the underlying logic.",
    description: `Stop writing repetitive code for CRUD, security and
  state management. Let Refine automatically transform
  your UI elements to enterprise-grade:`,
    icon: (props: { active: boolean }) => (
      <AuthenticationIcon
        className={clsx(
          props.active ? "dark:text-[#5959FF] text-[#693BC6]" : "text-gray-500"
        )}
      />
    ),
    iconText: "Auth",
    image1Dark: "/sparkstack/prodktCraft_appScreenshot_2.avif",
    image2Dark: "/sparkstack/prodktCraft_appScreenshot_3.avif",
    backgroundImage:
      "dark:bg-creative-tab-slider-glow-indigo-dark bg-creative-tab-slider-glow-indigo-light",
  },
]
