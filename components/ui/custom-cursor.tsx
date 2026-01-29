"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Inner Dot */}
            <motion.div
                className={cn(
                    "fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference",
                    isHovering ? "scale-0" : "scale-100"
                )}
                animate={{
                    x: mousePosition.x - 5, // Center the 10px dot (radius 5)
                    y: mousePosition.y - 5,
                }}
                transition={{
                    type: "tween",
                    ease: "backOut",
                    duration: 0.1,
                }}
            />

            {/* Outer Ring */}
            <motion.div
                className={cn(
                    "fixed top-0 left-0 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference transition-all duration-300 ease-out",
                    isHovering ? "w-16 h-16 bg-white/20 border-transparent backdrop-blur-sm" : "w-8 h-8 bg-transparent"
                )}
                animate={{
                    x: mousePosition.x - (isHovering ? 32 : 16), // Center based on width/height
                    y: mousePosition.y - (isHovering ? 32 : 16),
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                }}
            />
        </>
    );
};
