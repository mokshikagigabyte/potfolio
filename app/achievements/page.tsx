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

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
    };

    return (
        <main className="min-h-screen pt-48 pb-32 px-6 max-w-5xl mx-auto">
            <motion.section {...fadeIn}>
                <span className="section-label mb-4">Verified Technical Excellence</span>
                <h1 className="text-6xl md:text-8xl font-serif mb-16 italic">Achievements</h1>

                <div className="grid sm:grid-cols-2 gap-6">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ x: 10 }}
                            className="p-8 bg-surface rounded-2xl flex items-center justify-between group transition-all"
                        >
                            <div>
                                <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">{cert.issuer}</p>
                                <h3 className="text-xl font-bold leading-tight group-hover:text-accent transition-colors">{cert.name}</h3>
                            </div>
                            <div className="p-3 bg-background rounded-full border-subtle">
                                <CheckCircle size={24} className="text-accent" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-40 p-12 bg-primary text-background rounded-[40px] text-center">
                    <Award size={48} className="mx-auto mb-8 text-accent" />
                    <h2 className="text-4xl font-bold mb-6">Continuous Learning</h2>
                    <p className="max-w-2xl mx-auto text-lg opacity-70 font-medium">
                        Committed to staying at the forefront of AI and Web development through intensive practical projects and accredited certifications from global industry leaders.
                    </p>
                </div>
            </motion.section>
        </main>
    );
}
