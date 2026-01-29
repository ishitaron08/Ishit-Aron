"use client";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import React, { MouseEvent } from "react";
import { cn } from "@/lib/utils";

export const BackgroundGradientAnimation = ({
    children,
    className,
    containerClassName,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "relative h-full w-full bg-transparent flex items-center justify-center overflow-hidden",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
        >
            <div className="absolute inset-0 w-full h-full bg-slate-950 z-[-2]" />
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-[-1]"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
                }}
            />
            <div className={cn("relative z-10", className)}>{children}</div>
        </div>
    );
};

export const PointerGradient = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    React.useEffect(() => {
        const handleMouseMove = (e: globalThis.MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-0 transition duration-300 lg:absolute"
            style={{
                background: useMotionTemplate`
                    radial-gradient(
                        600px circle at ${mouseX}px ${mouseY}px,
                        rgba(29, 78, 216, 0.15),
                        transparent 80%
                    )
                `,
            }}
        />
    );
};
