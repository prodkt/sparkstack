"use client"

import type React from "react"
import {
  useRef,
  type DetailedHTMLProps,
  type FC,
  type ReactNode,
  type SVGProps,
} from "react"
import clsx from "clsx"
import { useInView } from "framer-motion"

import { Button } from "@/registry/default/ui/button"
import {
  AblyLogomark,
  AirtableLogomark,
  AntdLogomark,
  AppwriteLogomark,
  ChakraLogomark,
  DirectusLogomark,
  ElideGraphqlLogomark,
  ElideLogomark,
  FirebaseLogomark,
  GraphqlLogomark,
  HasuraLogomark,
  HeadlessLogomark,
  HookFormLogomark,
  HygraphLogomark,
  JSONApiLogomark,
  KbarLogomark,
  MantineLogomark,
  MedusaLogomark,
  MuiLogomark,
  NestLogomark,
  NestQueryLogomark,
  NextjsLogomark,
  RestLogomark,
  SQLiteLogomark,
  SanityLogomark,
  ShadCnUILogomark,
  StrapiLogomark,
  SupabaseLogomark,
  TailwindCssLogomark,
} from "@/registry/logos"

type Props = {
  className?: string
}

export const PackagesMarquee: FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, "w-full relative")}>
      <div className={clsx("not-prose", "w-full", "px-4 landing-md:px-10")}>
        <h2
          className={clsx(
            "text-2xl landing-sm:text-[32px]",
            "tracking-tight",
            "text-start",
            "p-0",
            "text-foreground"
          )}
        >
          Start{" "}
          <span
            className={clsx(
              "font-semibold",
              "text-primary-text drop-shadow-[0_0_30px_var(--primary-a6)]"
            )}
          >
            faster
          </span>
          , maintain{" "}
          <span
            className={clsx(
              "font-semibold",
              "text-primary-text drop-shadow-[0_0_30px_var(--primary-a6)]"
            )}
          >
            easier
          </span>
          , manage{" "}
          <span
            className={clsx(
              "font-semibold",
              "text-primary-text drop-shadow-[0_0_30px_var(--primary-a6)]"
            )}
          >
            complexity
          </span>
          .
        </h2>
      </div>

      <div
        className={clsx(
          "w-full",
          "relative",
          "mt-8 landing-sm:mt-12 landing-lg:mt-20",
          "pb-4 landing-md:pb-10",
          "bg-packages-marquee",
          "border",
          "rounded-2xl landing-sm:rounded-3xl"
        )}
      >
        <div
          className={clsx(
            "packages-marquee-mask",
            "pt-4 landing-md:pt-10 relative"
          )}
        >
          <PackagesContainer animDirection="right">
            {[...listOne, ...listOne].map(
              ({ icon: Icon, label, tooltip }, index) => (
                <PackageItem
                  key={index + "-1"}
                  label={label}
                  tooltip={tooltip}
                  icon={<Icon width="24" height="24" />}
                />
              )
            )}
          </PackagesContainer>
          <PackagesContainer animDirection="left">
            {[...listTwo, ...listTwo].map(
              ({ icon: Icon, label, tooltip }, index) => (
                <PackageItem
                  key={index + "-2"}
                  label={label}
                  tooltip={tooltip}
                  icon={<Icon width="24" height="24" />}
                />
              )
            )}
          </PackagesContainer>
        </div>

        <div
          className={clsx(
            "not-prose",
            "mt-4 landing-sm:mt-6 landing-lg:mt-10",
            "px-4 landing-sm:px-10"
          )}
        >
          <h6
            className={clsx(
              "p-0",
              "font-semibold",
              "text-base landing-sm:text-2xl",
              "text-foreground"
            )}
          >
            Vast platform experience
          </h6>
          <div
            className={clsx(
              "not-prose",
              "flex",
              "items-center",
              "justify-between",
              "flex-wrap",
              "gap-4 landing-sm:gap-8"
            )}
          >
            <p
              className={clsx(
                "p-0",
                "mt-2 landing-sm:mt-4",
                "text-base",
                "text-muted"
              )}
            >
              I dig exploring new technologies and building products with them.
            </p>
            <Button variant="outline" size="sm">
              All technologies
            </Button>
          </div>
        </div>
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
              ? "animate-packages-marquee-left"
              : "animate-packages-marquee-right"
            : "",
          "left-0",
          "top-0",
          "pr-4",
          "w-auto",
          "flex",
          "items-center",
          "gap-[18px]",
          "mt-6"
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
  tooltip: string
}) => {
  const { tooltip, icon, label } = props

  return (
    <div
      className={clsx(
        "group/item",
        "relative",
        "z-10",
        "flex",
        "items-center",
        "justify-center",
        "gap-3",
        "pl-4 pt-4 pb-4 pr-6",
        "bg-popover",
        "outline outline-1 outline-ring-disabled -outline-offset-2 border border-border-disabled ring-2 ring-offset-1 ring-offset-ring-disabled ring-inset ring-ring-disabled",
        "rounded-full",
        "cursor-pointer"
      )}
    >
      <div>{icon}</div>
      <div
        className={clsx(
          "text-sm",
          "font-medium",
          "bg-packages-marquee-text",
          "bg-clip-text",
          "text-transparent",
          "whitespace-nowrap"
        )}
      >
        {label}
      </div>

      <div
        className={clsx(
          "absolute",
          "z-20",
          "top-[-48px]",
          "scale-0",
          "group-hover/item:scale-100", // Change from group-hover to peer-hover
          "transition-transform",
          "origin-top"
        )}
      >
        <div
          className={clsx(
            "relative",
            "text-sm",
            "bg-foreground",
            "border-0",
            "text-background",
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
            "group-hover/item:scale-100", // Change from group-hover to peer-hover
            "transition-transform",
            "origin-bottom",
            "text-foreground",
            "opacity-0",
            "group-hover/item:opacity-100", // Change from group-hover to peer-hover
            "group-hover/item:gradientMask-to-b-40" // Change from group-hover to peer-hover
          )}
        >
          <path
            fill="currentColor"
            d="M17.73 13.664C18.238 14.5 19.089 15 20 15c.912 0 1.763-.501 2.27-1.336l3.025-4.992C26.306 7.002 28.01 7 29.833 7H40V0H0v7h10.167c1.823 0 3.527.003 4.538 1.672l3.026 4.992Z"
          />
        </svg>
      </div>
    </div>
  )
}

const listOne = [
  {
    icon: (props: SVGProps<SVGSVGElement>) => <FirebaseLogomark {...props} />,
    label: "Firebase",
    tooltip: "npm i refine-firebase",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <AblyLogomark {...props} />,
    label: "Ably",
    tooltip: "npm i @prodkt/ably",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <AirtableLogomark {...props} />,
    label: "Airtable",
    tooltip: "npm i @prodkt/airtable",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <AppwriteLogomark {...props} />,
    label: "Appwrite",
    tooltip: "npm i @prodkt/appwrite",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <DirectusLogomark {...props} />,
    label: "Directus",
    tooltip: "npm i @tspvivek/refine-directus",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <ElideLogomark {...props} />,
    label: "Elide",
    tooltip: "npm i elide-simple-rest",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => (
      <ElideGraphqlLogomark {...props} />
    ),
    label: "Elide GraphQL",
    tooltip: "npm i elide-simple-graphql",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <HasuraLogomark {...props} />,
    label: "Hasura",
    tooltip: "npm i @prodkt/hasura",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <HookFormLogomark {...props} />,
    label: "Hook Form",
    tooltip: "npm i @prodkt/react-hook-form",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <AntdLogomark {...props} />,
    label: "Ant Design",
    tooltip: "npm i @prodkt/antd",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <MuiLogomark {...props} />,
    label: "Material UI",
    tooltip: "npm i @prodkt/mui",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <MantineLogomark {...props} />,
    label: "Mantine",
    tooltip: "npm i @prodkt/mantine",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <ChakraLogomark {...props} />,
    label: "Chakra UI",
    tooltip: "npm i @prodkt/chakra-ui",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <ShadCnUILogomark {...props} />,
    label: "shadcn/ui",
    tooltip: "npx sparkstack-ui init",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => (
      <TailwindCssLogomark {...props} />
    ),
    label: "Tailwind CSS",
    tooltip: "npx tailwindcss init",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <HeadlessLogomark {...props} />,
    label: "Headless UI",
    tooltip: "npm i @headlessui/react",
  },
]

const listTwo = [
  {
    icon: (props: SVGProps<SVGSVGElement>) => <GraphqlLogomark {...props} />,
    label: "GraphQL",
    tooltip: "npm i @prodkt/graphql",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <KbarLogomark {...props} />,
    label: "Kbar",
    tooltip: "npm i @prodkt/kbar",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <MedusaLogomark {...props} />,
    label: "Medusa",
    tooltip: "npm i @prodkt/medusa",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <NestLogomark {...props} />,
    label: "NestJS CRUD",
    tooltip: "npm i @prodkt/nestjsx-crud",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <NestQueryLogomark {...props} />,
    label: "Nestjs-query",
    tooltip: "npm i @prodkt/nestjs-query",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <NextjsLogomark {...props} />,
    label: "Next.js",
    tooltip: "npm i @prodkt/nextjs-router",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <RestLogomark {...props} />,
    label: "REST",
    tooltip: "npm i @prodkt/simple-rest",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <StrapiLogomark {...props} />,
    label: "Strapi",
    tooltip: "npm i @prodkt/strapi-v4",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <SupabaseLogomark {...props} />,
    label: "Supabase",
    tooltip: "npm i @prodkt/supabase",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <HygraphLogomark {...props} />,
    label: "Hygraph",
    tooltip: "npm i @acomagu/refine-hygraph",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <SanityLogomark {...props} />,
    label: "Sanity",
    tooltip: "npm i refine-sanity",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <SQLiteLogomark {...props} />,
    label: "SQLite",
    tooltip: "npm i refine-sqlite",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <JSONApiLogomark {...props} />,
    label: "JSON:API",
    tooltip: "npm i refine-jsonapi",
  },
]
