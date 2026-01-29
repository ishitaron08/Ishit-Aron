import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
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
                // DevOps Dashboard Colors
                devops: {
                    navy: "#0a0f1a",
                    "navy-light": "#111827",
                    "navy-lighter": "#1f2937",
                    green: "#00ff88",
                    "green-dim": "#00cc6a",
                    cyan: "#00d4ff",
                    "cyan-dim": "#00a8cc",
                    amber: "#ffb800",
                    "amber-dim": "#cc9300",
                    red: "#ff4757",
                    "red-dim": "#cc3945",
                    purple: "#a855f7",
                    "grid-line": "#1e293b",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
                mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
            },
            boxShadow: {
                "glow-green": "0 0 20px rgba(0, 255, 136, 0.3)",
                "glow-cyan": "0 0 20px rgba(0, 212, 255, 0.3)",
                "glow-amber": "0 0 20px rgba(255, 184, 0, 0.3)",
                "glow-red": "0 0 20px rgba(255, 71, 87, 0.3)",
                "panel": "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -2px rgba(0, 0, 0, 0.5)",
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
                shimmer: {
                    from: { backgroundPosition: "0 0" },
                    to: { backgroundPosition: "-200% 0" },
                },
                move: {
                    "0%": { transform: "translateX(-200px)" },
                    "100%": { transform: "translateX(200px)" },
                },
                spotlight: {
                    "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
                    "100%": { opacity: "1", transform: "translate(-50%,-40%) scale(1)" },
                },
                "status-blink": {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.4" },
                },
                "scan-line": {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(100%)" },
                },
                "terminal-cursor": {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0" },
                },
                "count-up": {
                    "0%": { transform: "translateY(100%)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                "fade-in-up": {
                    "0%": { transform: "translateY(10px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                "border-flow": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                shimmer: "shimmer 2s linear infinite",
                spotlight: "spotlight 2s ease .75s 1 forwards",
                "status-blink": "status-blink 1.5s ease-in-out infinite",
                "scan-line": "scan-line 3s linear infinite",
                "terminal-cursor": "terminal-cursor 1s step-end infinite",
                "count-up": "count-up 0.5s ease-out forwards",
                "fade-in-up": "fade-in-up 0.5s ease-out forwards",
                "border-flow": "border-flow 3s ease infinite",
            },
            backgroundImage: {
                "grid-pattern": "linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)",
                "radial-gradient": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;