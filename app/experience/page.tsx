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

    const slideInLeft = {
        initial: { opacity: 0, x: -60 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 1, ease: [0.23, 1, 0.32, 1] }
    };

    return (
        <main className="min-h-screen pt-48 pb-32 px-6 max-w-6xl mx-auto">
            <motion.div {...slideInLeft} className="mb-24">
                <span className="section-label">Work & Academic Journey</span>
                <h1 className="text-7xl md:text-8xl font-serif italic text-primary leading-tight">Experience</h1>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-20">
                <div>
                    <span className="section-label">Professional</span>
                    {experience.map((exp, i) => (
                        <div key={i} className="card-formal p-10 mb-8 border-none bg-surface hover-flutter transition-all rounded-[40px]">
                            <div className="flex items-center gap-4 mb-8 text-accent">
                                <Briefcase size={28} />
                                <span className="text-xs font-black uppercase tracking-[0.2em]">{exp.type}</span>
                            </div>
                            <h3 className="text-3xl font-bold mb-3">{exp.title}</h3>
                            <p className="text-accent font-bold text-sm mb-8 tracking-widest">{exp.period}</p>
                            <p className="text-secondary font-medium leading-[1.8]">{exp.desc}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <span className="section-label">Education</span>
                    <div className="card-formal p-10 border-none bg-primary text-white hover-flutter transition-all rounded-[40px] shadow-2xl">
                        <div className="flex items-center gap-4 mb-8 text-white/40">
                            <BookOpen size={28} />
                            <span className="text-xs font-black uppercase tracking-[0.2em]">University</span>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{education.degree}</h3>
                        <p className="text-lg font-bold text-white/60 mb-8">{education.school}</p>
                        <div className="px-5 py-2 bg-white/10 inline-block rounded-xl text-xs font-black uppercase tracking-[0.2em] mb-10">
                            {education.period}
                        </div>
                        <p className="text-lg font-medium text-white/80 leading-[1.8]">{education.details}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
