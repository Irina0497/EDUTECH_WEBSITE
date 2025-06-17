import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // EDUTECH Design System Colors
        "primary-blue": {
          DEFAULT: "rgb(14, 165, 233)",
          dark: "rgb(2, 132, 199)",
          50: "rgb(240, 249, 255)",
          100: "rgb(224, 242, 254)",
          500: "rgb(14, 165, 233)",
          600: "rgb(2, 132, 199)",
        },
        "success-green": {
          DEFAULT: "rgb(34, 197, 94)",
          50: "rgb(240, 253, 244)",
          500: "rgb(34, 197, 94)",
        },
        "warning-yellow": {
          DEFAULT: "rgb(250, 204, 21)",
          50: "rgb(254, 252, 232)",
          500: "rgb(250, 204, 21)",
        },
        "danger-red": {
          DEFAULT: "rgb(220, 38, 38)",
          50: "rgb(254, 242, 242)",
          500: "rgb(220, 38, 38)",
        },
        text: {
          primary: "rgb(15, 23, 42)",
          secondary: "rgb(71, 85, 105)",
          muted: "rgb(100, 116, 139)",
        },
        bg: {
          white: "rgb(255, 255, 255)",
          light: "rgb(250, 250, 255)",
          gradient: {
            from: "rgb(248, 250, 252)",
            via: "rgb(239, 246, 255)",
            to: "rgb(238, 242, 255)",
          },
        },

        // Keep existing shadcn colors for compatibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        "radius-sm": "6px",
        "radius-md": "8px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "28px"],
        "2xl": ["24px", "32px"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      backgroundImage: {
        "edutech-gradient":
          "linear-gradient(to right bottom, rgb(248, 250, 252), rgb(239, 246, 255), rgb(238, 242, 255))",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
