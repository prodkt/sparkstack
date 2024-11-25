import * as React from "react"
import type { SVGProps } from "react"

const SvgGoogle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    {...props}
  >
    <path
      fill="#4285F4"
      d="M12.74 10.187v4.648h6.458c-.283 1.494-1.134 2.76-2.41 3.61l3.894 3.023c2.27-2.095 3.578-5.171 3.578-8.826 0-.85-.076-1.67-.218-2.454H12.74Z"
    />
    <path
      fill="#34A853"
      d="m6.015 14.652-.878.673-3.11 2.421c1.975 3.917 6.022 6.622 10.713 6.622 3.24 0 5.956-1.069 7.942-2.901l-3.895-3.022c-1.07.72-2.433 1.156-4.047 1.156-3.12 0-5.771-2.105-6.72-4.942l-.005-.007Z"
    />
    <path
      fill="#FBBC05"
      d="M2.027 6.991A11.852 11.852 0 0 0 .74 12.37c0 1.942.47 3.764 1.287 5.378 0 .011 3.993-3.098 3.993-3.098a7.19 7.19 0 0 1-.382-2.28c0-.796.142-1.56.382-2.28L2.027 6.991Z"
    />
    <path
      fill="#EA4335"
      d="M12.74 5.147c1.767 0 3.338.61 4.593 1.789l3.436-3.437C18.686 1.558 15.98.37 12.74.37 8.05.369 4.002 3.063 2.027 6.99L6.02 10.09c.95-2.837 3.6-4.942 6.72-4.942Z"
    />
  </svg>
)

export default SvgGoogle
