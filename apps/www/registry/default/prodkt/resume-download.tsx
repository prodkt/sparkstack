import { CloudDownload } from "lucide-react"

import { cn } from "@/lib/utils"
import { CircuitGraphic } from "@/registry/default/prodkt/assets/circuit"

export default function ResumeDownload({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-auto w-full max-w-full px-1 py-4 md:py-16 lg:py-28",
        className
      )}
    >
      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-4 lg:flex-row">
        <div className="relative flex basis-1/3 flex-col items-center justify-center gap-5 lg:justify-start xl:items-start">
          <h5 className="text-center text-6xl font-medium leading-none tracking-tight text-[var(--gray-11)] lg:text-left">
            A leave behind.
          </h5>
          <p className="leading-none tracking-normal text-[var(--gray-9)] text-balance">
            Print out for reference or for someone else in the office.
          </p>
          <a
            className="flex flex-row items-start justify-center gap-2"
            href="/resume/BryanFunk_CV-Resume_v2_001_reduced.pdf"
          >
            <CloudDownload
              strokeWidth={1}
              className="inset-0 z-[1] m-auto size-6 fill-[var(--gray-a1)] stroke-[var(--primary-10)]"
            />
            <p className="text-nowrap text-right font-medium leading-7 tracking-tighter underline decoration-[var(--primary-9)] underline-offset-8">
              Download Resume
            </p>
          </a>
        </div>
        <div className="relative flex basis-2/3 flex-col items-center justify-start">
          <a
            href="/assets/downloads/BryanFunk_CV-Resume_v2_001_reduced.pdf"
            className="absolute z-[2] flex size-full flex-col items-center justify-center"
          >
            <div className="group flex flex-row items-end text-left justify-center gap-4 relative">
              <CircuitGraphic className="absolute m-auto translate-y-1/4 origin-center inset-auto z-[0] w-[100dvw] min-w-[100dvw] fill-transparent drop-shadow-sm stroke-[var(--gray-a6)] dark:stroke-[var(--gray-12)] stroke-[1px] dark:stroke-[0.005px] gradientMask-11 dark:brightness-200 select-none pointer-events-none" />
              <CircuitGraphic className="absolute m-auto translate-y-1/4 blur origin-center inset-auto z-[0] w-[100dvw] min-w-[100dvw] fill-transparent stroke-[var(--gray-12)] stroke-[0.0125px] mix-blend-hard-light gradientMask-11 brightness-0 contrast-200 dark:brightness-25 select-none pointer-events-none" />

              <CloudDownload
                strokeWidth={2.5}
                className="absolute inset-0 blur z-[1] m-auto  -ml-20 size-96 fill-[var(--primary-a1)] stroke-[var(--primary-a6)] gradientMask-to-br stroke-[0.05px] brightness-0 dark:opacity-100 dark:brightness-200"
              />
              <CloudDownload
                strokeWidth={2.5}
                className="absolute inset-0 blur-xl z-[1] m-auto -ml-20 size-96 fill-[var(--primary-a1)] mix-blend-hard-light stroke-[var(--primary-a2)] dark:stroke-[var(--primary-a5)] transition-all duration-1000 group-hover:scale-95 group-hover:stroke-[var(--primary-a7)] gradientMask-to-tr stroke-[1.05px] brightness-0 dark:brightness-200"
              />

              <CloudDownload
                strokeWidth={2.5}
                className="inset-0 z-[1] m-auto -ml-20 size-96 fill-[var(--gray-a1)] [--motion-translate-duration:8s] [--motion-duration:8s] [--motion-scale-duration:8s]  stroke-[var(--primary-a9)] gradientMask-11 stroke-[0.075px] dark:stroke-[0.05px] mix-blend-hard-light brightness-0 dark:opacity-100 dark:brightness-200"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
