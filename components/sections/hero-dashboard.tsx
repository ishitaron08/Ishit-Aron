"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Zap, Code2, Trophy, Clock } from "lucide-react";
import { Panel, MetricCard } from "@/components/dashboard";
import { cn } from "@/lib/utils";
import {
  staggerContainerVariants,
  fadeUpVariants,
  wordRevealContainerVariants,
  wordRevealVariants,
  slideInLeftVariants,
  viewportOnce,
  easings,
} from "@/lib/animations";

const stats = [
  { label: "Problems Solved", value: 400, suffix: "+", color: "green" as const, icon: <Code2 className="w-4 h-4" /> },
  { label: "Projects Built", value: 6, suffix: "+", color: "cyan" as const, icon: <Zap className="w-4 h-4" /> },
  { label: "Years Coding", value: 3, suffix: "+", color: "amber" as const, icon: <Clock className="w-4 h-4" /> },
  { label: "Technologies", value: 26, suffix: "", color: "purple" as const, icon: <Activity className="w-4 h-4" /> },
];

const systemInfo = [
  { key: "Hostname", value: "ishit-aron.dev" },
  { key: "Role", value: "Full Stack Developer" },
  { key: "Status", value: "Available for Hire", highlight: true },
  { key: "Location", value: "Meerut, UP, India" },
  { key: "Contact", value: "ishitaron08@gmail.com" },
];

const achievements = [
  { icon: <Trophy className="w-4 h-4" />, text: "100+ LeetCode problems solved with strong DSA skills" },
  { icon: <Code2 className="w-4 h-4" />, text: "Active participation in Codeforces & GeeksforGeeks competitions" },
  { icon: <Zap className="w-4 h-4" />, text: "Built scalable full-stack applications used by real users" },
  { icon: <Activity className="w-4 h-4" />, text: "AWS & Azure cloud platform experience" },
  { icon: <Clock className="w-4 h-4" />, text: "3+ years of consistent coding practice and learning" },
];

// Word-by-word text animation component
const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  
  return (
    <motion.span
      variants={wordRevealContainerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordRevealVariants}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Animated gradient line component
const GradientLine = ({ direction = "right" }: { direction?: "left" | "right" }) => (
  <motion.div 
    className={cn(
      "h-px flex-1",
      direction === "right" 
        ? "bg-gradient-to-r from-devops-green/50 to-transparent" 
        : "bg-gradient-to-l from-devops-green/50 to-transparent"
    )}
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 1 }}
    transition={{ duration: 0.6, ease: easings.smooth, delay: 0.2 }}
    style={{ originX: direction === "right" ? 0 : 1 }}
  />
);

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  // Disable heavy animations on mobile/reduced motion
  const shouldAnimate = !prefersReducedMotion;

  return (
    <section id="hero" className="min-h-[calc(100vh-120px)] md:min-h-screen pt-4 md:pt-6 pb-24 md:pb-10 relative">
      {/* Dark overlay behind hero for text contrast - simplified on mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-devops-navy/90 via-devops-navy/70 to-transparent pointer-events-none" />
      
      {/* Welcome Banner */}
      <motion.div
        initial={shouldAnimate ? "hidden" : false}
        animate="visible"
        variants={staggerContainerVariants}
        className="mb-6 md:mb-10 relative z-10"
      >
        {/* Section label with animated lines - hidden on mobile */}
        <motion.div 
          variants={fadeUpVariants}
          className="hidden md:flex items-center gap-3 mb-6"
        >
          <GradientLine direction="right" />
          <motion.span 
            className="text-xs font-mono text-devops-green uppercase tracking-[0.2em] font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            System Overview
          </motion.span>
          <GradientLine direction="left" />
        </motion.div>

        {/* Animated headline with highlight bar effect */}
        <motion.div 
          variants={fadeUpVariants}
          className="relative text-center mb-6 md:mb-8"
        >
          {/* Subtle glow behind heading - only on desktop */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
            <div className="w-[500px] h-16 bg-devops-green/5 blur-3xl rounded-full" />
          </div>
          
          <motion.h1 
            className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            <span className="text-white">Hi, I&apos;m </span>
            <motion.span 
              className="relative inline-block text-white"
              initial={shouldAnimate ? { opacity: 0, y: 20, filter: "blur(10px)" } : false}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.4, duration: 0.5, ease: easings.smooth }}
            >
              Ishit Aron
            </motion.span>
          </motion.h1>
          
          {/* Role badge */}
          <motion.div
            className="mt-4 md:mt-6 flex justify-center"
            initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-devops-navy-light/80 border border-devops-grid-line text-xs md:text-sm font-mono text-devops-cyan">
              <span className="w-2 h-2 rounded-full bg-devops-green" />
              Full Stack Developer
            </span>
          </motion.div>
        </motion.div>

        {/* Animated tagline with improved contrast */}
        <motion.div 
          className="relative max-w-2xl mx-auto px-4"
          initial={shouldAnimate ? { opacity: 0, y: 15 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: easings.smooth }}
        >
          <p className="text-slate-300 text-center text-sm md:text-base lg:text-lg leading-relaxed">
            A passionate Computer Science student building modern,
            scalable, and beautiful web applications.
          </p>
        </motion.div>
      </motion.div>

      {/* Metrics Grid with staggered animation */}
      <motion.div 
        className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4 mb-6 md:mb-8 relative z-10"
        variants={staggerContainerVariants}
        initial={shouldAnimate ? "hidden" : false}
        animate="visible"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUpVariants}
            whileHover={prefersReducedMotion ? {} : { 
              y: -4, 
              transition: { duration: 0.2 } 
            }}
            className="cursor-default active:scale-[0.98] transition-transform"
          >
            <MetricCard
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              color={stat.color}
              icon={stat.icon}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <motion.div 
        className="grid gap-4 md:gap-6 lg:grid-cols-2 relative z-10"
        initial={shouldAnimate ? "hidden" : false}
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainerVariants}
      >
        {/* System Status Panel */}
        <motion.div variants={fadeUpVariants} className="h-full">
          <Panel
            title="System Metadata"
            icon={<Activity className="w-4 h-4" />}
            status="online"
            statusText="Available"
            className="h-full"
          >
            <motion.div 
              className="space-y-2"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {systemInfo.map((info) => (
                <motion.div
                  key={info.key}
                  variants={slideInLeftVariants}
                  className="flex items-center justify-between py-2.5 md:py-3 border-b border-devops-grid-line/40 last:border-0 group rounded-md px-2 -mx-2 active:bg-devops-green/5 md:hover:bg-devops-green/[0.04] transition-colors"
                >
                  <span className="text-xs md:text-sm text-slate-400 font-mono font-medium">
                    {info.key}
                  </span>
                  <span
                    className={cn(
                      "text-xs md:text-sm font-semibold",
                      info.highlight ? "text-devops-green" : "text-slate-200"
                    )}
                  >
                    {info.highlight && (
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        {info.value}
                      </span>
                    )}
                    {!info.highlight && info.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </Panel>
        </motion.div>

        {/* Achievements Panel */}
        <motion.div variants={fadeUpVariants} className="h-full">
          <Panel
            title="System Achievements"
            icon={<Trophy className="w-4 h-4" />}
            status="online"
            statusText="Verified"
            className="h-full"
          >
            <motion.div 
              className="space-y-2"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  className={cn(
                    "flex items-start gap-3 p-3 rounded-lg cursor-default",
                    "bg-devops-navy/50 border border-devops-grid-line/40",
                    "active:bg-devops-green/5 md:hover:bg-devops-green/[0.04]",
                    "transition-colors duration-200"
                  )}
                >
                  <span className="text-devops-amber mt-0.5 flex-shrink-0">
                    {achievement.icon}
                  </span>
                  <span className="text-xs md:text-sm text-slate-200 leading-relaxed">{achievement.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </Panel>
        </motion.div>
      </motion.div>
    </section>
  );
}
