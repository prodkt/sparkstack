import { ArrowUpRightIcon } from "lucide-react"

import {
  AddActionPopout,
  FloatingCreateDialog,
  KeyboardShortcutKey,
  KeyboardShortcutMultikey,
  LearnerBadge,
  OnboardingGuideShortcuts,
  PlanFoundryCollapsedSidebar,
  PlanFoundrySidebar,
} from "@/registry/default/prodkt/assets"
import { Button } from "@/registry/default/ui/button"
import { Separator } from "@/registry/default/ui/separator"

import { FeatureCard, FeatureGrid, FeatureShowcase } from "./index"
import { TechnologyMarquee } from "./technology-marquee"

export function BentoGridUno() {
  return (
    <div className={"container mx-auto py-20 max-w-6xl"}>
      <div
        className={
          "flex flex-col space-y-16 xl:space-y-32 2xl:space-y-36 relative"
        }
      >
        <FeatureShowcase>
          <FeatureGrid>
            <FeatureCard
              color="gray"
              className={"relative col-span-2 lg:h-96 overflow-hidden group"}
              label={"For hire. For open-source. For collaboration."}
              description={`Implementation of real projects, solving real problems, from concept to code.`}
            >
              <AddActionPopout className="absolute right-1/3 hidden h-full max-w-48 -translate-x-0 translate-y-0 object-contain object-right ease-in-out  duration-500 will-change-transform group-hover:-translate-y-8 transition-all duration-50 rounded-3xl lg:top-32 lg:flex lg:h-auto  p-px pe-0 pb-0 z-[1]" />
              <FloatingCreateDialog className="absolute right-20 hidden h-full -translate-x-0 -translate-y-6 object-center ease-in-out  duration-500 will-change-transform group-hover:-translate-y-10 transition-all duration-50 rounded-3xl lg:top-24 lg:flex lg:h-auto  p-px pe-0 pb-0 z-[3]" />
              <PlanFoundrySidebar className="absolute right-12 hidden h-full -translate-x-0 translate-y-0 object-contain object-center ease-in-out border duration-1000 group-hover:translate-y-8 transition-all duration-50 rounded-3xl lg:top-32 lg:flex lg:h-auto lg:w-5/12  p-px pe-0 pb-0 z-[2]" />
              <PlanFoundryCollapsedSidebar className="absolute top-1/3 right-6 h-auto max-w-16 object-contain object-right border rounded-2xl ease-in-out duration-1000 lg:h-auto pe-0 z-[3]" />
            </FeatureCard>

            <FeatureCard
              color="mint"
              className={
                "relative col-span-2 w-full lg:col-span-1  overflow-hidden"
              }
              label={"Codeblocks"}
              description={``}
            >
              <KeyboardShortcutKey className="drop-shadow-learner-badge-glow animate-keyboard-shortcut-movement absolute right-10 top-10 translate-x-1 hidden h-auto min-w-[10%] rounded-l-2xl lg:flex z-[2] motion-preset-slide-left" />
              <KeyboardShortcutMultikey className="hover:scale-105 hover:translate-y-1 animate-keyboard-shortcut-movement drop-shadow-learner-badge-glow absolute left-3 top-28 translate-x-1 hidden h-auto min-w-[20%] rounded-l-2xl lg:flex z-[3] motion-preset-pop" />
              <LearnerBadge className="hover:scale-105 animate-learner-badge-movement drop-shadow-learner-badge-glow absolute right-3 top-24 translate-x-1 hidden h-auto min-w-[35%] rounded-l-2xl lg:flex z-[2]" />
              <OnboardingGuideShortcuts
                className={`hover:scale-105 hover:translate-y-1 transition-all duration-500 drop-shadow-learner-badge-glow absolute left-5 top-32 translate-x-1 hidden h-auto min-w-[85%] rounded-l-2xl lg:flex gradientMask-to-br z-[1]`}
              />

              {/* <div className="absolute inset-0 bg-lighting-test size-full bg-cover blur saturate-0 z-[0]"> </div> */}
            </FeatureCard>

            <FeatureCard
              color="iris"
              className={
                "relative col-span-2 overflow-hidden lg:col-span-1 lg:h-96"
              }
              label={`I'm open to opportunity.`}
              description={
                <div className="flex flex-col gap-2">
                  <p>
                    I spent nearly all of 2024 out of the game entirely and
                    unexpectedly. Instead I chose to answer a personal calling
                    and stand together with my father in his fight against
                    cancer upon his diagnosis in late December 2023.
                  </p>
                  <p>
                    I&apos;ve returned renewed, fresh and determined to build
                    some bad-ass software in 2025!
                  </p>

                  <Separator className="mt-4 mb-2 bg-gradient-to-r from-border from-90% to-transparent" />
                  <div className="flex justify-start w-fit max-w-1/2 gap-0 -translate-x-2">
                    <div className="p-0">
                      <a href="/" className="group p-0 size-full">
                        <Button
                          asChild
                          variant="link"
                          size="sm"
                          className="font-bahnschrift uppercase flex flex-row text-nowrap flex-nowrap text-xs items-center justify-between ps-3 pe-2 py-2"
                        >
                          Message me{" "}
                          <ArrowUpRightIcon className="group-hover:opacity-100 scale-50 group-hover:scale-100 text-foreground origin-bottom-left -translate-x-1 translate-y-1 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:animate-motion-preset-slide-right  opacity-0 size-3 size-full transition-all duration-50" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              }
            ></FeatureCard>

            <FeatureCard
              color="gray"
              className={"relative col-span-2 overflow-hidden lg:h-96 p-px"}
              label={"Skilled by experience with leading technology."}
              description={
                <div>
                  <p className="text-balance">
                    As a designer that codes or a coder that also designs I take
                    pride in the role I play in the advocacy for product in its
                    totality. Owners, designers, developers and QA alike I’ve
                    spent a career listening, learning, and do-ing.
                  </p>
                  <Separator className="mt-4 mb-2 bg-gradient-to-r from-border from-90% to-transparent" />
                  <div className="flex justify-start w-fit max-w-1/2 gap-0 -translate-x-2">
                    <div className="p-0">
                      <a href="/" className="group p-0 size-full">
                        <Button
                          asChild
                          variant="link"
                          size="sm"
                          className="font-bahnschrift uppercase flex flex-row text-nowrap flex-nowrap text-xs items-center justify-between ps-3 pe-2 py-2"
                        >
                          About me{" "}
                          <ArrowUpRightIcon className="group-hover:opacity-100 scale-50 group-hover:scale-100 text-foreground origin-bottom-left -translate-x-1 translate-y-1 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:animate-motion-preset-slide-right  opacity-0 size-3 size-full transition-all duration-50" />
                        </Button>
                      </a>
                    </div>
                    <div className="bg-ghost-aa3 w-px min-w-px h-full m-0 p-0" />
                    <div className="p-0">
                      <a href="/" className="group p-0 size-full">
                        <Button
                          asChild
                          variant="link"
                          size="sm"
                          className="font-bahnschrift uppercase flex flex-row text-nowrap flex-nowrap text-xs items-center justify-between ps-3 pe-2 py-2"
                        >
                          Work History{" "}
                          <ArrowUpRightIcon className="group-hover:opacity-100 scale-50 group-hover:scale-100 text-foreground origin-bottom-left -translate-x-1 translate-y-1 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:animate-motion-preset-slide-right  opacity-0 size-3 size-full transition-all duration-50" />
                        </Button>
                      </a>
                    </div>
                    <div className="bg-ghost-aa3 w-px min-w-px h-full m-0 p-0" />
                    <div className="p-0 rounded-tr-3xl">
                      <a href="/" className="group p-0 size-full">
                        <Button
                          asChild
                          variant="link"
                          size="sm"
                          className="font-bahnschrift uppercase flex flex-row text-nowrap flex-nowrap text-xs items-center justify-between ps-3 pe-2 py-2"
                        >
                          Resume{" "}
                          <ArrowUpRightIcon className="group-hover:opacity-100 scale-50 group-hover:scale-100 text-foreground origin-bottom-left -translate-x-1 translate-y-1 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:animate-motion-preset-slide-right  opacity-0 size-3 size-full transition-all duration-50" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              }
            >
              <div className="absolute right-0 translate-x-full -translate-y-0 mix-blend-hard-light inset-0 bg-gray-4 rounded-full size-80 blur-3xl z-[0]" />
              <div className="ml-auto mr-0 inset-x-0 my-auto inset-y-auto w-3/4 absolute h-full flex items-center justify-center place-content-center place-items-center landing-marquee-mask">
                <TechnologyMarquee />
              </div>
            </FeatureCard>
          </FeatureGrid>
        </FeatureShowcase>
      </div>
    </div>
  )
}
