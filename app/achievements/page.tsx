"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

export default function AchievementsPage() {
    const certifications = [
        { name: "Google Cloud: Generative AI Suite", issuer: "Google" },
        { name: "IBM SkillsBuild: AI Agents Mastery", issuer: "IBM" },
        { name: "Deloitte: Data Analytics Certification", issuer: "Deloitte" },
        { name: "Infosys: Python Foundation", issuer: "Infosys" },
        { name: "1M1B Virtual Internship Certificate", issuer: "1M1B" }
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
                <span className="section-label">Verified Excellence</span>
                <h1 className="text-[ clamp(4rem,10vw,10rem) ] font-serif gold-text-gradient italic leading-none">
                    Verified <br /> Mastery.
                </h1>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-64">
                {certifications.map((cert, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="p-12 bg-surface/30 rounded-[48px] flex items-center justify-between group transition-all duration-700 hover:bg-white/5 border border-white/5 hover:border-primary/20"
                    >
                        <div>
                            <p className="text-[9px] font-bold text-primary uppercase tracking-[0.5em] mb-4 italic opacity-40">{cert.issuer}</p>
                            <h3 className="text-3xl font-serif text-foreground group-hover:text-primary transition-colors italic leading-tight">{cert.name}</h3>
                        </div>
                        <div className="p-5 bg-background rounded-2xl border border-white/5 group-hover:border-primary/40 transition-colors shadow-2xl">
                            <ShieldCheck size={24} className="text-primary opacity-60" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="p-32 bg-surface/50 rounded-[80px] text-center border border-white/5 relative overflow-hidden backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
            >
                <div className="absolute top-0 right-0 p-24 opacity-[0.02]">
                    <Award size={300} />
                </div>

                <Award size={64} className="mx-auto mb-16 text-primary glow-primary" />
                <h2 className="text-6xl md:text-8xl font-serif mb-16 italic gold-text-gradient leading-none">Eternal <br /> Transformation.</h2>
                <p className="max-w-3xl mx-auto text-luxury-desc opacity-50 italic">
                    Relentlessly mastering the technologies of tomorrow. Pursuing a level of excellence that transcends the standard, building architectures that define the next era of digital existence.
                </p>
            </motion.div>
        </main>
    );
}
