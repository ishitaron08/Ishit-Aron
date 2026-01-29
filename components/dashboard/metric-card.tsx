"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MetricCardProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon?: ReactNode;
  trend?: "up" | "down" | "stable";
  trendValue?: string;
  color?: "green" | "cyan" | "amber" | "purple";
  className?: string;
}

export function MetricCard({
  label,
  value,
  suffix = "",
  prefix = "",
  icon,
  trend,
  trendValue,
  color = "green",
  className,
}: MetricCardProps) {

  const colorClasses = {
    green: "text-emerald-400",
    cyan: "text-cyan-400",
    amber: "text-amber-400",
    purple: "text-purple-400",
  };

  const trendColors = {
    up: "text-emerald-400",
    down: "text-red-400",
    stable: "text-amber-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "bg-slate-900/50 border border-slate-700 rounded-lg p-5",
        "transition-all duration-300 backdrop-blur-sm",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        {icon && (
          <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-600">
            <span className="text-white">{icon}</span>
          </div>
        )}
        {trend && (
          <div className={cn("flex items-center gap-1 text-xs font-mono", trendColors[trend])}>
            {trend === "up" && "↑"}
            {trend === "down" && "↓"}
            {trend === "stable" && "→"}
            {trendValue}
          </div>
        )}
      </div>
      <div className="space-y-1.5">
        <div
          className={cn(
            "font-mono text-3xl font-bold text-white"
          )}
        >
          {prefix}
          {value}
          {suffix}
        </div>
        <div className="text-xs uppercase tracking-[0.15em] text-slate-400 font-medium">{label}</div>
      </div>
    </motion.div>
  );
}
