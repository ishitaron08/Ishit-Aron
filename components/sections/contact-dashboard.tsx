"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactSection() {
    return (
        <footer id="contact" className="relative border-t border-slate-700 pt-12 md:pt-24 pb-12">
            <div className="container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2 mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3 md:mb-4 text-white">
                            Let&apos;s Collaborate
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg mb-6 md:mb-8 max-w-md">
                            I&apos;m currently available for freelance work and full-time positions.
                            If you have a project that needs some creative touch, let&apos;s chat.
                        </p>
                        <div className="flex flex-col gap-3 md:gap-4">
                            <a href="mailto:ishitaron08@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white active:text-white transition-colors min-h-[44px]">
                                <Mail className="h-5 w-5 flex-shrink-0" />
                                <span className="text-sm md:text-base">ishitaron08@gmail.com</span>
                            </a>
                            <a href="tel:+919528614140" className="flex items-center gap-3 text-slate-400 hover:text-white active:text-white transition-colors min-h-[44px]">
                                <Phone className="h-5 w-5 flex-shrink-0" />
                                <span className="text-sm md:text-base">+91 9528614140</span>
                            </a>
                            <div className="flex items-center gap-3 text-slate-400 min-h-[44px]">
                                <MapPin className="h-5 w-5 flex-shrink-0" />
                                <span className="text-sm md:text-base">Meerut, Uttar Pradesh, India</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col justify-center items-start md:items-end"
                    >
                        <div className="p-6 md:p-8 rounded-lg border border-slate-700 bg-slate-900/50 w-full max-w-md backdrop-blur-sm">
                            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white">Quick Connect</h3>
                            <div className="flex gap-3 md:gap-4 flex-wrap">
                                <Button asChild variant="outline" size="icon" className="rounded-md border-slate-600 text-slate-400 hover:bg-slate-800 hover:text-white active:bg-slate-700 transition-colors min-w-[44px] min-h-[44px]">
                                    <Link href="https://github.com/ishitaron08" target="_blank">
                                        <Github className="h-5 w-5" />
                                        <span className="sr-only">GitHub</span>
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="icon" className="rounded-md border-slate-600 text-slate-400 hover:bg-slate-800 hover:text-white active:bg-slate-700 transition-colors min-w-[44px] min-h-[44px]">
                                    <Link href="https://www.linkedin.com/in/ishit-aron/" target="_blank">
                                        <Linkedin className="h-5 w-5" />
                                        <span className="sr-only">LinkedIn</span>
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="icon" className="rounded-md border-slate-600 text-slate-400 hover:bg-slate-800 hover:text-white active:bg-slate-700 transition-colors min-w-[44px] min-h-[44px]">
                                    <Link href="https://x.com/aron_ishit37263" target="_blank">
                                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                        <span className="sr-only">Twitter/X</span>
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="icon" className="rounded-md border-slate-600 text-slate-400 hover:bg-slate-800 hover:text-white active:bg-slate-700 transition-colors min-w-[44px] min-h-[44px]">
                                    <Link href="mailto:ishitaron08@gmail.com">
                                        <Mail className="h-5 w-5" />
                                        <span className="sr-only">Email</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© 2026 Ishit Aron. All rights reserved.</p>
                    <p>Built with Next.js, Tailwind & Framer Motion</p>
                </div>
            </div>
        </footer>
    );
}