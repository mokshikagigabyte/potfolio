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

  const navCards = [
    { title: "Profile", icon: <User size={24} />, href: "/about", desc: "Identity & Technical Arsenal" },
    { title: "Projects", icon: <Layers size={24} />, href: "/projects", desc: "Selected Case Studies" },
    { title: "Internship", icon: <Briefcase size={24} />, href: "/experience", desc: "Work & Experience" },
    { title: "Achievements", icon: <Award size={24} />, href: "/achievements", desc: "Verified Accredited Mastery" },
  ];

  return (
    <main className="min-h-screen bg-background selection:bg-accent selection:text-white">
      {/* Hero */}
      <section className="pt-64 pb-32 px-6 max-w-6xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...slideInLeft}>
            <span className="section-label">AI Specialist & Web Architect</span>
            <h1 className="text-8xl md:text-[10rem] font-serif mb-12 leading-[0.8] tracking-tighter text-primary italic">
              Mokshika <br /> <span className="text-accent underline decoration-1 underline-offset-8">Sharma</span>
            </h1>
          </motion.div>

          <motion.div {...slideInRight} className="lg:pt-24">
            <p className="text-2xl md:text-3xl text-secondary mb-12 font-medium leading-[1.6] text-balance">
              Building transformative digital systems where <span className="text-primary italic">Machine Intelligence</span> meets elegant <span className="text-primary italic">Web Performance</span>.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/projects" className="btn-flutter group flex items-center gap-3">
                Explore Work <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation Grid */}
      <section className="py-40 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {navCards.map((card, i) => (
            <Link key={i} href={card.href} className="group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-formal p-10 h-full flex flex-col justify-between hover-flutter border-subtle hover:border-accent group-hover:shadow-2xl transition-all duration-700"
              >
                <div>
                  <div className="p-4 bg-accent-soft text-accent rounded-2xl w-fit mb-8">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 flex items-center justify-between">
                    {card.title}
                  </h3>
                  <p className="text-secondary font-medium leading-[1.6] opacity-70">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
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
