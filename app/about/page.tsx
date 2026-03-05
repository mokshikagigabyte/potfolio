"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
    };

    return (
        <main className="min-h-screen pt-48 pb-32 px-6 max-w-5xl mx-auto">
            <motion.section {...fadeIn}>
                <span className="section-label mb-4">Identity & Background</span>
                <h1 className="text-6xl md:text-8xl font-serif mb-12 italic">Mokshika Sharma</h1>

                <div className="grid md:grid-cols-2 gap-16 mb-32">
                    <p className="text-xl text-secondary leading-relaxed font-medium">
                        Currently pursuing B.Tech in CSE (AI) at Mandsaur University. I specialize in building functional systems where AI isn't just a buzzword, but a core architectural strength.
                    </p>
                    <p className="text-xl text-secondary leading-relaxed font-medium">
                        I thrive in collaborative environments, focusing on solving real-world challenges through elegant, well-documented code and scalable design.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-1">
                        <span className="section-label">Competencies</span>
                        <h2 className="text-3xl font-bold mb-6 text-balance">Technical Arsenal</h2>
                    </div>
                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            {["Python & OpenCV", "Machine Learning", "FastAPI / Node.js", "React & Next.js"].map(s => (
                                <div key={s} className="pb-4 border-b border-card-border flex justify-between items-center group cursor-default">
                                    <span className="font-bold text-lg group-hover:text-accent transition-colors">{s}</span>
                                    <span className="text-[10px] font-black opacity-20">EXPERT</span>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-6">
                            {["Deep Learning", "Docker / AWS", "Git & CI/CD", "PostgreSQL / Mongo"].map(s => (
                                <div key={s} className="pb-4 border-b border-card-border flex justify-between items-center group cursor-default">
                                    <span className="font-bold text-lg group-hover:text-accent transition-colors">{s}</span>
                                    <span className="text-[10px] font-black opacity-20">CORE</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}
