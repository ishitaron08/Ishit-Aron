"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = { scrollYProgress: { get: () => 0 } }; // Placeholder for simplicity if not using full scroll hook yet, or use useScroll from framer-motion

    // Simplified version for now to avoid complex scroll logic errors without testing
    // In a real "advanced" implementation we'd use useScroll and useTransform

    return (
        <div ref={ref} className={cn("relative w-full max-w-4xl mx-auto h-full", className)}>
            <div className="absolute -left-4 md:-left-20 top-3">
                <div className="ml-[27px] h-full w-[2px] bg-neutral-200 dark:bg-neutral-800 hidden md:block">
                    <motion.div
                        className="absolute top-0 w-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                        style={{ height: "100%" }} // Just a static line for now to look good
                    />
                </div>
            </div>
            <div className="ml-4 md:ml-0">{children}</div>
        </div>
    );
};
