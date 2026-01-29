"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Contact() {
    return (
        <footer id="contact" className="relative border-t border-white/10 pt-24 pb-12">
            <div className="container px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Let&apos;s Collaborate
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-md">
                            I&apos;m currently available for freelance work and full-time positions.
                            If you have a project that needs some creative touch, let&apos;s chat.
                        </p>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:ishitaron08@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                                <Mail className="h-5 w-5" />
                                ishitaron08@gmail.com
                            </a>
                            <a href="tel:+919528614140" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                                <Phone className="h-5 w-5" />
                                +91 9528614140
                            </a>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <MapPin className="h-5 w-5" />
                                Meerut, Uttar Pradesh, India
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
                        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 w-full max-w-md backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-6">Quick Connect</h3>
                            <div className="flex gap-4">
                                <Button asChild variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                                    <Link href="https://github.com/ishitaron08" target="_blank">
                                        <Github className="h-5 w-5" />
                                        <span className="sr-only">GitHub</span>
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                                    <Link href="https://www.linkedin.com/in/ishit-aron/" target="_blank">
                                        <Linkedin className="h-5 w-5" />
                                        <span className="sr-only">LinkedIn</span>
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                                    <Link href="https://x.com/aron_ishit37263" target="_blank">
                                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                        <span className="sr-only">Twitter/X</span>
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                                    <Link href="mailto:ishitaron08@gmail.com">
                                        <Mail className="h-5 w-5" />
                                        <span className="sr-only">Email</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© 2026 Ishit Aron. All rights reserved.</p>
                    <p>Built with Next.js, Tailwind & Framer Motion</p>
                </div>
            </div>
        </footer>
    );
}
