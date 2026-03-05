"use client";

import { motion } from "framer-motion";
import { Briefcase, BookOpen } from "lucide-react";

export default function ExperiencePage() {
    const experience = [
        {
            title: "1M1B Virtual Internship",
            period: "2024",
            desc: "Immersive industry-led program focused on the intersection of AI application and professional system design.",
            type: "Professional Residency"
        }
    ];

    const education = {
        degree: "B.Tech in Computer Science & Engineering (AI)",
        school: "Mandsaur University",
        period: "2023 — 2027",
        details: "Focusing on Intelligent Systems, Predictive Analytics, and High-Performance Web Architecture."
    };

    return (
        <main className="min-h-screen pt-64 pb-48 px-6 max-w-7xl mx-auto">
            <motion.div
                className="mb-48"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <span className="section-label">Trajectory & Legacy</span>
                <h1 className="text-[ clamp(4rem,10vw,10rem) ] font-serif gold-text-gradient italic leading-none">
                    Professional <br /> Evolution.
                </h1>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-32">
                <div className="space-y-32">
                    {experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 border-l border-white/5"
                        >
                            <div className="absolute left-[-1px] top-0 w-[1px] h-32 bg-primary/40" />
                            <div className="flex items-center gap-6 mb-10 text-primary">
                                <Briefcase size={24} className="opacity-60" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-40">{exp.type}</span>
                            </div>
                            <h3 className="text-5xl font-serif text-foreground mb-4 italic leading-tight">{exp.title}</h3>
                            <p className="text-primary font-bold text-sm mb-12 tracking-[0.3em] uppercase italic opacity-60">{exp.period}</p>
                            <p className="text-luxury-desc text-lg opacity-60 leading-[2]">{exp.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="card-luxury p-16 border-white/5 bg-surface/40 hover-luxury backdrop-blur-2xl"
                    >
                        <div className="flex items-center gap-6 mb-12 text-primary">
                            <BookOpen size={24} className="opacity-60" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-40">Academic Foundation</span>
                        </div>

                        <h3 className="text-[ clamp(2rem,5vw,3rem) ] font-serif gold-text-gradient mb-4 italic leading-tight">{education.degree}</h3>
                        <p className="text-2xl font-serif text-secondary mb-12 italic opacity-60">— {education.school}</p>

                        <div className="px-8 py-3 bg-primary/5 border border-primary/10 inline-block rounded-full text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-12">
                            {education.period}
                        </div>

                        <p className="text-luxury-desc text-lg opacity-60 italic leading-[2]">{education.details}</p>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
