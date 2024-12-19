import { motion } from "framer-motion"
import { Ellipsis, LifeBuoy } from "lucide-react"

import { cn } from "@/lib/utils"
import { CollapseMenuButton } from "@/registry/new-york/prodkt/layouts/web-app-01/aside-01/collapse-menu-button"
import { Button } from "@/registry/new-york/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/new-york/ui/drawer"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york/ui/tooltip"

import { getMenuList } from "./menu-list"

interface MenuProps {
  isOpen: boolean | undefined
}

export function Menu({ isOpen }: Readonly<MenuProps>) {
  const menuList = getMenuList()

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <motion.nav
        layout
        transition={{
          opacity: { ease: "linear" },
          type: "spring",
          stiffness: 100,
          layout: { duration: 0.1 },
        }}
        className="w-full h-full mt-0"
      >
        <motion.ul
          layout
          transition={{
            opacity: { ease: "linear" },
            type: "spring",
            stiffness: 100,
            layout: { duration: 0.1 },
          }}
          // className="flex flex-col min-h-[calc(100vh-48px-36px)] sm:min-h-[calc(100vh-32px-40px-32px)] items-start justify-between space-y-1 px-2 pt-12"
          className="flex flex-row px-2.5 gap-1 mt-14 h-[calc(100vh-48px-36px)] sm:h-[calc(100vh-32px-40px-32px)]"
        >
          {menuList.map(({ groupLabel, menus }, index) => (
            <li
              className={cn(
                "flex flex-col mx-auto",
                groupLabel ? "p-0" : "",
                isOpen ? "" : ""
              )}
              key={index}
            >
              {(isOpen && groupLabel) || isOpen === undefined ? (
                <p className="text-[0.6rem] font-medium text-[var(--gray-9)] pb-4 pt-2 px-3 max-w-[248px] uppercase tracking-[0.2rem] truncate">
                  {groupLabel}
                </p>
              ) : !isOpen && isOpen !== undefined && groupLabel ? (
                <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild className="w-full">
                      <div className="flex items-center justify-center w-full">
                        <Ellipsis className="w-5 h-5" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{groupLabel}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <p className="p-0"></p>
              )}
              <div
                className={cn(
                  "ease-in-out duration-1000 grid origin-bottom-right",
                  isOpen === false ? "grid-cols-2 gap-3" : "grid-cols-2 gap-2"
                )}
              >
                {menus.map(
                  (
                    {
                      href,
                      label,
                      icon: Icon,
                      active,
                      submenus,
                      buttonVariant,
                    },
                    index
                  ) =>
                    submenus.length === 0 ? (
                      <div
                        className={cn(
                          "w-full",
                          isOpen === false
                            ? "col-span-2 h-[32px] w-[32px] max-h-[32px] flex items-center justify-center"
                            : "col-span-1"
                        )}
                        key={index}
                      >
                        <TooltipProvider disableHoverableContent>
                          <Tooltip delayDuration={100}>
                            <TooltipTrigger asChild>
                              <a href={href}>
                                <Button
                                  asChild
                                  size="menu"
                                  variant={
                                    active
                                      ? buttonVariant
                                      : (buttonVariant ?? "ghost")
                                  }
                                  className={cn(
                                    "ring-1 ring-inset ring-[var(--gray-a3)] before:bg-transparent before:left-0 before:right-0 before:top-0 before:bottom-0 before:absolute before:w-full before-h-full before:z-[-1]",
                                    isOpen === false
                                      ? "aspect-square basis-full flex items-center justify-center bg-none before:absolute h-[32px] w-[32px] max-h-[32px] max-w-[32px]"
                                      : "aspect-square basis-full items-start justify-between"
                                  )}
                                >
                                  <span
                                    className={cn(
                                      isOpen === false ? "mx-0" : "mr-0"
                                    )}
                                  >
                                    <Icon
                                      strokeWidth="2.5"
                                      size={isOpen === false ? "16" : "28"}
                                      className={cn(
                                        "select-none pointer-events-none top-auto bottom-auto left-auto right-auto mx-auto my-auto origin-top-left",
                                        isOpen === false
                                          ? "translate-y-[2px] brightness-125"
                                          : "translate-y-[2px] transition-all duration-1000 ease-in-out  delay-500 will-change-auto"
                                      )}
                                    />
                                    <Icon
                                      strokeWidth="2.5"
                                      size={isOpen === false ? "20" : "64"}
                                      className={cn(
                                        "select-none hidden pointer-events-none absolute top-auto -translate-y-1/4 -translate-x-1/2 bottom-auto left-auto right-auto mx-auto my-auto origin-center blur-2xl",
                                        isOpen === false
                                          ? "translate-y-[2px] opacity-0"
                                          : "translate-y-[2px] transition-all duration-1000 ease-in-out opacity-100 will-change-auto delay-500 group-hover:contrast-100"
                                      )}
                                    />
                                  </span>
                                  <p
                                    className={cn(
                                      "max-w-[200px] truncate text-[var(--gray-12)] transition-all duration-1000 text-left ms-0 -translate-x-1",
                                      isOpen === false
                                        ? "opacity-100 -translate-y-2"
                                        : "opacity-100 translate-y-0"
                                    )}
                                  >
                                    {label}
                                  </p>
                                </Button>
                              </a>
                            </TooltipTrigger>
                            {isOpen === false && (
                              <TooltipContent side="right">
                                {label}
                              </TooltipContent>
                            )}
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    ) : (
                      <div className="w-full" key={index}>
                        <CollapseMenuButton
                          icon={Icon}
                          label={label}
                          active={active ?? false}
                          submenus={submenus}
                          buttonVariant={buttonVariant ?? "ghost"}
                          isOpen={isOpen}
                        />
                      </div>
                    )
                )}
              </div>
            </li>
          ))}
        </motion.ul>
        <div className="items-end hidden w-full mt-0 mb-0 grow">
          <Drawer>
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <DrawerTrigger asChild>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="justify-center mt-0 pointer-events-auto "
                    >
                      <span className={cn(isOpen === false ? "" : "mr-0")}>
                        <LifeBuoy size={20} />
                      </span>
                      <p
                        className={cn(
                          "whitespace-nowrap",
                          isOpen === false ? "opacity-0 hidden" : "opacity-100"
                        )}
                      >
                        Requests
                      </p>
                    </Button>
                  </DrawerTrigger>
                </TooltipTrigger>
                {isOpen === false && (
                  <TooltipContent side="right">Requests</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>

            <DrawerContent>
              <div className="w-full max-w-sm mx-auto sm:max-w-2xl">
                <DrawerHeader>
                  <DrawerTitle></DrawerTitle>
                  <DrawerDescription></DrawerDescription>
                </DrawerHeader>

                <div className="flex flex-col w-full gap-0">
                  <div className="flex flex-row flex-wrap w-full grid-cols-1 gap-4 p-2 sm:flex-nowrap sm:grid-cols-2">
                    <div className="flex flex-col justify-start items-start gap-3 bg-gradient-to-tr from-[var(--gray-a3)] via-[var(--gray-a2)] to-[var(--gray-a1] px-5 py-4 rounded-2xl w-full basis-1/3 ring ring-inset">
                      <h3 className="bg-clip-text bg-gradient-to-br from-[var(--gray-10)] via-[var(--gray-12)] to-[var(--gray-9)] py-1 font-bold text-2xl text-transparent leading-6 tracking-tight">
                        In search of my next challenge.
                      </h3>
                      <div className="flex flex-col gap-1 text-[var(--gray-a9)] text-balance text-sm">
                        <p>I'm actively exploring opportunities.</p>
                      </div>
                      <Button variant="default" size="sm" className="mt-auto">
                        Lets talk
                      </Button>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3 border-[var(--gray-a3)] bg-gradient-to-bl from-[var(--gray-2)] via-[var(--gray-1)] to-[var(--gray-a1)] px-5 py-4 border rounded-2xl w-full basis-2/3">
                      <h3 className="bg-clip-text bg-gradient-to-br from-[var(--gray-9)] via-[var(--gray-12)] to-[var(--gray-9)] py-1 font-bold text-2xl text-transparent leading-6 tracking-tight">
                        Looking to collaborate on something bleeding-edge?
                      </h3>
                      <div className="flex flex-col gap-2 w-full text-[var(--gray-a9)] text-balance text-sm">
                        <p>
                          I’m young at heart and motivated to make big impacts
                          and improve users experiences across nearly all
                          sectors. Think I can help?
                        </p>
                      </div>
                      <Button variant="default" size="sm">
                        Lets talk
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row flex-wrap w-full grid-cols-1 gap-4 p-2 sm:flex-nowrap sm:grid-cols-2 min-h-40">
                    <div className="flex flex-col justify-start items-start gap-3 border-[var(--gray-a3)] bg-gradient-to-bl from-[var(--teal-2)] via-[var(--teal-1)] to-[var(--teal-3)] px-5 py-4 border rounded-2xl basis-1/3">
                      <h3 className="bg-clip-text bg-gradient-to-br from-[var(--amber-9)] via-[var(--teal-11)] to-[var(--sky-9)] py-1 font-bold text-2xl text-transparent leading-6 tracking-tight">
                        Requests.
                      </h3>
                      <div className="flex flex-col gap-2 text-[var(--gray-a9)] text-balance text-sm">
                        <p>
                          Curious about something I've done? Need a
                          recommendation on how I'd proceed with a project?
                          Regardless, I'm always here to pass on my knowledge
                          and experience.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3 border-[var(--gray-a3)] bg-gradient-to-bl from-[var(--sky-1)] via-[var(--sky-a1)] to-[var(--sky-a1)] px-5 py-4 border rounded-2xl basis-2/3">
                      <h3 className="bg-clip-text bg-gradient-to-br from-[var(--blue-9)] via-[var(--blue-12)] to-[var(--blue-11)] py-1 font-bold text-2xl text-transparent leading-6 tracking-tight">
                        Work for hire.
                      </h3>
                      <div className="flex flex-col gap-2 text-[var(--gray-a9)] text-balance text-sm">
                        <p>
                          Why’ll I prefer to be vested in a venture by, equity,
                          sweat-equity and working with talented designers &
                          engineers to bring home big initiatives. For truly
                          fitting projects I believe in, with big vision and
                          stakeholders willing to make big bets I will make
                          myself available for contract and go-to-market work.
                        </p>
                      </div>
                      <Button variant="default" size="sm" className="mt-auto">
                        Lets talk
                      </Button>
                    </div>
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <p className="text-[var(--gray-a9)] cursor-pointer">
                      Close
                    </p>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </motion.nav>
    </ScrollArea>
  )
}
