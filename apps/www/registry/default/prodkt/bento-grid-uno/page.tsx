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
    <div className={"container mx-auto max-w-6xl p-4 md:py-8 lg:py-20"}>
      <div className={"relative flex flex-col space-y-16"}>
        <FeatureShowcase>
          <FeatureGrid>
            <FeatureCard
              color="gray"
              className={
                "group/first relative col-span-2 overflow-hidden lg:h-96"
              }
              label={"For hire, open-source and mentorships."}
              description={`Implementation of real projects, solving real problems, from concept to code.`}
            >
              <AddActionPopout className="duration-50 absolute right-1/3 z-[1] hidden h-full max-w-48 -translate-x-0 translate-y-0 rounded-3xl  object-contain object-right p-px pb-0 pe-0 transition-all duration-500 ease-in-out will-change-transform  group-hover/first:-translate-y-8 lg:top-32 lg:flex lg:h-auto" />
              <FloatingCreateDialog className="duration-50 absolute right-10 top-1/2 z-[3] hidden h-full -translate-x-0 -translate-y-6  rounded-3xl object-center p-px pb-0 pe-0 transition-all duration-500 ease-in-out will-change-transform group-hover/first:-translate-y-10  lg:right-20 lg:top-24 lg:flex lg:h-auto" />
              <PlanFoundrySidebar className="duration-50 absolute right-12 z-[2] hidden h-full -translate-x-0 translate-y-0 rounded-3xl border object-contain object-center p-px pb-0 pe-0 transition-all duration-1000 ease-in-out group-hover/first:translate-y-8  lg:top-32 lg:flex lg:h-auto lg:w-5/12" />
              <PlanFoundryCollapsedSidebar className="absolute right-6 top-1/3 z-[3] h-auto max-w-16 rounded-2xl border object-contain object-right pe-0 duration-1000 ease-in-out lg:h-auto" />
            </FeatureCard>

            <FeatureCard
              color="violet"
              className={
                "group/card relative col-span-2 w-full overflow-hidden lg:col-span-1"
              }
              label={"Codeblocks"}
              description={``}
            >
              <KeyboardShortcutKey className="drop-shadow-learner-badge-glow animate-keyboard-shortcut-movement motion-preset-slide-left absolute right-10 top-12 z-[2]  h-auto min-w-[10%] translate-x-1 rounded-l-2xl object-contain lg:flex" />
              <KeyboardShortcutMultikey className="animate-keyboard-shortcut-movement drop-shadow-learner-badge-glow motion-preset-pop absolute left-3 top-28 z-[3] h-auto min-w-[20%]  translate-x-1 rounded-l-2xl object-contain group-hover/card:translate-y-1 group-hover/card:scale-105 lg:flex" />
              <LearnerBadge className="animate-learner-badge-movement drop-shadow-learner-badge-glow absolute right-3 top-24 z-[2] h-auto  min-w-[35%] translate-x-1 rounded-l-2xl group-hover/card:scale-105 lg:flex" />
              <OnboardingGuideShortcuts
                className={`drop-shadow-learner-badge-glow gradientMask-to-br absolute left-5 top-32 z-[1] h-auto min-w-[85%] translate-x-1  rounded-l-2xl transition-all duration-500 group-hover/card:translate-y-1 group-hover/card:scale-105 lg:flex`}
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
                  <p className="line-clamp-none md:line-clamp-3 lg:line-clamp-none">
                    I spent nearly all of 2024 out of the game entirely and
                    unexpectedly. Instead I chose to answer a personal calling
                    and stand together with my father in his fight against
                    cancer upon his diagnosis in late December 2023.
                  </p>
                  <p>
                    I&apos;ve returned renewed, fresh and determined to build
                    some bad-ass software in 2025!
                  </p>

                  <Separator className="from-border mb-2 mt-4 bg-gradient-to-r from-90% to-transparent" />
                  <div className="max-w-1/2 flex w-fit -translate-x-2 justify-start gap-0">
                    <div className="p-0">
                      <a href="/" className="group/button size-full p-0">
                        <Button
                          asChild
                          variant="link"
                          size="sm"
                          className="font-bahnschrift flex flex-row flex-nowrap items-center justify-between text-nowrap py-2 pe-2 ps-3 text-xs uppercase"
                        >
                          Message me{" "}
                          <ArrowUpRightIcon className="text-foreground group-hover/button:animate-motion-preset-slide-right duration-50 size-3 size-full origin-bottom-left -translate-x-1 translate-y-1 scale-50 opacity-0  transition-all group-hover/button:translate-x-0 group-hover/button:translate-y-0 group-hover/button:scale-100 group-hover/button:opacity-100" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              }
            ></FeatureCard>

            <FeatureCard
              color="gray"
              className={"relative col-span-2 overflow-hidden p-px lg:h-96"}
              label={"Skilled by experience with leading technology."}
              description={
                <div>
                  <p className="text-balance">
                    As a designer that codes or a coder that also designs I take
                    pride in the role I play in the advocacy for product in its
                    totality. Owners, designers, developers and QA alike I’ve
                    spent a career listening, learning, and do-ing.
                  </p>
                  <Separator className="from-border mb-2 mt-4 bg-gradient-to-r from-90% to-transparent" />
                  <div className="max-w-1/2 flex w-fit -translate-x-2 justify-start gap-0">
                    <div className="p-0">
                      <a href="/" className="group/button size-full p-0">
                        <Button
                          asChild
                          variant="link"
                          size="sm"
                          className="font-bahnschrift flex flex-row flex-nowrap items-center justify-between text-nowrap py-2 pe-2 ps-3 text-xs uppercase"
                        >
                          About me{" "}
                          <ArrowUpRightIcon className="text-foreground group-hover/button:animate-motion-preset-slide-right duration-50 size-3 size-full origin-bottom-left -translate-x-1 translate-y-1 scale-50 opacity-0  transition-all group-hover/button:translate-x-0 group-hover/button:translate-y-0 group-hover/button:scale-100 group-hover/button:opacity-100" />
                        </Button>
                      </a>
                    </div>
                    <div className="bg-ghost-aa3 m-0 h-full w-px min-w-px p-0" />
                    <div className="p-0">
                      <a href="/" className="group/button size-full p-0">
                        <Button
                          asChild
                          variant="link"
                          size="sm"
                          className="font-bahnschrift flex flex-row flex-nowrap items-center justify-between text-nowrap py-2 pe-2 ps-3 text-xs uppercase"
                        >
                          Work History{" "}
                          <ArrowUpRightIcon className="text-foreground group-hover/button:animate-motion-preset-slide-right duration-50 size-3 size-full origin-bottom-left -translate-x-1 translate-y-1 scale-50 opacity-0  transition-all group-hover/button:translate-x-0 group-hover/button:translate-y-0 group-hover/button:scale-100 group-hover/button:opacity-100" />
                        </Button>
                      </a>
                    </div>
                    <div className="bg-ghost-aa3 m-0 h-full w-px min-w-px p-0" />
                    <div className="rounded-tr-3xl p-0">
                      <a href="/" className="group/button size-full p-0">
                        <Button
                          asChild
                          variant="link"
                          size="sm"
                          className="font-bahnschrift flex flex-row flex-nowrap items-center justify-between text-nowrap py-2 pe-2 ps-3 text-xs uppercase"
                        >
                          Resume{" "}
                          <ArrowUpRightIcon className="text-foreground group-hover/button:animate-motion-preset-slide-right duration-50 size-3 size-full origin-bottom-left -translate-x-1 translate-y-1 scale-50 opacity-0  transition-all group-hover/button:translate-x-0 group-hover/button:translate-y-0 group-hover/button:scale-100 group-hover/button:opacity-100" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              }
            >
              <div className="bg-gray-4 absolute inset-0 z-[0] size-80 -translate-y-0 translate-x-full rounded-full mix-blend-hard-light blur-3xl" />
              <div className="landing-marquee-mask absolute inset-x-0 inset-y-auto my-auto ml-auto mr-0 flex h-full w-3/4 place-content-center place-items-center items-center justify-center">
                <TechnologyMarquee />
              </div>
            </FeatureCard>
          </FeatureGrid>
        </FeatureShowcase>
      </div>
    </div>
  )
}
