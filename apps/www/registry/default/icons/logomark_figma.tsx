import type { SVGProps } from "react"

const FigmaLogomark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={256}
    height={384}
    viewBox="0 0 256 384"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <title>Figma</title>
    <path
      d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z"
      fill="#0ACF83"
    />
    <path
      d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z"
      fill="#A259FF"
    />
    <path
      d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z"
      fill="#F24E1E"
    />
    <path
      d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z"
      fill="#FF7262"
    />
    <path
      d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64 28.672-64 64-64 64 28.672 64 64Z"
      fill="#1ABCFE"
    />
  </svg>
)

export default FigmaLogomark
