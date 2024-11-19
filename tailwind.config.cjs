const { fontFamily, keyframes, animation, transitionDelay, screens } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "[data-theme='dark']", ],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "registry/**/*.{ts,tsx}", "ui/**/*.{ts,tsx}", "prodkt/**/*.{ts,tsx}", "www/**/*.{ts,tsx}", "**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        input: {
          DEFAULT: "var(--input)",
          hover: "var(--input-hover)",
          active: "var(--input-active)",
          disabled: "var(--input-disabled)",
          selected: "var(--input-selected)",
        },
        ring: {
          DEFAULT: "var(--ring)",
          hover: "var(--ring-hover)",
          active: "var(--ring-active)",
          disabled: "var(--ring-disabled)",
          selected: "var(--ring-selected)",
        },
        "border": {
          DEFAULT: "var(--border)",
          hover: "var(--border-hover)",
          active: "var(--border-active)",
          disabled: "var(--border-disabled)",
          selected: "var(--border-selected)",
        },
        link: {
          DEFAULT: "var(--link)",
          hover: "var(--link-hover)",
          active: "var(--link-active)",
          disabled: "var(--link-disabled)",
          selected: "var(--link-selected)",
        },
        brand: {
          DEFAULT: "var(--brand)",
          hover: "var(--brand-hover)",
          active: "var(--brand-active)",
          selected: "var(--brand-selected)",
          focus: "var(--brand-focus)",
          disabled: "var(--brand-disabled)",
          inverse: "var(--brand-inverse)",
          "inverse-hover": "var(--brand-inverse-hover)",
          "inverse-active": "var(--brand-inverse-active)",
          "inverse-selected": "var(--brand-inverse-selected)",
          "inverse-focus": "var(--brand-inverse-focus)",
          "inverse-disabled": "var(--brand-inverse-disabled)",
          text: "var(--brand-text)",
          "text-inverse": "var(--brand-text-inverse)",
          foreground: "var(--brand-foreground)",
          "foreground-inverse": "var(--brand-foreground-inverse)",
          1: "var(--brand-1)",
          2: "var(--brand-2)",
          3: "var(--brand-3)",
          4: "var(--brand-4)",
          5: "var(--brand-5)",
          6: "var(--brand-6)",
          7: "var(--brand-7)",
          8: "var(--brand-8)",
          9: "var(--brand-9)",
          10: "var(--brand-10)",
          11: "var(--brand-11)",
          12: "var(--brand-12)",
          a1: "var(--brand-a1)",
          a2: "var(--brand-a2)",
          a3: "var(--brand-a3)",
          a4: "var(--brand-a4)",
          a5: "var(--brand-a5)",
          a6: "var(--brand-a6)",
          a7: "var(--brand-a7)",
          a8: "var(--brand-a8)",
          a9: "var(--brand-a9)",
          a10: "var(--brand-a10)",
          a11: "var(--brand-a11)",
          a12: "var(--brand-a12)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          active: "var(--primary-active)",
          selected: "var(--primary-selected)",
          focus: "var(--primary-focus)",
          disabled: "var(--primary-disabled)",
          inverse: "var(--primary-inverse)",
          "inverse-hover": "var(--primary-inverse-hover)",
          "inverse-active": "var(--primary-inverse-active)",
          "inverse-selected": "var(--primary-inverse-selected)",
          "inverse-focus": "var(--primary-inverse-focus)",
          "inverse-disabled": "var(--primary-inverse-disabled)",
          text: "var(--primary-text)",
          "text-inverse": "var(--primary-text-inverse)",
          foreground: "var(--primary-foreground)",
          "foreground-inverse": "var(--primary-foreground-inverse)",
          1: "var(--primary-1)",
          2: "var(--primary-2)",
          3: "var(--primary-3)",
          4: "var(--primary-4)",
          5: "var(--primary-5)",
          6: "var(--primary-6)",
          7: "var(--primary-7)",
          8: "var(--primary-8)",
          9: "var(--primary-9)",
          10: "var(--primary-10)",
          11: "var(--primary-11)",
          12: "var(--primary-12)",
          a1: "var(--primary-a1)",
          a2: "var(--primary-a2)",
          a3: "var(--primary-a3)",
          a4: "var(--primary-a4)",
          a5: "var(--primary-a5)",
          a6: "var(--primary-a6)",
          a7: "var(--primary-a7)",
          a8: "var(--primary-a8)",
          a9: "var(--primary-a9)",
          a10: "var(--primary-a10)",
          a11: "var(--primary-a11)",
          a12: "var(--primary-a12)",
        },
        gray: {
          DEFAULT: "var(--gray)",
          hover: "var(--gray-hover)",
          active: "var(--gray-active)",
          selected: "var(--gray-selected)",
          focus: "var(--gray-focus)",
          disabled: "var(--gray-disabled)",
          inverse: "var(--gray-inverse)",
          "inverse-hover": "var(--gray-inverse-hover)",
          "inverse-active": "var(--gray-inverse-active)",
          "inverse-selected": "var(--gray-inverse-selected)",
          "inverse-focus": "var(--gray-inverse-focus)",
          "inverse-disabled": "var(--gray-inverse-disabled)",
          text: "var(--gray-text)",
          "text-inverse": "var(--gray-text-inverse)",
          foreground: "var(--gray-foreground)",
          "foreground-inverse": "var(--gray-foreground-inverse)",
          1: "var(--gray-1)",
          2: "var(--gray-2)",
          3: "var(--gray-3)",
          4: "var(--gray-4)",
          5: "var(--gray-5)",
          6: "var(--gray-6)",
          7: "var(--gray-7)",
          8: "var(--gray-8)",
          9: "var(--gray-9)",
          10: "var(--gray-10)",
          11: "var(--gray-11)",
          12: "var(--gray-12)",
          a1: "var(--gray-a1)",
          a2: "var(--gray-a2)",
          a3: "var(--gray-a3)",
          a4: "var(--gray-a4)",
          a5: "var(--gray-a5)",
          a6: "var(--gray-a6)",
          a7: "var(--gray-a7)",
          a8: "var(--gray-a8)",
          a9: "var(--gray-a9)",
          a10: "var(--gray-a10)",
          a11: "var(--gray-a11)",
          a12: "var(--gray-a12)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          active: "var(--accent-active)",
          selected: "var(--accent-selected)",
          focus: "var(--accent-focus)",
          disabled: "var(--accent-disabled)",
          inverse: "var(--accent-inverse)",
          "inverse-hover": "var(--accent-inverse-hover)",
          "inverse-active": "var(--accent-inverse-active)",
          "inverse-selected": "var(--accent-inverse-selected)",
          "inverse-focus": "var(--accent-inverse-focus)",
          "inverse-disabled": "var(--accent-inverse-disabled)",
          text: "var(--accent-text)",
          "text-inverse": "var(--accent-text-inverse)",
          foreground: "var(--accent-foreground)",
          "foreground-inverse": "var(--accent-foreground-inverse)",
          1: "var(--accent-1)",
          2: "var(--accent-2)",
          3: "var(--accent-3)",
          4: "var(--accent-4)",
          5: "var(--accent-5)",
          6: "var(--accent-6)",
          7: "var(--accent-7)",
          8: "var(--accent-8)",
          9: "var(--accent-9)",
          10: "var(--accent-10)",
          11: "var(--accent-11)",
          12: "var(--accent-12)",
          a1: "var(--accent-a1)",
          a2: "var(--accent-a2)",
          a3: "var(--accent-a3)",
          a4: "var(--accent-a4)",
          a5: "var(--accent-a5)",
          a6: "var(--accent-a6)",
          a7: "var(--accent-a7)",
          a8: "var(--accent-a8)",
          a9: "var(--accent-a9)",
          a10: "var(--accent-a10)",
          a11: "var(--accent-a11)",
          a12: "var(--accent-a12)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          hover: "var(--destructive-hover)",
          active: "var(--destructive-active)",
          selected: "var(--destructive-selected)",
          focus: "var(--destructive-focus)",
          disabled: "var(--destructive-disabled)",
          inverse: "var(--destructive-inverse)",
          "inverse-hover": "var(--destructive-inverse-hover)",
          "inverse-active": "var(--destructive-inverse-active)",
          "inverse-selected": "var(--destructive-inverse-selected)",
          "inverse-focus": "var(--destructive-inverse-focus)",
          "inverse-disabled": "var(--destructive-inverse-disabled)",
          text: "var(--destructive-text)",
          "text-inverse": "var(--destructive-text-inverse)",
          foreground: "var(--destructive-foreground)",
          "foreground-inverse": "var(--destructive-foreground-inverse)",
          1: "var(--destructive-1)",
          2: "var(--destructive-2)",
          3: "var(--destructive-3)",
          4: "var(--destructive-4)",
          5: "var(--destructive-5)",
          6: "var(--destructive-6)",
          7: "var(--destructive-7)",
          8: "var(--destructive-8)",
          9: "var(--destructive-9)",
          10: "var(--destructive-10)",
          11: "var(--destructive-11)",
          12: "var(--destructive-12)",
          a1: "var(--destructive-a1)",
          a2: "var(--destructive-a2)",
          a3: "var(--destructive-a3)",
          a4: "var(--destructive-a4)",
          a5: "var(--destructive-a5)",
          a6: "var(--destructive-a6)",
          a7: "var(--destructive-a7)",
          a8: "var(--destructive-a8)",
          a9: "var(--destructive-a9)",
          a10: "var(--destructive-a10)",
          a11: "var(--destructive-a11)",
          a12: "var(--destructive-a12)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          hover: "var(--warning-hover)",
          active: "var(--warning-active)",
          selected: "var(--warning-selected)",
          focus: "var(--warning-focus)",
          disabled: "var(--warning-disabled)",
          inverse: "var(--warning-inverse)",
          "inverse-hover": "var(--warning-inverse-hover)",
          "inverse-active": "var(--warning-inverse-active)",
          "inverse-selected": "var(--warning-inverse-selected)",
          "inverse-focus": "var(--warning-inverse-focus)",
          "inverse-disabled": "var(--warning-inverse-disabled)",
          text: "var(--warning-text)",
          "text-inverse": "var(--warning-text-inverse)",
          foreground: "var(--warning-foreground)",
          "foreground-inverse": "var(--warning-foreground-inverse)",
          1: "var(--warning-1)",
          2: "var(--warning-2)",
          3: "var(--warning-3)",
          4: "var(--warning-4)",
          5: "var(--warning-5)",
          6: "var(--warning-6)",
          7: "var(--warning-7)",
          8: "var(--warning-8)",
          9: "var(--warning-9)",
          10: "var(--warning-10)",
          11: "var(--warning-11)",
          12: "var(--warning-12)",
          a1: "var(--warning-a1)",
          a2: "var(--warning-a2)",
          a3: "var(--warning-a3)",
          a4: "var(--warning-a4)",
          a5: "var(--warning-a5)",
          a6: "var(--warning-a6)",
          a7: "var(--warning-a7)",
          a8: "var(--warning-a8)",
          a9: "var(--warning-a9)",
          a10: "var(--warning-a10)",
          a11: "var(--warning-a11)",
          a12: "var(--warning-a12)",
        },
        success: {
          DEFAULT: "var(--success)",
          hover: "var(--success-hover)",
          active: "var(--success-active)",
          selected: "var(--success-selected)",
          focus: "var(--success-focus)",
          disabled: "var(--success-disabled)",
          inverse: "var(--success-inverse)",
          "inverse-hover": "var(--success-inverse-hover)",
          "inverse-active": "var(--success-inverse-active)",
          "inverse-selected": "var(--success-inverse-selected)",
          "inverse-focus": "var(--success-inverse-focus)",
          "inverse-disabled": "var(--success-inverse-disabled)",
          text: "var(--success-text)",
          "text-inverse": "var(--success-text-inverse)",
          foreground: "var(--success-foreground)",
          "foreground-inverse": "var(--success-foreground-inverse)",
          1: "var(--success-1)",
          2: "var(--success-2)",
          3: "var(--success-3)",
          4: "var(--success-4)",
          5: "var(--success-5)",
          6: "var(--success-6)",
          7: "var(--success-7)",
          8: "var(--success-8)",
          9: "var(--success-9)",
          10: "var(--success-10)",
          11: "var(--success-11)",
          12: "var(--success-12)",
          a1: "var(--success-a1)",
          a2: "var(--success-a2)",
          a3: "var(--success-a3)",
          a4: "var(--success-a4)",
          a5: "var(--success-a5)",
          a6: "var(--success-a6)",
          a7: "var(--success-a7)",
          a8: "var(--success-a8)",
          a9: "var(--success-a9)",
          a10: "var(--success-a10)",
          a11: "var(--success-a11)",
          a12: "var(--success-a12)",
        },
        info: {
          DEFAULT: "var(--info)",
          hover: "var(--info-hover)",
          active: "var(--info-active)",
          selected: "var(--info-selected)",
          focus: "var(--info-focus)",
          disabled: "var(--info-disabled)",
          inverse: "var(--info-inverse)",
          "inverse-hover": "var(--info-inverse-hover)",
          "inverse-active": "var(--info-inverse-active)",
          "inverse-selected": "var(--info-inverse-selected)",
          "inverse-focus": "var(--info-inverse-focus)",
          "inverse-disabled": "var(--info-inverse-disabled)",
          text: "var(--info-text)",
          "text-inverse": "var(--info-text-inverse)",
          foreground: "var(--info-foreground)",
          "foreground-inverse": "var(--info-foreground-inverse)",
          1: "var(--info-1)",
          2: "var(--info-2)",
          3: "var(--info-3)",
          4: "var(--info-4)",
          5: "var(--info-5)",
          6: "var(--info-6)",
          7: "var(--info-7)",
          8: "var(--info-8)",
          9: "var(--info-9)",
          10: "var(--info-10)",
          11: "var(--info-11)",
          12: "var(--info-12)",
          a1: "var(--info-a1)",
          a2: "var(--info-a2)",
          a3: "var(--info-a3)",
          a4: "var(--info-a4)",
          a5: "var(--info-a5)",
          a6: "var(--info-a6)",
          a7: "var(--info-a7)",
          a8: "var(--info-a8)",
          a9: "var(--info-a9)",
          a10: "var(--info-a10)",
          a11: "var(--info-a11)",
          a12: "var(--info-a12)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          hover: "var(--muted-hover)",
          active: "var(--muted-active)",
          selected: "var(--muted-selected)",
          focus: "var(--muted-focus)",
          disabled: "var(--muted-disabled)",
          inverse: "var(--muted-inverse)",
          "inverse-hover": "var(--muted-inverse-hover)",
          "inverse-active": "var(--muted-inverse-active)",
          "inverse-selected": "var(--muted-inverse-selected)",
          "inverse-focus": "var(--muted-inverse-focus)",
          "inverse-disabled": "var(--muted-inverse-disabled)",
          text: "var(--muted-text)",
          "text-inverse": "var(--muted-text-inverse)",
          foreground: "var(--muted-foreground)",
          "foreground-inverse": "var(--muted-foreground-inverse)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          hover: "var(--popover-hover)",
          active: "var(--popover-active)",
          selected: "var(--popover-selected)",
          focus: "var(--popover-focus)",
          disabled: "var(--popover-disabled)",
          inverse: "var(--popover-inverse)",
          "inverse-hover": "var(--popover-inverse-hover)",
          "inverse-active": "var(--popover-inverse-active)",
          "inverse-selected": "var(--popover-inverse-selected)",
          "inverse-focus": "var(--popover-inverse-focus)",
          "inverse-disabled": "var(--popover-inverse-disabled)",
          text: "var(--popover-text)",
          "text-inverse": "var(--popover-text-inverse)",
          foreground: "var(--popover-foreground)",
          "foreground-inverse": "var(--popover-foreground-inverse)",
        },
        card: {
          DEFAULT: "var(--card)",
          hover: "var(--card-hover)",
          active: "var(--card-active)",
          selected: "var(--card-selected)",
          focus: "var(--card-focus)",
          disabled: "var(--card-disabled)",
          inverse: "var(--card-inverse)",
          "inverse-hover": "var(--card-inverse-hover)",
          "inverse-active": "var(--card-inverse-active)",
          "inverse-selected": "var(--card-inverse-selected)",
          "inverse-focus": "var(--card-inverse-focus)",
          "inverse-disabled": "var(--card-inverse-disabled)",
          text: "var(--card-text)",
          "text-inverse": "var(--card-text-inverse)",
          foreground: "var(--card-foreground)",
          "foreground-inverse": "var(--card-foreground-inverse)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      transitionDelay: {
        ...transitionDelay,
        1200: "1200ms",
        1500: "1500ms",
      },
      borderRadius: {
        "2xl": "var(--radius-2xl)",
        xl: "var(--radius-xl)",
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      keyframes: {
        ...keyframes,
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "packages-marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "packages-marquee-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
        "marquee-section-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-section-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
        "opacity-reveal": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        ...animation,
        "fade-up": "fade-up 0.5s",
        "fade-down": "fade-down 0.5s",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "packages-marquee-left": "packages-marquee-left 65s linear infinite",
        "packages-marquee-right": "packages-marquee-right 60s linear infinite",
        "marquee-section-left":
          "marquee-section-left 40s linear infinite",
        "marquee-section-right":
          "marquee-section-right 40s linear infinite",
        "opacity-reveal": "opacity-reveal 1s ease-in-out forwards",
      },
      boxShadows: {
        xs: "0 1px 2px 0 rgba(18, 18, 23, 0.05)",
        sm: "0 1px 3px 0 rgba(18, 18, 23, 0.1), 0 1px 2px 0 rgba(18, 18, 23, 0.06)",
        md: "0px 2px 4px -1px rgba(18, 18, 23, 0.06), 0px 4px 6px -1px rgba(18, 18, 23, 0.08)",
        lg: "0px 4px 6px -2px rgba(18, 18, 23, 0.05), 0px 10px 15px -3px rgba(18, 18, 23, 0.08)",
        xl: "0px 10px 10px -5px rgba(18, 18, 23, 0.04), 0px 20px 25px -5px rgba(18, 18, 23, 0.10)",
        "2xl": "0px 25px 50px -12px rgba(18, 18, 23, 0.25)",
        overlay:
          "0px 2px 4px 0px rgba(18, 18, 23, 0.04), 0px 5px 8px 0px rgba(18, 18, 23, 0.04), 0px 10px 18px 0px rgba(18, 18, 23, 0.03), 0px 24px 48px 0px rgba(18, 18, 23, 0.03), 0px 0px 0px 1px rgba(18, 18, 23, 0.10)",
      },
      fontSizes: {
        xxs: [
          "0.625rem",
          {
            lineHeight: "1rem",
          },
        ],
        xs: [
          "0.75rem",
          {
            lineHeight: "1rem",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        lg: [
          "1.125rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        "3xl": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        "4xl": [
          "2.25rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        "5xl": [
          "3rem",
          {
            lineHeight: "3.5rem",
            letterSpacing: "-0.075rem",
          },
        ],
        "6xl": [
          "3.75rem",
          {
            lineHeight: "4.5rem",
            letterSpacing: "-0.09375rem",
          },
        ],
        "7xl": [
          "4.5rem",
          {
            lineHeight: "5rem",
            letterSpacing: "-0.1125rem",
          },
        ],
        "8xl": [
          "6rem",
          {
            lineHeight: "6.5rem",
            letterSpacing: "-0.15rem",
          },
        ],
        "9xl": [
          "8rem",
          {
            lineHeight: "8rem",
            letterSpacing: "-0.2rem",
          },
        ],
      },
      minWidth: {
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        10: "40px",
        12: "48px",
        14: "56px",
        16: "64px",
        20: "80px",
        24: "96px",
      },
      backgroundImage: {
        noise: "url(/images/sparkstack/noise.webp)",
        "navigation-menu": [
          "linear-gradient(180deg, var(--popover) 0%, var(--popover-hover) 100%)",
          "url(/images/sparkstack/stars.webp)",
          "url(/images/sparkstack/noise.webp)",
        ],
        "marquee-section": [
          "url(/images/sparkstack/noise.webp)",
          "radial-gradient(50% 100% at 50% -40%, var(--primary-a4) 0%, var(--primary-a1) 100%)",
        ],
        "packages-marquee": [
          "url(/images/sparkstack/noise.webp)",
          "radial-gradient(50% 100% at 50% -60%, var(--primary-a4) 0%, var(--primary-a1) 100%)",
        ],
        "marquee-section-text":
          "linear-gradient(180deg, var(--gray-a12) 0%, var(--gray-a11) 100%)",
        "packages-marquee-text":
          "linear-gradient(180deg, var(--gray-a12) 0%, var(--gray-a11) 100%)",
        "logo-shuffle": [
          "url(/images/sparkstack/noise.webp)",
          "radial-gradient(50% 100% at 50% 50%, var(--primary-a7) 0%, var(--primary-a1) 100%)",
        ],
      },
      screens: {
        ...screens,
        "content-sm": "480px",
        "widening-start": "544px",
        "content-md": "656px",
        "content-xm": "768px",
        "content-xl": "792px",
        "content-xl-safe": "1376px",
        "content-2xl": "864px",
        "content-4xl": "1536px",
        "header-sm": "640px",
        "header-md": "1200px",
        "landing-content": "944px",
        "landing-xs": "360px",
        "landing-sm": "720px",
        "landing-md": "960px",
        "landing-lg": "1296px",
        "landing-xl": "1440px",
        "tutorial-sm": "720px",
        "tutorial-md": "960px",
        "tutorial-lg": "1440px",
        "landing-footer": "1264px",
        "blog-sm": "592px",
        "blog-md": "720px",
        "blog-lg": "960px",
        "blog-max": "1296px",
        "blog-xl": "1440px",
        "blog-2xl": "1600px",
        walkthrough: "976px",
        "doc-form-lg": "824px",
        "doc-form-md": "688px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
