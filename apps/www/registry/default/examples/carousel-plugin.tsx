import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"

import { Card, CardContent } from "@/registry/default/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/default/ui/carousel"

export default function CarouselPlugin() {
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current as any])

  const onMouseEnter = React.useCallback(() => {
    if (autoplay.current) autoplay.current.stop()
  }, [])

  const onMouseLeave = React.useCallback(() => {
    if (autoplay.current) autoplay.current.reset()
  }, [])
  const SLIDES = [
    { id: "slide1", number: 1 },
    { id: "slide2", number: 2 },
    { id: "slide3", number: 3 },
    { id: "slide4", number: 4 },
    { id: "slide5", number: 5 },
  ]
  return (
    <Carousel
      ref={emblaRef}
      plugins={[autoplay.current] as any}
      className="w-full max-w-xs"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <CarouselContent>
        {SLIDES.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{slide.number}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
