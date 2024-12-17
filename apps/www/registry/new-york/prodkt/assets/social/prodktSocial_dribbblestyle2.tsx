import { SVGProps } from "react"

const DribbbleLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.81 8.007c5.483-.197 9.193 3.596 9.382 9.343v.002c.22 6.368-3.873 14.142-12.23 14.625-2.538.145-5.065-.398-6.729-1.349a.49.49 0 0 1-.185-.631l.734-1.546a.444.444 0 0 1 .628-.204 9.01 9.01 0 0 0 1.63.72.452.452 0 0 0 .58-.33c1.162-4.573 2.452-9.448 3.742-13.942a.461.461 0 0 1 .411-.339l1.71-.099c.316-.018.553.299.46.617a337.454 337.454 0 0 0-3.785 14.071c-.075.303.145.596.443.596.213 0 .425-.005.63-.016 5.843-.338 9.48-6.572 9.279-12.021-.161-4.68-2.922-7.104-6.68-6.946-2.025.09-4.13.935-5.673 2.226a.444.444 0 0 1-.672-.111l-.86-1.41a.494.494 0 0 1 .11-.641c2.027-1.608 4.72-2.507 7.075-2.615Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={29.248}
        x2={5.272}
        y1={32.288}
        y2={13.107}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentcolor" stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export default DribbbleLogo