import { Grid, Layers, Menu } from "lucide-react"

import AnimatedCollaborationStyles from "@/styles/components/animated-collaboration.module.css"

export default function AnimatedCollaboration() {
  return (
    <div className="bg-primary relative flex h-[372px] w-[560px] items-center justify-center overflow-hidden rounded-2xl border drop-shadow-md">
      <div
        className={[
          "border relative h-12 w-48 bg-primary",
          `flex items-center justify-center ${AnimatedCollaborationStyles["shape"]}`,
        ].join(" ")}
      >
        <p
          className={`text-foreground text-[18px] font-medium ${AnimatedCollaborationStyles["button-text"]}`}
        >
          Start a project
        </p>
      </div>
      <Cursor
        color="var(--primary-11)"
        className={`${AnimatedCollaborationStyles["cursor-one"]} absolute top-[220px] right-[130px]`}
      />
      <Cursor
        color="var(--destructive-11)"
        className={`${AnimatedCollaborationStyles["cursor-two"]} absolute top-[180px] right-[280px]`}
      />
      <div
        className={[
          "absolute bottom-[40px] left-[175px] flex h-8 w-12",
          "items-center justify-center space-x-2 rounded-full bg-card-active",
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
          "items-center justify-center space-x-2 rounded-full bg-card-active",
          `${AnimatedCollaborationStyles["cursor-three-comment"]}`,
        ].join(" ")}
      >
        <p className="text-lg">😄</p>
      </div>
      <div className="bg-card absolute top-0 flex h-9 w-full items-center justify-between border-b">
        <div className="flex items-center">
          <Menu className="text-foreground mx-3" strokeWidth={1} size={16} />
          <Grid className="text-foreground mx-3" strokeWidth={1} size={15} />
          <Layers className="text-foreground mx-3" strokeWidth={1} size={15} />
        </div>
        <div className="mx-3 flex items-center">
          <div className="shadow-inner shadow-destructive border-destructive-hover bg-destructive relative -right-4 h-5 w-5 rounded-full border" />
          <div className="shadow-inner shadow-warning border-warning-active bg-warning relative -right-2 z-[2] h-5 w-5 rounded-full border" />
          <div className="shadow-inner shadow-primary border-primary-active bg-primary z-[3] h-5 w-5 rounded-full border" />
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
