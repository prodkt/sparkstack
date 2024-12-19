"use client"

import React, { useEffect, useId, useRef, useState } from "react"
import clsx from "clsx"
import { MotionConfig, motion, useReducedMotion } from "framer-motion"
// interface SidebarToggleProps {
// 	isOpen: boolean | undefined
// 	setIsOpen?: () => void
// }

import {
  BellRing,
  FolderRoot,
  Home,
  LockOpen,
  Telescope,
  Text,
  Ticket,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { useSidebarToggle } from "@/registry/new-york/hooks/use-sidebar-toggle"
import { useStore } from "@/registry/new-york/hooks/use-store"
import DecorativeBg8 from "@/registry/new-york/prodkt/assets/decorative-8"
import { Footer } from "@/registry/new-york/prodkt/footers/footer-01"
import { SheetMenu } from "@/registry/new-york/prodkt/layouts/web-app-01/aside-01/sheet-menu"
import { Sidebar } from "@/registry/new-york/prodkt/layouts/web-app-01/aside-01/sidebar"
import { Container } from "@/registry/new-york/prodkt/layouts/web-app-01/container"
import { SocialMedia } from "@/registry/new-york/prodkt/layouts/web-app-01/social-media"
import { ProdktModeToggle } from "@/registry/new-york/prodkt/prodkt-mode-toggle"
import { ThemeSwitcher } from "@/registry/new-york/prodkt/theme-switcher"
import { Badge } from "@/registry/new-york/ui/badge"
import { Button } from "@/registry/new-york/ui/button"

import "../../../../../styles/blocks/layouts/web-app-01.css"
import { Offices } from "./offices"

function MenuIcon(props: Readonly<React.ComponentPropsWithoutRef<"svg">>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

export function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}: Readonly<{
  panelId: string
  icon: React.ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  toggleRef: React.RefObject<HTMLButtonElement>
  invert?: boolean
}>) {
  return (
    <Container>
      <div className="flex justify-stretch items-center place-items-start place-content-start gap-0 sm:gap-2 mx-0 mt-0 mb-auto rounded-t-2xl w-auto h-auto min-h-[57px] text-nowrap overflow-hidden pe-3">
        <Sidebar />
        <div className="flex items-center justify-start w-full gap-x-2 md:ps-6">
          <a href="/" className="hidden sm:flex" aria-label="Home">
            <Button variant="outline" size="sm">
              <Home
                size={14}
                className="text-[var(--gray-a7)]"
                fill="currentColor"
              />
              Home
            </Button>
          </a>
          <a href="/blog" className="hidden sm:flex" aria-label="Blog">
            <Button variant="outline" size="sm">
              <Text
                size={14}
                className="text-[var(--blue-a7)]"
                fill="currentColor"
              />
              Blog
            </Button>
          </a>
          <a href="/projects/showcase" aria-label="Projects">
            <Button variant="outline" size="sm">
              <FolderRoot
                size={14}
                className="text-[var(--red-a7)]"
                fill="currentColor"
              />
              Projects
            </Button>
          </a>
          <a href="/bryan-funk" aria-label="Employment">
            <Button variant="outline" size="sm">
              <Telescope
                size={14}
                className="text-[var(--mint-a7)]"
                fill="currentColor"
              />{" "}
              Bryan Funk
              <Badge
                variant="solid"
                className="pt-0 pb-0 -me-1.5 px-1 rounded-md hidden lg:flex tracking-[0.06rem] uppercase text-[0.5rem]"
              >
                Exploring Opportunities
              </Badge>
            </Button>
          </a>
        </div>
        <div className="flex items-center justify-end w-full gap-x-2">
          <ProdktModeToggle />
          <ThemeSwitcher />
          <a href="/" aria-label="Login to Prodkt">
            <Button variant="default" size="sm" className="hidden md:flex">
              <LockOpen size={14} />
              Logout
            </Button>
          </a>
          <a href="/" aria-label="Login to Prodkt">
            <Button variant="default" size="sm" className="hidden md:flex">
              <LockOpen size={14} />
              Login
            </Button>
          </a>
          <a href="/" aria-label="Login to Prodkt">
            <Button variant="default" size="sm" className="hidden md:flex">
              <Ticket size={14} /> Create Account
            </Button>
          </a>
          <Button
            variant="default"
            // ref={toggleRef as React.ForwardedRef<HTMLButtonElement>}
            ref={toggleRef}
            size="icon"
            onClick={onToggle}
            aria-expanded={expanded ? "true" : "false"}
            aria-controls={panelId}
            className={clsx("hidden sm:flex", invert ? "" : "")}
            aria-label="Toggle navigation"
          >
            {expanded ? <X size={16} /> : <BellRing size={16} />}
          </Button>
          <SheetMenu />
        </div>
      </div>
    </Container>
  )
}

function NavigationRow({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full h-auto">
      <Container>
        <div className="grid items-stretch gap-4 p-4 overflow-hidden border-none justify-stretch place-items-stretch content-stretch place-content-stretch sm:grid-cols-2 xl:grid-cols-4 rounded-s-2xl">
          {children}
        </div>
      </Container>
    </div>
  )
}

function NavigationItem({
  href,
  children,
  navImageSrc,
  navImageAlt,
  navImageClass,
}: Readonly<{
  href: string
  navImageClass?: React.ImgHTMLAttributes<HTMLImageElement>["className"] | null
  navImageSrc?: React.ReactNode | null // Changed type to ReactNode
  navImageAlt?: React.ImgHTMLAttributes<HTMLImageElement>["alt"] | undefined
  children: React.ReactNode
}>) {
  return (
    <a
      href={href}
      className="relative w-full p-4 overflow-hidden transition-all duration-500 ease-in-out md:p-12 rounded-xl basis-full group md:basis-1/2 isolate ring-1 ring-[var(--gray-a4)]"
    >
      {children}
      {navImageSrc ? navImageSrc : null}
      <span className="group-hover:bg-[var(--ghost-aa7)] top-0 right-0 bottom-0 left-0 -z-10 absolute bg-[var(--ghost-aa9)] w-full h-full transition-all" />
    </a>
  )
}

function Navigation() {
  return (
    <nav className="z-0 text-xl font-medium tracking-tight md:text-4xl lg:text-5xl">
      <NavigationRow>
        <NavigationItem
          navImageSrc={<DecorativeBg8 />}
          navImageClass="min-w-[100%] transition-all min-h-[100%] object-center translate-y-1/4 saturate-50"
          navImageAlt=""
          href="/projects"
        >
          Projects
        </NavigationItem>
        <NavigationItem
          navImageSrc={<DecorativeBg8 />}
          navImageClass="min-w-[100%] transition-all min-h-[100%] object-center translate-y-1/4 saturate-50"
          navImageAlt=""
          href="/projects/showcase"
        >
          Work Showcase
        </NavigationItem>
        <NavigationItem
          navImageSrc={<DecorativeBg8 />}
          navImageClass="min-w-[100%] transition-all min-h-[100%] object-center"
          navImageAlt=""
          href="/bryan-funk"
        >
          About me
        </NavigationItem>
        <NavigationItem
          navImageSrc={<DecorativeBg8 />}
          navImageClass="min-w-[100%] transition-all min-h-[100%] object-center rotate-90"
          navImageAlt=""
          href="/flows"
        >
          Flows
        </NavigationItem>
        <NavigationItem
          navImageSrc={<DecorativeBg8 />}
          navImageClass="min-w-[100%] transition-all min-h-[100%] object-center"
          navImageAlt=""
          href="/design"
        >
          Design
        </NavigationItem>
        <NavigationItem
          navImageSrc={<DecorativeBg8 />}
          navImageClass="min-w-[100%] transition-all min-h-[100%] object-center"
          navImageAlt=""
          href="/repos"
        >
          Repos
        </NavigationItem>
      </NavigationRow>
    </nav>
  )
}

export function ProdktLayout({
  children,
  hideFooter,
}: Readonly<{ children: React.ReactNode; hideFooter?: boolean }>) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef<HTMLButtonElement>(null)
  let closeRef = useRef<HTMLButtonElement>(null)
  let navRef = useRef<HTMLButtonElement>(null)

  let shouldReduceMotion = useReducedMotion()

  const sidebar = useStore(useSidebarToggle, (state) => state)

  // Move the conditional logic inside the useEffect if necessary
  useEffect(() => {
    if (!sidebar) return

    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest("a")?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener("click", onClick)

    return () => {
      window.removeEventListener("click", onClick)
    }
  }, [sidebar])

  const toggleRef = expanded ? closeRef : openRef

  return sidebar ? (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <div className="grid h-full overflow-hidden prodkt-rim-container rounded-2xl w-full">
        <header
          className={cn(
            "overflow-hidden rounded-t-2xl prodkt-header",
            sidebar?.isOpen === false
              ? "ml-[56px] w-[calc(100%_-_56px)]"
              : "ml-[14rem]  w-[calc(100%_-_14rem)]"
          )}
        >
          <div
            aria-hidden={expanded ? "true" : undefined}
            className={cn(
              "left-0 right-0 z-50 ml-[56px] flex items-start justify-center w-full min-w-full prodkt-header mx-0 mt-0 overflow-hidden",
              sidebar?.isOpen === false
                ? "ml-[56px] w-[calc(100%_-_56px)]"
                : "ml-[14rem]  w-[calc(100%_-_14rem)]"
            )}
          >
            <Header
              panelId={panelId}
              icon={MenuIcon}
              // @ts-ignore
              toggleRef={toggleRef}
              expanded={expanded}
              onToggle={() => {
                setExpanded((expanded) => !expanded)
                window.setTimeout(() =>
                  closeRef.current?.focus({ preventScroll: true })
                )
              }}
            />
          </div>
          <motion.div
            layout
            // @ts-ignore
            id={panelId}
            transition={{
              opacity: { ease: "linear" },
              type: "spring",
              stiffness: 100,
              layout: { duration: 0.3 },
            }}
            style={{
              height: expanded ? "calc(100dvh - 32px)" : "0.05rem",
              borderBottomLeftRadius: expanded ? "0" : "40px",
            }}
            aria-hidden={expanded ? undefined : "true"}
            className={cn(
              "transition-[width] right-0 left-0 z-[40] absolute -mt-[0.05rem] w-full will-change-transform origin-top overflow-hidden",
              sidebar?.isOpen === false
                ? "ml-[57px] w-[calc(100%_-_56px)]"
                : "ml-[14.1rem]"
            )}
          >
            <motion.div layout>
              <div
                // @ts-ignore
                ref={navRef}
                className="ms-0 me-auto right-auto after:right-0 after:bottom-0 left-0 after:left-0 after:z-[-1] after:absolute after:bg-[var(--ghost-aa12)] backdrop-blur rounded-tl-2xl w-[var(--dropmenuWidth)] after:w-full h-[var(--dropmenuHeight)] after:h-full translate-y-[59px] overflow-hidden will-change-auto"
              >
                <Navigation />
                <div className="relative top-0 rounded-s-2xl">
                  <Container className="w-full">
                    <div className="grid grid-cols-1 px-16 pt-10 pb-16 gap-y-10 sm:grid-cols-2 sm:pt-16">
                      <div>
                        <h2 className="text-xs uppercase tracking-[0.3rem] text-[var(--gray-9)]">
                          Working remote from
                        </h2>
                        <Offices
                          invert
                          className="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2"
                        />
                      </div>
                      <div className="sm:pl-16 sm:border-transparent sm:border-l">
                        <h2 className="text-xs uppercase tracking-[0.3rem] text-[var(--gray-9)]">
                          Follow me
                        </h2>
                        <SocialMedia className="mt-6" invert />
                      </div>
                    </div>
                  </Container>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </header>

        <motion.main
          layout
          transition={{
            opacity: { ease: "anticipate" },
            type: "spring",
            stiffness: 100,
            layout: { duration: 0.3 },
          }}
          className={cn(
            "min-h-[calc(100vh_-_90px)] relative p-0 overflow-hidden rounded-tl-2xl prodkt-main",
            sidebar?.isOpen === false ? "ml-[0px]" : "ml-[10.5rem]"
          )}
        >
          <motion.div>
            <div className="prodkt-scroll-wrapper relative top-0 bottom-0 flex-col justify-start items-center scroll-m-0 mx-0 my-0 p-0 scroll-p-0 rounded-tl-2xl w-full h-[var(--mainHeight)] min-h-full overflow-hidden overflow-x-hidden overflow-y-auto">
              {children}
              {hideFooter ? null : <Footer />}
            </div>
          </motion.div>
        </motion.main>
      </div>
    </MotionConfig>
  ) : (
    <>
      {children}
      {hideFooter ? null : <Footer />}
    </>
  )
}
