"use client"

import type React from "react"
import {
  useRef,
  type DetailedHTMLProps,
  type ReactNode,
  type SVGProps,
} from "react"
import clsx from "clsx"
import { useInView } from "framer-motion"

import {
  AtlassianLogomark,
  Auth0Logomark,
  AuthJsLogomark,
  AwsCognitoLogomark,
  AzureActiveDirectoryLogomark,
  ClerkLogomark,
  ExpoLogomark,
  GoogleLogomark,
  OktaLogomark,
} from "@/registry/logos"

export const MarqueeSection = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "flex flex-col",
        "not-prose",
        "w-full",
        "border bg-marquee-section",
        "rounded-2xl landing-sm:rounded-3xl",
        "p-4 landing-sm:p-10",
        className
      )}
    >
      <div
        className={clsx("flex flex-col", "gap-2 landing-sm:gap-4", "not-prose")}
      >
        <h2
          className={clsx(
            "text-base landing-sm:text-2xl",
            "text-foreground",
            "font-semibold"
          )}
        >
          Sparkstack from Prodkt & Bryan Funk
        </h2>
        <p className={clsx("text-base", "max-w-[752px]", "text-muted-text")}>
          Official packages I have first hand experience&apos;s with as it
          pertains to{" "}
          <span className={clsx("text-foreground")}>
            identity and access management providers
          </span>
          . These modules eliminate the need for days of manual work in
          developing custom authentication providers, allowing you to seamlessly
          integrate your application while following all security best
          practices.
        </p>
      </div>

      <div
        className={clsx(
          "marquee-section-mask",
          "mt-4 landing-md:mt-10 -mx-4 md:-mx-10",
          "overflow-hidden"
        )}
      >
        <PackagesContainer animDirection="right">
          {[...list, ...list].map(({ icon: Icon, label, tooltip }, index) => (
            <PackageItem
              key={index}
              label={label}
              tooltip={tooltip}
              icon={<Icon width="24" height="24" />}
            />
          ))}
        </PackagesContainer>
      </div>
    </div>
  )
}

const PackagesContainer = ({
  children,
  className,
  animDirection,
  ...props
}: DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  animDirection: "left" | "right"
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <div
      ref={ref}
      className={clsx(
        "relative",
        "flex",
        "items-center",
        animDirection === "left" ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={clsx(
          className,
          "hover:animation-paused",
          inView
            ? animDirection === "left"
              ? "animate-marquee-section-left"
              : "animate-marquee-section-right"
            : "",
          "absolute",
          "left-0",
          "top-0",
          "pr-4",
          "w-auto",
          "flex",
          "items-center",
          "gap-[18px]",
          "mt-6",
          "relative"
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

const PackageItem = (props: {
  icon: ReactNode
  label: string
  tooltip: string | null
}) => {
  const { tooltip, icon, label } = props

  return (
    <div
      className={clsx(
        "group",
        "relative",
        "z-10",
        "flex",
        "items-center",
        "justify-center",
        "gap-3",
        "bg-popover",
        "outline outline-1 outline-ring-disabled -outline-offset-2 border border-border-disabled ring-2 ring-offset-1 ring-offset-ring-disabled ring-inset ring-ring-disabled",
        "pl-4 pt-4 pb-4 pr-6",
        "backdrop-blur",
        "rounded-full",
        "cursor-pointer"
      )}
    >
      <div>{icon}</div>
      <div
        className={clsx(
          "text-sm",
          "font-medium",
          "bg-marquee-section-text",
          "bg-clip-text",
          "text-transparent",
          "whitespace-nowrap"
        )}
      >
        {label}
      </div>

      {tooltip && (
        <div
          className={clsx(
            "absolute",
            "z-20",
            "top-[-48px]",
            "scale-0",
            "group-hover:scale-100",
            "transition-transform",
            "origin-top"
          )}
        >
          <div
            className={clsx(
              "relative",
              "text-sm",
              "bg-background",
              "text-foreground",
              "rounded-full",
              "px-6",
              "py-3",
              "whitespace-nowrap"
            )}
          >
            {tooltip}
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={15}
            fill="none"
            className={clsx(
              "absolute",
              "scale-0",
              "-bottom-2",
              "left-1/2",
              "-translate-x-1/2",
              "group-hover:scale-100",
              "transition-transform",
              "origin-bottom",
              "text-foreground"
            )}
          >
            <path
              fill="currentColor"
              d="M17.73 13.664C18.238 14.5 19.089 15 20 15c.912 0 1.763-.501 2.27-1.336l3.025-4.992C26.306 7.002 28.01 7 29.833 7H40V0H0v7h10.167c1.823 0 3.527.003 4.538 1.672l3.026 4.992Z"
            />
          </svg>
        </div>
      )}
    </div>
  )
}

const list = [
  {
    icon: (props: SVGProps<SVGSVGElement>) => <AwsCognitoLogomark {...props} />,
    label: "AWS Cognito",
    tooltip: null,
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Auth0Logomark {...props} />,
    label: "Auth0",
    tooltip: null,
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => (
      <AzureActiveDirectoryLogomark {...props} />
    ),
    label: "Azure Active Directory",
    tooltip: null,
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <OktaLogomark {...props} />,
    label: "Okta",
    tooltip: null,
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <ClerkLogomark {...props} />,
    label: "Clerk",
    tooltip: null,
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <AtlassianLogomark {...props} />,
    label: "Atlassian",
    tooltip: null,
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <GoogleLogomark {...props} />,
    label: "Google Auth",
    tooltip: null,
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <AuthJsLogomark {...props} />,
    label: "Auth.js",
    tooltip: null,
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <ExpoLogomark {...props} />,
    label: "Expo",
    tooltip: null,
  },
] as const
