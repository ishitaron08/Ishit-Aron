"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef, useCallback } from "react";

interface Star {
    id: number;
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    radius: number;
    opacity: number;
    speed: number;
    vx: number;
    vy: number;
    hue: number; // Color variation
    pulsePhase: number; // For pulsing effect
}

interface InteractiveStarsProps {
    className?: string;
    starCount?: number;
    maxOrbitRadius?: number;
    minOrbitRadius?: number;
}

export const InteractiveStars = ({
    className,
    starCount = 200,
    maxOrbitRadius = 250,
    minOrbitRadius = 50,
}: InteractiveStarsProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [stars, setStars] = useState<Star[]>([]);
    const mousePos = useRef({ x: 0, y: 0 });
    const isClicking = useRef(false);
    const lastMouseMoveTime = useRef(Date.now());
    const magneticPower = useRef(1);
    const animationFrameId = useRef<number | undefined>(undefined);
    const time = useRef(0);

    const initStars = useCallback((width: number, height: number) => {
        const newStars: Star[] = [];
        for (let i = 0; i < starCount; i++) {
            newStars.push({
                id: i,
                x: Math.random() * width,
                y: Math.random() * height,
                baseX: Math.random() * width,
                baseY: Math.random() * height,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.3 + 0.4,
                speed: Math.random() * 0.02 + 0.01,
                vx: 0,
                vy: 0,
                hue: Math.random() * 60 + 200, // Blue to purple range (200-260)
                pulsePhase: Math.random() * Math.PI * 2,
            });
        }
        setStars(newStars);
    }, [starCount]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars(canvas.width, canvas.height);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            lastMouseMoveTime.current = Date.now();
            magneticPower.current = 1;
        };

        const handleMouseDown = () => {
            isClicking.current = true;
            magneticPower.current = 1;
            lastMouseMoveTime.current = Date.now();
            setTimeout(() => { isClicking.current = false; }, 300);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [initStars]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || stars.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const animate = () => {
            time.current += 0.016; // ~60fps
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Calculate idle time and increase power
            const timeSinceMove = Date.now() - lastMouseMoveTime.current;
            if (timeSinceMove > 500) {
                magneticPower.current = Math.min(5, 1 + (timeSinceMove - 500) / 1000);
            }

            // Draw ambient glow at cursor position
            const glowGradient = ctx.createRadialGradient(
                mousePos.current.x, mousePos.current.y, 0,
                mousePos.current.x, mousePos.current.y, maxOrbitRadius * magneticPower.current * 0.8
            );
            glowGradient.addColorStop(0, `rgba(139, 92, 246, ${0.15 * magneticPower.current})`);
            glowGradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.08 * magneticPower.current})`);
            glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = glowGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                const dx = mousePos.current.x - star.x;
                const dy = mousePos.current.y - star.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Pulse effect
                const pulse = Math.sin(time.current * 2 + star.pulsePhase) * 0.3 + 1;

                // Repulsion on Click with particles flying outward
                if (isClicking.current && distance < 200) {
                    const angle = Math.atan2(dy, dx);
                    const force = (200 - distance) / 15;
                    star.vx -= Math.cos(angle) * force * 1.5;
                    star.vy -= Math.sin(angle) * force * 1.5;
                }

                // Apply Velocity with smoother damping
                star.x += star.vx;
                star.y += star.vy;
                star.vx *= 0.92;
                star.vy *= 0.92;

                const effectiveOrbitRadius = maxOrbitRadius * (1 + magneticPower.current * 0.3);

                if (distance < effectiveOrbitRadius && distance > 10 && !isClicking.current) {
                    const angle = Math.atan2(dy, dx);
                    
                    // Spiral orbit effect
                    const spiralOffset = time.current * 0.5 + star.id * 0.1;
                    const orbitAngle = angle + Math.sin(spiralOffset) * 0.3;
                    
                    const targetRadius = Math.max(minOrbitRadius, distance * (0.7 / magneticPower.current));
                    const targetX = mousePos.current.x - Math.cos(orbitAngle) * targetRadius;
                    const targetY = mousePos.current.y - Math.sin(orbitAngle) * targetRadius;

                    const pullStrength = star.speed * 2.5 * magneticPower.current;
                    star.x += (targetX - star.x) * pullStrength;
                    star.y += (targetY - star.y) * pullStrength;
                    star.opacity = Math.min(1, star.opacity + 0.03);
                } else {
                    star.x += (star.baseX - star.x) * star.speed;
                    star.y += (star.baseY - star.y) * star.speed;
                    star.opacity = Math.max(0.4, star.opacity - 0.01);
                }

                // Dynamic color based on distance and hover
                const isNearCursor = distance < effectiveOrbitRadius && distance > 10;
                const colorIntensity = isNearCursor ? Math.min(1, (effectiveOrbitRadius - distance) / effectiveOrbitRadius) : 0;
                
                // Enhanced glow effect
                if (isNearCursor) {
                    ctx.shadowBlur = 15 * magneticPower.current * pulse;
                    ctx.shadowColor = `hsla(${star.hue + colorIntensity * 30}, 80%, 60%, ${star.opacity * 0.8})`;
                } else {
                    ctx.shadowBlur = 4 * pulse;
                    ctx.shadowColor = `rgba(255, 255, 255, ${star.opacity * 0.3})`;
                }

                // Draw star with gradient
                const starGradient = ctx.createRadialGradient(
                    star.x, star.y, 0,
                    star.x, star.y, star.radius * pulse * 2
                );
                
                if (isNearCursor) {
                    starGradient.addColorStop(0, `hsla(${star.hue}, 100%, 80%, ${star.opacity})`);
                    starGradient.addColorStop(0.5, `hsla(${star.hue + 20}, 80%, 60%, ${star.opacity * 0.6})`);
                    starGradient.addColorStop(1, `hsla(${star.hue + 40}, 60%, 40%, 0)`);
                } else {
                    starGradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
                    starGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius * pulse * (isNearCursor ? 1.5 : 1), 0, Math.PI * 2);
                ctx.fillStyle = starGradient;
                ctx.fill();
                ctx.shadowBlur = 0;

                // Draw connections with gradient lines
                if (isNearCursor) {
                    stars.forEach((otherStar) => {
                        const otherDx = mousePos.current.x - otherStar.x;
                        const otherDy = mousePos.current.y - otherStar.y;
                        const otherDistance = Math.sqrt(otherDx * otherDx + otherDy * otherDy);

                        if (otherDistance < effectiveOrbitRadius && otherDistance > 10) {
                            const starDx = otherStar.x - star.x;
                            const starDy = otherStar.y - star.y;
                            const starDistance = Math.sqrt(starDx * starDx + starDy * starDy);

                            if (starDistance < 150 && star.id < otherStar.id) {
                                const lineGradient = ctx.createLinearGradient(
                                    star.x, star.y, otherStar.x, otherStar.y
                                );
                                const lineOpacity = 0.25 * (1 - starDistance / 150) * magneticPower.current;
                                
                                lineGradient.addColorStop(0, `hsla(${star.hue}, 70%, 60%, ${Math.min(0.6, lineOpacity)})`);
                                lineGradient.addColorStop(1, `hsla(${otherStar.hue}, 70%, 60%, ${Math.min(0.6, lineOpacity)})`);

                                ctx.beginPath();
                                ctx.moveTo(star.x, star.y);
                                ctx.lineTo(otherStar.x, otherStar.y);
                                ctx.strokeStyle = lineGradient;
                                ctx.lineWidth = 0.8;
                                ctx.stroke();
                            }
                        }
                    });
                }
            });

            animationFrameId.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [stars, maxOrbitRadius, minOrbitRadius]);

    return (
        <canvas
            ref={canvasRef}
            className={cn("fixed inset-0 z-0 pointer-events-none", className)}
            style={{ filter: "contrast(110%) brightness(105%)" }}
        />
    );
};
