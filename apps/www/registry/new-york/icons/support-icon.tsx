import * as React from "react"
import type { SVGProps } from "react"
import clsx from "clsx"

export const SupportIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    {...props}
    className={clsx(
      props.className,
      "dark:text-refine-yellow text-refine-orange"
    )}
  >
    <rect
      width={64}
      height={64}
      fill="url(#support-a)"
      fillOpacity={0.4}
      rx={16}
    />
    <rect
      width={63}
      height={63}
      x={0.5}
      y={0.5}
      stroke="url(#support-b)"
      strokeOpacity={0.5}
      rx={15.5}
    />
    <path
      fill="currentColor"
      d="M18.818 42.59a1 1 0 0 0 1.134-1.648l-1.134 1.647Zm-.06-1.347.707-.708-.708.708Zm0-21.486-.708-.707.707.707Zm26.485 0-.708.707.708-.707Zm0 21.486-.708-.708.708.708Zm-1.195-.301a1 1 0 1 0 1.134 1.647l-1.134-1.647ZM27.03 39.889l.52.854-.52-.854Zm-2.626 4.42-.698.717.698-.717Zm15.194 0 .698.717-.698-.717Zm-2.626-4.42-.52.854.52-.854Zm-17.02 1.053a3.464 3.464 0 0 1-.486-.407L18.05 41.95c.238.237.493.45.768.64l1.134-1.648Zm-.487-.407c-.661-.661-1.048-1.562-1.253-3.085C18.002 35.9 18 33.857 18 31h-2c0 2.8-.002 5 .229 6.717.234 1.745.726 3.137 1.821 4.233l1.414-1.415ZM18 31c0-2.85.002-5.155.213-6.968.214-1.836.623-2.94 1.252-3.567L18.05 19.05c-1.13 1.13-1.598 2.82-1.824 4.75C16 25.755 16 28.194 16 31h2Zm1.465-10.535c.661-.662 1.562-1.05 3.085-1.254C24.1 19.002 26.143 19 29 19v-2c-2.8 0-5-.002-6.717.229-1.745.234-3.137.726-4.233 1.821l1.415 1.415ZM29 19h6v-2h-6v2Zm6 0c2.857 0 4.899.002 6.45.21 1.523.206 2.424.593 3.085 1.254l1.415-1.414c-1.096-1.095-2.488-1.587-4.233-1.821C40 16.998 37.8 17 35 17v2Zm9.535 1.465c.629.628 1.038 1.73 1.252 3.567C46 25.845 46 28.15 46 31h2c0-2.807.002-5.245-.226-7.2-.226-1.93-.695-3.62-1.824-4.75l-1.415 1.415ZM46 31c0 2.857-.002 4.899-.21 6.45-.206 1.523-.593 2.424-1.255 3.085l1.415 1.415c1.095-1.096 1.587-2.488 1.821-4.233C48.002 36 48 33.8 48 31h-2Zm-1.465 9.535a3.466 3.466 0 0 1-.487.407l1.134 1.647c.275-.19.53-.402.768-.64l-1.415-1.413Zm-18.026-1.5c-.54.329-1.897 1.03-2.763 1.897-.445.446-.9 1.063-.983 1.84-.09.836.273 1.601.942 2.254l1.396-1.433c-.366-.356-.355-.55-.35-.608.013-.118.102-.331.41-.64.64-.641 1.632-1.141 2.389-1.602l-1.04-1.708Zm-2.804 5.99C24.805 46.098 26.17 47 27.958 47v-2c-1.044 0-1.933-.507-2.857-1.407l-1.396 1.433ZM27.958 47h8.084v-2h-8.084v2Zm8.084 0c1.788 0 3.153-.903 4.253-1.974l-1.396-1.433c-.924.9-1.813 1.407-2.857 1.407v2Zm4.253-1.974c.67-.653 1.031-1.418.942-2.254-.083-.777-.538-1.394-.983-1.84-.866-.867-2.223-1.568-2.763-1.897l-1.04 1.708c.756.46 1.747.96 2.388 1.602.308.309.397.522.41.64.005.059.016.252-.35.608l1.396 1.433Zm-2.804-5.991a10.588 10.588 0 0 0-10.982 0l1.04 1.708a8.588 8.588 0 0 1 8.901 0l1.04-1.708ZM34.75 31A2.75 2.75 0 0 1 32 33.75v2A4.75 4.75 0 0 0 36.75 31h-2ZM32 33.75A2.75 2.75 0 0 1 29.25 31h-2A4.75 4.75 0 0 0 32 35.75v-2ZM29.25 31A2.75 2.75 0 0 1 32 28.25v-2A4.75 4.75 0 0 0 27.25 31h2ZM32 28.25A2.75 2.75 0 0 1 34.75 31h2A4.75 4.75 0 0 0 32 26.25v2Z"
    />
    <defs>
      <radialGradient
        id="support-a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(45) scale(90.5097)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" />
        <stop offset={1} stopColor="currentColor" stopOpacity={0.25} />
      </radialGradient>
      <radialGradient
        id="support-b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(45) scale(90.5097)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" />
        <stop offset={0.5} stopColor="currentColor" stopOpacity={0} />
        <stop offset={1} stopColor="currentColor" stopOpacity={0.25} />
      </radialGradient>
    </defs>
  </svg>
)
