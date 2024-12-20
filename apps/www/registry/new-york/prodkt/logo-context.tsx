"use client"

import React, {
  Fragment,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react"
import {
  DownloadIcon,
  CopyIcon as ImageCopyFilledIcon,
  CopyIcon as ImageCopyIcon,
} from "lucide-react"
import { useClickAway, useKey } from "react-use"

import { cn } from "@/lib/utils"
import Logo from "@/components/sparkstack/logo"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

/**
 * Right click on the Prodkt logo in the website navbar
 * for quick access to brand assets.
 */
const LogoContext = () => {
  const ref = useRef(null)
  const [open, setOpen] = useState<boolean>(false)
  const [copied, setCopied] = useState<boolean>(false)

  /**
   * Close dropdown by clicking outside
   */
  useClickAway(ref, () => {
    setOpen(false)
  })

  /**
   * Close dropdown by using the Escape key
   */
  useKey("Escape", () => setOpen(false))

  /**
   * Open dropdown by right clicking on the Prodkt logo
   */
  const handleRightClick = (e: MouseEvent) => {
    e.preventDefault()

    if (e.type === "contextmenu" || e.nativeEvent.button === 2) {
      setOpen(true)
    }
  }

  /**
   * A11y open dropdown by typing Shift+Enter when the logo is focused
   */
  const handleKeyboardOpen = () => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === "Enter") {
        setOpen(true)
      }
    }

    document?.addEventListener("keydown", onKeyDown)
    return () => {
      document?.removeEventListener("keydown", onKeyDown)
    }
  }

  /**
   * Copy to clipboard logo SVG
   */
  const handleCopyToClipboard = (menuItem: MenuItemProps) => {
    navigator.clipboard.writeText(menuItem.clipboard ?? "").then(() => {
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    })
  }

  return (
    <DropdownMenu open={open}>
      <DropdownMenuTrigger asChild>
        <a
          href="/"
          onContextMenu={handleRightClick}
          onFocus={handleKeyboardOpen}
          className="block w-auto h-6 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-foreground-lighter focus-visible:ring-offset-4 focus-visible:ring-offset-background-alternative focus-visible:rounded-sm"
        >
          <Logo className="max-h-[24px] w-auto" />
        </a>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        autoFocus
        ref={ref}
        align="start"
        side="bottom"
        className="mt-2 p-0 w-52"
      >
        {menuItems.map((section, sectionIndex) => (
          <Fragment key={section[0].label}>
            {sectionIndex !== 0 && <DropdownSeparator />}
            <div className="p-1">
              {section.map((menuItem) => (
                <DropdownMenuItem
                  autoFocus
                  asChild
                  key={menuItem.label}
                  className="w-full flex justify-between gap-2 items-center px-2 py-1"
                >
                  {menuItem.type === "download" || menuItem.type === "link" ? (
                    <a
                      href={menuItem.href ?? ""}
                      download={menuItem.type === "download"}
                      className="group/menu-item w-full text-left flex justify-between gap-2 items-center"
                    >
                      <MenuItemContent {...menuItem} />
                    </a>
                  ) : (
                    menuItem.type === "clipboard" && (
                      <button
                        type="button"
                        className="group/menu-item w-full text-left flex justify-between gap-2 items-center"
                        onClick={() => handleCopyToClipboard(menuItem)}
                      >
                        <MenuItemContent copied={copied} {...menuItem} />
                      </button>
                    )
                  )}
                </DropdownMenuItem>
              ))}
            </div>
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const DropdownSeparator = () => <div className="h-px w-full bg-border" />

interface MenuItemProps {
  label: string
  type: "clipboard" | "download" | "link"
  icon?: ReactNode
  href?: string
  clipboard?: string
}

/**
 * Brand assets dropdown menu items.
 * First array is to divide the menu by sections;
 * Second array is the list of items inside each section.
 */
const menuItems: MenuItemProps[][] = [
  [
    {
      label: "Copy logo as SVG",
      type: "clipboard",
      icon: (
        <svg
          width="45"
          height="40"
          viewBox="0 0 45 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.3666 40C25.6573 37.6108 25.0787 34.9977 25.2094 32.5338L17.5192 34.5497C16.194 27.3822 10.0717 23.9664 3.16549 26.3929L0.514954 16.6122L1.41094 16.4442C8.07449 15.119 11.1916 8.77275 8.80245 2.55716L18.5271 0C19.2364 2.40784 19.815 5.00233 19.6844 7.46617L27.3745 5.4503C28.7185 12.6365 34.8034 16.0149 41.7469 13.6071L44.3974 23.3318L43.4828 23.5558C36.8379 24.8997 33.7021 31.2273 36.0913 37.4428L26.3666 40ZM27.6919 37.7415C27.1692 35.8563 26.9826 33.9337 27.0946 32.0485L27.1319 31.6379C27.4119 27.9795 29.0171 24.4517 31.4249 21.5399C25.8253 19.5054 21.4576 15.063 19.9457 9.35138L26.0493 7.74615C27.7292 13.8871 34.1688 17.5455 40.4217 15.9029L40.459 16.0149L42.1016 22.0065C36.0353 23.4624 32.0409 30.1447 33.7954 36.1363L27.6919 37.7415ZM18.8071 32.2912C17.4072 27.1395 12.6475 23.7424 7.4772 23.7424V23.7611C6.46927 23.7611 5.44267 23.8917 4.43474 24.1531L2.77352 18.0308C8.83978 16.5562 12.8155 9.89267 11.061 3.90107L17.1646 2.29585C17.6685 4.18105 17.8552 6.10359 17.7432 7.9888L17.7245 8.39944C17.4445 12.0579 15.8393 15.6043 13.4315 18.4974C19.0311 20.532 23.3988 24.9743 24.9107 30.686L18.8071 32.2912ZM25.9186 27.8488C24.1081 23.4438 20.7297 19.86 16.3433 17.7135C17.5192 15.9776 18.3778 14.1111 18.9378 12.1699C20.7483 16.5749 24.1268 20.1773 28.5131 22.3052C27.3372 24.0411 26.4786 25.9076 25.9186 27.8488Z"
            fill="currentColor"
          />
        </svg>
      ),
      clipboard: `<svg xmlns="http://www.w3.org/2000/svg" width="287" height="63" fill="none" viewBox="0 0 287 63">
  <path fill="currentColor" fill-rule="evenodd" d="M40.659 62.347c-1.102-3.712-2.001-7.772-1.798-11.6l-11.948 3.132c-2.06-11.136-11.571-16.443-22.301-12.673L.494 26.01l1.392-.261C12.239 23.69 17.082 13.83 13.37 4.173L28.479.2c1.102 3.741 2 7.772 1.798 11.6l11.948-3.132c2.088 11.165 11.542 16.414 22.33 12.673l4.118 15.109-1.421.348c-10.324 2.088-15.196 11.919-11.484 21.576l-15.11 3.973Zm2.059-3.509a27.068 27.068 0 0 1-.928-8.845l.058-.638c.435-5.684 2.929-11.165 6.67-15.689-8.7-3.161-15.486-10.063-17.835-18.937l9.483-2.494c2.61 9.541 12.615 15.225 22.33 12.673l.058.174 2.552 9.309C55.68 36.653 49.475 47.035 52.2 56.344l-9.483 2.494ZM28.914 50.37c-2.175-8.004-9.57-13.282-17.603-13.282v.029c-1.566 0-3.161.203-4.727.609l-2.581-9.512c9.425-2.291 15.602-12.644 12.876-21.953l9.483-2.494a27.85 27.85 0 0 1 .899 8.845l-.03.638c-.434 5.684-2.928 11.194-6.67 15.689 8.7 3.161 15.487 10.063 17.836 18.937l-9.483 2.494Zm11.049-6.902C37.15 36.624 31.9 31.056 25.086 27.721a30.27 30.27 0 0 0 4.03-8.613c2.814 6.844 8.063 12.441 14.878 15.747a30.27 30.27 0 0 0-4.031 8.613Zm125.055 1.408c1.674.598 3.485.898 5.373.898h.02c1.888 0 3.679-.3 5.334-.898 1.674-.598 3.154-1.496 4.4-2.692 1.266-1.177 2.259-2.692 2.979-4.507.74-1.815 1.11-3.949 1.11-6.402 0-2.453-.37-4.586-1.11-6.361-.72-1.795-1.713-3.33-2.979-4.507-1.246-1.217-2.726-2.114-4.419-2.693a15.643 15.643 0 0 0-5.335-.937c-1.888-.04-3.699.26-5.373.858a11.999 11.999 0 0 0-4.4 2.692c-1.227 1.176-2.239 2.712-2.979 4.547-.72 1.815-1.071 3.968-1.071 6.401s.351 4.587 1.071 6.402c.74 1.795 1.733 3.31 2.979 4.507a12.558 12.558 0 0 0 4.4 2.692Zm1.849-23.213a9.34 9.34 0 0 1 3.524-.698c1.227.02 2.414.28 3.544.738a8.47 8.47 0 0 1 3.037 1.974 9.827 9.827 0 0 1 2.161 3.23c.525 1.257.798 2.733.798 4.368 0 1.636-.253 3.111-.759 4.368-.507 1.276-1.207 2.353-2.083 3.23a8.6 8.6 0 0 1-3.038 2.015c-2.2.897-4.847.957-7.184 0a9.725 9.725 0 0 1-3.076-2.015c-.876-.877-1.596-1.954-2.122-3.23-.526-1.277-.798-2.732-.798-4.368 0-1.635.272-3.11.798-4.367.545-1.296 1.285-2.393 2.161-3.27a8.742 8.742 0 0 1 3.037-1.975ZM91.814 45.494h4.303v-9.99h7.69c1.577 0 3.018-.26 4.264-.779 1.266-.558 2.356-1.256 3.232-2.133.876-.878 1.557-1.875 2.005-2.952a8.56 8.56 0 0 0 .721-3.45c0-3.051-.935-5.365-2.746-6.86-1.771-1.496-4.283-2.254-7.476-2.254H91.814v28.418Zm11.604-13.78h-7.3V20.965h7.3c.837 0 1.635.12 2.395.32.74.198 1.421.518 1.986.956a4.962 4.962 0 0 1 1.362 1.675c.351.659.526 1.436.526 2.354 0 .718-.175 1.416-.526 2.074a6.266 6.266 0 0 1-1.382 1.755 7.044 7.044 0 0 1-2.025 1.196 6.717 6.717 0 0 1-2.336.419Zm39.288 13.78h4.361v-.04l-.038-8.316c0-1.435-.195-2.472-.585-3.19-.389-.678-.856-1.217-1.382-1.576a2.418 2.418 0 0 0-1.09-.518c-.389-.1-.798-.16-1.285-.16a9.49 9.49 0 0 0 .993-.498c.389-.24.72-.539.973-.818a8.23 8.23 0 0 0 1.441-1.855c.448-.738.662-1.795.662-3.11 0-2.853-.915-5.006-2.745-6.343-1.791-1.316-4.303-1.994-7.457-1.994h-12.713v28.438h4.342v-10.01l12.012-.04c.973 0 1.635.159 1.986.498.35.299.525.777.525 1.475v8.057Zm-14.523-13.98h7.612c1.032 0 1.986-.139 2.803-.378a7.608 7.608 0 0 0 2.22-1.157c.623-.479 1.09-1.037 1.402-1.675.35-.638.525-1.336.525-2.074 0-1.974-.584-3.35-1.713-4.088-1.149-.758-2.765-1.157-4.809-1.157h-8.04v10.53Zm65.746 13.98h11.195l.019.02c1.928 0 3.758-.299 5.452-.857 1.713-.579 3.212-1.456 4.477-2.613 1.285-1.176 2.317-2.692 3.057-4.467.74-1.775 1.11-3.889 1.11-6.282 0-2.393-.37-4.507-1.11-6.282-.74-1.775-1.772-3.27-3.057-4.427-1.265-1.196-2.784-2.074-4.497-2.652-1.713-.579-3.543-.858-5.451-.858h-11.195v28.418Zm11.389-4.168h-7.047V22.221c0-.299-.117-.578-.312-.777a2.925 2.925 0 0 0-.272-.22h7.651c1.149 0 2.317.18 3.465.579 1.149.378 2.2.957 3.096 1.755.915.797 1.655 1.854 2.2 3.11.565 1.277.837 2.753.837 4.607 0 1.855-.292 3.43-.876 4.687-.565 1.276-1.304 2.313-2.239 3.11a8.142 8.142 0 0 1-3.057 1.756c-1.148.319-2.316.498-3.446.498Z" clip-rule="evenodd"/>
  <path fill="currentColor" d="M247.43 45.494h5.548v.02h.02L241.336 29.64l10.727-12.544h-5.665l-12.46 14.518a9.79 9.79 0 0 0-.701.957 6.54 6.54 0 0 0 .117-1.196V17.076h-4.303v28.418h4.303v-7.319l4.127-6.341 9.871 13.56.078.1Zm24.57 0h4.302V22.341a3.06 3.06 0 0 0-.292-1.296.696.696 0 0 0-.039-.09c-.014-.03-.029-.06-.039-.09.03.01.054.025.078.04.025.015.049.03.078.04.448.2.876.3 1.304.3h8.723v-4.169h-23.928v4.168H272v24.25Z"/>
</svg>

`,
    },
    {
      label: "Download wordmark",
      type: "download",
      icon: <DownloadIcon />,
      href: "/sparkstack-wordmark.zip",
    },
    {
      label: "Download brand assets",
      type: "download",
      href: "/sparkstack-brand-assets.zip",
      icon: <DownloadIcon />,
    },
  ],
  [
    {
      label: "Brand Assets",
      type: "link",
      href: "/brand-assets",
    },
  ],
]

interface MenuItemContentProps {
  icon?: ReactNode
  type: string
  label: string
  copied?: boolean
}

/**
 * MenuItem content
 */
const MenuItemContent = ({
  icon,
  type,
  label,
  copied,
}: MenuItemContentProps) => (
  <>
    {icon && <span className="text-foreground-lighter">{icon}</span>}
    <span className="grow">{label}</span>
    {type === "clipboard" && (
      <span className="w-4 opacity-0 flex items-center justify-center group-hover/menu-item:opacity-100 group-focus/menu-item:opacity-100 group-focus-visible/menu-item:opacity-100">
        {!copied ? (
          <ImageCopyIcon
            strokeWidth={1}
            className={cn(
              "h-3 transition-opacity opacity-0 duration-300",
              !copied && "opacity-100"
            )}
          />
        ) : (
          <ImageCopyFilledIcon
            strokeWidth={1}
            className={cn(
              "h-3 transition-opacity opacity-0 duration-300",
              copied && "opacity-100"
            )}
          />
        )}
      </span>
    )}
  </>
)

export default LogoContext
