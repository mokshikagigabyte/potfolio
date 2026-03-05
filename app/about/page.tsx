"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    const slideInUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1.2, ease: [0.23, 1, 0.32, 1] }
    };

    return (
        <main className="min-h-screen pt-64 pb-48 px-6 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-24 mb-64 items-end">
                <motion.div className="lg:col-span-7" {...slideInUp}>
                    <span className="section-label">Identity & Background</span>
                    <h1 className="text-[ clamp(4rem,10vw,10rem) ] font-serif gold-text-gradient italic leading-none mb-12">
                        The Digital <br /> Architect.
                    </h1>
                    <p className="text-luxury-desc max-w-xl">
                        Currently advancing Artificial Intelligence at Mandsaur University. Specialized in constructing elite digital experiences where machine precision meets high-end aesthetics.
                    </p>
                </motion.div>

                <motion.div
                    className="lg:col-span-5 border-l border-white/5 pl-12 pb-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <div className="space-y-6 text-secondary font-medium italic text-lg opacity-60">
                        <p>"Technology is the brush, AI is the ink, and the web is the canvas."</p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="grid lg:grid-cols-12 gap-24 pt-48 border-t border-white/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="lg:col-span-4">
                    <span className="section-label">Competencies</span>
                    <h2 className="text-5xl font-serif mb-8 italic">Technical Arsenal</h2>
                    <p className="text-secondary font-medium leading-[1.8] opacity-70">
                        A curated selection of tools and technologies utilized to build the future of intelligence.
                    </p>
                </div>

                <div className="lg:col-span-8 grid sm:grid-cols-2 gap-16">
                    <div className="space-y-12">
                        {["Python & OpenCV", "Machine Learning", "FastAPI / Node.js", "React & Next.js"].map(s => (
                            <div key={s} className="group pb-8 border-b border-white/5 flex justify-between items-center transition-colors hover:border-primary/40">
                                <span className="text-2xl font-serif italic text-foreground group-hover:text-primary transition-colors">{s}</span>
                                <span className="text-[9px] font-bold text-primary opacity-30 tracking-[0.3em]">EXPERT</span>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-12">
                        {["Deep Learning", "Docker / AWS", "Git & CI/CD", "PostgreSQL / Mongo"].map(s => (
                            <div key={s} className="group pb-8 border-b border-white/5 flex justify-between items-center transition-colors hover:border-primary/40">
                                <span className="text-2xl font-serif italic text-foreground group-hover:text-primary transition-colors">{s}</span>
                                <span className="text-[9px] font-bold text-primary opacity-30 tracking-[0.3em]">CORE</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
