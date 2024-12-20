import { forwardRef } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"

export const DesignerMarksButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(function DesignerMarksButtonComponent(
  { className, children, ...props },
  ref
) {
  return (
    // <div className="relative group z-[0] hover:z-[1] has-[&_span:focus-visible]:z-[1] [&_span:focus-visible]:z-[2]">
    <div className="group/item relative min-h-fit min-w-fit z-0 hover:z-[1] hover:bg-gray-a3 has-[&_>div:focus-visible]:z-[1] p-2 motion-duration-300 -m-1">
      {/* <div className="relative min-w-min whitespace-nowrap size-min"> */}
      <Button
        tabIndex={0}
        variant="ghost"
        className={cn(
          "min-w-min pointer-events-auto whitespace-nowrap relative z-0 flex cursor-pointer items-center justify-center !bg-transparent !ring-transparent pb-[.345rem] pe-3 ps-4 align-baseline text-xs font-semibold tracking-[0.0925rem] ring-1 ring-inset ring-input hover:bg-gray-4 focus-visible:rounded-none focus-visible:bg-gray focus-visible:outline-0 focus-visible:outline-offset-0 focus-visible:outline-muted focus-visible:ring-0 group-hover/item:border-transparent group-hover/item:ring-gray has-[:focus-visible]:ring-transparent xl:tracking-[-0.01125rem]",
          className,
          {
            ["transition-all hover:shadow-2xl"]:
              props.variant === "destructive" || !props.variant,
          }
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
      <div className="pointer-events-none absolute inset-0 z-[1] select-none size-full self-stretch whitespace-nowrap p-0 m-0 motion-duration-300 transition-all">
        <div className="relative m-0 size-full border border-gray-a2 group-hover/item:border-gray-a4">
          <div className="absolute m-0 size-2 translate-x-[calc(-25%-3px)] translate-y-[calc(-25%-2px)] border bg-gray-a2 focus-visible:border-gray-a2 transition-all motion-duration-300 group-hover/item:border-gray-9 rounded" />
          <div className="absolute bottom-0 m-0 size-2 translate-x-[calc(-25%-3px)] translate-y-[calc(25%+3px)] border bg-gray-a2 focus-visible:border-gray-a2 transition-all motion-duration-300 group-hover/item:border-gray-9 rounded" />
          <div className="absolute right-0 m-0 size-2 translate-x-[calc(25%+3px)] translate-y-[calc(-25%-2px)] border bg-gray-a2 focus-visible:border-gray-a2 transition-all motion-duration-300 group-hover/item:border-gray-9 rounded" />
          <div className="absolute bottom-0 right-0 m-0 size-2 translate-x-[calc(25%+3px)] translate-y-[calc(25%+3px)] border bg-gray-a2 focus-visible:border-gray-a2 transition-all motion-duration-300 group-hover/item:border-gray-9 rounded" />
        </div>
      </div>
    </div>
  )
})
