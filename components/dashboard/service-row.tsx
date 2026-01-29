"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ServiceRowProps {
  name: string;
  category: string;
  status?: "healthy" | "warning" | "offline";
  uptime?: string;
  index?: number;
}

export function ServiceRow({
  name,
  category,
  status = "healthy",
  uptime = "99.9%",
  index = 0,
}: ServiceRowProps) {
  const statusConfig = {
    healthy: {
      dot: "status-online",
      text: "Healthy",
      textColor: "text-devops-green",
    },
    warning: {
      dot: "status-warning",
      text: "Degraded",
      textColor: "text-devops-amber",
    },
    offline: {
      dot: "status-error",
      text: "Offline",
      textColor: "text-devops-red",
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={cn(
        "flex items-center justify-between py-2.5 px-3 rounded-md",
        "bg-devops-navy/40 border border-devops-grid-line/50",
        "hover:border-devops-green/30 hover:bg-devops-navy-light/60",
        "transition-all duration-200 group"
      )}
    >
      <div className="flex items-center gap-3">
        <div className={cn("w-2 h-2 rounded-full", 
          status === "healthy" ? "bg-emerald-500" :
          status === "warning" ? "bg-amber-500" :
          "bg-red-500"
        )} />
        <div>
          <span className="text-sm font-medium text-white group-hover:text-devops-green transition-colors">
            {name}
          </span>
          <span className="text-xs text-slate-500 ml-2 font-mono">
            [{category}]
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className={cn("text-xs font-mono", currentStatus.textColor)}>
          {currentStatus.text}
        </span>
        <span className="text-xs text-slate-500 font-mono hidden sm:inline">
          {uptime} uptime
        </span>
      </div>
    </motion.div>
  );
}

interface ServiceGridProps {
  services: Array<{
    name: string;
    category: string;
  }>;
  className?: string;
}

export function ServiceGrid({ services, className }: ServiceGridProps) {
  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2", className)}>
      {services.map((service, index) => (
        <motion.div
          key={service.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: index * 0.03 }}
          className={cn(
            "service-badge justify-center py-2",
            "hover:border-devops-green/40 hover:bg-devops-green/5",
            "transition-all duration-200 cursor-default"
          )}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-slate-300 truncate">{service.name}</span>
        </motion.div>
      ))}
    </div>
  );
}
