import { SVGProps } from "react"

const GithubLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.053 9a11.041 11.041 0 0 0-3.491 21.52c.556.102.752-.244.752-.535v-1.878c-3.084.671-3.734-1.484-3.734-1.484a2.955 2.955 0 0 0-1.227-1.62c-.996-.678.081-.678.081-.678a2.326 2.326 0 0 1 1.688 1.139 2.359 2.359 0 0 0 3.213.922 2.346 2.346 0 0 1 .677-1.478c-2.453-.278-5.029-1.227-5.029-5.422a4.27 4.27 0 0 1 1.132-2.962 4.026 4.026 0 0 1 .109-2.922s.928-.298 3.036 1.132c1.81-.497 3.72-.497 5.531 0 2.108-1.43 3.03-1.132 3.03-1.132.406.916.455 1.951.135 2.901a4.27 4.27 0 0 1 1.132 2.962c0 4.243-2.582 5.172-5.043 5.423a2.61 2.61 0 0 1 .753 2.033v3.03c0 .36.196.637.759.529A11.041 11.041 0 0 0 20.053 9Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={31.055}
        x2={9.005}
        y1={30.797}
        y2={8.274}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentcolor" stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export default GithubLogo
