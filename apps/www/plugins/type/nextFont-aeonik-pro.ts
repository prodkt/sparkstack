// import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"
// import { JetBrains_Mono as FontMono } from "next/font/google"
// import { GeistMono } from "geist/font/mono"
// import { GeistSans } from "geist/font/sans"
import localFont from "next/font/local"

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

// export const fontMono = FontMono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// })

export const fontSans = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../../assets/fonts/webfont-ap/AeonikPro-Air.woff2",
      weight: "100",
    },
    {
      path: "../../assets/fonts/webfont-ap/AeonikPro-AirItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../assets/fonts/webfont-ap/AeonikPro-Black.woff2",
      weight: "900",
    },
    {
      path: "../../assets/fonts/webfont-ap/AeonikPro-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../assets/fonts/webfont-ap/AeonikPro-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../../assets/fonts/webfont-ap/AeonikPro-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../assets/fonts/webfont-ap/AeonikPro-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../assets/fonts/webfont-ap/AeonikPro-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../assets/fonts/webfont-ap/AeonikPro-Light.woff2",
      weight: "300",
    },
    {
      path: "../../assets/fonts/webfont-ap/AeonikPro-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../assets/fonts/webfont-ap/AeonikPro-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../assets/fonts/webfont-ap/AeonikPro-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../assets/fonts/webfont-ap/AeonikPro-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../assets/fonts/webfont-ap/AeonikPro-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../assets/fonts/webfont-ap/AeonikPro-Thin.woff2",
      weight: "200",
    },
    {
      path: "../assets/fonts/webfont-ap/AeonikPro-ThinItalic.woff2",
      weight: "200",
      style: "italic",
    },
  ],
})

export const fontMono = localFont({
  variable: "--font-mono",
  src: [
    {
      path: "../assets/fonts/webfont-AeonikMono/AeonikMono-Air.woff2",
      weight: "100",
    },
    {
      path: "../assets/fonts/webfont-AeonikMono/AeonikMono-Black.woff2",
      weight: "900",
    },
    {
      path: "../assets/fonts/webfont-AeonikMono/AeonikMono-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../assets/fonts/webfont-AeonikMono/AeonikMono-Bold.woff2",
      weight: "700",
    },
    {
      path: "../assets/fonts/webfont-AeonikMono/AeonikMono-Light.woff2",
      weight: "300",
    },
    {
      path: "../assets/fonts/webfont-AeonikMono/AeonikMono-Medium.woff2",
      weight: "500",
    },
    {
      path: "../assets/fonts/webfont-AeonikMono/AeonikMono-Regular.woff2",
      weight: "400",
    },
    {
      path: "../assets/fonts/webfont-AeonikMono/AeonikMono-Thin.woff2",
      weight: "200",
    },
  ],
})
