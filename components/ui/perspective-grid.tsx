"use client";

import { useEffect, useState } from "react";

export const PerspectiveGrid = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <style>
                {`
                    @keyframes grid-flow {
                        0% { transform: rotateX(60deg) translateY(0); }
                        100% { transform: rotateX(60deg) translateY(-40px); }
                    }
                    .animate-grid-flow {
                        animation: grid-flow 1s linear infinite;
                    }
                `}
            </style>
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none" style={{ perspective: '500px' }}>
                <div
                    className="absolute inset-0 w-full h-[200%] origin-top animate-grid-flow"
                    style={{
                        transform: 'rotateX(60deg)',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)',
                        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>
        </>
    );
};
