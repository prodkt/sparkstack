import { useCallback, useEffect, useRef, useState } from "react"
import DecorativeBg1 from "@/assets/prodkt/slides/decorative-1.svg"
import DecorativeBg2 from "@/assets/prodkt/slides/decorative-2.svg"
import DecorativeBg3 from "@/assets/prodkt/slides/decorative-3.svg"
import DecorativeBg4 from "@/assets/prodkt/slides/decorative-4.svg"
import DecorativeBg6 from "@/assets/prodkt/slides/decorative-6.svg"
import DecorativeBg7 from "@/assets/prodkt/slides/decorative-7.svg"
import DecorativeBg9 from "@/assets/prodkt/slides/decorative-9.svg"
import ProductDataGraphic from "@/assets/prodkt/slides/product-analytics_graphic.svg"
import MixpanelLogo from "@/assets/prodkt/technologies/mixpanel_logo.svg"
import PendoLogo from "@/assets/prodkt/technologies/pendo_logo.svg"
import PosthogLogo from "@/assets/prodkt/technologies/posthog_logo.svg"
import ZohoCloudLogo from "@assets/prodkt/technologies/zoho_cloud_logo.svg"
// import Autoplay from "embla-carousel-autoplay"
import { EmblaOptionsType } from "embla-carousel"
import Autoplay, { type AutoplayType } from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import {
  Braces,
  BrainCircuit,
  DatabaseZap,
  FilePieChart,
  Orbit,
  ReceiptText,
  Sparkles,
} from "lucide-react"

import {
  Sandboxes as CollaborativeSandbox,
  ComponentLibrary,
  DesignKit,
  DesignLanguage,
  DesignSystemIcons,
  Documentation,
  Governance,
} from "@/registry/icons/design-system"
import { Button } from "@/registry/new-york/ui/button"
import { Card, CardContent } from "@/registry/new-york/ui/card"

// import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useAutoplay,
  type CarouselApi,
} from "./carousel_core"
import { DotButton } from "./dotButton"
import { FollowerPointerCard } from "./following-pointer"

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [selectedScrollSnap, setSelectedScrollSnap] = useState<number>(0)
  const [autoplayPaused, setAutoplayPaused] = useState(false)

  const CustomKey = {
    items: [
      {
        title: "Product Design",
        titleClass:
          "hidden xl:inline-block text-wrap text-left w-1/3 justify-start items-start",
        h3: "Experience",
        h3class: "hidden xl:flex",
        content: (
          <div className="hidden xl:block">
            <p>
              Design principles, user experience, and user interface design.
            </p>
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full m-auto scale-125 place-items-center place-content-center mix-blend-hard-light">
              <DesignSystemIcons className="hidden text-[var(--brand-a2)] gradientMask-to-t z-[-1]" />
              <DesignSystemIcons className="hidden text-[var(--brand-9)] absolute blur-xl shadow-2xl drop-shadow-2xl shadow-[var(--accent-12)]" />
            </div>
          </div>
        ),
        ctaContent: (
          <div className="absolute right-0 left-auto grid min-w-full min-h-full p-4 mx-auto my-auto me-0 ms-auto">
            <div className="relative right-0 left-auto grid items-start justify-center w-full xl:w-1/2 h-full grid-cols-2 z-[20] grid-rows-3 gap-4 p-0 me-0 ms-auto">
              <div className="flex flex-row items-center xl:items-start xl:flex-col text-xs gap-2 text-[var(--neutral-10)] relative hover:bg-[var(--ghost-a2)] bg-[var(--ghost-a1)] border transition-colors duration-250 p-4 rounded-lg h-full">
                <CollaborativeSandbox className="overflow-visible z-[10] p-1 opacity-100 fill-[var(--ghost-a1)] stroke-[var(--ghost-a5)] after:bg-gradient-to-b after:from-[var(--ghost-a10)] after:absolute after:w-full after:h-full after:to-[var(--ghost-a8)] after:z-[-1] after:rounded-full w-10 stroke-1 text-[var(--accent-a9)] brightness-200 min-w-10 max-w-10 max-h-10 min-h-10" />
                <p className="max-w-[75%] break-normal text-balance">
                  Collaborative Sandboxes
                </p>
              </div>
              <div className="flex flex-row items-center xl:items-start xl:flex-col text-xs gap-2 text-[var(--neutral-10)] relative hover:bg-[var(--ghost-a2)] bg-[var(--ghost-a1)] border transition-colors duration-250 p-4 rounded-lg h-full">
                <ComponentLibrary className="overflow-visible z-[10] p-1 opacity-100 fill-[var(--ghost-a1)] stroke-[var(--ghost-a5)] after:bg-gradient-to-b after:from-[var(--ghost-a10)] after:absolute after:w-full after:h-full after:to-[var(--ghost-a8)] after:z-[-1] after:rounded-full w-10 stroke-1 text-[var(--accent-a9)] brightness-200 min-w-10 max-w-10 max-h-10 min-h-10" />
                <p className="max-w-[75%] break-normal text-balance">
                  Component Libraries
                </p>
              </div>
              <div className="flex flex-row items-center xl:items-start xl:flex-col text-xs gap-2 text-[var(--neutral-10)] relative hover:bg-[var(--ghost-a2)] bg-[var(--ghost-a1)] border transition-colors duration-250 p-4 rounded-lg h-full">
                <DesignKit className="overflow-visible z-[10] p-1 opacity-100 fill-[var(--ghost-a1)] stroke-[var(--ghost-a5)] after:bg-gradient-to-b after:from-[var(--ghost-a10)] after:absolute after:w-full after:h-full after:to-[var(--ghost-a8)] after:z-[-1] after:rounded-full w-10 stroke-1 text-[var(--accent-a9)] brightness-200 min-w-10 max-w-10 max-h-10 min-h-10" />
                <p className="max-w-1/2 text-balance">Design Libraries</p>
              </div>
              <div className="flex flex-row items-center xl:items-start xl:flex-col text-xs gap-2 text-[var(--neutral-10)] relative hover:bg-[var(--ghost-a2)] bg-[var(--ghost-a1)] border transition-colors duration-250 p-4 rounded-lg h-full">
                <DesignLanguage className="overflow-visible z-[10] p-1 opacity-100 fill-[var(--ghost-a1)] stroke-[var(--ghost-a5)] after:bg-gradient-to-b after:from-[var(--ghost-a10)] after:absolute after:w-full after:h-full after:to-[var(--ghost-a8)] after:z-[-1] after:rounded-full w-10 stroke-1 text-[var(--accent-a9)] brightness-200 min-w-10 max-w-10 max-h-10 min-h-10" />
                <p className="max-w-[75%] break-normal text-balance">
                  Design Language
                </p>
              </div>
              <div className="flex flex-row items-center xl:items-start xl:flex-col text-xs gap-2 text-[var(--neutral-10)] relative hover:bg-[var(--ghost-a2)] bg-[var(--ghost-a1)] border transition-colors duration-250 p-4 rounded-lg h-full">
                <Documentation className="overflow-visible z-[10] p-1 opacity-100 fill-[var(--ghost-a1)] stroke-[var(--ghost-a5)] after:bg-gradient-to-b after:from-[var(--ghost-a10)] after:absolute after:w-full after:h-full after:to-[var(--ghost-a8)] after:z-[-1] after:rounded-full w-10 stroke-1 text-[var(--accent-a9)] brightness-200 min-w-10 max-w-10 max-h-10 min-h-10" />
                <p className="max-w-[75%] break-normal text-balance">
                  Documentation{" "}
                </p>
              </div>
              <div className="flex flex-row items-center xl:items-start xl:flex-col text-xs gap-2 text-[var(--neutral-10)] relative hover:bg-[var(--ghost-a2)] bg-[var(--ghost-a1)] border transition-colors duration-250 p-4 rounded-lg h-full">
                <Governance className="overflow-visible z-[10] p-1 opacity-100 fill-[var(--ghost-a1)] stroke-[var(--ghost-a5)] after:bg-gradient-to-b after:from-[var(--ghost-a10)] after:absolute after:w-full after:h-full after:to-[var(--ghost-a8)] after:z-[-1] after:rounded-full w-10 stroke-1 text-[var(--accent-a9)] brightness-200 min-w-10 max-w-10 max-h-10 min-h-10" />
                <p className="max-w-[75%] break-normal text-balance">
                  Governance{" "}
                </p>
              </div>
            </div>
          </div>
        ),
        contentClass: "!max-w-[50%] text-wrap",
        icon: Sparkles,
        backgroundImg: DecorativeBg1,
        imgClass: " translate-y-1/2 saturate-25 brightness-50",
        cardContentClass: "bg-[var(--ghost-aa5)] border-none",
        tabColor: "var(--red-9)",
      },
      {
        title: "Frontend Development",
        titleClass: "",
        h3: "Experience",
        h3class: "",
        content:
          "Traditionally front of frontend. Current positioned in balance between Product and Engineering.",
        contentClass: "",
        icon: Braces,
        backgroundImg: DecorativeBg2,
        imgClass:
          "translate-y-0 opacity-50 gradientMask-1 after:absolute after:h-full after:w-full",
        cardContentClass: "",
      },
      {
        title: "Processes",
        titleClass: "origin-center text-nowrap !max-w-auto",
        h3: "Experience",
        h3class: "",
        content: "",
        contentClass: "",
        icon: Orbit,
        backgroundImg: DecorativeBg3,
        imgClass:
          "contrast-200 mix-blend-color-dodge saturate-200 cover !overflow-visible object-center origin-center",
        cardContentClass: "",
      },
      {
        title: "Automation & Integration",
        titleClass: "",
        h3: "Experience",
        h3class: "",
        content: "",
        contentClass: "",
        icon: BrainCircuit,
        backgroundImg: DecorativeBg4,
        imgClass: "translate-y-12 gradientMask-4 mix-blend-color-dodge",
        cardContentClass: "",
      },
      {
        title: "Contracts & Negotiation",
        titleClass: "",
        h3: "Experience",
        h3class: "",
        content: "",
        contentClass: "",
        icon: ReceiptText,
        backgroundImg: DecorativeBg9,
        imgClass: "gradientMask-1 blur-lg",
        cardContentClass: "",
      },
      {
        title: "Product Analytics",
        titleClass: "z-[1]",
        h3: "Experience",
        h3class: "",
        content: (
          <div className="bottom-0 top-auto flex flex-col w-full h-full gap-8 mt-auto mb-0">
            <div className="block w-full bg-[var(--gray-a1)] h-px min-h-px" />
            <div className="flex flex-row items-center justify-start w-full h-full gap-4 ml-0 mr-auto xl:gap-8 mix-blend-overlay">
              <img alt="" src={MixpanelLogo.src} />
              <img alt="" src={PendoLogo.src} />
              <img alt="" src={PosthogLogo.src} />
              <img alt="" src={ZohoCloudLogo.src} />
            </div>
            <img
              src={ProductDataGraphic.src}
              alt="Product Data Graphic"
              className="absolute h-full w-[75dvw] min-h-[100%] min-w-full mix-blend-overlay saturate-50 gradientMask-6 object-cover translate-y-8 object-bottom-left left-auto bottom-0 right-0"
            />
          </div>
        ),
        contentClass: "",
        icon: FilePieChart,
        backgroundImg: DecorativeBg6,
        imgClass: "",
        cardContentClass: "",
      },
      {
        title: `API's & Databases`,
        titleClass: "",
        h3: "Experience",
        h3class: "",
        content: "",
        contentClass: "",
        icon: DatabaseZap,
        backgroundImg: DecorativeBg7,
        imgClass: "blur-2xl translate-x-1/3",
        cardContentClass: "",
      },
    ],
  }

  const scrollTo = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index, false)
        setSelectedScrollSnap(index)
      }
    },
    [api]
  )

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      const selectedSnap = api.selectedScrollSnap()
      setSelectedScrollSnap(selectedSnap)
    }

    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  const handleTabClick = useCallback(
    (index: number) => {
      setAutoplayPaused(false) // Pause autoplay when a tab is clicked
      scrollTo(index)
    },
    [scrollTo]
  )

  const handleMouseEnterSlide = useCallback(() => {
    if (Autoplay) Autoplay() // Stop autoplay on slide hover
  }, [])

  const handleMouseLeaveSlide = useCallback(() => {
    if (Autoplay && !autoplayPaused) Autoplay // Resume autoplay on slide hover out, unless paused by tab click
  }, [autoplayPaused])

  return (
    <div className="flex flex-col w-full xl:min-h-full xl:flex-col-reverse absolute bottom-0 inset-x-0">
      <FollowerPointerCard
        title="Skills I've picked up along the way"
        className="relative w-full xl:w-full xl:h-full text-balance xl:px-0 xl:pb-4"
      >
        <div className="absolute marquee-section-mask flex items-center bottom-0 justify-center scroll-m-8 scroll-p-3 z-[1] overflow-x-auto overflow-y-hidden flex-row gap-px px-0 py-0 xl:py-0 w-full h-auto text-nowrap text-sm">
          <div className="relative mb-0 px-12 flex flex-row gap-[2px] xl:flex-row xl:gap-[-3px] p-0 mx-0 my-0 items-stretch justify-stretch justify-items-stretch text-background rounded-[calc(var(--radius-xl)+5px)]">
            {CustomKey.items.map((item, index) => (
              <Button
                asChild
                key={`${index}-tab`}
                data-key={`${index}-tab`}
                variant="default"
                onClick={() => handleTabClick(index)}
                onMouseEnter={() => setAutoplayPaused(true)} // Pause autoplay on tab hover
                onMouseLeave={() => setAutoplayPaused(false)} // Resume autoplay on tab hover out
                className="rounded-[calc(var(--radius-xl)+3px)] bg-ghost-aa3 dark:bg-ghost-a4 gradientMask-to-t-10 p-0 m-0 grow h-auto overflow-hidden"
              >
                <DotButton
                  icon={item.icon}
                  // tabActiveColor={{ '--tabActive': item.tabColor }}
                  className={"heroCarouselTab".concat(
                    index === selectedScrollSnap
                      ? "rounded-full overflow-visible text-xs py-0 [&_svg]:size-8 lg:[&_svg]:size-4 md:min-h-10 m-0 inset-0 z=[1] p-px md:w-full mx-0 aspect-square md:aspect-auto"
                      : "rounded-full overflow-visible text-xs py-0 [&_svg]:size-4 lg:[&_svg]:size-4 md:min-h-10 m-0 inset-0 z=[1] p-px md:w-full aspect-square md:aspect-auto"
                  )}
                >
                  <span className="hidden xl:flex w-full mt-0 xl:top py-1 m-1">
                    {item.title}
                  </span>
                </DotButton>
              </Button>
            ))}
          </div>
        </div>
      </FollowerPointerCard>

      <Carousel
        className="flex w-full h-full xl:w-full grow p-0 inset-0 m-0 size-full absolute"
        orientation="vertical"
        plugins={[
          {
            name: "autoplay",
            options: {},
            init: (embla, optionsHandler) => {
              console.log(embla, optionsHandler)
            },
            destroy: () => {},
          },
        ]}
      >
        <FollowerPointerCard>
          <div className=" after:absolute after:size-full after:m-auto after:inset-0 after:z-[1] after:select-none after:pointer-events-none" />

          <CarouselContent
            className="gap-0 h-[500px] w-full inset-0 mt-0 p-0 m-0 ease-in-out"
            onMouseEnter={handleMouseEnterSlide} // Stop autoplay on slide hover
            onMouseLeave={handleMouseLeaveSlide}
          >
            {CustomKey.items.map((item, index) => (
              <CarouselItem
                key={index}
                className="flex relative landing-vertical-mask overflow-hidden !shadow-none w-full h-full bg-[var(--ghost-aa4)] p-0 rounded-2xl"
              >
                <Card className="absolute flex items-center justify-center w-full h-full bg-transparent border-none shadow-none rounded-[calc(var(--radius-2xl)+2px)]">
                  <CardContent
                    className={`relative top-0 bottom-0 left-0 right-0 flex flex-col items-start justify-center w-full h-full p-0 md:p-10 m-0 overflow-hidden ${item.cardContentClass}`}
                  >
                    <div className="top-0 right-0 left-0 z-[-1] absolute m-auto w-full h-full select-none gradientMask-4" />
                    <h3
                      className={`z-[1] bottom-0 left-auto right-auto flex bg-clip-text bg-gradient-to-r from-[var(--ghost-a12)] uppercase to-[var(--ghost-a4)] font-normal text-xs text-transparent tracking-[0.4em] !mix-blend-color-dodge ${item.h3class}`}
                    >
                      {item.h3}
                    </h3>

                    <h2
                      className={`!font-medium text-balance !max-w-[90%] py-5 !text-[2.5rem] md:!text-[3.35rem] !leading-[85%] !tracking-tighter bg-clip-text !text-transparent !bg-gradient-to-r !from-[var(--ghost-a12)] !to-[var(--ghost-a2)] ${item.titleClass}`}
                    >
                      {item.title}
                    </h2>
                    <div
                      className={`w-full tracking-normal text-balance ${item.contentClass}`}
                    >
                      {item.content}
                    </div>

                    {item.ctaContent}

                    {item.backgroundImg && (
                      <img
                        src={`${item.backgroundImg.src}`}
                        alt={item.title}
                        className={`${item.imgClass} select-none m-0 left-0 right-0 top-0 bottom-0 absolute object-cover min-h-[100%] min-w-[100%] w-full h-full -z-[1]`}
                      />
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </FollowerPointerCard>
      </Carousel>
    </div>
  )
}
