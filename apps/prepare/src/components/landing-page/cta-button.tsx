import { forwardRef } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/registry/default/ui/button';

export const CtaButton = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(function CtaButtonComponent({ className, children, ...props }, ref) {
  return (
    <Button
      className={cn(
        'h-12 flex items-center justify-center place-content-center place-items-center justify-items-center rounded-xl px-4 text-base font-semibold [&_span]:pt-0.5',
        className,
        {
          'transition-all hover:shadow-2xl':
            props.variant === 'default' || !props.variant,
      })}
      asChild
      ref={ref}
      {...props}
    >
      {children}
    </Button>
  );
});
