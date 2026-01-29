"use client";

import { useEffect, useRef, useState } from "react";

export const PremiumBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mounted]);

    if (!mounted) return null;

    return (
        <>
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                @keyframes pulse-glow {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.6; }
                }
                @keyframes grid-move {
                    0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
                    100% { transform: perspective(500px) rotateX(60deg) translateY(-50px); }
                }
                .watermark-text {
                    font-size: clamp(80px, 15vw, 200px);
                    font-weight: 900;
                    letter-spacing: -0.05em;
                    background: linear-gradient(180deg, rgba(139,92,246,0.08) 0%, rgba(59,130,246,0.03) 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    user-select: none;
                    pointer-events: none;
                }
            `}</style>

            {/* Main container */}
            <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                
                {/* Gradient orbs that follow mouse */}
                <div 
                    className="absolute w-[600px] h-[600px] rounded-full transition-all duration-700 ease-out"
                    style={{
                        left: mousePos.x - 300,
                        top: mousePos.y - 300,
                        background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />
                <div 
                    className="absolute w-[400px] h-[400px] rounded-full transition-all duration-1000 ease-out"
                    style={{
                        left: mousePos.x - 200,
                        top: mousePos.y - 200,
                        background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0.03) 50%, transparent 70%)',
                        filter: 'blur(30px)',
                    }}
                />

                {/* Animated grid */}
                <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                        maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
                        animation: 'grid-move 20s linear infinite',
                    }}
                />

                {/* Floating orbs */}
                <div 
                    className="absolute top-[10%] left-[10%] w-32 h-32 rounded-full bg-purple-500/10 blur-3xl"
                    style={{ animation: 'float 8s ease-in-out infinite' }}
                />
                <div 
                    className="absolute top-[60%] right-[15%] w-40 h-40 rounded-full bg-blue-500/10 blur-3xl"
                    style={{ animation: 'float 10s ease-in-out infinite 2s' }}
                />
                <div 
                    className="absolute bottom-[20%] left-[20%] w-24 h-24 rounded-full bg-violet-500/10 blur-2xl"
                    style={{ animation: 'float 6s ease-in-out infinite 1s' }}
                />

                {/* Premium watermark name scattered */}
                <div className="absolute top-[15%] left-[5%] watermark-text opacity-[0.04] rotate-[-15deg]">
                    IA
                </div>
                <div className="absolute top-[45%] right-[5%] watermark-text opacity-[0.03] rotate-[10deg]">
                    IA
                </div>
                <div className="absolute bottom-[10%] left-[30%] watermark-text opacity-[0.02] rotate-[-5deg]">
                    ISHIT
                </div>

                {/* Noise overlay */}
                <div 
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />

                {/* Vignette */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
                    }}
                />
            </div>
        </>
    );
};
