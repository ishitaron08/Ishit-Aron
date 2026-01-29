"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

// Premium Logo Component
export const PremiumLogo = ({ size = "default" }: { size?: "small" | "default" | "large" }) => {
    const sizeClasses = {
        small: "text-lg",
        default: "text-2xl",
        large: "text-4xl md:text-5xl"
    };
    
    return (
        <span className={cn("font-black tracking-tighter", sizeClasses[size])}>
            <span className="relative">
                <span className="text-white">I</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500">shit</span>
            </span>
            <span className="relative ml-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">A</span>
                <span className="text-white/90">ron</span>
            </span>
            <span className="inline-block w-2 h-2 ml-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" />
        </span>
    );
};

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 w-full z-50 flex justify-center pt-4 px-4">
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "w-full max-w-5xl rounded-full border transition-all duration-300 backdrop-blur-xl",
                    scrolled
                        ? "bg-black/80 border-white/10 shadow-lg shadow-purple-500/5 py-3 px-6"
                        : "bg-transparent border-transparent py-4 px-4"
                )}
            >
                <div className="flex items-center justify-between">
                    <Link href="/" className="group">
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                            <PremiumLogo size="small" />
                        </motion.div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <MagneticButton>
                            <Button size="sm" className="rounded-full bg-white text-black hover:bg-neutral-200 px-6" asChild>
                                <Link href="/resume.pdf" target="_blank" className="flex items-center gap-2">
                                    Resume <Download className="w-3 h-3" />
                                </Link>
                            </Button>
                        </MagneticButton>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-20 left-4 right-4 bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:hidden shadow-2xl z-50"
                    >
                        <nav className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-medium text-neutral-400 hover:text-white hover:bg-white/5 p-3 rounded-lg transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="h-px bg-white/10 my-2" />
                            <Button size="sm" className="w-full rounded-xl bg-purple-600 text-white hover:bg-purple-700" asChild>
                                <Link href="/resume.pdf" target="_blank">Resume</Link>
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
