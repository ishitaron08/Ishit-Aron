"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award, Code } from "lucide-react";

const education = [
    {
        degree: "B.Tech in Computer Science",
        institution: "Lovely Professional University",
        location: "Phagwara, Punjab",
        period: "2022 - 2026",
        icon: <GraduationCap className="h-5 w-5 text-purple-500" />,
    },
    {
        degree: "Intermediate (XII)",
        institution: "Darshan Academy, Meerut",
        location: "Uttar Pradesh",
        period: "2021 - 2022",
        icon: <Award className="h-5 w-5 text-blue-500" />,
    },
];

const achievements = [
    "100+ LeetCode problems solved with strong DSA skills",
    "Active participation in Codeforces & GeeksforGeeks competitions",
    "Built scalable full-stack applications used by real users",
    "AWS & Azure cloud platform experience",
];

export function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="container px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
                        About Me
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        A passionate developer who loves building impactful digital experiences through clean, efficient, and user-focused solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                                    IA
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">Ishit Aron</h3>
                                    <p className="text-neutral-400 text-sm flex items-center gap-1">
                                        <MapPin className="h-3 w-3" /> Meerut, Uttar Pradesh, India
                                    </p>
                                </div>
                            </div>
                            <p className="text-neutral-300 leading-relaxed">
                                I&apos;m a Computer Science student at Meerut Institute of Engineering and Technology, 
                                passionate about building modern, scalable, and user-friendly web applications. 
                                With expertise in full-stack development, I specialize in React, Next.js, Node.js, 
                                and cloud technologies like AWS and Azure.
                            </p>
                            <p className="text-neutral-300 leading-relaxed mt-4">
                                When I&apos;m not coding, you&apos;ll find me solving algorithmic challenges on Several platforms 
                                (400+ problems solved!) or exploring new technologies. I&apos;m always eager to learn 
                                and contribute to meaningful projects.
                            </p>
                        </div>

                        {/* Achievements */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                        >
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <Code className="h-5 w-5 text-green-500" />
                                Achievements & Highlights
                            </h3>
                            <ul className="space-y-3">
                                {achievements.map((achievement, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3 text-neutral-300"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                                        {achievement}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>

                    {/* Education & Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                <GraduationCap className="h-5 w-5 text-purple-500" />
                                Education
                            </h3>
                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-6 border-l-2 border-neutral-700 hover:border-purple-500 transition-colors"
                                    >
                                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                        </div>
                                        <h4 className="text-white font-medium">{edu.degree}</h4>
                                        <p className="text-neutral-400 text-sm">{edu.institution}</p>
                                        <div className="flex items-center gap-4 mt-2 text-xs text-neutral-500">
                                            <span className="flex items-center gap-1">
                                                <MapPin className="h-3 w-3" /> {edu.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" /> {edu.period}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center hover:border-purple-500/50 transition-colors">
                                <div className="text-3xl font-bold text-white mb-1">400+</div>
                                <div className="text-neutral-400 text-sm">Algorithmic Problems</div>
                            </div>
                            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center hover:border-blue-500/50 transition-colors">
                                <div className="text-3xl font-bold text-white mb-1">6+</div>
                                <div className="text-neutral-400 text-sm">Projects Built</div>
                            </div>
                            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center hover:border-green-500/50 transition-colors">
                                <div className="text-3xl font-bold text-white mb-1">3+</div>
                                <div className="text-neutral-400 text-sm">Years Coding</div>
                            </div>
                            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center hover:border-yellow-500/50 transition-colors">
                                <div className="text-3xl font-bold text-white mb-1">5+</div>
                                <div className="text-neutral-400 text-sm">Technologies</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
