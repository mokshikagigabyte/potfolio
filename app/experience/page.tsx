"use client";

import { motion } from "framer-motion";
import { Briefcase, BookOpen } from "lucide-react";

export default function ExperiencePage() {
    const experience = [
        {
            title: "1M1B Virtual Internship",
            period: "2024",
            desc: "Completed industry-focused internship program with practical exposure to AI applications and professional collaboration.",
            type: "Internship"
        }
    ];

    const education = {
        degree: "B.Tech in Computer Science & Engineering (AI)",
        school: "Mandsaur University",
        period: "2023 — 2027",
        details: "Specializing in Intelligent Systems and Machine Learning applications."
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
    };

    return (
        <main className="min-h-screen pt-48 pb-32 px-6 max-w-5xl mx-auto">
            <motion.section {...fadeIn}>
                <span className="section-label mb-4">Work & Academic Journey</span>
                <h1 className="text-6xl md:text-8xl font-serif mb-16 italic">Experience</h1>

                <div className="grid md:grid-cols-2 gap-20">
                    <div>
                        <span className="section-label">Professional</span>
                        {experience.map((exp, i) => (
                            <div key={i} className="card-formal p-8 mb-8 border-none bg-surface">
                                <div className="flex items-center gap-4 mb-6 text-accent">
                                    <Briefcase size={24} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">{exp.type}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                                <p className="text-accent font-bold text-sm mb-6">{exp.period}</p>
                                <p className="text-secondary font-medium text-sm leading-relaxed">{exp.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span className="section-label">Education</span>
                        <div className="card-formal p-8 border-none bg-primary text-background">
                            <div className="flex items-center gap-4 mb-6">
                                <BookOpen size={24} />
                                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">University</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
                            <p className="text-sm font-bold opacity-60 mb-2">{education.school}</p>
                            <div className="px-3 py-1 bg-background/20 inline-block rounded-md text-[10px] font-bold uppercase mb-6">
                                {education.period}
                            </div>
                            <p className="text-sm font-medium opacity-80 leading-relaxed">{education.details}</p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}
