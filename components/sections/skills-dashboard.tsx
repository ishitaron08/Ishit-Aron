"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Boxes, Server, Code2, Database, Cloud, Wrench } from "lucide-react";
import { Panel, ServiceGrid } from "@/components/dashboard";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import {
  staggerContainerVariants,
  fadeUpVariants,
  slideInLeftVariants,
  viewportOnce,
  easings,
} from "@/lib/animations";

interface SkillCategory {
  name: string;
  icon: ReactNode;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: <Code2 className="w-4 h-4" />,
    color: "devops-cyan",
    skills: ["C++", "JavaScript", "TypeScript", "Python", "Java", "C"],
  },
  {
    name: "Frontend",
    icon: <Boxes className="w-4 h-4" />,
    color: "devops-green",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    name: "Backend",
    icon: <Server className="w-4 h-4" />,
    color: "devops-amber",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    name: "Database",
    icon: <Database className="w-4 h-4" />,
    color: "devops-purple",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    name: "Cloud & DevOps",
    icon: <Cloud className="w-4 h-4" />,
    color: "devops-cyan",
    skills: ["AWS", "Azure", "Docker", "Git", "GitHub", "Linux"],
  },
  {
    name: "Tools",
    icon: <Wrench className="w-4 h-4" />,
    color: "devops-green",
    skills: ["VS Code", "Postman", "Figma", "Vercel"],
  },
];

const allSkills = skillCategories.flatMap((cat) =>
  cat.skills.map((skill) => ({ name: skill, category: cat.name }))
);

export function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();

  // Category card animation variants
  const categoryVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.4, ease: easings.smooth }
    }
  };

  // Skill item animation variants
  const skillItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: easings.smooth }
    }
  };

  return (
    <section id="skills" className="py-8">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUpVariants}
        className="mb-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            whileHover={prefersReducedMotion ? {} : { rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Server className="w-5 h-5 text-devops-green" />
          </motion.div>
          <h2 className="text-xl font-bold text-white">Services Running</h2>
          <motion.div 
            className="h-px flex-1 bg-devops-grid-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easings.smooth, delay: 0.2 }}
            style={{ originX: 0 }}
          />
          <motion.span 
            className="text-xs font-mono text-devops-green flex items-center gap-1.5"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.span 
              className="w-1.5 h-1.5 rounded-full bg-devops-green"
              animate={prefersReducedMotion ? {} : { 
                scale: [1, 1.3, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            {allSkills.length} ACTIVE
          </motion.span>
        </div>
      </motion.div>

      {/* All Services Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUpVariants}
      >
        <Panel
          title="Active Services"
          icon={<Boxes className="w-4 h-4" />}
          status="online"
          statusText={`${allSkills.length} Running`}
          className="mb-6"
        >
          <ServiceGrid services={allSkills} />
        </Panel>
      </motion.div>

      {/* Category Breakdown - 2 columns for better symmetry */}
      <motion.div 
        className="grid md:grid-cols-2 gap-4"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.name}
            variants={categoryVariants}
            whileHover={prefersReducedMotion ? {} : { 
              borderColor: "rgba(0, 255, 136, 0.3)",
              y: -4,
            }}
            transition={{ duration: 0.2 }}
            className={cn(
              "bg-devops-navy-light/60 border border-devops-grid-line rounded-lg p-4",
              "transition-colors cursor-default"
            )}
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.span 
                className={`text-${category.color}`}
                whileHover={prefersReducedMotion ? {} : { rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {category.icon}
              </motion.span>
              <span className="text-sm font-medium text-slate-300">
                {category.name}
              </span>
              <span className="ml-auto text-xs font-mono text-slate-500">
                {category.skills.length} services
              </span>
            </div>

            <motion.div 
              className="space-y-2"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
            >
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={skillItemVariants}
                  whileHover={prefersReducedMotion ? {} : { 
                    x: 4, 
                    backgroundColor: "rgba(0, 255, 136, 0.05)",
                  }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center justify-between py-1.5 px-2 rounded bg-devops-navy/40"
                >
                  <div className="flex items-center gap-2">
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-devops-green"
                      animate={prefersReducedMotion ? {} : { 
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                    <span className="text-sm text-slate-300">{skill}</span>
                  </div>
                  <span className="text-xs font-mono text-devops-green">
                    Healthy
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
