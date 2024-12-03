import { forwardRef } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/registry/default/ui/button';

export const AuthButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(function CtaButtonComponent({ className, children, ...props }, ref) {
  return (
    // <div className="relative group z-[0] hover:z-[1] has-[&_span:focus-visible]:z-[1] [&_span:focus-visible]:z-[2]">
    <div className="relative group z-[0] has-[&_span:focus-visible]:[&_span]:z-[1] hover:z-[1]">
    <Button
      tabIndex={0}
      className={cn('tracking-[0.0925rem] xl:tracking-[0.1125rem] relative pb-[.345rem] flex items-center justify-center align-baseline z-0 has-[:focus-visible]:ring-transparent focus-visible:outline-muted focus-visible:rounded-none focus-visible:ring-0 focus-visible:bg-primary focus-visible:outline-0 focus-visible:outline-offset-0 ps-4 border-transparent ring-1 ring-inset ring-input group-hover:ring-primary group-hover:border-transparent hover:bg-primary-4 rounded-none select-none pointer-events-auto cursor-pointer pe-3 font-siteheader text-xs font-semibold', className, {
        ['transition-all hover:shadow-2xl']:
          props.variant === 'destructive' || !props.variant,
      })}
      asChild
      ref={ref}
      {...props}
    >
      {children}
    </Button>
      <div className="absolute designer-marks w-full h-full z-[1] inset-0 select-none pointer-events-none">
        <div className="relative w-full h-full m-0">
          <div className="size-2 m-0 border group-hover:border-primary focus-visible:border-primary absolute bg-background -translate-y-[calc(25%+1px)] -translate-x-[calc(25%+0px)]" />
          <div className="size-2 m-0 bottom-0 border group-hover:border-primary focus-visible:border-primary absolute bg-background translate-y-[calc(25%+1px)] -translate-x-[calc(25%+0px)]" />
          <div className="size-2 m-0 right-0 border group-hover:border-primary focus-visible:border-primary absolute bg-background -translate-y-[calc(25%+1px)] translate-x-[calc(25%+1px)]" />
          <div className="size-2 m-0 bottom-0 right-0 border group-hover:border-primary focus-visible:border-primary absolute bg-background translate-y-[calc(25%+1px)] translate-x-[calc(25%+1px)]" />
        </div>
      </div>
    </div>
  );
});
