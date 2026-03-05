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

    const slideInLeft = {
        initial: { opacity: 0, x: -60 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 1, ease: [0.23, 1, 0.32, 1] }
    };

    return (
        <main className="min-h-screen pt-48 pb-32 px-6 max-w-6xl mx-auto">
            <motion.div {...slideInLeft} className="mb-24">
                <span className="section-label">Selected Portfolio</span>
                <h1 className="text-7xl md:text-8xl font-serif italic text-primary leading-tight">Case Studies</h1>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="card-formal p-10 h-full flex flex-col group hover-flutter border-subtle hover:border-accent group-hover:shadow-2xl transition-all duration-700"
                    >
                        <div className="flex justify-between items-start mb-10">
                            <div className="p-4 bg-accent-soft text-accent rounded-2xl w-fit">
                                {p.icon}
                            </div>
                            <ArrowUpRight className="opacity-0 group-hover:opacity-40 transition-all duration-500" />
                        </div>
                        <span className="text-[10px] font-black text-accent uppercase mb-3 tracking-[0.2em]">{p.category}</span>
                        <h3 className="text-3xl font-bold mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                        <p className="text-xs font-bold opacity-40 mb-6 uppercase tracking-widest">{p.role}</p>
                        <p className="text-secondary mb-12 flex-grow font-medium leading-[1.8] text-sm">{p.desc}</p>
                        <div className="flex flex-wrap gap-2 pt-8 border-t border-card-border/50">
                            {p.tech.map(t => (
                                <span key={t} className="text-[9px] font-black px-3 py-1.5 bg-surface rounded-full uppercase tracking-tighter opacity-60">{t}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
