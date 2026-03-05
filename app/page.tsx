"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  User,
  Briefcase,
  Layers,
  Award
} from "lucide-react";

export default function Home() {
  const slideInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.23, 1, 0.32, 1] }
  };

  const navCards = [
    { title: "Profile", icon: <User size={20} />, href: "/about", desc: "Identity & Technical Arsenal" },
    { title: "Projects", icon: <Layers size={20} />, href: "/projects", desc: "Selected Case Studies" },
    { title: "Internship", icon: <Briefcase size={20} />, href: "/experience", desc: "Work & Experience" },
    { title: "Achievements", icon: <Award size={20} />, href: "/achievements", desc: "Verified Accredited Mastery" },
  ];

  return (
    <main className="min-h-screen">
      {/* Editorial Hero */}
      <section className="pt-64 pb-48 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <motion.div className="lg:col-span-8" {...slideInUp}>
            <span className="section-label">AI & High-Performance Web</span>
            <h1 className="text-[clamp(4rem,12vw,12rem)] font-serif mb-16 leading-[0.9] gold-text-gradient italic">
              Experience <br /> Excellence.
            </h1>
            <p className="text-luxury-desc max-w-2xl mb-16">
              Mokshika Sharma bridges the gap between machine intelligence and elite web architecture. Crafting high-fidelity digital systems for a smarter world.
            </p>
            <Link href="/projects" className="btn-luxury group">
              View Portfolio
            </Link>
          </motion.div>

          <motion.div
            className="lg:col-span-4 flex flex-col justify-end pb-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="space-y-8 border-l border-white/5 pl-8 italic text-secondary text-sm">
              <p>"Intelligence is not just about the output, it's about the elegance of the architecture."</p>
              <div className="w-12 h-[1px] bg-primary/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="py-48 px-6 max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {navCards.map((card, i) => (
            <Link key={i} href={card.href} className="group">
              <motion.div
                className="card-luxury p-12 h-full flex flex-col justify-between hover-luxury border-white/5 bg-transparent"
              >
                <div>
                  <div className="p-4 bg-primary/5 text-primary rounded-2xl w-fit mb-12 border border-primary/10">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-foreground mb-4 italic group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary opacity-60">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-12 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={20} className="text-primary" />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-64 px-6 border-y border-white/5 bg-surface/30">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...slideInUp}>
            <span className="section-label mx-auto">Philosophy</span>
            <h2 className="text-5xl md:text-8xl font-serif mb-16 italic gold-text-gradient">
              Simplicity is the <br /> ultimate sophistication.
            </h2>
            <p className="text-luxury-desc max-w-2xl mx-auto opacity-70">
              Focusing on clean logic, beautiful interfaces, and robust systems that stand the test of time and scale.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
