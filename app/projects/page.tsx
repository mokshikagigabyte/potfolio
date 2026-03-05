"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Terminal, Award, ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
    const projects = [
        {
            title: "ScriptSheetAI",
            role: "AI-Powered Sheet Generator",
            desc: "Structured data generation using OCR and LLMs for rapid information organization. Bridging raw images and intelligent data.",
            tech: ["Python", "OpenCV", "Tesseract", "Flask"],
            category: "AI & Automation",
            icon: <Cpu size={24} />
        },
        {
            title: "ShopEasy",
            role: "E-commerce Platform",
            desc: "An elite marketplace experience with optimized performance and secure scaling.",
            tech: ["Node.js", "Express", "MongoDB", "Tailwind"],
            category: "Web Engineering",
            icon: <Globe size={24} />
        },
        {
            title: "ChatRoomApp",
            role: "Secure Messaging",
            desc: "The pinnacle of real-time communication with encrypted state management.",
            tech: ["Flask", "Socket.IO", "React", "State"],
            category: "Real-time Architecture",
            icon: <Terminal size={24} />
        },
        {
            title: "Nutrition Tracker",
            role: "Health Data Analytics",
            desc: "A sophisticated health suite bringing data insights to personal wellness.",
            tech: ["JavaScript", "Recipes API", "CSS3", "HTML5"],
            category: "Health-Tech",
            icon: <Award size={24} />
        }
    ];

    return (
        <main className="min-h-screen pt-64 pb-48 px-6 max-w-7xl mx-auto">
            <motion.div
                className="mb-48"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <span className="section-label">Selected Portfolio</span>
                <h1 className="text-[ clamp(4rem,10vw,10rem) ] font-serif gold-text-gradient italic leading-none">
                    Couture <br /> Engineering.
                </h1>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 1 }}
                        className="card-luxury p-12 h-full flex flex-col group hover-luxury border-white/5 bg-transparent"
                    >
                        <div className="flex justify-between items-start mb-16">
                            <div className="p-5 bg-primary/5 text-primary rounded-3xl border border-primary/10">
                                {p.icon}
                            </div>
                            <ArrowUpRight className="opacity-0 group-hover:opacity-40 transition-all duration-500 text-primary" />
                        </div>

                        <span className="text-[10px] font-bold text-primary uppercase mb-6 tracking-[0.4em] opacity-60 italic">{p.category}</span>
                        <h3 className="text-4xl font-serif text-foreground mb-4 italic group-hover:text-primary transition-colors">{p.title}</h3>
                        <p className="text-[10px] font-bold text-secondary opacity-40 mb-10 uppercase tracking-[0.3em]">{p.role}</p>

                        <p className="text-secondary font-medium leading-[1.8] text-lg mb-12 flex-grow opacity-70 italic">{p.desc}</p>

                        <div className="flex flex-wrap gap-3 pt-12 border-t border-white/5">
                            {p.tech.map(t => (
                                <span key={t} className="text-[9px] font-bold px-5 py-2.5 bg-white/5 border border-white/5 rounded-full uppercase tracking-widest text-secondary group-hover:border-primary/20 transition-colors">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
