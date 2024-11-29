import * as React from "react"
import { SVGProps } from "react"

export const KeyboardShortcutKey = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={45}
    height={45}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={0.75} y={0.75} width={43.5} height={43.5} rx={11} fill="#2A2A2A" />
    <rect
      x={0.75}
      y={0.75}
      width={43.5}
      height={43.5}
      rx={11}
      fill="url(#keyboard-shortcut-key-a)"
      fillOpacity={0.16}
    />
    <rect
      x={0.75}
      y={0.75}
      width={43.5}
      height={43.5}
      rx={11}
      stroke="url(#keyboard-shortcut-key-b)"
      strokeWidth={0.5}
    />
    <path
      d="M14.852 31.964V13.036h3.429v8.697h.232l7.384-8.697h4.186l-7.32 8.494 7.385 10.434h-4.122l-5.647-8.115-2.098 2.477v5.638h-3.429Z"
      fill="#D4D4D8"
    />
    <defs>
      <linearGradient
        id="keyboard-shortcut-key-a"
        x1={1.018}
        y1={27.965}
        x2={27.954}
        y2={0.99}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={1} />
      </linearGradient>
      <linearGradient
        id="keyboard-shortcut-key-b"
        x1={4.012}
        y1={1}
        x2={24.499}
        y2={48.164}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.4} />
        <stop offset={0.406} stopColor="#fff" stopOpacity={0.01} />
        <stop offset={0.574} stopColor="#fff" stopOpacity={0.01} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
