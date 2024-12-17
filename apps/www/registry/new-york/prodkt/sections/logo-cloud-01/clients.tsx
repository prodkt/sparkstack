import { MotionConfig, motion } from "framer-motion"

import {
  CiscoLogo,
  CocaColaLogo,
  DominosLogo,
  EminemLogo,
  HellsAngelsLogo2,
  HmLogo,
  HpLogo,
  NexsaleLogo,
  RevolutionVodkaLogo,
  SamsungLogo,
  ShadyLogo,
  ToyotaLogo,
  TruwhipLogo,
} from "@/registry/default/icons"
import Marquee from "@/registry/new-york/effects/marquee"
import { FadeIn } from "@/registry/new-york/prodkt/motion/fade-in"

const clients = [
  CocaColaLogo,
  DominosLogo,
  TruwhipLogo,
  HellsAngelsLogo2,
  ShadyLogo,
  RevolutionVodkaLogo,
  ToyotaLogo,
  HmLogo,
  SamsungLogo,
  HpLogo,
  CiscoLogo,
  EminemLogo,
]

export function Clients() {
  return (
    <MotionConfig
      transition={{
        duration: 5,
        delayChildren: 0,
        viewport: { once: false },
        transition: {
          type: "Inertia",
          stiffness: 100,
          damping: 60,
          restDelta: 0.001,
          staggerChildren: -10.1,
          delayChildren: 0,
        },
      }}
    >
      <FadeIn>
        <div
          id="bryan-worked-with"
          className="relative flex flex-col justify-center items-center md:py-20 size-full min-h-72 text-center z-[1]"
        >
          <h3 className="absolute text-xl lg:flex text-balance top-10">
            Proud to have worked with some great brands through the years.
          </h3>
          <div className="flex flex-col items-center justify-center w-full h-auto gap-0 prodkt-logo-grid">
            <Marquee
              reverse
              pauseOnHover
              className="[--duration:50s] w-full prodkt-logo-grid"
            >
              <ParentComponent />
            </Marquee>
            <Marquee
              pauseOnHover
              className="[--duration:50s] w-full prodkt-logo-grid"
            >
              <ParentComponent />
            </Marquee>{" "}
            <Marquee
              reverse
              pauseOnHover
              className="[--duration:50s] w-full prodkt-logo-grid"
            >
              <ParentComponent />
            </Marquee>
          </div>
        </div>
      </FadeIn>
    </MotionConfig>
  )
}

export const ParentComponent = () => {
  return (
    <>
      {Array.from({ length: clients.length * 1 }).map((_, index) => {
        // Calculate the original index in the clients array
        const originalIndex = index % clients.length
        const logo = clients[originalIndex]
        // Determine position
        const isFirst = index < clients.length // First third
        const isLast = index >= clients.length * 2 // Last third
        // Apply conditional styling or classes based on position
        const itemClass = isFirst
          ? "firstChildStyle reverse [animation-direction:reverse]"
          : isLast
            ? "lastChildStyle reverse [animation-direction:reverse]"
            : "middleChildStyle"

        // const reverse = isFirst || isLast;

        return (
          <motion.div layout className={itemClass} key={index}>
            <div className="itemItem">
              <div className="relative p-px rounded-[24px] size-20 overflow-hidden aspect-square clientLogo isolate">
                <div className="flex justify-center items-center p-4 rounded-[24px] size-20 aspect-square">
                  {logo({ className: "h-5 w-auto" })}
                  <div className="top-0 left-0 z-[-1] absolute  blur-xl rounded-full size-5"></div>
                  <svg
                    width="0"
                    height="0"
                    className="absolute inset-0 object-cover size-full"
                    viewBox="0 0 1 1"
                  >
                    <clipPath
                      id="squircleClip"
                      clipPathUnits="objectBoundingBox"
                    >
                      <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
                    </clipPath>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </>
  )
}
