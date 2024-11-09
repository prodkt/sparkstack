'use client'
import type {RippleType} from "@/registry/default/hooks/use-ripple";
import type {FC} from "react";
import type {HTMLMotionProps} from "framer-motion";
import type {HTMLSparkStackProps} from "@/types/sparkstack";

import {AnimatePresence, m, LazyMotion} from "framer-motion";
import {clamp} from "@/registry/default/lib/utils";

export interface RippleProps extends HTMLSparkStackProps<"span"> {
  ripples: RippleType[];
  color?: string;
  motionProps?: HTMLMotionProps<"span">;
  style?: React.CSSProperties;
  onClear: (key: React.Key) => void;
}

const domAnimation = () => import("@/registry/default/lib/dom-animation").then((res) => res.default);

const Ripple: FC<RippleProps> = (props) => {
  const {ripples = [], motionProps, color = "currentColor", style, onClear} = props;

  return (
    <>
      {ripples.map((ripple) => {
        const duration = clamp(0.01 * ripple.size, 0.2, ripple.size > 100 ? 0.75 : 0.5);

        return (
          <LazyMotion key={ripple.key} features={domAnimation}>
            <AnimatePresence mode="popLayout">
              <m.span
                animate={{transform: "scale(2)", opacity: 0}}
                className="sparkstack-ripple"
                exit={{opacity: 0}}
                initial={{transform: "scale(0)", opacity: 0.35}}
                style={{
                  position: "absolute",
                  backgroundColor: color,
                  borderRadius: "100%",
                  transformOrigin: "center",
                  pointerEvents: "none",
                  overflow: "hidden",
                  inset: 0,
                  zIndex: 0,
                  top: ripple.y,
                  left: ripple.x,
                  width: `${ripple.size}px`,
                  height: `${ripple.size}px`,
                  ...style,
                }}
                transition={{duration}}
                onAnimationComplete={() => {
                  onClear(ripple.key);
                }}
                {...motionProps}
              />
            </AnimatePresence>
          </LazyMotion>
        );
      })}
    </>
  );
};

Ripple.displayName = "SparkStack.Ripple";

export default Ripple;

export {useRipple} from "@/registry/default/hooks/use-ripple";
