"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FolderGit2, GitBranch } from "lucide-react";
import { Panel, PipelineCard } from "@/components/dashboard";
import {
  staggerContainerVariants,
  fadeUpVariants,
  viewportOnce,
  easings,
} from "@/lib/animations";

const projects = [
  {
    name: "RuneVault",
    description:
      "Full-stack gaming marketplace with MERN stack. Features secure JWT authentication, RESTful APIs, and optimized MongoDB queries for seamless item trading.",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    date: "Sep '25",
    demoUrl: "https://runevault.vercel.app/",
    githubUrl: "https://github.com/ishitaron08/RuneVault",
    status: "success" as const,
  },
  {
    name: "Job Hunt Portal",
    description:
      "Modern job searching application with real-time filtering and category-based job segmentation. Built with MERN stack, featuring 30% faster load times through optimized database queries and lazy loading.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    date: "Jan '25",
    demoUrl: "https://jobsexli.vercel.app/",
    githubUrl: "https://github.com/ishitaron08/job-hunt-portal",
    status: "success" as const,
  },
  {
    name: "Password Generator",
    description:
      "Interactive password generator built with React Hooks using useState and useEffect. Features customizable length, character-type toggles, real-time strength indicator, and one-click copy functionality.",
    techStack: ["React Hooks", "JavaScript", "HTML", "CSS"],
    date: "Oct '24",
    demoUrl: "#",
    githubUrl: "https://github.com/ishitaron08/password-generator",
    status: "success" as const,
  },
  {
    name: "Book Selling Website",
    description:
      "End-to-end e-commerce platform with containerized deployment using Docker. Features book listings, secure purchases, user accounts with authentication, and shopping cart with category filtering.",
    techStack: ["React", "Bootstrap", "JavaScript", "Docker"],
    date: "Sep '24",
    demoUrl: "#",
    githubUrl: "https://github.com/ishitaron08/book-selling-website",
    status: "success" as const,
  },
];

export function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();
  
  // Counter animation variants
  const counterVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: easings.smooth }
    }
  };

  return (
    <section id="projects" className="py-8">
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
            whileHover={prefersReducedMotion ? {} : { rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <FolderGit2 className="w-5 h-5 text-devops-amber" />
          </motion.div>
          <h2 className="text-xl font-bold text-white">Active Pipelines</h2>
          <motion.div 
            className="h-px flex-1 bg-devops-grid-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easings.smooth, delay: 0.2 }}
            style={{ originX: 0 }}
          />
          <motion.span 
            className="text-xs font-mono text-devops-green"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {projects.length} DEPLOYED
          </motion.span>
        </div>
      </motion.div>

      {/* Pipeline Stats */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUpVariants}
      >
        <Panel
          title="Pipeline Overview"
          icon={<GitBranch className="w-4 h-4" />}
          status="online"
          statusText="All Healthy"
          className="mb-6"
        >
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {[
              { value: projects.length, label: "Total Pipelines", color: "text-devops-green" },
              { value: projects.length, label: "Deployed", color: "text-devops-green" },
              { value: 0, label: "Building", color: "text-devops-amber" },
              { value: 0, label: "Failed", color: "text-devops-red" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                variants={counterVariants}
                whileHover={prefersReducedMotion ? {} : { 
                  scale: 1.02, 
                  backgroundColor: "rgba(0, 255, 136, 0.05)",
                }}
                transition={{ duration: 0.2 }}
                className="text-center p-3 bg-devops-navy/40 rounded-lg cursor-default"
              >
                <motion.div 
                  className={`text-2xl font-mono font-bold ${stat.color}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs text-slate-500 uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </Panel>
      </motion.div>

      {/* Project Cards Grid */}
      <motion.div 
        className="grid gap-4 md:gap-6 md:grid-cols-2"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {projects.map((project) => (
          <motion.div
            key={project.name}
            variants={fadeUpVariants}
          >
            <PipelineCard
              name={project.name}
              description={project.description}
              status={project.status}
              techStack={project.techStack}
              date={project.date}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
