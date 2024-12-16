import * as React from "react";
import { SVGProps } from "react";

export default function Logotype(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={92}
      height={15}
      viewBox="0 0 92 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prodkt-logotype-a)">
        <path
          d="M37.176 0c-1.033 0-1.945.222-2.733.666a4.512 4.512 0 0 0-1.826 1.867c-.43.802-.646 1.733-.646 2.793V9.42c0 1.06.216 1.995.646 2.803a4.59 4.59 0 0 0 1.826 1.867c.788.437 1.7.656 2.733.656 1.033 0 1.944-.219 2.732-.656a4.594 4.594 0 0 0 1.828-1.867c.43-.809.645-1.743.645-2.803V5.326c0-1.06-.214-1.991-.645-2.793A4.515 4.515 0 0 0 39.908.666C39.12.222 38.208 0 37.176 0Zm-21.24.139v14.459h2.484V8.686h2.11l3.195 5.912h3l-3.41-6.078a3.672 3.672 0 0 0 2.297-1.861c.337-.65.505-1.399.505-2.247 0-.848-.168-1.594-.506-2.236a3.53 3.53 0 0 0-1.42-1.5c-.609-.358-1.319-.537-2.127-.537h-6.129ZM0 .149v14.449h2.484V8.992h3.239c.887 0 1.668-.18 2.343-.545a3.866 3.866 0 0 0 1.57-1.54c.372-.67.557-1.446.557-2.327s-.185-1.655-.556-2.324a3.849 3.849 0 0 0-1.57-1.55C7.39.333 6.61.147 5.722.147H0Zm48.66 0v14.449h4.699c1.212 0 2.24-.21 3.08-.627.848-.424 1.483-1.024 1.907-1.8.43-.774.646-1.691.646-2.751V5.326c0-1.093-.219-2.027-.656-2.803-.437-.775-1.075-1.363-1.916-1.767-.841-.404-1.859-.608-3.05-.608h-4.71Zm16.612 0v14.449h2.484v-3.485L69.92 8.23l3.697 6.368h2.979l-5.008-8.586L75.99.148h-3.11l-5.124 7.338V.148h-2.484Zm15.32 0v2.394h3.982v12.055h2.485V2.543h3.982V.148h-10.45ZM37.176 2.483c.523 0 .983.116 1.38.348.405.225.713.55.925.975.218.417.328.899.328 1.449V9.49c0 .55-.11 1.037-.328 1.461-.212.418-.52.741-.924.973-.398.225-.858.338-1.381.338s-.987-.113-1.39-.338a2.377 2.377 0 0 1-.925-.973c-.212-.424-.318-.911-.318-1.46V5.255c0-.55.106-1.032.318-1.45.219-.423.527-.749.924-.974a2.577 2.577 0 0 1 1.01-.326c.123-.015.25-.022.38-.022Zm-18.756.05h3.525c.318 0 .598.075.836.228a1.5 1.5 0 0 1 .555.666c.132.285.2.613.2.984a2.49 2.49 0 0 1-.21.994 1.425 1.425 0 0 1-.556.655 1.44 1.44 0 0 1-.598.214c-.073.01-.149.016-.227.016H18.42V2.533Zm-15.936.009h3.309c.364 0 .685.087.963.26.278.165.489.403.635.715.152.304.228.658.228 1.062 0 .398-.076.753-.228 1.065-.153.304-.367.539-.645.705a1.793 1.793 0 0 1-.953.248H2.484V2.543Zm48.66 0h2.286c.953 0 1.688.237 2.205.707.523.47.785 1.135.785 1.996V9.5c0 .861-.262 1.526-.785 1.996-.517.47-1.252.707-2.205.707h-2.285v-9.66Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="prodkt-logotype-a">
          <path fill="currentColor" d="M0 0h91.041v14.746H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
