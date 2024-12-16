import { forwardRef } from "react";

import { Slot, Slottable } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

export const GradientSecondaryText = forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    asChild?: boolean;
  }
>(function GradientSecondaryTextComponent({ className, ...props }, ref) {
  const Comp = props.asChild ? Slot : "span";

  return (
    <Comp ref={ref} className={cn("text-muted px-2", className)} {...props}>
      <Slottable>{props.children}</Slottable>
    </Comp>
  );
});
