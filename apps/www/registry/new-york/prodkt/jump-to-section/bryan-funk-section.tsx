/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
import { Aperture, Scroll, ShipWheel } from "lucide-react"

import BryanPhoto from "./bryan-funk-portrait-xl.avif"
import { GridBg03 } from "./grid-bg-03"
import { SkillMarquee } from "./skill-marquee"

/**
 *
 */
export default function JumpToSection() {
  return (
    <div className="relative flex items-center justify-center px-4 xl:pt-12 w-full">
      <GridBg03 className="absolute inset-0 m-0 w-full h-full bg-cover bg-center translate-y-1/3 gradientMask-7" />
      <div className="relative flex size-full flex-col items-center justify-center px-2 md:px-4 lg:px-12 xl:px-20">
        <div className="flex w-full flex-col items-start justify-center gap-4 lg:gap-8 xl:max-w-[65dvw]">
          <div className="flex w-full items-start justify-start px-4 pt-10 text-left text-2xl leading-none tracking-tight md:text-3xl lg:text-nowrap lg:text-5xl" />
          <div className="z-[1] flex w-full max-w-[100dvw] flex-row flex-wrap justify-center gap-2 md:gap-4 lg:h-full 2xl:flex-nowrap">
            <div className="basis-full w-full  flex-wrap max-w-[100dvw] sm:basis-1/3 sm:grow lg:basis-1/4 relative flex lg:grow flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-[var(--gray-a4)] bg-gradient-to-br from-[var(--gray-1)] to-[var(--gray-a1)] p-4 shadow-inner backdrop-blur sm:p-5 xl:p-8">
              <div className=" bg-ghost-a3 rounded-2xl relative z-[1] flex size-16 items-end justify-center">
                <img
                  src={BryanPhoto.src}
                  decoding="async"
                  loading="lazy"
                  alt="Bryan Funk"
                  className="z-[1] aspect-square size-16 select-none rounded-xl border border-[var(--gray-a3)] pt-0"
                />
              </div>
              <h2 className="z-[1] text-xl font-normal tracking-tighter text-[var(--gray-a12)] antialiased leading-6">
                Bryan Funk
              </h2>
              <h4 className=" text-xs text-balance text-[var(--gray-a11)]">
                Former Director of Design at Tovuti LMS
              </h4>

              <div className="gradientMask-5 absolute -mt-12 flex w-full flex-row items-center justify-center gap-4">
                <SkillMarquee />
              </div>
            </div>
            <a
              href="#work"
              className="basis-full w-full flex-wrap max-w-[100dvw] sm:basis-1/3 sm:grow lg:basis-1/4 relative flex lg:grow flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-[var(--gray-a4)] bg-gradient-to-br from-[var(--gray-1)] to-[var(--gray-a1)] p-4 shadow-inner backdrop-blur sm:p-5 xl:p-8"
            >
              <div className="prodkt-card-avatar relative z-[1] flex size-16 items-center justify-center rounded-full">
                <ShipWheel
                  size={40}
                  strokeWidth={1}
                  className="animate-waving-hand text-[var(--amber-9)] dark:text-[var(--amber-a9)]"
                />
                <div className="absolute size-8 bg-[var(--amber-a9)] blur-lg" />
              </div>
              <h2 className="z-[1] text-xl font-normal tracking-tighter text-[var(--gray-a12)] antialiased leading-6">
                Work History
              </h2>
              {/* <WorkHistoryIcon className="absolute left-auto right-auto h-auto m-auto scale-150 translate-x-20 translate-y-20 stroke-0 mix-blend-hard-light fill-none blur-[2px] w-450px" /> */}
            </a>
            <div className="basis-full w-full flex-wrap max-w-[100dvw] sm:basis-1/3 sm:grow lg:basis-1/4 relative flex lg:grow flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-[var(--gray-a4)] bg-gradient-to-br from-[var(--gray-1)] to-[var(--gray-a1)] p-4 shadow-inner backdrop-blur sm:p-5 xl:p-8">
              {" "}
              <div className="prodkt-card-avatar relative z-[1] flex size-16 items-center justify-center rounded-full">
                <Aperture
                  size={40}
                  strokeWidth={1}
                  className="text-[var(--mint-10)] dark:text-[var(--mint-a9)]"
                />
                <div className="absolute size-8 bg-[var(--mint-a8)] blur-lg"></div>
              </div>
              <h2 className="z-[1] text-xl font-normal tracking-tighter text-[var(--gray-a12)] antialiased leading-6">
                Visuals
              </h2>
              {/* <VisualTwo className="absolute left-auto right-auto h-auto m-auto scale-150 translate-x-20 translate-y-20 stroke-0 mix-blend-hard-light fill-none blur-[2px] w-450px" /> */}
            </div>
            <div className="basis-full w-full flex-wrap max-w-[100dvw] sm:basis-1/3 sm:grow lg:basis-1/4 relative flex lg:grow flex-col justify-between gap-4 overflow-hidden rounded-2xl border border-[var(--gray-a4)] bg-gradient-to-br from-[var(--gray-1)] to-[var(--gray-a1)] p-4 shadow-inner backdrop-blur sm:p-5 xl:p-8">
              <div className="prodkt-card-avatar relative z-[1] flex size-16 items-center justify-center rounded-full">
                <Scroll
                  size={40}
                  strokeWidth={1}
                  className="text-[var(--violet-9)] dark:text-[var(--violet-a9)]"
                />
                <div className="absolute size-8 bg-[var(--violet-a9)] blur-lg"></div>
              </div>
              <h2 className="z-[1] text-xl font-normal tracking-tighter text-[var(--gray-a12)] antialiased leading-6">
                Resume
              </h2>
              {/* <VisualTwo className="absolute left-auto right-auto h-auto m-auto scale-150 translate-x-20 translate-y-20 stroke-0 mix-blend-hard-light fill-none blur-[2px] w-450px" /> */}
            </div>
          </div>
          <div className="relative flex size-full flex-col items-start justify-center gap-2 overflow-hidden">
            <div className="items-between flex w-full flex-col relative justify-start">
              <div className="relative flex flex-wrap w-full flex-row items-start justify-start gap-0 gap-x-2 gap-y-0 px-4">
                <h6 className="whitespace-nowrap w-auto bg-gradient-to-r from-[var(--gray-a10)] via-[var(--gray-a8)] to-[var(--gray-a10)] bg-clip-text pb-1 md:pb-4 pr-1 md:pr-2 text-xxs sm:text-xxs font-bold uppercase tracking-[0.325rem] text-transparent">
                  Frontend.
                </h6>
                <h6 className="whitespace-nowrap w-auto bg-gradient-to-r from-[var(--gray-a10)] via-[var(--gray-a8)] to-[var(--gray-a10)] bg-clip-text pb-1 md:pb-4 pr-1 md:pr-2 text-xxs sm:text-xxs font-bold uppercase tracking-[0.325rem] text-transparent">
                  Design.
                </h6>
                <h6 className="whitespace-nowrap w-auto bg-gradient-to-r from-[var(--gray-a10)] via-[var(--gray-a8)] to-[var(--gray-a10)] bg-clip-text pb-1 md:pb-4 pr-1 md:pr-2 text-xxs sm:text-xxs font-bold uppercase tracking-[0.325rem] text-transparent">
                  Development.
                </h6>
                <h6 className="whitespace-nowrap w-auto bg-gradient-to-r from-[var(--gray-a10)] via-[var(--gray-a8)] to-[var(--gray-a10)] bg-clip-text pb-1 md:pb-4 pr-1 md:pr-2 text-xxs sm:text-xxs font-bold uppercase tracking-[0.325rem] text-transparent">
                  Culture.
                </h6>
                <h6 className="whitespace-nowrap w-auto bg-gradient-to-r from-[var(--gray-a10)] via-[var(--gray-a8)] to-[var(--gray-a10)] bg-clip-text pb-1 md:pb-4 pr-1 md:pr-2 text-xxs sm:text-xxs font-bold uppercase tracking-[0.325rem] text-transparent">
                  People.
                </h6>
                <h6 className="whitespace-nowrap w-auto bg-gradient-to-r from-[var(--gray-a10)] via-[var(--gray-a8)] to-[var(--gray-a10)] bg-clip-text pb-1 md:pb-4 pr-1 md:pr-2 text-xxs sm:text-xxs font-bold uppercase tracking-[0.325rem] text-transparent">
                  Experience.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

JumpToSection.displayName = "JumpToSection"
