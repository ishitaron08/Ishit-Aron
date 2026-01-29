"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GraduationCap, Building2, Award, MapPin } from "lucide-react";

interface TimelineEntry {
  id: string;
  type: "education" | "work" | "achievement";
  title: string;
  organization: string;
  location?: string;
  period: string;
  description?: string;
  status?: "completed" | "in-progress";
}

interface TimelineLogProps {
  entries: TimelineEntry[];
  className?: string;
}

export function TimelineLog({ entries, className }: TimelineLogProps) {
  const typeConfig = {
    education: {
      icon: <GraduationCap className="w-4 h-4" />,
      color: "text-devops-cyan",
      borderColor: "border-devops-cyan",
      bgColor: "bg-devops-cyan/10",
    },
    work: {
      icon: <Building2 className="w-4 h-4" />,
      color: "text-devops-green",
      borderColor: "border-devops-green",
      bgColor: "bg-devops-green/10",
    },
    achievement: {
      icon: <Award className="w-4 h-4" />,
      color: "text-devops-amber",
      borderColor: "border-devops-amber",
      bgColor: "bg-devops-amber/10",
    },
  };

  return (
    <div className={cn("relative", className)}>
      {/* Timeline Line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-devops-grid-line" />

      <div className="space-y-4">
        {entries.map((entry, index) => {
          const config = typeConfig[entry.type];
          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative pl-10"
            >
              {/* Timeline Node */}
              <div
                className={cn(
                  "absolute left-2 top-1 w-5 h-5 rounded-full flex items-center justify-center",
                  config.bgColor,
                  "border-2",
                  config.borderColor
                )}
              >
                <div className={cn("w-2 h-2 rounded-full", config.color.replace("text-", "bg-"))} />
              </div>

              {/* Content Card */}
              <div
                className={cn(
                  "bg-devops-navy-light/60 border border-devops-grid-line rounded-lg p-4",
                  "hover:border-devops-green/30 transition-colors"
                )}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={config.color}>{config.icon}</span>
                    <span className="text-xs font-mono text-slate-500 uppercase">
                      {entry.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {entry.status === "in-progress" && (
                      <span className="flex items-center gap-1 text-xs font-mono text-devops-green">
                        <span className="w-1.5 h-1.5 rounded-full bg-devops-green animate-pulse" />
                        Active
                      </span>
                    )}
                    <span className="text-xs font-mono text-slate-500">{entry.period}</span>
                  </div>
                </div>

                <h4 className="text-white font-medium mb-1">{entry.title}</h4>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span>{entry.organization}</span>
                  {entry.location && (
                    <>
                      <span className="text-slate-600">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {entry.location}
                      </span>
                    </>
                  )}
                </div>

                {entry.description && (
                  <p className="mt-2 text-sm text-slate-500">{entry.description}</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
