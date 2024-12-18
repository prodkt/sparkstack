import { forwardRef } from "react";

import { cn } from "@/lib/utils";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode;
  navigation?: React.ReactNode;
  actions?: React.ReactNode;
}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  function MarketingHeaderComponent(
    { className, logo, navigation, actions, ...props },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={cn(
          "site-header sticky top-0 z-10 w-full bg-accent-a2 py-2 backdrop-blur-md",
          className,
        )}
        {...props}
      >
        <div className="container">
          <div className="grid h-14 grid-cols-3 items-center">
            <div>{logo}</div>
            <div className="order-first md:order-none">{navigation}</div>
            <div className="flex items-center justify-end space-x-1">
              {actions}
            </div>
          </div>
        </div>
      </div>
    );
  },
);
