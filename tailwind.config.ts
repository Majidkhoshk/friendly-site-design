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
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: 'hsl(120 20% 90%)',
        input: 'hsl(120 20% 85%)',
        ring: 'hsl(120 30% 50%)',
        background: 'hsl(120 10% 98%)',
        foreground: 'hsl(120 10% 10%)',
        primary: {
          DEFAULT: 'hsl(120 50% 30%)',
          foreground: 'hsl(0 0% 100%)'
        },
        secondary: {
          DEFAULT: 'hsl(120 20% 95%)',
          foreground: 'hsl(120 10% 20%)'
        },
        muted: {
          DEFAULT: 'hsl(120 10% 96%)',
          foreground: 'hsl(120 10% 40%)'
        },
        accent: {
          DEFAULT: 'hsl(120 30% 70%)',
          foreground: 'hsl(120 10% 10%)'
        },
        destructive: {
          DEFAULT: 'hsl(0 84% 60%)',
          foreground: 'hsl(0 0% 98%)'
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.5s ease-out",
      }
    },
    direction: {
      'rtl': 'rtl',
      'ltr': 'ltr',
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwindcss-dir')(),
  ],
} satisfies Config;
