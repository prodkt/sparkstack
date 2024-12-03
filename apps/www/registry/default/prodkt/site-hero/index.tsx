import { cn } from "@/lib/utils"
import { ClientShuffle } from "@/registry/default/prodkt/client-shuffle"

import {
  HeroDescription,
  HeroH3,
  HeroHeading,
  HeroSubheading,
} from "./heading-texts"

export function SiteHero() {
  return (
    <div
      className={cn(
        "relative m-0 flex h-screen w-full flex-col items-start justify-start p-6 xs:p-8 md:p-20"
      )}
    >
      <div className="relative inset-0 z-[1] mx-auto mb-auto flex h-full max-h-[70dvh] w-full max-w-[80dvw] flex-col items-start justify-start gap-16">
        <HeroHeading className="" />
        <div className="flex flex-col gap-4">
          <HeroSubheading className="" />
          <HeroDescription className="" />
        </div>
        <div className="mx-auto flex flex-col gap-1">
          <HeroH3 className="mx-auto text-center" />
          <ClientShuffle />
        </div>
      </div>

      <img
        src="/images/prodkt/bryanfunk_hero__personal-landing-bg-alpha.avif"
        className="pointer-events-none absolute inset-0 z-[0] m-0 h-[75dvh] w-full select-none object-cover object-[25%_50%] sm:h-full sm:object-[10%_50%] md:object-center"
      />
    </div>
  )
}
