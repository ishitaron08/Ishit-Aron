"use client";
import React from "react";
import { motion } from "framer-motion";

export const NebulaBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Blob 1 - Purple */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[100px] mix-blend-screen"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Blob 2 - Blue */}
            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen"
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Blob 3 - Cyan Accent */}
            <motion.div
                className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] bg-cyan-900/10 rounded-full blur-[80px] mix-blend-screen"
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -50, 50, 0],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
};
