"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Terminal, Circle } from "lucide-react";

interface LogEntry {
  id: number;
  timestamp: string;
  level: "info" | "success" | "warning" | "error";
  message: string;
}

interface TerminalLogsProps {
  logs: LogEntry[];
  title?: string;
  autoScroll?: boolean;
  maxHeight?: string;
  className?: string;
}

export function TerminalLogs({
  logs: initialLogs,
  title = "system.log",
  autoScroll = true,
  maxHeight = "300px",
  className,
}: TerminalLogsProps) {
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLogs(initialLogs);
  }, [initialLogs]);

  useEffect(() => {
    if (autoScroll && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs, autoScroll]);

  const levelColors = {
    info: "text-devops-cyan",
    success: "text-devops-green",
    warning: "text-devops-amber",
    error: "text-devops-red",
  };

  const levelLabels = {
    info: "INFO",
    success: "DONE",
    warning: "WARN",
    error: "FAIL",
  };

  return (
    <div className={cn("terminal", className)}>
      <div className="terminal-header">
        <Circle className="w-3 h-3 fill-devops-red text-devops-red" />
        <Circle className="w-3 h-3 fill-devops-amber text-devops-amber" />
        <Circle className="w-3 h-3 fill-devops-green text-devops-green" />
        <span className="ml-2 text-xs text-slate-500 font-mono">{title}</span>
        <Terminal className="w-3 h-3 text-slate-600 ml-auto" />
      </div>
      <div
        ref={containerRef}
        className="terminal-body overflow-y-auto"
        style={{ maxHeight }}
      >
        <AnimatePresence mode="popLayout">
          {logs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="log-line font-mono text-sm"
            >
              <span className="log-timestamp">[{log.timestamp}]</span>
              <span className={cn("font-semibold", levelColors[log.level])}>
                [{levelLabels[log.level]}]
              </span>
              <span className="text-slate-300">{log.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        <div className="flex items-center mt-2 text-devops-green font-mono text-sm">
          <span className="mr-1">$</span>
          <span className="w-2 h-4 bg-devops-green animate-terminal-cursor" />
        </div>
      </div>
    </div>
  );
}

// Hook for generating live logs
export function useLiveLogs(
  baseMessages: string[],
  interval: number = 3000
): LogEntry[] {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    // Initial log
    const initialLog: LogEntry = {
      id: idRef.current++,
      timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
      level: "success",
      message: "System initialized successfully",
    };
    setLogs([initialLog]);

    const timer = setInterval(() => {
      const randomMessage =
        baseMessages[Math.floor(Math.random() * baseMessages.length)];
      const levels: LogEntry["level"][] = ["info", "success", "success", "info"];
      const randomLevel = levels[Math.floor(Math.random() * levels.length)];

      const newLog: LogEntry = {
        id: idRef.current++,
        timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
        level: randomLevel,
        message: randomMessage,
      };

      setLogs((prev) => [...prev.slice(-15), newLog]);
    }, interval);

    return () => clearInterval(timer);
  }, [baseMessages, interval]);

  return logs;
}
