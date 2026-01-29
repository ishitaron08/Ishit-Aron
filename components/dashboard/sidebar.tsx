"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface SidebarProps {
  className?: string;
}

const navItems = [
  { icon: <LayoutDashboard className="w-4 h-4" />, label: "Overview", href: "#hero" },
  { icon: <User className="w-4 h-4" />, label: "System Status", href: "#about" },
  { icon: <Boxes className="w-4 h-4" />, label: "Services", href: "#skills" },
  { icon: <FolderGit2 className="w-4 h-4" />, label: "Pipelines", href: "#projects" },
  { icon: <History className="w-4 h-4" />, label: "Deploy History", href: "#experience" },
  { icon: <Terminal className="w-4 h-4" />, label: "Logs", href: "#contact" },
];

const socialLinks = [
  { icon: <Github className="w-4 h-4" />, href: "https://github.com/ishitaron08", label: "GitHub" },
  { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/ishit-aron/", label: "LinkedIn" },
  { icon: <Twitter className="w-4 h-4" />, href: "https://x.com/aron_ishit37263", label: "Twitter" },
];

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed top-4 left-4 z-50 p-2 rounded-lg",
          "bg-devops-navy-light border border-devops-grid-line",
          "text-slate-400 hover:text-devops-green",
          "lg:hidden transition-colors"
        )}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        className={cn(
          "fixed top-0 left-0 h-full w-[240px] z-40",
          "bg-devops-navy/95 backdrop-blur-md border-r border-devops-grid-line",
          "flex flex-col",
          "lg:translate-x-0 lg:static",
          className
        )}
      >
        {/* Logo */}
        <div className="p-4 border-b border-devops-grid-line">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-devops-green to-devops-cyan flex items-center justify-center">
              <span className="text-devops-navy font-bold text-lg">IA</span>
            </div>
            <div>
              <div className="font-semibold text-white text-sm">Ishit Aron</div>
              <div className="text-xs text-devops-green font-mono">Control Room</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg",
                "text-slate-400 hover:text-white hover:bg-devops-navy-light",
                "transition-all duration-200 group"
              )}
            >
              <span className="text-slate-500 group-hover:text-devops-green transition-colors">
                {item.icon}
              </span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Resume Download */}
        <div className="p-3 border-t border-devops-grid-line">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center gap-2 w-full py-2.5 rounded-lg",
              "bg-devops-green/10 border border-devops-green/30",
              "text-devops-green hover:bg-devops-green/20",
              "transition-all duration-200 text-sm font-mono"
            )}
          >
            <FileDown className="w-4 h-4" />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="p-3 border-t border-devops-grid-line">
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-lg",
                  "text-slate-500 hover:text-devops-green",
                  "hover:bg-devops-navy-light transition-colors"
                )}
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-devops-grid-line">
          <div className="text-center text-xs text-slate-600 font-mono">
            <div>v2.0.0 • © 2026</div>
            <div className="text-devops-green/60">All systems nominal</div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
