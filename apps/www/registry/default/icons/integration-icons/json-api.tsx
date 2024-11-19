import * as React from "react"
import type { SVGProps } from "react"
import clsx from "clsx"

const SvgJSONApi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={clsx("text-current", props.className)}
  >
    <g
      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="currentColor"
      stroke="none"
    >
      <path d="M1067 4574 c-1 -1 -42 -4 -92 -7 -177 -12 -298 -59 -390 -152 -81 -80 -117 -161 -141 -315 -4 -25 -8 -268 -9 -540 -1 -429 -4 -503 -19 -559 -31 -118 -101 -199 -202 -235 l-37 -12 1 -115 c1 -171 1 -169 16 -169 27 0 103 -40 138 -73 39 -36 72 -94 82 -142 3 -16 9 -41 12 -55 3 -14 7 -245 9 -515 3 -526 5 -561 36 -675 70 -257 238 -358 607 -364 114 -2 132 -1 133 13 2 74 0 273 -4 277 -2 3 -38 7 -78 9 -158 10 -241 37 -286 95 -22 27 -52 116 -59 176 -3 32 -8 274 -9 539 -2 459 -3 483 -24 554 -12 41 -33 93 -47 116 -29 50 -116 135 -163 160 l-33 17 53 35 c110 71 174 164 199 288 9 42 14 212 15 555 2 272 5 511 9 530 9 61 33 127 55 159 24 33 106 77 161 85 19 3 46 8 60 11 14 3 53 6 87 7 l63 2 1 38 c0 21 0 76 0 123 0 149 9 133 -72 137 -39 2 -71 2 -72 2z" />
      <path d="M3842 4566 c-8 -14 -9 -258 -1 -276 5 -11 26 -16 76 -18 128 -5 226 -33 275 -80 32 -30 64 -109 73 -179 4 -26 8 -264 9 -528 2 -264 6 -491 10 -505 3 -14 8 -37 11 -51 22 -117 92 -218 203 -290 l44 -28 -30 -15 c-63 -33 -154 -129 -184 -193 -48 -107 -54 -183 -56 -703 -1 -261 -4 -486 -7 -500 -14 -72 -19 -88 -35 -120 -32 -62 -90 -101 -171 -115 -19 -3 -41 -8 -49 -10 -9 -3 -48 -7 -89 -9 -40 -3 -75 -7 -78 -10 -9 -9 -10 -259 -1 -277 6 -14 26 -16 142 -13 249 6 408 59 504 168 37 43 86 143 101 211 6 28 14 61 17 75 3 14 7 255 9 535 2 281 6 521 8 535 24 134 98 236 200 275 l46 17 3 113 c4 147 0 167 -34 176 -69 18 -142 86 -177 163 -41 88 -43 126 -46 646 -2 278 -6 516 -9 530 -3 14 -11 50 -17 80 -6 30 -28 91 -48 135 -64 137 -177 216 -356 250 -89 16 -334 24 -343 11z" />
      <path d="M2809 4496 c-126 -27 -207 -136 -197 -265 7 -95 61 -175 145 -217 55 -27 174 -26 229 3 130 69 183 220 119 342 -37 73 -120 131 -205 144 -19 3 -60 0 -91 -7z" />
      <path d="M2398 3759 c-63 -10 -117 -44 -134 -85 -19 -44 -15 -117 7 -153 40 -66 97 -77 244 -47 107 21 164 12 192 -31 39 -59 42 -139 39 -1143 -2 -531 -6 -976 -9 -990 -3 -14 -8 -42 -11 -63 -17 -111 -79 -234 -147 -288 -70 -55 -151 -81 -269 -85 -93 -3 -112 0 -165 22 -33 13 -71 33 -83 43 -21 15 -22 19 -9 32 32 33 60 104 60 154 0 110 -81 192 -197 200 -136 9 -246 -104 -248 -256 -3 -209 133 -374 373 -452 147 -48 321 -53 490 -13 260 60 455 256 529 529 33 124 38 224 39 927 2 628 5 849 16 1125 2 55 7 189 10 298 l7 197 -26 34 c-14 19 -38 38 -53 44 -30 10 -124 8 -208 -6 -27 -4 -70 -7 -95 -7 -58 2 -293 17 -300 19 -3 1 -26 -1 -52 -5z" />
    </g>
  </svg>
)

export default SvgJSONApi
