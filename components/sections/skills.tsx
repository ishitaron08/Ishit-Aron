"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// All skills in a flat array for marquee
const allSkills = [
    // Languages
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    // Frontend
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    // Backend & Database
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    // Cloud & DevOps
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    // Tools
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
];

// Split skills into rows for marquee
const row1 = allSkills.slice(0, 14);
const row2 = allSkills.slice(14);

const SkillCard = ({ skill }: { skill: typeof allSkills[0] }) => (
    <div className="group flex items-center gap-3 px-4 py-2.5 mx-2 rounded-full bg-neutral-900/80 border border-neutral-800 hover:border-purple-500/50 hover:bg-neutral-800/80 transition-colors duration-200">
        <Image
            src={skill.icon}
            alt={skill.name}
            width={28}
            height={28}
            className="object-contain"
            loading="lazy"
        />
        <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors whitespace-nowrap">
            {skill.name}
        </span>
    </div>
);

const MarqueeRow = ({ skills, reverse = false }: { skills: typeof allSkills; reverse?: boolean }) => {
    return (
        <div className="relative flex overflow-hidden py-2" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <div className={`flex animate-marquee ${reverse ? 'animate-marquee-reverse' : ''}`} style={{ willChange: 'transform' }}>
                {skills.map((skill, index) => (
                    <SkillCard key={`${skill.name}-1-${index}`} skill={skill} />
                ))}
                {skills.map((skill, index) => (
                    <SkillCard key={`${skill.name}-2-${index}`} skill={skill} />
                ))}
            </div>
        </div>
    );
};

export function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-reverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 35s linear infinite;
                }
            `}</style>
            
            <div className="container px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
                        Technical Skills
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        A comprehensive toolkit I use to craft high-performance digital experiences.
                    </p>
                </motion.div>
            </div>

            {/* Full-width Marquee Section */}
            <div className="w-full space-y-3">
                <MarqueeRow skills={row1} />
                <MarqueeRow skills={row2} reverse />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2" />
        </section>
    );
}
