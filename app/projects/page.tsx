"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Terminal, Award, ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
    const projects = [
        {
            title: "ScriptSheetAI",
            role: "AI-Powered Sheet Generator",
            desc: "Structured data generation using OCR and LLMs for rapid information organization.",
            tech: ["Python", "OpenCV", "Tesseract", "Flask"],
            category: "AI & Automation",
            icon: <Cpu className="text-accent" />
        },
        {
            title: "ShopEasy",
            role: "E-commerce Platform",
            desc: "Full-stack marketplace with optimized checkout flows and inventory management.",
            tech: ["Node.js", "Express", "MongoDB", "Auth"],
            category: "Web Engineering",
            icon: <Globe className="text-accent" />
        },
        {
            title: "ChatRoomApp",
            role: "Messaging Platform",
            desc: "Instant communication with persistent chatrooms and socket-based updates.",
            tech: ["Flask", "Socket.IO", "React", "State"],
            category: "Real-time",
            icon: <Terminal className="text-accent" />
        },
        {
            title: "Nutrition Tracker",
            role: "Health Web App",
            desc: "A data-driven nutrition tracker with recipe integration and calorie profiling.",
            tech: ["JavaScript", "Recipes API", "CSS3", "HTML5"],
            category: "Health",
            icon: <Award className="text-accent" />
        }
    ];

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
    };

    return (
        <main className="min-h-screen pt-48 pb-32 px-6 max-w-5xl mx-auto">
            <motion.section {...fadeIn}>
                <span className="section-label mb-4">Selected Portfolio</span>
                <h1 className="text-6xl md:text-8xl font-serif mb-16 italic">Case Studies</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <div key={i} className="perspective">
                            <motion.div
                                whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="card-formal p-10 h-full flex flex-col group preserve-3d"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-3 bg-surface rounded-xl">
                                        {p.icon}
                                    </div>
                                    <ArrowUpRight className="opacity-0 group-hover:opacity-40 transition-opacity" />
                                </div>
                                <span className="text-[10px] font-bold text-accent uppercase mb-2 tracking-widest">{p.category}</span>
                                <h3 className="text-2xl font-bold mb-1">{p.title}</h3>
                                <p className="text-sm font-semibold opacity-40 mb-6">{p.role}</p>
                                <p className="text-secondary mb-10 flex-grow font-medium text-sm leading-relaxed">{p.desc}</p>
                                <div className="flex flex-wrap gap-2 pt-6 border-t border-card-border/50">
                                    {p.tech.map(t => (
                                        <span key={t} className="text-[9px] font-bold px-2 py-1 bg-surface rounded uppercase opacity-60">{t}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </motion.section>
        </main>
    );
}
