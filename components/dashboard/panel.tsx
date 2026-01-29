"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PanelProps {
  title: string;
  icon?: ReactNode;
  status?: "online" | "warning" | "error" | "neutral";
  statusText?: string;
  children: ReactNode;
  className?: string;
  headerExtra?: ReactNode;
}

export function Panel({
  title,
  icon,
  status = "neutral",
  statusText,
  children,
  className,
  headerExtra,
}: PanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("dashboard-panel flex flex-col", className)}
    >
      <div className="dashboard-panel-header">
        {icon && <span className="text-devops-cyan">{icon}</span>}
        <span className="text-slate-400 font-medium">{title}</span>
        {status !== "neutral" && (
          <div className="flex items-center gap-2 ml-auto">
            <div
              className={cn(
                "status-dot",
                status === "online" && "status-online",
                status === "warning" && "status-warning",
                status === "error" && "status-error"
              )}
            />
            {statusText && (
              <span
                className={cn(
                  "text-xs",
                  status === "online" && "text-devops-green",
                  status === "warning" && "text-devops-amber",
                  status === "error" && "text-devops-red"
                )}
              >
                {statusText}
              </span>
            )}
          </div>
        )}
        {headerExtra && <div className="ml-auto">{headerExtra}</div>}
      </div>
      <div className="dashboard-panel-content flex-1">{children}</div>
    </motion.div>
  );
}
