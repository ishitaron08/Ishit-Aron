"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Activity, Server, Clock, Wifi } from "lucide-react";
import { useEffect, useState } from "react";

interface StatusBarProps {
  className?: string;
}

export function StatusBar({ className }: StatusBarProps) {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [uptime, setUptime] = useState<string>("00:00:00");

  useEffect(() => {
    const startTime = Date.now();

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );

      // Calculate uptime
      const elapsed = Date.now() - startTime;
      const hours = Math.floor(elapsed / 3600000);
      const minutes = Math.floor((elapsed % 3600000) / 60000);
      const seconds = Math.floor((elapsed % 60000) / 1000);
      setUptime(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const statusItems = [
    {
      icon: <Activity className="w-3 h-3" />,
      label: "Status",
      value: "Operational",
      color: "text-devops-green",
    },
    {
      icon: <Server className="w-3 h-3" />,
      label: "Services",
      value: "26 Running",
      color: "text-devops-cyan",
    },
    {
      icon: <Clock className="w-3 h-3" />,
      label: "Session",
      value: uptime,
      color: "text-devops-amber",
    },
    {
      icon: <Wifi className="w-3 h-3" />,
      label: "UTC",
      value: currentTime,
      color: "text-slate-400",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "hidden md:flex items-center justify-between px-4 py-2",
        "bg-devops-navy-light/80 border-b border-devops-grid-line",
        "font-mono text-xs",
        className
      )}
    >
      <div className="flex items-center gap-6">
        {statusItems.slice(0, 2).map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className={item.color}>{item.icon}</span>
            <span className="text-slate-500">{item.label}:</span>
            <span className={item.color}>{item.value}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6">
        {statusItems.slice(2).map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className={item.color}>{item.icon}</span>
            <span className="text-slate-500 hidden sm:inline">{item.label}:</span>
            <span className={item.color}>{item.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
