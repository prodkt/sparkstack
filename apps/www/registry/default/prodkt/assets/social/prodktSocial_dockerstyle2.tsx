import { SVGProps } from "react"

const DockerLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      stroke="currentcolor"
      strokeLinejoin="bevel"
      strokeWidth={0.5}
      d="m26.267 14.723.561.408c.976.79 1.537 1.682 1.66 2.702 1.048-.204 2.39-.05 2.975.357l.537.332-.098.204c-.17.382-.22.484-.244.535-.95 1.912-2.83 1.938-3.707 1.912-2.22 5.584-6.953 8.67-13.344 8.67-2.952 0-5.196-.944-6.709-2.805-2-2.448-2-5.635-1.83-6.655l.05-.204h17.637c.927 0 1.634-.255 1.976-.459a3.417 3.417 0 0 1-.513-1.555c-.073-1.02.171-2.091.659-2.856l.39-.586Zm-15.563 2.396v2.55H8.02v-2.55h2.684Zm3.17 0v2.55h-2.683v-2.55h2.684Zm3.172 0v2.55h-2.683v-2.55h2.683Zm3.171 0v2.55h-2.683v-2.55h2.683Zm3.172 0v2.55h-2.684v-2.55h2.684Zm-3.172-3.06v2.55h-2.683v-2.55h2.683Zm-3.17 0v2.55h-2.684v-2.55h2.683Zm-3.172 0v2.55H11.19v-2.55h2.684ZM20.217 11v2.55h-2.683V11h2.683Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={32.066}
        x2={13.729}
        y1={30.069}
        y2={4.767}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentcolor" stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export default DockerLogo
