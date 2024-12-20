import type React from "react"
import { useCallback, useEffect, useState, type PropsWithChildren } from "react"
import type { EmblaCarouselType } from "embla-carousel"
import { Icon } from "lucide-react"

import { CarouselTab } from "./tab"

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
  icon: typeof Icon
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
      if (onButtonClick) onButtonClick(emblaApi)
    },
    [emblaApi, onButtonClick]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
    icon: Icon,
  }
}

type PropType = PropsWithChildren<React.ComponentProps<typeof CarouselTab>>

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  // Ensure that the props you're spreading into CarouselTab are of the correct type
  //   const anchorProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = restProps as any;

  return <CarouselTab {...restProps}> {children}</CarouselTab>
}
