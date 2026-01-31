"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronDown, Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const projects = [
    {
        title: "RuneVault",
        description: "Full-stack gaming marketplace with MERN stack. Features secure JWT authentication, RESTful APIs, and optimized MongoDB queries for seamless item trading.",
        tags: ["React", "Node.js", "MongoDB", "Express.js"],
        links: {
            demo: "https://runevault.vercel.app/",
            github: "https://github.com/ishitaron08/RuneVault",
        },
        date: "Sep '25",
        color: "from-purple-500 to-violet-500",
    },
    {
        title: "Job Hunt Portal",
        description: "Modern job searching application with real-time filtering and category-based job segmentation. Built with MERN stack, featuring 30% faster load times through optimized database queries and lazy loading.",
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        links: {
            demo: "https://jobsexli.vercel.app/",
            github: "https://github.com/ishitaron08/job-hunt-portal",
        },
        date: "Jan '25",
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Password Generator",
        description: "Interactive password generator built with React Hooks using useState and useEffect. Features customizable length, character-type toggles, real-time strength indicator, and one-click copy functionality.",
        tags: ["React Hooks", "JavaScript", "HTML", "CSS"],
        links: {
            demo: "#",
            github: "https://github.com/ishitaron08/password-generator",
        },
        date: "Oct '24",
        color: "from-green-500 to-emerald-500",
    },
    {
        title: "Book Selling Website",
        description: "End-to-end e-commerce platform with containerized deployment using Docker. Features book listings, secure purchases, user accounts with authentication, and shopping cart with category filtering.",
        tags: ["React", "Bootstrap", "JavaScript", "Docker"],
        links: {
            demo: "#",
            github: "https://github.com/ishitaron08/book-selling-website",
        },
        date: "Sep '24",
        color: "from-amber-500 to-orange-500",
    },
    
];

const ProjectItem = ({ project, index, isOpen, onClick }: { 
    project: typeof projects[0]; 
    index: number; 
    isOpen: boolean;
    onClick: () => void;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
        >
            {/* Main Row - Always Visible */}
            <button
                onClick={onClick}
                className="w-full text-left"
            >
                <div className={`
                    relative flex items-center justify-between p-5 md:p-6
                    bg-neutral-900/50 backdrop-blur-sm border border-neutral-800
                    rounded-2xl transition-all duration-300
                    hover:bg-neutral-800/50 hover:border-neutral-700
                    ${isOpen ? 'rounded-b-none border-b-0 bg-neutral-800/50' : ''}
                `}>
                    {/* Left: Number + Title */}
                    <div className="flex items-center gap-4 md:gap-6">
                        <span className={`
                            text-4xl md:text-5xl font-black tracking-tighter
                            text-transparent bg-clip-text bg-gradient-to-br ${project.color}
                            opacity-60 group-hover:opacity-100 transition-opacity
                        `}>
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all">
                                {project.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1 text-neutral-500 text-sm">
                                <Calendar className="w-3 h-3" />
                                {project.date}
                            </div>
                        </div>
                    </div>

                    {/* Right: Tags + Arrow */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex gap-2">
                            {project.tags.slice(0, 2).map((tag) => (
                                <Badge 
                                    key={tag} 
                                    variant="secondary" 
                                    className="bg-neutral-800 text-neutral-400 text-xs border border-neutral-700"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`
                                w-10 h-10 rounded-full flex items-center justify-center
                                bg-gradient-to-br ${project.color} bg-opacity-20
                                border border-neutral-700 group-hover:border-neutral-600
                            `}
                        >
                            <ChevronDown className="w-5 h-5 text-white" />
                        </motion.div>
                    </div>
                </div>
            </button>

            {/* Expanded Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-4 bg-neutral-800/30 border border-t-0 border-neutral-800 rounded-b-2xl">
                            {/* Description */}
                            <p className="text-neutral-300 leading-relaxed mb-6">
                                {project.description}
                            </p>

                            {/* All Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span 
                                        key={tag} 
                                        className={`
                                            px-3 py-1 text-sm rounded-full
                                            bg-gradient-to-r ${project.color} bg-opacity-10
                                            text-white/80 border border-white/10
                                        `}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3">
                                <Link
                                    href={project.links.github}
                                    target="_blank"
                                    className={`
                                        flex items-center gap-2 px-5 py-2.5 rounded-full
                                        bg-white text-black font-medium text-sm
                                        hover:bg-neutral-200 transition-colors
                                    `}
                                >
                                    <Github className="w-4 h-4" />
                                    View Code
                                </Link>
                                <Link
                                    href={project.links.demo}
                                    target="_blank"
                                    className={`
                                        flex items-center gap-2 px-5 py-2.5 rounded-full
                                        bg-gradient-to-r ${project.color} text-white font-medium text-sm
                                        hover:opacity-90 transition-opacity
                                    `}
                                >
                                    Live Demo
                                    <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export function Projects() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="projects" className="py-24 relative">
            <div className="container px-4 md:px-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
                        Featured Projects
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        A selection of projects that showcase my passion for building scalable and user-centric applications.
                    </p>
                </motion.div>

                {/* Project List */}
                <div className="space-y-4">
                    {projects.map((project, index) => (
                        <ProjectItem 
                            key={project.title}
                            project={project}
                            index={index}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>

                {/* View More Link */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-12"
                >
                    <Link
                        href="https://github.com/ishitaron08"
                        target="_blank"
                        className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                    >
                        <span>View all projects on GitHub</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
