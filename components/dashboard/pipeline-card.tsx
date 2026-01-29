"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2, Clock, Play } from "lucide-react";
import { cardVariants, staggerFastVariants, fadeUpVariants, easings } from "@/lib/animations";

interface PipelineCardProps {
  name: string;
  description: string;
  status: "success" | "running" | "pending";
  techStack: string[];
  date: string;
  demoUrl?: string;
  githubUrl?: string;
  className?: string;
}

export function PipelineCard({
  name,
  description,
  status,
  techStack,
  date,
  demoUrl,
  githubUrl,
  className,
}: PipelineCardProps) {
  const statusConfig = {
    success: {
      icon: <CheckCircle2 className="w-4 h-4" />,
      text: "Deployed",
      color: "text-devops-green",
      bgColor: "bg-devops-green/10",
      borderColor: "border-devops-green/30",
    },
    running: {
      icon: <Play className="w-4 h-4" />,
      text: "Building",
      color: "text-devops-amber",
      bgColor: "bg-devops-amber/10",
      borderColor: "border-devops-amber/30",
    },
    pending: {
      icon: <Clock className="w-4 h-4" />,
      text: "Queued",
      color: "text-devops-cyan",
      bgColor: "bg-devops-cyan/10",
      borderColor: "border-devops-cyan/30",
    },
  };

  const currentStatus = statusConfig[status];
  const prefersReducedMotion = useReducedMotion();

  // Tech stack stagger animation
  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      }
    }
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.3, ease: easings.smooth }
    }
  };

  // Link hover animation
  const linkVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      whileHover={prefersReducedMotion ? {} : "hover"}
      className={cn(
        "group relative bg-devops-navy-light/60 border border-devops-grid-line rounded-lg",
        "hover:border-devops-green/40 transition-colors duration-300",
        "overflow-hidden",
        className
      )}
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 255, 136, 0.06), transparent 40%)",
        }}
      />
      {/* Pipeline Header */}
      <div className="p-4 border-b border-devops-grid-line">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-mono",
                currentStatus.bgColor,
                currentStatus.color,
                "border",
                currentStatus.borderColor
              )}
            >
              {currentStatus.icon}
              {currentStatus.text}
            </div>
          </div>
          <span className="text-xs text-slate-500 font-mono">{date}</span>
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-devops-green transition-colors">
          {name}
        </h3>
      </div>

      {/* Pipeline Content */}
      <div className="p-4">
        <p className="text-sm text-slate-400 mb-4 line-clamp-2">{description}</p>

        {/* Tech Stack with staggered animation */}
        <motion.div 
          className="flex flex-wrap gap-2 mb-4"
          variants={techStackVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              variants={techItemVariants}
              whileHover={prefersReducedMotion ? {} : { 
                scale: 1.05, 
                borderColor: "rgba(0, 212, 255, 0.5)",
                transition: { duration: 0.2 }
              }}
              className="service-badge text-slate-300 cursor-default"
            >
              <motion.span 
                className="w-1.5 h-1.5 rounded-full bg-devops-cyan"
                animate={!prefersReducedMotion ? { 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                } : {}}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
              />
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Pipeline Progress Indicator */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-slate-500 mb-1 font-mono">
            <span>Build Progress</span>
            <span>100%</span>
          </div>
          <div className="pipeline-track">
            <motion.div
              className="pipeline-progress"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {demoUrl && demoUrl !== "#" && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono",
                "bg-devops-green/10 text-devops-green border border-devops-green/30",
                "hover:bg-devops-green/20 transition-colors"
              )}
            >
              <ExternalLink className="w-3 h-3" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono",
                "bg-slate-700/50 text-slate-300 border border-slate-600",
                "hover:bg-slate-700 transition-colors"
              )}
            >
              <Github className="w-3 h-3" />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
