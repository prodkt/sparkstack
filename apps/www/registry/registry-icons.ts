export const iconLibraries = {
  lucide: {
    name: "lucide-react",
    package: "lucide-react",
    import: "lucide-react",
  },
  radix: {
    name: "@radix-ui/react-icons",
    package: "@radix-ui/react-icons",
    import: "@radix-ui/react-icons",
  },
  prodkt: {
    name: "prodkt-icons",
    import: "@/registry/icons",
  },
} as const

export const icons: Record<
  string,
  Record<keyof typeof iconLibraries, string>
> = {
  AlertCircle: {
    lucide: "AlertCircle",
    radix: "ExclamationTriangleIcon",
    prodkt: "AlertCircle",
  },
  ArrowLeft: {
    lucide: "ArrowLeft",
    radix: "ArrowLeftIcon",
    prodkt: "ArrowLeft",
  },
  ArrowRight: {
    lucide: "ArrowRight",
    radix: "ArrowRightIcon",
    prodkt: "ArrowRight",
  },
  ArrowUpDown: {
    lucide: "ArrowUpDown",
    radix: "CaretSortIcon",
    prodkt: "ArrowUpDown",
  },
  BellRing: {
    lucide: "BellRing",
    radix: "BellIcon",
    prodkt: "BellRing",
  },
  Bold: {
    lucide: "Bold",
    radix: "FontBoldIcon",
    prodkt: "Bold",
  },
  Calculator: {
    lucide: "Calculator",
    radix: "ComponentPlaceholderIcon",
    prodkt: "Calculator",
  },
  Calendar: {
    lucide: "Calendar",
    radix: "CalendarIcon",
    prodkt: "Calendar",
  },
  Check: {
    lucide: "Check",
    radix: "CheckIcon",
    prodkt: "Check",
  },
  ChevronDown: {
    lucide: "ChevronDown",
    radix: "ChevronDownIcon",
    prodkt: "ChevronDown",
  },
  ChevronLeft: {
    lucide: "ChevronLeft",
    radix: "ChevronLeftIcon",
    prodkt: "ChevronLeft",
  },
  ChevronRight: {
    lucide: "ChevronRight",
    radix: "ChevronRightIcon",
    prodkt: "ChevronRight",
  },
  ChevronUp: {
    lucide: "ChevronUp",
    radix: "ChevronUpIcon",
    prodkt: "ChevronUp",
  },
  ChevronsUpDown: {
    lucide: "ChevronsUpDown",
    radix: "CaretSortIcon",
    prodkt: "ChevronsUpDown",
  },
  Circle: {
    lucide: "Circle",
    radix: "DotFilledIcon",
    prodkt: "Circle",
  },
  Copy: {
    lucide: "Copy",
    radix: "CopyIcon",
    prodkt: "Copy",
  },
  CreditCard: {
    lucide: "CreditCard",
    radix: "ComponentPlaceholderIcon",
    prodkt: "CreditCard",
  },
  Download: {
    lucide: "Download",
    radix: "DownloadIcon",
    prodkt: "Download",
  },
  GripVertical: {
    lucide: "GripVertical",
    radix: "DragHandleDots2Icon",
    prodkt: "GripVertical",
  },
  Italic: {
    lucide: "Italic",
    radix: "FontItalicIcon",
    prodkt: "Italic",
  },
  Loader2: {
    lucide: "Loader2",
    radix: "ReloadIcon",
    prodkt: "Loader2",
  },
  Mail: {
    lucide: "Mail",
    radix: "EnvelopeClosedIcon",
    prodkt: "Mail",
  },
  MailOpen: {
    lucide: "MailOpen",
    radix: "EnvelopeOpenIcon",
    prodkt: "MailOpen",
  },
  Minus: {
    lucide: "Minus",
    radix: "MinusIcon",
    prodkt: "Minus",
  },
  Moon: {
    lucide: "Moon",
    radix: "MoonIcon",
    prodkt: "Moon",
  },
  MoreHorizontal: {
    lucide: "MoreHorizontal",
    radix: "DotsHorizontalIcon",
    prodkt: "MoreHorizontal",
  },
  PanelLeft: {
    lucide: "PanelLeft",
    radix: "ViewVerticalIcon",
    prodkt: "PanelLeft",
  },
  Plus: {
    lucide: "Plus",
    radix: "PlusIcon",
    prodkt: "Plus",
  },
  Search: {
    lucide: "Search",
    radix: "MagnifyingGlassIcon",
    prodkt: "Search",
  },
  Send: {
    lucide: "Send",
    radix: "PaperPlaneIcon",
    prodkt: "Send",
  },
  Settings: {
    lucide: "Settings",
    radix: "GearIcon",
    prodkt: "Settings",
  },
  Slash: {
    lucide: "Slash",
    radix: "SlashIcon",
    prodkt: "Slash",
  },
  Smile: {
    lucide: "Smile",
    radix: "FaceIcon",
    prodkt: "Smile",
  },
  Sun: {
    lucide: "Sun",
    radix: "SunIcon",
    prodkt: "Sun",
  },
  Terminal: {
    lucide: "Terminal",
    radix: "RocketIcon",
    prodkt: "Terminal",
  },
  Underline: {
    lucide: "Underline",
    radix: "UnderlineIcon",
    prodkt: "Underline",
  },
  User: {
    lucide: "User",
    radix: "PersonIcon",
    prodkt: "User",
  },
  X: {
    lucide: "X",
    radix: "Cross2Icon",
    prodkt: "X",
  },
} as const
