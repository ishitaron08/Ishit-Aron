"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  LayoutDashboard,
  User,
  FolderGit2,
  Boxes,
  History,
  Terminal,
  FileDown,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Activity,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Hook to detect mobile/touch devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
};

interface PremiumSidebarProps {
  className?: string;
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "#hero", status: "active" },
  { icon: User, label: "System Status", href: "#about", status: "online" },
  { icon: Boxes, label: "Services", href: "#skills", status: "online" },
  { icon: FolderGit2, label: "Pipelines", href: "#projects", status: "running" },
  { icon: History, label: "Deployments", href: "#experience", status: "online" },
  { icon: Terminal, label: "Logs & Contact", href: "#contact", status: "online" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/ishitaron08", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ishit-aron/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/aron_ishit37263", label: "Twitter" },
];

// Simple accent border for formal look
const AccentBorder = () => (
  <div className="absolute inset-0 rounded-2xl border border-slate-700/50" />
);

// Grid background pattern
const GridPattern = () => (
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden rounded-2xl">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="sidebar-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#sidebar-grid)" />
    </svg>
  </div>
);



// Status indicator component - simplified for formal look
const StatusIndicator = ({ status }: { status: string }) => {
  const statusConfig = {
    active: { color: "bg-white" },
    online: { color: "bg-emerald-500" },
    running: { color: "bg-cyan-500" },
    warning: { color: "bg-amber-500" },
    offline: { color: "bg-slate-500" },
  };

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.offline;

  return (
    <span className={cn("w-1.5 h-1.5 rounded-full", config.color)} />
  );
};

// Metric display component
const MetricDisplay = ({ label, value, unit }: { label: string; value: string; unit?: string }) => (
  <div className="flex items-center justify-between text-[10px] font-mono">
    <span className="text-slate-500 uppercase tracking-wider">{label}</span>
    <span className="text-cyan-400 tabular-nums">
      {value}
      {unit && <span className="text-slate-600 ml-0.5">{unit}</span>}
    </span>
  </div>
);

export function PremiumSidebar({ className }: PremiumSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [uptime, setUptime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  // Set mounted state and initialize time on client only
  useEffect(() => {
    setMounted(true);
    setCurrentTime(new Date());
  }, []);

  // Update time every second
  useEffect(() => {
    if (!mounted) return;
    const startTime = Date.now();
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setUptime({
        hours: Math.floor(elapsed / 3600),
        minutes: Math.floor((elapsed % 3600) / 60),
        seconds: elapsed % 60,
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [mounted]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 150) {
          setActiveSection(`#${section}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle window resize for mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formatUptime = () => {
    const { hours, minutes, seconds } = uptime;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Mobile Bottom Navigation - Touch-first design */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-[#0a0f1a]/95 backdrop-blur-lg border-t border-slate-700/50 px-2 py-2 safe-area-pb">
          <div className="flex items-center justify-around">
            {navItems.slice(0, 5).map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center justify-center min-w-[56px] min-h-[48px] rounded-xl",
                    "transition-colors duration-200 active:scale-95",
                    isActive
                      ? "text-cyan-400 bg-cyan-500/10"
                      : "text-slate-500 active:bg-slate-800/50"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-[10px] mt-1 font-medium">
                    {item.label.split(' ')[0]}
                  </span>
                </Link>
              );
            })}
            {/* More menu button */}
            <button
              onClick={() => setIsOpen(true)}
              className={cn(
                "flex flex-col items-center justify-center min-w-[56px] min-h-[48px] rounded-xl",
                "transition-colors duration-200 active:scale-95",
                "text-slate-500 active:bg-slate-800/50"
              )}
            >
              <Menu className="w-5 h-5" />
              <span className="text-[10px] mt-1 font-medium">More</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] z-50 bg-[#0a0f1a] border-l border-slate-700/50 md:hidden overflow-y-auto"
            >
              <div className="p-4">
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white active:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
                
                {/* Profile section */}
                <div className="mt-8 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-[1.5px]">
                      <div className="w-full h-full rounded-[10px] bg-[#0a0f1a] flex items-center justify-center">
                        <span className="text-white font-bold text-lg">IA</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Ishit Aron</div>
                      <div className="text-xs text-emerald-500">Available for hire</div>
                    </div>
                  </div>
                </div>

                {/* Navigation links */}
                <div className="space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.href;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl min-h-[48px]",
                          "transition-colors duration-200 active:scale-[0.98]",
                          isActive
                            ? "bg-cyan-500/10 text-white"
                            : "text-slate-400 active:bg-slate-800/50"
                        )}
                      >
                        <Icon className={cn("w-5 h-5", isActive && "text-cyan-400")} />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Download CV button */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 mt-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium active:scale-[0.98]"
                >
                  <FileDown className="w-4 h-4" />
                  Download CV
                </a>

                {/* Social links */}
                <div className="flex items-center justify-center gap-4 mt-6">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl text-slate-400 bg-slate-800/50 active:bg-slate-700"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar Container - Hidden on mobile */}
      <div
        className={cn(
          "hidden md:block fixed top-0 left-0 h-screen w-[260px] z-40 p-3",
          "lg:sticky lg:top-0 lg:h-screen",
          className
        )}
      >
        {/* Inner sidebar with premium glass effect */}
        <div className="relative h-full rounded-2xl overflow-hidden">
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/98 via-[#0d1321]/95 to-[#0a0f1a]/98 backdrop-blur-xl" />
          <GridPattern />
          
          {/* Clean border */}
          <AccentBorder />

          {/* Content */}
          <div className="relative h-full flex flex-col z-10">
            {/* Logo Section */}
            <div className="p-4 border-b border-slate-700/50">
              <div className="flex items-center gap-3">
                {/* Logo */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-[1.5px]">
                    <div className="w-full h-full rounded-[10px] bg-[#0a0f1a] flex items-center justify-center">
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-cyan-300 font-bold text-lg">IA</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white text-sm tracking-wide">Ishit Aron</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Activity className="w-3 h-3 text-emerald-500" />
                    <span className="text-[10px] text-emerald-500 font-mono uppercase tracking-wider">Engineer</span>
                  </div>
                </div>
              </div>

              {/* System metrics display */}
              <div className="mt-4 space-y-2">
                <div className="px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <MetricDisplay label="SYS_TIME" value={mounted && currentTime ? currentTime.toLocaleTimeString('en-US', { hour12: false }) : '--:--:--'} />
                </div>
                <div className="px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <MetricDisplay label="UPTIME" value={mounted ? formatUptime() : '00:00:00'} />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="px-2 py-1.5 rounded-lg bg-emerald-500/[0.05] border border-emerald-500/20">
                    <div className="text-[9px] font-mono text-slate-500 uppercase">STATUS</div>
                    <div className="text-[11px] font-mono text-emerald-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      ONLINE
                    </div>
                  </div>
                  <div className="px-2 py-1.5 rounded-lg bg-cyan-500/[0.05] border border-cyan-500/20">
                    <div className="text-[9px] font-mono text-slate-500 uppercase">SERVICES</div>
                    <div className="text-[11px] font-mono text-cyan-500">6 ACTIVE</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-3 space-y-1 overflow-y-auto sidebar-scrollbar">
              <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest px-3 py-2">
                Navigation
              </div>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href;
                
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "group relative flex items-center gap-3 px-3 py-2.5 rounded-xl",
                      "transition-all duration-300",
                      isActive
                        ? "bg-cyan-500/10 text-white"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.03]"
                    )}
                  >
                    {/* Active indicator bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-7 rounded-full bg-gradient-to-b from-cyan-500 to-emerald-500"
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      />
                    )}
                    
                    {/* Icon */}
                    <span className={cn(
                      "transition-all duration-300",
                      isActive 
                        ? "text-cyan-500" 
                        : "text-slate-500 group-hover:text-cyan-500"
                    )}>
                      <Icon className="w-4 h-4" />
                    </span>
                    
                    <span className="text-sm font-medium flex-1">{item.label}</span>
                    <StatusIndicator status={item.status} />
                  </Link>
                );
              })}
            </nav>

            {/* Resume Download Button */}
            <div className="p-3 border-t border-slate-700/50">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "relative flex items-center justify-center gap-2 w-full py-3 rounded-xl",
                  "bg-cyan-500/10",
                  "border border-cyan-500/30 hover:border-cyan-500/50",
                  "text-cyan-500 hover:text-white",
                  "transition-all duration-300 text-sm font-mono"
                )}
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </motion.a>
            </div>

            {/* Social Links & Version */}
            <div className="p-3 border-t border-slate-700/50">
              <div className="flex items-center justify-center gap-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "p-2.5 rounded-xl",
                        "text-slate-500 hover:text-white",
                        "bg-white/[0.02] hover:bg-white/[0.06]",
                        "border border-transparent hover:border-slate-700",
                        "transition-all duration-300"
                      )}
                      title={link.label}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
              
              {/* Version tag */}
              <div className="mt-3 text-center">
                <span className="text-[9px] font-mono text-slate-600 tracking-wider">
                  v2.0.26 • © 2026 Ishit Aron
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
