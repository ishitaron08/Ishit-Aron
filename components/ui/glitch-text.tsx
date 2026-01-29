"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export const GlitchText = ({ text, className }: GlitchTextProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative inline-block group ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Main Text */}
            <span className="relative z-10">{text}</span>

            {/* Glitch Layer 1 (Red/Cyan) */}
            <span
                className="absolute top-0 left-0 -z-10 opacity-0 group-hover:opacity-70 text-red-500 mix-blend-screen animate-glitch-1"
                aria-hidden="true"
            >
                {text}
            </span>

            {/* Glitch Layer 2 (Blue/Yellow) */}
            <span
                className="absolute top-0 left-0 -z-10 opacity-0 group-hover:opacity-70 text-blue-500 mix-blend-screen animate-glitch-2"
                aria-hidden="true"
            >
                {text}
            </span>

            <style jsx>{`
        @keyframes glitch-1 {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        @keyframes glitch-2 {
          0% { transform: translate(0); }
          20% { transform: translate(2px, -2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(-2px, 2px); }
          100% { transform: translate(0); }
        }
        .animate-glitch-1 {
            animation: glitch-1 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        }
        .animate-glitch-2 {
            animation: glitch-2 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
        }
      `}</style>
        </div>
    );
};
