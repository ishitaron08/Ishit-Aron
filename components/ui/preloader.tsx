"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Drop {
    id: number;
    delay: number;
    hasSplashed: boolean;
}

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [drops, setDrops] = useState<Drop[]>([
        { id: 1, delay: 0, hasSplashed: false },
        { id: 2, delay: 0.4, hasSplashed: false },
        { id: 3, delay: 0.8, hasSplashed: false },
    ]);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        setWindowHeight(window.innerHeight);
        const handleResize = () => setWindowHeight(window.innerHeight);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        // Check if all drops have splashed
        if (drops.every(d => d.hasSplashed)) {
            setTimeout(() => setIsLoading(false), 800);
        }
    }, [drops]);

    const handleSplash = (id: number) => {
        setDrops(prev => prev.map(d => d.id === id ? { ...d, hasSplashed: true } : d));
    };

    const splashParticles = Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 300,
        y: -Math.random() * 200 - 50,
        scale: Math.random() * 0.5 + 0.5,
    }));

    return (
        <AnimatePresence mode="wait">
            {isLoading && windowHeight > 0 && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-end justify-center bg-black overflow-hidden"
                    exit={{ opacity: 0, transition: { duration: 0.8 } }}
                >
                    {drops.map((drop) => (
                        <div key={drop.id} className="absolute inset-0 flex items-end justify-center pointer-events-none">
                            {/* Falling Drop */}
                            {!drop.hasSplashed && (
                                <motion.div
                                    className="absolute top-0 z-10"
                                    initial={{ y: -100, scaleY: 1, opacity: 0 }}
                                    animate={{
                                        y: windowHeight - 20,
                                        scaleY: 1.5,
                                        opacity: 1,
                                        transition: {
                                            duration: 1.2,
                                            ease: "easeIn",
                                            delay: drop.delay
                                        }
                                    }}
                                    onAnimationComplete={() => handleSplash(drop.id)}
                                >
                                    <div className="relative w-8 h-10">
                                        <div className="w-full h-full bg-blue-500/40 backdrop-blur-[2px] rounded-b-[50%] rounded-t-[50%] border border-blue-300/20 shadow-[inset_0_0_20px_rgba(0,0,0,0.5),inset_0_5px_10px_rgba(255,255,255,0.4),0_0_15px_rgba(59,130,246,0.6)]"
                                            style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
                                        />
                                        <div className="absolute top-2 left-2 w-2 h-3 bg-white/80 rounded-full blur-[1px] rotate-[-20deg]" />
                                    </div>
                                </motion.div>
                            )}

                            {/* Splash for this drop */}
                            {drop.hasSplashed && (
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0">
                                    {splashParticles.map((particle) => (
                                        <motion.div
                                            key={`${drop.id}-${particle.id}`}
                                            className="absolute w-3 h-3 bg-blue-400/80 backdrop-blur-sm rounded-full shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.2),inset_1px_1px_2px_rgba(255,255,255,0.6)]"
                                            initial={{ x: 0, y: 0, opacity: 1 }}
                                            animate={{
                                                x: particle.x,
                                                y: particle.y,
                                                opacity: 0,
                                                scale: 0,
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                ease: "easeOut",
                                            }}
                                        />
                                    ))}
                                    <motion.div
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-24 bg-gradient-to-t from-blue-500/30 to-transparent blur-md rounded-full"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
