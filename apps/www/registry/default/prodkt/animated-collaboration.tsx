import { Component, Frame, PenTool } from "lucide-react"

import AnimatedCollaborationStyles from "@/styles/components/animated-collaboration.module.css"

export default function AnimatedCollaboration() {
  return (
    <div className="bg-popover-hover relative flex h-[372px] w-[560px] items-center justify-center overflow-hidden rounded-2xl border drop-shadow-md">
      <div
        className={[
          "relative h-12 w-48 bg-gray-a4 shadow-[0_0_20px_2px_var(--gray-a2),inset_0_0_20px_4px_var(--gray-a2)]",
          `flex items-center justify-center ${AnimatedCollaborationStyles["shape"]}`,
        ].join(" ")}
      >
        <p
          className={`text-foreground text-sm font-medium ${AnimatedCollaborationStyles["button-text"]}`}
        >
          Start a project
        </p>
      </div>
      <Cursor
        color="var(--info-10)"
        className={`${AnimatedCollaborationStyles["cursor-one"]} absolute top-[220px] right-[130px]`}
      />
      <Cursor
        color="var(--destructive-10)"
        className={`${AnimatedCollaborationStyles["cursor-two"]} absolute top-[180px] right-[280px]`}
      />
      <div
        className={[
          "absolute bottom-[40px] left-[175px] flex h-8 w-12",
          "items-center justify-center space-x-2 rounded-full border border-card-selected bg-card-selected",
          `${AnimatedCollaborationStyles["cursor-two-comment"]}`,
        ].join(" ")}
      >
        <p className="text-lg">🤔</p>
      </div>
      <Cursor
        color="var(--warning-9)"
        className={`${AnimatedCollaborationStyles["cursor-three"]} absolute top-[170px] right-[180px]`}
      />
      <div
        className={[
          "absolute top-[72px] left-[320px] flex h-8 w-12",
          "items-center justify-center space-x-2 rounded-full border border-card-selected bg-card-selected",
          `${AnimatedCollaborationStyles["cursor-three-comment"]}`,
        ].join(" ")}
      >
        <p className="text-lg">😄</p>
      </div>
      <div className="bg-card-selected absolute flex h-9 items-center justify-between rounded-lg top-1 left-1 right-1 w-[100%_-_0.25rem]">
        <div className="flex items-center">
          <Component
            className="text-foreground mx-3"
            strokeWidth={1}
            size={16}
          />
          <Frame className="text-foreground mx-3" strokeWidth={1} size={15} />
          <PenTool className="text-foreground mx-3" strokeWidth={1} size={15} />
        </div>
        <div className="mx-3 flex items-center">
          <div className="shadow shadow-destructive-a8 ring-2 ring-card-selected border-destructive-8 bg-ghost-a3 backdrop-blur-[2px] relative -right-4 h-5 w-5 rounded-full border" />
          <div className="shadow shadow-warning-a8 ring-2 ring-card-selected border-warning-8 bg-ghost-a3 backdrop-blur-[2px] relative -right-2 z-[2] h-5 w-5 rounded-full border" />
          <div className="shadow shadow-info-a8 ring-2 ring-card-selected border-info-10 bg-ghost-a3 backdrop-blur-[2px] z-[3] h-5 w-5 rounded-full border" />
        </div>
      </div>
    </div>
  )
}

const Cursor = ({ className = "", color = "none" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-10 w-10 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
      />
    </svg>
  )
}
