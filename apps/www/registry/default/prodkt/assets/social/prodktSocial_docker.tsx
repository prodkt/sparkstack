import { SVGProps } from "react"

const DockerLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="currentcolor"
        fillOpacity={0.44}
        d="m26.267 14.723.561.408c.976.79 1.537 1.682 1.66 2.702 1.048-.204 2.39-.05 2.975.357l.537.332-.098.204c-.17.382-.22.484-.244.535-.95 1.912-2.83 1.938-3.707 1.912-2.22 5.584-6.953 8.67-13.344 8.67-2.952 0-5.196-.944-6.709-2.805-2-2.448-2-5.635-1.83-6.655l.05-.204h17.637c.927 0 1.634-.255 1.976-.459a3.417 3.417 0 0 1-.513-1.555c-.073-1.02.171-2.091.659-2.856l.39-.586Zm-15.563 2.396v2.55H8.02v-2.55h2.684Zm3.17 0v2.55h-2.683v-2.55h2.684Zm3.172 0v2.55h-2.683v-2.55h2.683Zm3.171 0v2.55h-2.683v-2.55h2.683Zm3.172 0v2.55h-2.684v-2.55h2.684Zm-3.172-3.06v2.55h-2.683v-2.55h2.683Zm-3.17 0v2.55h-2.684v-2.55h2.683Zm-3.172 0v2.55H11.19v-2.55h2.684ZM20.217 11v2.55h-2.683V11h2.683Z"
      />
    </g>
    <path
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="bevel"
      strokeOpacity={0.16}
      strokeWidth={0.25}
      d="m26.267 14.723.561.408c.976.79 1.537 1.682 1.66 2.702 1.048-.204 2.39-.05 2.975.357l.537.332-.098.204c-.17.382-.22.484-.244.535-.95 1.912-2.83 1.938-3.707 1.912-2.22 5.584-6.953 8.67-13.344 8.67-2.952 0-5.196-.944-6.709-2.805-2-2.448-2-5.635-1.83-6.655l.05-.204h17.637c.927 0 1.634-.255 1.976-.459a3.417 3.417 0 0 1-.513-1.555c-.073-1.02.171-2.091.659-2.856l.39-.586Zm-15.563 2.396v2.55H8.02v-2.55h2.684Zm3.17 0v2.55h-2.683v-2.55h2.684Zm3.172 0v2.55h-2.683v-2.55h2.683Zm3.171 0v2.55h-2.683v-2.55h2.683Zm3.172 0v2.55h-2.684v-2.55h2.684Zm-3.172-3.06v2.55h-2.683v-2.55h2.683Zm-3.17 0v2.55h-2.684v-2.55h2.683Zm-3.172 0v2.55H11.19v-2.55h2.684ZM20.217 11v2.55h-2.683V11h2.683Z"
    />
    <defs>
      <filter
        id="a"
        width={31.238}
        height={24.793}
        x={0.875}
        y={10.875}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-5} dy={6} />
        <feGaussianBlur stdDeviation={2.85} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.1625 0 0 0 0 0.1625 0 0 0 0 0.1625 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_3726_5781" />
      </filter>
    </defs>
  </svg>
)
export default DockerLogo
