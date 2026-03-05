"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

export default function AchievementsPage() {
    const certifications = [
        { name: "Google Cloud: Generative AI Suite", issuer: "Google" },
        { name: "IBM SkillsBuild: AI Agents Mastery", issuer: "IBM" },
        { name: "Deloitte: Data Analytics Certification", issuer: "Deloitte" },
        { name: "Infosys: Python Foundation", issuer: "Infosys" },
        { name: "1M1B Virtual Internship Certificate", issuer: "1M1B" }
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
                <span className="section-label">Verified Technical Excellence</span>
                <h1 className="text-7xl md:text-8xl font-serif italic text-primary leading-tight">Achievements</h1>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
                {certifications.map((cert, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ x: 15, scale: 1.02 }}
                        className="p-10 bg-surface rounded-[40px] flex items-center justify-between group transition-all duration-500 hover:shadow-xl border border-transparent hover:border-accent/10"
                    >
                        <div>
                            <p className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-3">{cert.issuer}</p>
                            <h3 className="text-2xl font-bold leading-tight group-hover:text-accent transition-colors">{cert.name}</h3>
                        </div>
                        <div className="p-4 bg-background rounded-2xl border border-card-border group-hover:border-accent transition-colors">
                            <CheckCircle size={28} className="text-accent" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-48 p-20 bg-primary text-white rounded-[60px] text-center shadow-[0_40px_100px_rgba(26,26,46,0.3)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Award size={200} />
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Award size={64} className="mx-auto mb-10 text-accent" />
                    <h2 className="text-5xl font-bold mb-8 italic">Continuous Transformation</h2>
                    <p className="max-w-3xl mx-auto text-xl opacity-70 font-medium leading-[2]">
                        Determined to push the boundaries of what's possible in the AI landscape. My journey is one of constant growth, leveraging the most advanced technologies to build a smarter future.
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
