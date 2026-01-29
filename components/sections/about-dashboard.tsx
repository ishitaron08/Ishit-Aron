"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, MapPin, Briefcase, BookOpen } from "lucide-react";
import { Panel, TimelineLog } from "@/components/dashboard";

const bio = [
  "I'm a Computer Science student at Lovely Professional University, passionate about building modern, scalable, and user-friendly web applications. With expertise in full-stack development, I specialize in React, Next.js, Node.js, and cloud technologies like AWS and Azure.",
  "When I'm not coding, you'll find me solving algorithmic challenges on several platforms (400+ problems solved!) or exploring new technologies. I'm always eager to learn and contribute to meaningful projects.",
];

const education = [
  {
    id: "edu-1",
    type: "education" as const,
    title: "B.Tech in Computer Science",
    organization: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "2022 - 2026",
    status: "in-progress" as const,
  },
  {
    id: "edu-2",
    type: "education" as const,
    title: "Intermediate (XII)",
    organization: "Darshan Academy, Meerut",
    location: "Uttar Pradesh",
    period: "2021 - 2022",
    status: "completed" as const,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <User className="w-5 h-5 text-devops-cyan" />
          <h2 className="text-xl font-bold text-white">System Status</h2>
          <div className="h-px flex-1 bg-devops-grid-line" />
          <span className="text-xs font-mono text-devops-green">OPERATIONAL</span>
        </div>
      </motion.div>

      <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
        {/* Bio Panel */}
        <Panel
          title="About.config"
          icon={<BookOpen className="w-4 h-4" />}
          status="online"
          statusText="Active"
        >
          <div className="space-y-4">
            {bio.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-sm text-slate-400 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 pt-4 border-t border-devops-grid-line/50">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-devops-navy/40 min-h-[44px]">
                <MapPin className="w-4 h-4 text-devops-cyan flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] md:text-xs text-slate-500">Location</div>
                  <div className="text-xs md:text-sm text-slate-300 truncate">Meerut, India</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-devops-navy/40 min-h-[44px]">
                <Briefcase className="w-4 h-4 text-devops-green flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] md:text-xs text-slate-500">Status</div>
                  <div className="text-xs md:text-sm text-devops-green">Open to Work</div>
                </div>
              </div>
            </div>
          </div>
        </Panel>

        {/* Education Timeline Panel */}
        <Panel
          title="Education History"
          icon={<GraduationCap className="w-4 h-4" />}
          status="online"
          statusText="Verified"
        >
          <TimelineLog entries={education} />
        </Panel>
      </div>
    </section>
  );
}
