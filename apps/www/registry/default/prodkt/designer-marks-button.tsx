import { forwardRef } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"

export const DesignerMarksButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(function DesignerMarksButtonComponent(
  { className, children, ...props },
  ref
) {
  return (
    // <div className="relative group z-[0] hover:z-[1] has-[&_span:focus-visible]:z-[1] [&_span:focus-visible]:z-[2]">
    <div className="group relative z-[0] hover:z-[1] has-[&_span:focus-visible]:[&_span]:z-[1]">
      <Button
        tabIndex={0}
        className={cn(
          "font-siteheader pointer-events-auto relative z-0 flex cursor-pointer select-none items-center justify-center rounded-none border-transparent pb-[.345rem] pe-3 ps-4 align-baseline text-xs font-semibold tracking-[0.0925rem] ring-1 ring-inset ring-input hover:bg-primary-4 focus-visible:rounded-none focus-visible:bg-primary focus-visible:outline-0 focus-visible:outline-offset-0 focus-visible:outline-muted focus-visible:ring-0 group-hover:border-transparent group-hover:ring-primary has-[:focus-visible]:ring-transparent xl:tracking-[0.1125rem]",
          className,
          {
            ["transition-all hover:shadow-2xl"]:
              props.variant === "destructive" || !props.variant,
          }
        )}
        asChild
        ref={ref}
        {...props}
      >
        {children}
      </Button>
      <div className="designer-marks pointer-events-none absolute inset-0 z-[1] h-full w-full select-none">
        <div className="relative m-0 h-full w-full">
          <div className="absolute m-0 size-2 translate-x-[calc(-25%+0px)] translate-y-[calc(-25%+1px)] border bg-background focus-visible:border-primary group-hover:border-primary" />
          <div className="absolute bottom-0 m-0 size-2 translate-x-[calc(-25%+0px)] translate-y-[calc(25%+1px)] border bg-background focus-visible:border-primary group-hover:border-primary" />
          <div className="absolute right-0 m-0 size-2 translate-x-[calc(25%+1px)] translate-y-[calc(-25%+1px)] border bg-background focus-visible:border-primary group-hover:border-primary" />
          <div className="absolute bottom-0 right-0 m-0 size-2 translate-x-[calc(25%+1px)] translate-y-[calc(25%+1px)] border bg-background focus-visible:border-primary group-hover:border-primary" />
        </div>
      </div>
    </div>
  )
})
