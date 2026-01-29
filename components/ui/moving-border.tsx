"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MovingBorderBtn = ({
    borderRadius = "1.75rem",
    children,
    as: Component = "button",
    containerClassName,
    borderClassName,
    duration,
    className,
    ...otherProps
}: {
    borderRadius?: string;
    children: React.ReactNode;
    as?: any;
    containerClassName?: string;
    borderClassName?: string;
    duration?: number;
    className?: string;
    [key: string]: any;
}) => {
    return (
        <Component
            className={cn(
                "bg-transparent relative text-xl  h-16 w-40 p-[1px] overflow-hidden ",
                containerClassName
            )}
            style={{
                borderRadius: borderRadius,
            }}
            {...otherProps}
        >
            <div
                className="absolute inset-0"
                style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
            >
                <MovingBorder duration={duration} rx="30%" ry="30%">
                    <div
                        className={cn(
                            "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",
                            borderClassName
                        )}
                    />
                </MovingBorder>
            </div>

            <div
                className={cn(
                    "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
                    className
                )}
                style={{
                    borderRadius: `calc(${borderRadius} * 0.96)`,
                }}
            >
                {children}
            </div>
        </Component>
    );
};

export const MovingBorder = ({
    children,
    duration = 2000,
    rx,
    ry,
    ...otherProps
}: {
    children: React.ReactNode;
    duration?: number;
    rx?: string;
    ry?: string;
    [key: string]: any;
}) => {
    const pathRef = React.useRef<any>(null);
    const progress = React.useRef<any>(0);
    const x = React.useRef<any>(0);
    const y = React.useRef<any>(0);
    const [pulsating, setPulsating] = React.useState(false);

    React.useEffect(() => {
        const animation = requestAnimationFrame((val) => {
            progress.current = val;
            const length = pathRef.current?.getTotalLength();
            if (length) {
                const px = progress.current % duration;
                const point = pathRef.current.getPointAtLength(
                    (length * px) / duration
                );
                x.current = point.x;
                y.current = point.y;
            }
            setPulsating(true);
        });
        return () => cancelAnimationFrame(animation);
    }, [pulsating]);

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="absolute h-full w-full"
                width="100%"
                height="100%"
                {...otherProps}
            >
                <rect
                    fill="none"
                    width="100%"
                    height="100%"
                    rx={rx}
                    ry={ry}
                    ref={pathRef}
                />
            </svg>
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "inline-block",
                    transform: "translate3d(var(--x), var(--y), 0) translateX(-50%) translateY(-50%)",
                }}
                initial={{ x: 0, y: 0 }}
                animate={{
                    x: x.current,
                    y: y.current,
                }}
                transition={{
                    duration: 0, // We are driving the animation manually
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {children}
            </motion.div>
        </>
    );
};
