"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    const slideInLeft = {
        initial: { opacity: 0, x: -60 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 1, ease: [0.23, 1, 0.32, 1] }
    };

    const slideInRight = {
        initial: { opacity: 0, x: 60 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 1, ease: [0.23, 1, 0.32, 1] }
    };

    return (
        <main className="min-h-screen pt-48 pb-32 px-6 max-w-6xl mx-auto overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-20 mb-32 items-end">
                <motion.div {...slideInLeft}>
                    <span className="section-label">Identity & Background</span>
                    <h1 className="text-7xl md:text-8xl font-serif italic text-primary leading-tight">Mokshika <br /> Sharma</h1>
                </motion.div>
                <motion.div {...slideInRight} className="lg:pb-4">
                    <p className="text-2xl text-secondary leading-[1.8] font-medium text-balance">
                        Currently pursuing B.Tech in CSE (AI) at Mandsaur University. I specialize in building functional systems where AI isn't just a buzzword, but a core architectural strength.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-3 gap-16 pt-32 border-t border-card-border"
            >
                <div className="lg:col-span-1">
                    <span className="section-label">Competencies</span>
                    <h2 className="text-4xl font-bold mb-6 text-balance leading-tight">Technical Arsenal</h2>
                    <p className="text-secondary font-medium leading-[1.7]">
                        My toolkit is built for the era of intelligence, bridging low-level processing with high-level web deployment.
                    </p>
                </div>
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        {["Python & OpenCV", "Machine Learning", "FastAPI / Node.js", "React & Next.js"].map(s => (
                            <div key={s} className="pb-6 border-b border-card-border flex justify-between items-center group cursor-default">
                                <span className="font-bold text-xl group-hover:text-accent transition-colors">{s}</span>
                                <span className="text-[10px] font-black opacity-20 tracking-widest">EXPERT</span>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-8">
                        {["Deep Learning", "Docker / AWS", "Git & CI/CD", "PostgreSQL / Mongo"].map(s => (
                            <div key={s} className="pb-6 border-b border-card-border flex justify-between items-center group cursor-default">
                                <span className="font-bold text-xl group-hover:text-accent transition-colors">{s}</span>
                                <span className="text-[10px] font-black opacity-20 tracking-widest">CORE</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
