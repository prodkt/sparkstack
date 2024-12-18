import * as React from "react"
import type { SVGProps } from "react"

const SvgSupabase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 47 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27.3094 47.2028C26.0832 48.7471 23.5968 47.901 23.5673 45.9292L23.1353 17.0898H42.5268C46.0392 17.0898 47.998 21.1466 45.814 23.8974L27.3094 47.2028Z"
      fill={`url(#${props?.id || ""}-supabase-a)`}
    />
    <path
      d="M27.3094 47.2028C26.0832 48.7471 23.5968 47.901 23.5673 45.9292L23.1353 17.0898H42.5268C46.0392 17.0898 47.998 21.1466 45.814 23.8974L27.3094 47.2028Z"
      fill={`url(#${props?.id || ""}-supabase-b)`}
      fillOpacity="0.2"
    />
    <path
      d="M19.4227 0.797559C20.649 -0.746829 23.1353 0.099384 23.1649 2.07117L23.3542 30.9105H4.20531C0.69287 30.9105 -1.26608 26.8537 0.918057 24.103L19.4227 0.797559Z"
      fill="#3ECF8E"
    />
    <defs>
      <linearGradient
        id={`${props?.id || ""}-supabase-a`}
        x1="23.1353"
        y1="23.4843"
        x2="40.3698"
        y2="30.7124"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#249361" />
        <stop offset="1" stopColor="#3ECF8E" />
      </linearGradient>
      <linearGradient
        id={`${props?.id || ""}-supabase-b`}
        x1="15.4944"
        y1="13.0225"
        x2="23.3542"
        y2="27.8183"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="1" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgSupabase
