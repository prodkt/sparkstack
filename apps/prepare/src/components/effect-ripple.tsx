import React, { type CSSProperties } from "react";

import { cn } from '@/lib/utils';

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

const Ripple = React.memo(function Ripple({
  mainCircleSize = 45,
  mainCircleOpacity = 0.08,
  numCircles = 8,
  className,
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none select-none absolute inset-0 [mask-image:linear-gradient(to_top,white,transparent)]",
        className,
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 8;
        const opacity = mainCircleOpacity - i * 0.012;
        const animationDelay = `${i * 0.1}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const borderOpacity = 5 + i * 4;
        const borderRadius = 1 + i * 0.15;

        return (
          <div
            key={i}
            className={`absolute animate-ripple bg-accent-a4 shadow-xl border [--i:${i}]`}
            style={
              {
                width: `${size}%`,
                height: `${size}%`,
                opacity,
                animationDelay,
                borderStyle,
                borderRadius: `${borderRadius}rem`,
                borderWidth: "1px",
                borderColor: `hsl(var(--foreground), ${borderOpacity / 100})`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;
