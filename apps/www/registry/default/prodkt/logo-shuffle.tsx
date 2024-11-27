"use client"

import React, { useEffect, useLayoutEffect, useRef, type FC } from "react"
import clsx from "clsx"
import { useInView } from "framer-motion"

import {
  AmazonIcon,
  AtlassianIcon,
  AutodeskIcon,
  CiscoIcon,
  DeloitteIcon,
  IbmIcon,
  IntelIcon,
  JpMorganIcon,
  MetaIcon,
  OracleIcon,
  SalesforceIcon,
  UpworkIcon,
} from "@/registry/default/icons"

type Props = {
  className?: string
}

export const LogoShuffle: FC<Props> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  const lastChangedIndex = React.useRef<number>(0)

  const [randomIcons, setRandomIcons] = React.useState<IList>([])

  useLayoutEffect(() => {
    setRandomIcons(list.sort(() => 0.5 - Math.random()).slice(0, 6))
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    // change one random icon in the list every X seconds.
    if (inView) {
      interval = setInterval(() => {
        setRandomIcons((prev) => {
          const { changedIndex, newList } = changeOneRandomIcon(
            prev,
            list,
            lastChangedIndex.current
          )
          lastChangedIndex.current = changedIndex
          return newList
        })
      }, 2000)
    }

    return () => clearInterval(interval)
  }, [randomIcons, inView])

  return (
    <div className={clsx(className, "w-full")} ref={ref}>
      <div
        className={clsx(
          "not-prose",
          "relative",
          "flex flex-col",
          "items-center",
          "justify-center",
          "w-auto",
          "outline outline-1 outline-ring-disabled -outline-offset-2 border border-border-disabled ring-2 ring-offset-1 ring-offset-ring-disabled ring-inset ring-ring-disabled",
          "p-6 content-sm:p-10 space-y-5 md:space-y-3",
          "text-center bg-logo-shuffle",
          "text-muted",
          "rounded-2xl landing-sm:rounded-3xl"
        )}
      >
        <p
          className={clsx(
            "whitespace-nowrap",
            "text-xs landing-sm:text-sm uppercase tracking-widest font-mono mt-2 mb-0",
            "text-muted"
          )}
        >
          Brands I've worked with
        </p>
        <div
          className={clsx(
            "flex flex-row flex-wrap",
            "w-full",
            "justify-center",
            "items-center",
            "text-balance"
          )}
        >
          {randomIcons.map((item) => (
            <div
              key={item.id}
              className={clsx(
                "w-auto",
                "px-1",
                "py-0",
                "text-foreground",
                "object-contain",
                "flex-wrap md:flex-nowrap",
                "lg:basis-1/6",
                "landing-xs:basis-2/6",
                "max-h-[60px]",
                "basis-full",
                "justify-center",
                "items-center",
                "flex auto-cols-max grid-flow-row auto-rows-max grid-cols-4",
                "overflow-hidden"
              )}
            >
              <div
                className={clsx(
                  "animate-opacity-reveal",
                  "max-h-[60px]",
                  "landing-sm:max-w-[156px]",
                  "landing-xs:max-w-[100px]",
                  "flex",
                  "shrink",
                  "grow-0",
                  "basis-full",
                  "object-contain",
                  "justify-center",
                  "items-center"
                )}
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// change only one random icon in the list
const changeOneRandomIcon = (
  currentList: IList,
  list: IList,
  lastChangedIndex: number
): { newList: IList; changedIndex: number } => {
  const newList = [...currentList]

  // pick randomIndex from the current list
  let randomIndex = Math.floor(Math.random() * newList.length)
  // if the randomIndex is the same as the last changed index, pick another randomIndex
  while (randomIndex === lastChangedIndex) {
    randomIndex = Math.floor(Math.random() * newList.length)
  }

  // pick randomIcon from the list
  let randomIcon = list[Math.floor(Math.random() * list.length)]
  // check if the randomIcon is already in the current list
  let isExist = newList.find((item) => item.id === randomIcon.id)
  // if the randomIcon is already in the current list, pick another randomIcon
  while (isExist) {
    randomIcon = list[Math.floor(Math.random() * list.length)]
    isExist = newList.find((item) => item.id === randomIcon.id)
  }

  // change the randomIcon in the current list
  newList[randomIndex] = randomIcon

  return { newList, changedIndex: randomIndex }
}

type IList = {
  icon: React.ReactNode
  id: number
}[]

const list: IList = [
  {
    icon: <OracleIcon className="min-h-4 w-auto max-w-full object-contain" />,
    id: 1,
  },
  {
    icon: (
      <SalesforceIcon className="min-h-4 w-auto max-w-full object-contain" />
    ),
    id: 2,
  },
  {
    icon: <CiscoIcon className="min-h-4 w-auto max-w-full object-contain" />,
    id: 3,
  },
  {
    icon: <IbmIcon className="min-h-4 w-auto max-w-full object-contain" />,
    id: 4,
  },
  {
    icon: <DeloitteIcon className="min-h-4 w-auto max-w-full object-contain" />,
    id: 5,
  },
  {
    icon: <JpMorganIcon className="min-h-4 w-auto max-w-full object-contain" />,
    id: 7,
  },
  {
    icon: <IntelIcon className="min-h-4 w-auto max-w-full object-contain" />,
    id: 8,
  },
  {
    icon: (
      <AtlassianIcon className="min-h-4 w-auto max-w-full object-contain" />
    ),
    id: 9,
  },
  {
    icon: <UpworkIcon className="min-h-4 w-auto max-w-full object-contain" />,
    id: 10,
  },
  {
    icon: <AutodeskIcon className="min-h-4 w-auto max-w-full object-contain" />,
    id: 11,
  },
  {
    icon: <MetaIcon className="min-h-4 w-auto max-w-full object-contain" />,
    id: 12,
  },
  {
    icon: <AmazonIcon className="min-h-4 w-auto max-w-full object-contain" />,
    id: 13,
  },
]
