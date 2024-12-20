"use client"

import { useEffect, useState } from "react"
import clsx from "clsx"

import BehanceLogo from "@/registry/new-york/prodkt/assets/social/prodktSocial_behancestyle2"
import DiscordLogo from "@/registry/new-york/prodkt/assets/social/prodktSocial_discordstyle2"
import DockerLogo from "@/registry/new-york/prodkt/assets/social/prodktSocial_dockerstyle2"
import DribbbleLogo from "@/registry/new-york/prodkt/assets/social/prodktSocial_dribbblestyle2"
import FigmaLogo from "@/registry/new-york/prodkt/assets/social/prodktSocial_figmastyle2"
import GithubLogo from "@/registry/new-york/prodkt/assets/social/prodktSocial_githubstyle2"
import GitlabLogo from "@/registry/new-york/prodkt/assets/social/prodktSocial_gitlabstyle2"
import InstagramLogo from "@/registry/new-york/prodkt/assets/social/prodktSocial_instagramstyle2"
import LinkedinLogo from "@/registry/new-york/prodkt/assets/social/prodktSocial_linkedinstyle2"
import SlackLogo from "@/registry/new-york/prodkt/assets/social/prodktSocial_slackstyle2"
import XLogo from "@/registry/new-york/prodkt/assets/social/prodktSocial_xstyle2"
import YouTubeLogo from "@/registry/new-york/prodkt/assets/social/prodktSocial_youTubestyle2"

interface SocialMediaProps {
  date_created: string | null
  date_updated: string | null
  description: string | null
  domain: string | null
  id: string
  social_behance: string | null
  social_discord: string | null
  social_docker: string | null
  social_dribbble: string | null
  social_email: string | null
  social_facebook: string | null
  social_figma: string | null
  social_github: string | null
  social_gitlab: string | null
  social_instagram: string | null
  social_linkedin: string | null
  social_slack: string | null
  social_x: string | null
  social_youtube: string | null
  sort: number | null
  status: string
  title: string | null
  user_created: string | null
  user_updated: string | null
  workspace: string | null
}

const socials = [
  {
    social_behance: "https://www.behance.net/prodkt",
  },
  {
    social_youtube: "https://www.youtube.com/prodkt",
  },
  {
    social_x: "https://www.x.com/prodkt",
  },
  {
    social_linkedin: "https://www.linkedin.com/prodkt",
  },
  {
    social_instagram: "https://www.instagram.com/prodkt",
  },
  {
    social_gitlab: "https://www.gitlab.com/prodkt",
  },
  {
    social_github: "https://www.github.com/prodkt",
  },
  {
    social_figma: "https://www.figma.com/prodkt",
  },
  {
    social_dribbble: "https://www.dribbble.com/prodkt",
  },
  {
    social_docker: "https://www.docker.com/prodkt",
  },
  {
    social_discord: "https://www.discord.com/prodkt",
  },
  {
    social_behance: "https://www.behance.net/prodkt",
  },
  {
    social_slack: "https://www.slack.com/prodkt",
  },
  {
    social_email: "mailto:prodkt@prodkt.com",
  },
]

export function SocialMedia({
  className,
  invert = false,
}: Readonly<{
  className?: string
  invert?: boolean
}>) {
  return (
    <ul
      className={clsx(
        "flex gap-x-0",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {socials[0]?.social_youtube ? (
        <li>
          <a
            className="group hover:opacity-100 opacity-75 after:absolute after:w-4 after:h-4 after:bg-[var(--ghost-aa2)] z-[0] after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:blur-[2px] rounded-2xl relative flex items-center justify-center origin-center w-10 h-10"
            href={`${socials[0]?.social_youtube}`}
          >
            <YouTubeLogo className="object-contain w-10 h-10 p-0 mx-auto my-auto origin-center will-change-transform" />
          </a>
        </li>
      ) : undefined}
      {socials[0]?.social_x ? (
        <li>
          <a
            className="group hover:opacity-100 opacity-75 after:absolute after:w-4 after:h-4 after:bg-[var(--ghost-aa2)] z-[0] after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:blur-[2px] rounded-2xl relative flex items-center justify-center origin-center w-10 h-10"
            href={`${socials[0]?.social_x}`}
          >
            <XLogo className="object-contain w-10 h-10 p-0 mx-auto my-auto origin-center will-change-transform" />
          </a>
        </li>
      ) : undefined}
      {socials[0]?.social_slack ? (
        <li>
          <a
            className="group hover:opacity-100 opacity-75 after:absolute after:w-4 after:h-4 after:bg-[var(--ghost-aa2)] z-[0] after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:blur-[2px] rounded-2xl relative flex items-center justify-center origin-center w-10 h-10"
            href={`${socials[0]?.social_slack}`}
          >
            <SlackLogo className="object-contain w-10 h-10 p-0 mx-auto my-auto origin-center will-change-transform" />
          </a>
        </li>
      ) : undefined}
      {socials[0]?.social_linkedin ? (
        <li>
          <a
            className="group hover:opacity-100 opacity-75 after:absolute after:w-4 after:h-4 after:bg-[var(--ghost-aa2)] z-[0] after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:blur-[2px] rounded-2xl relative flex items-center justify-center origin-center w-10 h-10"
            href={`${socials[0]?.social_linkedin}`}
          >
            <LinkedinLogo className="object-contain w-10 h-10 p-0 mx-auto my-auto origin-center will-change-transform" />
          </a>
        </li>
      ) : undefined}
      {socials[0]?.social_instagram ? (
        <li>
          <a
            className="group hover:opacity-100 opacity-75 after:absolute after:w-4 after:h-4 after:bg-[var(--ghost-aa2)] z-[0] after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:blur-[2px] rounded-2xl relative flex items-center justify-center origin-center w-10 h-10"
            href={`${socials[0]?.social_instagram}`}
          >
            <InstagramLogo className="object-contain w-10 h-10 p-0 mx-auto my-auto origin-center will-change-transform" />
          </a>
        </li>
      ) : undefined}
      {socials[0]?.social_gitlab ? (
        <li>
          <a
            className="group hover:opacity-100 opacity-75 after:absolute after:w-4 after:h-4 after:bg-[var(--ghost-aa2)] z-[0] after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:blur-[2px] rounded-2xl relative flex items-center justify-center origin-center w-10 h-10"
            href={`${socials[0]?.social_gitlab}`}
          >
            <GitlabLogo className="object-contain w-10 h-10 p-0 mx-auto my-auto origin-center will-change-transform" />
          </a>
        </li>
      ) : undefined}
      {socials[0]?.social_github ? (
        <li>
          <a
            className="group hover:opacity-100 opacity-75 after:absolute after:w-4 after:h-4 after:bg-[var(--ghost-aa2)] z-[0] after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:blur-[2px] rounded-2xl relative flex items-center justify-center origin-center w-10 h-10"
            href={`${socials[0]?.social_github}`}
          >
            <GithubLogo className="object-contain w-10 h-10 p-0 mx-auto my-auto origin-center will-change-transform" />
          </a>
        </li>
      ) : undefined}
      {socials[0]?.social_figma ? (
        <li>
          <a
            className="group hover:opacity-100 opacity-75 after:absolute after:w-4 after:h-4 after:bg-[var(--ghost-aa2)] z-[0] after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:blur-[2px] rounded-2xl relative flex items-center justify-center origin-center w-10 h-10"
            href={`${socials[0]?.social_figma}`}
          >
            <FigmaLogo className="object-contain w-10 h-10 p-0 mx-auto my-auto origin-center will-change-transform" />
          </a>
        </li>
      ) : undefined}
      {socials[0]?.social_dribbble ? (
        <li>
          <a
            className="group hover:opacity-100 opacity-75 after:absolute after:w-4 after:h-4 after:bg-[var(--ghost-aa2)] z-[0] after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:blur-[2px] rounded-2xl relative flex items-center justify-center origin-center w-10 h-10"
            href={`${socials[0]?.social_dribbble}`}
          >
            <DribbbleLogo className="object-contain w-10 h-10 p-0 mx-auto my-auto origin-center will-change-transform" />
          </a>
        </li>
      ) : undefined}
      {socials[0]?.social_docker ? (
        <li>
          <a
            className="group hover:opacity-100 opacity-75 after:absolute after:w-4 after:h-4 after:bg-[var(--ghost-aa2)] z-[0] after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:blur-[2px] rounded-2xl relative flex items-center justify-center origin-center w-10 h-10"
            href={`${socials[0]?.social_docker}`}
          >
            <DockerLogo className="object-contain w-10 h-10 p-0 mx-auto my-auto origin-center will-change-transform" />
          </a>
        </li>
      ) : undefined}
      {socials[0]?.social_discord ? (
        <li>
          <a
            className="group hover:opacity-100 opacity-75 after:absolute after:w-4 after:h-4 after:bg-[var(--ghost-aa2)] z-[0] after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:blur-[2px] rounded-2xl relative flex items-center justify-center origin-center w-10 h-10"
            href={`${socials[0]?.social_discord}`}
          >
            <DiscordLogo className="object-contain w-10 h-10 p-0 mx-auto my-auto origin-center will-change-transform" />
          </a>
        </li>
      ) : undefined}
      {socials[0]?.social_behance ? (
        <li>
          <a
            className="group hover:opacity-100 opacity-75 after:absolute after:w-4 after:h-4 after:bg-[var(--ghost-aa2)] z-[0] after:left-0 after:right-0 after:top-0 after:bottom-0 after:m-auto after:blur-[2px] rounded-2xl relative flex items-center justify-center origin-center w-10 h-10"
            href={`${socials[0]?.social_behance}`}
          >
            <BehanceLogo className="object-contain w-10 h-10 p-0 mx-auto my-auto origin-center will-change-transform" />
          </a>
        </li>
      ) : undefined}
    </ul>
  )
}
