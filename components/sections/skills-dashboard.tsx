"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Boxes, Server, Code2, Database, Cloud, Wrench, ExternalLink } from "lucide-react";
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

interface Skill {
  name: string;
  docUrl: string;
}

interface SkillCategory {
  name: string;
  icon: ReactNode;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: <Code2 className="w-4 h-4" />,
    color: "devops-cyan",
    skills: [
      { name: "C++", docUrl: "https://cplusplus.com/doc/" },
      { name: "JavaScript", docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", docUrl: "https://www.typescriptlang.org/docs/" },
      { name: "Python", docUrl: "https://docs.python.org/3/" },
      { name: "Java", docUrl: "https://docs.oracle.com/en/java/" },
      { name: "C", docUrl: "https://en.cppreference.com/w/c" },
    ],
  },
  {
    name: "Frontend",
    icon: <Boxes className="w-4 h-4" />,
    color: "devops-green",
    skills: [
      { name: "React", docUrl: "https://react.dev/" },
      { name: "Next.js", docUrl: "https://nextjs.org/docs" },
      { name: "Tailwind CSS", docUrl: "https://tailwindcss.com/docs" },
      { name: "HTML5", docUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", docUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Bootstrap", docUrl: "https://getbootstrap.com/docs/" },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="w-4 h-4" />,
    color: "devops-amber",
    skills: [
      { name: "Node.js", docUrl: "https://nodejs.org/docs/" },
      { name: "Express", docUrl: "https://expressjs.com/" },
      { name: "REST APIs", docUrl: "https://restfulapi.net/" },
    ],
  },
  {
    name: "Database",
    icon: <Database className="w-4 h-4" />,
    color: "devops-purple",
    skills: [
      { name: "MongoDB", docUrl: "https://www.mongodb.com/docs/" },
      { name: "MySQL", docUrl: "https://dev.mysql.com/doc/" },
      { name: "PostgreSQL", docUrl: "https://www.postgresql.org/docs/" },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: <Cloud className="w-4 h-4" />,
    color: "devops-cyan",
    skills: [
      { name: "AWS", docUrl: "https://docs.aws.amazon.com/" },
      { name: "Azure", docUrl: "https://learn.microsoft.com/en-us/azure/" },
      { name: "Docker", docUrl: "https://docs.docker.com/" },
      { name: "Git", docUrl: "https://git-scm.com/doc" },
      { name: "GitHub", docUrl: "https://docs.github.com/" },
      { name: "Linux", docUrl: "https://www.kernel.org/doc/" },
    ],
  },
  {
    name: "Tools",
    icon: <Wrench className="w-4 h-4" />,
    color: "devops-green",
    skills: [
      { name: "VS Code", docUrl: "https://code.visualstudio.com/docs" },
      { name: "Postman", docUrl: "https://learning.postman.com/docs/" },
      { name: "Figma", docUrl: "https://help.figma.com/" },
      { name: "Vercel", docUrl: "https://vercel.com/docs" },
    ],
  },
];

const allSkills = skillCategories.flatMap((cat) =>
  cat.skills.map((skill) => ({ name: skill.name, category: cat.name, docUrl: skill.docUrl }))
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

      {/* Category Breakdown - responsive grid */}
      <motion.div 
        className="grid gap-3 md:gap-4 md:grid-cols-2"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.name}
            variants={categoryVariants}
            className={cn(
              "bg-devops-navy-light/60 border border-devops-grid-line rounded-lg p-3 md:p-4",
              "transition-colors cursor-default active:bg-devops-green/5 md:hover:border-devops-green/30"
            )}
          >
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <span className={`text-${category.color}`}>
                {category.icon}
              </span>
              <span className="text-sm font-medium text-slate-300">
                {category.name}
              </span>
              <span className="ml-auto text-[10px] md:text-xs font-mono text-slate-500">
                {category.skills.length} services
              </span>
            </div>

            <motion.div 
              className="space-y-1.5 md:space-y-2"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
            >
              {category.skills.map((skill, index) => (
                <motion.a
                  key={skill.name}
                  href={skill.docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={skillItemVariants}
                  className="flex items-center justify-between py-1.5 px-2 rounded bg-devops-navy/40 active:bg-devops-green/5 md:hover:bg-devops-green/5 transition-colors cursor-pointer group/skill"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-devops-green" />
                    <span className="text-xs md:text-sm text-slate-300 group-hover/skill:text-devops-green transition-colors">{skill.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] md:text-xs font-mono text-devops-green">
                      Healthy
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover/skill:text-devops-cyan transition-colors" />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
