"use client"

import { cn } from "@/lib/utils"
import SvgHookForm from "@/registry/default/icons/integration-icons/hook-form"
import SvgJSONApi from "@/registry/default/icons/integration-icons/json-api"
import SvgOkta from "@/registry/default/icons/integration-icons/okta"
import {
  AstroLogomark,
  BunLogomark,
  ChromaLogomark,
  DockerLogomark,
  FigmaLogomark,
  NodejsLogomark,
  PosthogLogomark,
  ReactLogomark,
  SentryLogomark,
  ShadcnLogomark,
  StorybookLogomark,
  SupabaseLogomark,
  TailwindLogomark,
  TurborepoLogomark,
  TypescriptLogomark,
  VercelLogomark,
  ViteLogomark,
} from "@/registry/icons"
import SvgAbly from "@/registry/icons/integration-icons/ably"
import SvgAirtable from "@/registry/icons/integration-icons/airtable"
import SvgAntd from "@/registry/icons/integration-icons/antd"
import SvgAppwrite from "@/registry/icons/integration-icons/appwrite"
import SvgAtlassian from "@/registry/icons/integration-icons/atlassian"
import SvgExpo from "@/registry/icons/integration-icons/expo"
import SvgFirebase from "@/registry/icons/integration-icons/firebase"
import SvgGoogle from "@/registry/icons/integration-icons/google"
import SvgGraphql from "@/registry/icons/integration-icons/graphql"
import SvgMongodb from "@/registry/icons/integration-icons/mongodb"
import SvgMui from "@/registry/icons/integration-icons/mui"
import SvgReact from "@/registry/icons/integration-icons/react"
import SvgRest from "@/registry/icons/integration-icons/rest"
import SvgSanity from "@/registry/icons/integration-icons/sanity"
import SvgSlack from "@/registry/icons/integration-icons/slack"

import {
  AmpersandLogomark,
  ChromaticLogomark,
  CraftLogomark,
  DigidocLogomark,
  DirectusLogomark,
  ExplorLogomark,
  FlowsLogomark,
  LevelnLogomark,
  LitLogomark,
  NextjsLogomark,
  OlioLogomark,
  PartytownLogomark,
  PendoLogomark,
  PlanFoundryLogomark,
  PlanFoundryLogomarkGradient,
  RadixLogomark,
  RemixLogomarkDashed,
  RemixLogomarkSolid,
  ScalesLogomark,
  SignalLogomark,
  StrapiLogomark,
  SugarlessLogomark,
  ZeplinLogomark,
} from "."

type MarqueeAnimationProps = {
  children: string
  className?: string
  direction?: "left" | "right"
  baseVelocity: number
}

const technologies = [
  {
    name: "Expo",
    logomark: <SvgExpo className="max-h-4 h-4 min-h-4 object-center w-auto" />,
  },
  {
    name: "Graphql",
    logomark: (
      <SvgGraphql className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Mongodb",
    logomark: (
      <SvgMongodb className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Mui",
    logomark: <SvgMui className="max-h-4 h-4 min-h-4 object-center w-auto" />,
  },
  {
    name: "React",
    logomark: <SvgReact className="max-h-4 h-4 min-h-4 object-center w-auto" />,
  },
  {
    name: "Rest",
    logomark: <SvgRest className="max-h-4 h-4 min-h-4 object-center w-auto" />,
  },
  {
    name: "Sanity",
    logomark: (
      <SvgSanity className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Slack",
    logomark: <SvgSlack className="max-h-4 h-4 min-h-4 object-center w-auto" />,
  },
  {
    name: "HookForm",
    logomark: (
      <SvgHookForm className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Ably",
    logomark: <SvgAbly className="max-h-4 h-4 min-h-4 object-center w-auto" />,
  },
  {
    name: "Antd",
    logomark: <SvgAntd className="max-h-4 h-4 min-h-4 object-center w-auto" />,
  },
  {
    name: "Airtable",
    logomark: (
      <SvgAirtable className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Appwrite",
    logomark: (
      <SvgAppwrite className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Atlassian",
    logomark: (
      <SvgAtlassian className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Firebase",
    logomark: (
      <SvgFirebase className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Google",
    logomark: (
      <SvgGoogle className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "JSONApi",
    logomark: (
      <SvgJSONApi className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Okta",
    logomark: <SvgOkta className="max-h-4 h-4 min-h-4 object-center w-auto" />,
  },
  {
    name: "Astro",
    logomark: (
      <AstroLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Supabase",
    logomark: (
      <SupabaseLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Bun",
    logomark: (
      <BunLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Chroma",
    logomark: (
      <ChromaLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Docker",
    logomark: (
      <DockerLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Figma",
    logomark: (
      <FigmaLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Nodejs",
    logomark: (
      <NodejsLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Posthog",
    logomark: (
      <PosthogLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "React",
    logomark: (
      <ReactLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Sentry",
    logomark: (
      <SentryLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Shadcn",
    logomark: (
      <ShadcnLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Storybook",
    logomark: (
      <StorybookLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Tailwind",
    logomark: (
      <TailwindLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Turborepo",
    logomark: (
      <TurborepoLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Typescript",
    logomark: (
      <TypescriptLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Vercel",
    logomark: (
      <VercelLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Vite",
    logomark: (
      <ViteLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Ampersand",
    logomark: (
      <AmpersandLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Craft",
    logomark: (
      <CraftLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Digidoc",
    logomark: (
      <DigidocLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Explor",
    logomark: (
      <ExplorLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Flows",
    logomark: (
      <FlowsLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Leveln",
    logomark: (
      <LevelnLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Olio",
    logomark: (
      <OlioLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "PlanFoundry",
    logomark: (
      <PlanFoundryLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Remix",
    logomark: (
      <RemixLogomarkSolid className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Scales",
    logomark: (
      <ScalesLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Signal",
    logomark: (
      <SignalLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "Sugarless",
    logomark: (
      <SugarlessLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "zeplin",
    logomark: (
      <ZeplinLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "strapi",
    logomark: (
      <StrapiLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "radix",
    logomark: (
      <RadixLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "pendo",
    logomark: (
      <PendoLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "partytown",
    logomark: (
      <PartytownLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "nextjs",
    logomark: (
      <NextjsLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "lit",
    logomark: (
      <LitLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "directus",
    logomark: (
      <DirectusLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
  {
    name: "chromatic",
    logomark: (
      <ChromaticLogomark className="max-h-4 h-4 min-h-4 object-center w-auto" />
    ),
  },
]

// const firstRow = technologies.slice(0, technologies.length / 2)
// const secondRow = technologies.slice(technologies.length / 2)

export function TechnologyCard({
  logomark,
  name,
}: {
  logomark: React.ReactNode
  name: string
}) {
  return (
    <figure
      className={cn(
        "relative w-auto cursor-pointer overflow-hidden border rounded-xl px-3 py-2",
        // light styles
        "bg-card",
        // dark styles
        ""
      )}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        {logomark}
        <div className="flex flex-col">
          <figcaption className="text-xs font-medium font-bahnschrift uppercase leading-[0%] pt-0.5 tracking-widest">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  )
}

export function TechnologyMarquee() {
  return (
    // <motion.div className="relative w-full inset-x-0 inset-y-auto my-auto flex flex-row items-center justify-center overflow-hidden landing-marquee-mask" style={{ x }}>
    <div className="overflow-hidden flex-nowrap flex flex-col gap-2 relative select-none pointer-events-none">
      <div
        className="group relative flex gap-2 overflow-hidden h-full"
        // style={{
        //   maskImage:
        //     "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
        // }}
      >
        {Array(5)
          .fill(null)
          .map((_, groupIndex) => (
            <div
              key={`group-${groupIndex}`}
              className="flex shrink-0 animate-logo-cloud flex-row-reverse justify-evenly gap-2"
            >
              {[
                technologies.map((technology, index) => (
                  <TechnologyCard
                    key={`${groupIndex}-${technology.name}-${index}`}
                    logomark={technology.logomark}
                    name={technology.name}
                  />
                )),
              ]}
            </div>
          ))}
      </div>
      <div
        className="group relative flex gap-2 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
        }}
      >
        {Array(5)
          .fill(null)
          .map((_, groupIndex) => (
            <div
              key={`group-${groupIndex}`}
              className="flex shrink-0 animate-logo-cloud-reverse-slow flex-row-reverse justify-evenly gap-2"
            >
              {[
                technologies.map((technology, index) => (
                  <TechnologyCard
                    key={`${groupIndex}-${technology.name}-${index}`}
                    logomark={technology.logomark}
                    name={technology.name}
                  />
                )),
              ]}
            </div>
          ))}
      </div>
      <div
        className="group relative flex gap-2 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
        }}
      >
        {Array(5)
          .fill(null)
          .map((_, groupIndex) => (
            <div
              key={`group-${groupIndex}`}
              className="flex shrink-0 animate-logo-cloud-slow flex-row-reverse justify-evenly gap-2"
            >
              {[
                technologies.map((technology, index) => (
                  <TechnologyCard
                    key={`${groupIndex}-${technology.name}-${index}`}
                    logomark={technology.logomark}
                    name={technology.name}
                  />
                )),
              ]}
            </div>
          ))}
      </div>
      <div
        className="group relative flex gap-2 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
        }}
      >
        {Array(5)
          .fill(null)
          .map((_, groupIndex) => (
            <div
              key={`group-${groupIndex}`}
              className="flex shrink-0 animate-logo-cloud-reverse flex-row-reverse justify-evenly gap-2"
            >
              {[
                technologies.map((technology, index) => (
                  <TechnologyCard
                    key={`${groupIndex}-${technology.name}-${index}`}
                    logomark={technology.logomark}
                    name={technology.name}
                  />
                )),
              ]}
            </div>
          ))}
      </div>
      <div
        className="group relative flex gap-2 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
        }}
      >
        {Array(5)
          .fill(null)
          .map((_, groupIndex) => (
            <div
              key={`group-${groupIndex}`}
              className="flex shrink-0 animate-logo-cloud flex-row-reverse justify-evenly gap-2"
            >
              {[
                technologies.map((technology, index) => (
                  <TechnologyCard
                    key={`${groupIndex}-${technology.name}-${index}`}
                    logomark={technology.logomark}
                    name={technology.name}
                  />
                )),
              ]}
            </div>
          ))}
      </div>
      <div
        className="group relative flex gap-2 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
        }}
      >
        {Array(5)
          .fill(null)
          .map((_, groupIndex) => (
            <div
              key={`group-${groupIndex}`}
              className="flex shrink-0 animate-logo-cloud-reverse-slow flex-row-reverse justify-evenly gap-2"
            >
              {[
                technologies.map((technology, index) => (
                  <TechnologyCard
                    key={`${groupIndex}-${technology.name}-${index}`}
                    logomark={technology.logomark}
                    name={technology.name}
                  />
                )),
              ]}
            </div>
          ))}
      </div>
      <div
        className="group relative flex gap-2 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
        }}
      >
        {Array(5)
          .fill(null)
          .map((_, groupIndex) => (
            <div
              key={`group-${groupIndex}`}
              className="flex shrink-0 animate-logo-cloud flex-row-reverse justify-evenly gap-2"
            >
              {[
                technologies.map((technology, index) => (
                  <TechnologyCard
                    key={`${groupIndex}-${technology.name}-${index}`}
                    logomark={technology.logomark}
                    name={technology.name}
                  />
                )),
              ]}
            </div>
          ))}
      </div>
      <div
        className="group relative flex gap-2 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
        }}
      >
        {Array(5)
          .fill(null)
          .map((_, groupIndex) => (
            <div
              key={`group-${groupIndex}`}
              className="flex shrink-0 animate-logo-cloud-reverse flex-row-reverse justify-evenly gap-2"
            >
              {[
                technologies.map((technology, index) => (
                  <TechnologyCard
                    key={`${groupIndex}-${technology.name}-${index}`}
                    logomark={technology.logomark}
                    name={technology.name}
                  />
                )),
              ]}
            </div>
          ))}
      </div>
    </div>
  )
}
