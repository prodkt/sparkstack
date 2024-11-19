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
          "w-auto",
          "ring-2 ring-inset ring-offset-2 ring-offset-border-active ring-border outline outline-2 outline-border -outline-offset-4",
          "p-6 content-sm:p-10 md:space-y-4",
          "text-center bg-logo-shuffle",
          "text-muted",
          "rounded-2xl landing-sm:rounded-3xl"
        )}
      >
        <p
          className={clsx(
            "whitespace-nowrap",
            "text-base landing-sm:text-2xl",
            "text-muted"
          )}
        >
          Trusted by developers from
        </p>
        <div
          className={clsx(
            "flex flex-row flex-wrap",
            "w-full",
            "justify-center p-4",
            "items-center",
            "text-balance"
          )}
        >
          {randomIcons.map((item) => (
            <div
              key={item.id}
              className={clsx(
                "w-auto",
                "p-4",
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
    icon: <OracleIcon />,
    id: 1,
  },
  {
    icon: <SalesforceIcon />,
    id: 2,
  },
  {
    icon: <CiscoIcon />,
    id: 3,
  },
  {
    icon: <IbmIcon />,
    id: 4,
  },
  {
    icon: <DeloitteIcon />,
    id: 5,
  },
  {
    icon: <JpMorganIcon />,
    id: 7,
  },
  {
    icon: <IntelIcon />,
    id: 8,
  },
  {
    icon: <AtlassianIcon />,
    id: 9,
  },
  {
    icon: <UpworkIcon />,
    id: 10,
  },
  {
    icon: <AutodeskIcon />,
    id: 11,
  },
  {
    icon: <MetaIcon />,
    id: 12,
  },
  {
    icon: <AmazonIcon />,
    id: 13,
  },
]
