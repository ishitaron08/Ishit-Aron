"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Trophy } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center md:px-8 antialiased bg-grid-white/[0.02]">
            <div className="z-10 flex max-w-4xl flex-col items-center gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-3"
                >
                    <span className="rounded-md border border-slate-600 bg-slate-800/50 px-4 py-1.5 text-sm font-medium text-slate-300">
                        Available for hire
                    </span>
                    <Link href="https://leetcode.com/u/IshitAron/" target="_blank" className="rounded-md border border-slate-600 bg-slate-800/50 px-4 py-1.5 text-sm font-medium text-slate-300 hover:bg-slate-700/50 transition-colors flex items-center gap-2">
                        <Trophy className="h-3.5 w-3.5" /> 400+ Algorithmic Problems Solved
                    </Link>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl font-bold tracking-tight sm:text-7xl text-white"
                >
                    Hi, I&apos;m{" "}
                    <span className="text-slate-200">Ishit Aron</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-slate-400 sm:text-xl font-normal max-w-2xl"
                >
                    A passionate Computer Science student and Full Stack Developer building modern, scalable, and beautiful web applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-4 mt-8"
                >
                    <Button asChild size="lg" className="gap-2 bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-600 h-12 px-8 rounded-md">
                        <Link href="#projects">
                            View Projects <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="gap-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white h-12 px-8 rounded-md">
                        <Link href="mailto:ishitaron08@gmail.com">
                            Contact Me <Mail className="h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 flex gap-6 text-slate-400"
                >
                    <Link
                        href="https://github.com/ishitaron08"
                        target="_blank"
                        className="hover:text-white transition-colors"
                    >
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/ishit-aron/"
                        target="_blank"
                        className="hover:text-white transition-colors"
                    >
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                        href="https://x.com/aron_ishit37263"
                        target="_blank"
                        className="hover:text-white transition-colors"
                    >
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        <span className="sr-only">Twitter/X</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
