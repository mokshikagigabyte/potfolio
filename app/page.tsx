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
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
  };

  const navCards = [
    { title: "Profile", icon: <User size={24} />, href: "/about", desc: "Identity & Technical Arsenal" },
    { title: "Projects", icon: <Layers size={24} />, href: "/projects", desc: "Selected Case Studies" },
    { title: "Internship", icon: <Briefcase size={24} />, href: "/experience", desc: "Work & Experience" },
    { title: "Achievements", icon: <Award size={24} />, href: "/achievements", desc: "Verified Accredited Mastery" },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-48 pb-32 px-6 max-w-5xl mx-auto">
        <motion.div {...fadeIn}>
          <span className="section-label mb-4">AI & Web Application Developer</span>
          <h1 className="text-7xl md:text-9xl font-serif mb-8 leading-[0.85] tracking-tight">
            Mokshika <br /> Sharma
          </h1>
          <p className="text-xl md:text-3xl text-secondary mb-12 max-w-2xl font-medium leading-tight text-balance">
            Crafting intelligent systems and high-performance digital experiences at the intersection of AI and Web.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-8 py-4 bg-primary text-background rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Quick Navigation Grid */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {navCards.map((card, i) => (
            <Link key={i} href={card.href} className="group">
              <motion.div
                whileHover={{ y: -8 }}
                className="card-formal p-8 h-full flex flex-col justify-between border-subtle hover:border-accent transition-all duration-500"
              >
                <div>
                  <div className="p-3 bg-surface rounded-xl w-fit mb-6 text-accent">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors flex items-center justify-between">
                    {card.title}
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </h3>
                  <p className="text-sm text-secondary font-medium leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* Featured Insight */}
      <section className="py-40 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <span className="section-label">Identity</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight tracking-tight">
              Pragmatic AI Specialist. <br />
              <span className="text-secondary opacity-40 italic">Focused on Impact.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-16">
              <p className="text-xl text-secondary leading-relaxed font-medium">
                Passionate about building systems that bridge modern AI with functional web architecture. Hands-on experience with OpenCV, Python, and the full web stack.
              </p>
              <div className="flex flex-col justify-end">
                <Link href="/about" className="text-accent font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Read Profile Detail <ArrowUpRight size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
