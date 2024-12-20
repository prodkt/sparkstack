import localFont from "next/font/local"

export const fontSans = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../../assets/fonts/custom/CustomFont-Book.woff2",
      weight: "100",
    },
    {
      path: "../../assets/fonts/custom/CustomFont-BookItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../assets/fonts/custom/CustomFont-Black.woff2",
      weight: "900",
    },
    {
      path: "../../assets/fonts/custom/CustomFont-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../assets/fonts/custom/CustomFont-Medium.woff2",
      weight: "600",
    },
    {
      path: "../../assets/fonts/custom/CustomFont-Medium.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../assets/fonts/custom/CustomFont-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../assets/fonts/custom/CustomFont-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../assets/fonts/custom/CustomFont-Book.woff2",
      weight: "300",
    },
    {
      path: "../../assets/fonts/custom/CustomFont-BookItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../assets/fonts/custom/CustomFont-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../assets/fonts/custom/CustomFont-Medium.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../assets/fonts/custom/CustomFont-Book.woff2",
      weight: "400",
    },
    {
      path: "../../assets/fonts/custom/CustomFont-BookItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../assets/fonts/custom/CustomFont-Book.woff2",
      weight: "200",
    },
    {
      path: "../../assets/fonts/custom/CustomFont-BookItalic.woff2",
      weight: "200",
      style: "italic",
    },
  ],
})

export const fontMono = localFont({
  variable: "--font-mono",
  src: [
    {
      path: "../../assets/fonts/webfont-AeonikMono/AeonikMono-Air.woff2",
      weight: "100",
    },
    {
      path: "../../assets/fonts/webfont-AeonikMono/AeonikMono-Black.woff2",
      weight: "900",
    },
    {
      path: "../../assets/fonts/webfont-AeonikMono/AeonikMono-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../../assets/fonts/webfont-AeonikMono/AeonikMono-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../assets/fonts/webfont-AeonikMono/AeonikMono-Light.woff2",
      weight: "300",
    },
    {
      path: "../../assets/fonts/webfont-AeonikMono/AeonikMono-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../assets/fonts/webfont-AeonikMono/AeonikMono-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../assets/fonts/webfont-AeonikMono/AeonikMono-Thin.woff2",
      weight: "200",
    },
  ],
})
