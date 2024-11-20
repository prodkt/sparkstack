import React from "react"
import clsx from "clsx"
import { StarIcon } from "lucide-react"

// import { useCommunityStatsContext } from "./context/CommunityStats";

export const GithubStars = () => {
  // const { loading, githubStarCountText } = useCommunityStatsContext();

  return (
    <a
      href="https://github.com/prodkt/app"
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "self-start",
        "flex",
        "relative",
        "rounded-3xl",
        "p-px",
        "hover:no-underline",
        "w-full",
        "bg-gray-2",
        "max-w-fit",
        "text-foreground"
      )}
      style={{
        transform: "translateZ(0)",
      }}
    >
      <div
        className={clsx(
          "overflow-hidden",
          "absolute",
          "size-full",
          "-mr-px",
          "self-stretch",
          "inset-0",
          "rounded-3xl"
        )}
        style={{
          transform: "translateZ(0)",
        }}
      >
        <div
          className={clsx(
            "block",
            "absolute",
            "-top-8",
            "-left-8",
            "animate-github-stars-border",
            "w-24",
            "h-24",
            "rounded-full",
            "bg-warning",
            "opacity-100",
            "blur-xl"
          )}
        />
      </div>
      <div
        className={clsx(
          "block",
          "absolute",
          "-left-2",
          "-top-0",
          "z-[0]",
          "w-12",
          "h-6",
          "blur-sm",
          "bg-ghost-aa12",
          "rounded-full",
          "opacity-100",
          "animate-github-stars-glow"
        )}
      />
      <div
        className={clsx(
          "relative",
          "z-[1]",
          "rounded-[23px]",
          "py-[7px]",
          "pl-2",
          "pr-4",
          "flex",
          "gap-2",
          "items-center",
          "justify-center",
          "bg-ghost-a12",
          "shadow-[inset_0_0_8px_-3px_var(--orange-a9)]",
          "max-w-fit"
          // "bg-github-stars-gradient"
        )}
      >
        <StarIcon
          size={14}
          className="drop-shadow-github-stars-glow fill-orange-9 color-orange-1 stroke-orange-a10 after:absolute after:inset-0 after:rounded-full after:bg-orange-a11 stroke-2 relative after:blur-[1px] after:m-auto after:size-4"
        />
        <span
          className={clsx(
            "font-normal",
            "text-xs",
            "text-transparent",
            "bg-clip-text",
            "bg-github-stars-text"
          )}
        >
          <span className={clsx("font-semibold")}>
            <span>{"985"}</span>
          </span>{" "}
          <span>GitHub stars so far</span>
        </span>
      </div>
    </a>
  )
}
