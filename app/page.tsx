"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Terminal,
  Cpu,
  Globe,
  Award,
  BookOpen,
  ArrowUpRight
} from "lucide-react";

export default function Home() {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/mokshikagigabyte", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/mokshika-sharma", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:mokshika470@gmail.com", label: "Email" }
  ];

  const projects = [
    {
      title: "ScriptSheetAI",
      role: "AI-Powered Sheet Generator",
      desc: "Structured data generation using OCR and LLMs for rapid information organization.",
      tech: ["Python", "OpenCV", "Tesseract", "Flask"],
      category: "AI & Automation",
      icon: <Cpu className="text-accent" />
    },
    {
      title: "ShopEasy",
      role: "E-commerce Platform",
      desc: "Full-stack marketplace with optimized checkout flows and inventory management.",
      tech: ["Node.js", "Express", "MongoDB", "Auth"],
      category: "Web Engineering",
      icon: <Globe className="text-accent" />
    },
    {
      title: "ChatRoomApp",
      role: "Messaging Platform",
      desc: "Instant communication with persistent chatrooms and socket-based updates.",
      tech: ["Flask", "Socket.IO", "React", "State"],
      category: "Real-time",
      icon: <Terminal className="text-accent" />
    },
    {
      title: "Nutrition Tracker",
      role: "Health Web App",
      desc: "A data-driven nutrition tracker with recipe integration and calorie profiling.",
      tech: ["JavaScript", "Recipes API", "CSS3", "HTML5"],
      category: "Health",
      icon: <Award className="text-accent" />
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <main className="min-h-screen bg-background selection:bg-accent selection:text-white">
      {/* Navigation - Minimalist */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg font-bold tracking-tighter"
        >
          MS.
        </motion.div>
        <div className="flex gap-6">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-secondary hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-48 pb-40 px-6 max-w-5xl mx-auto">
        <motion.div {...fadeIn}>
          <span className="section-label mb-4">Available for Opportunities</span>
          <h1 className="text-7xl md:text-9xl font-serif mb-8 leading-[0.85] tracking-tight">
            Mokshika <br /> Sharma
          </h1>
          <p className="text-xl md:text-3xl text-secondary mb-12 max-w-2xl font-medium leading-tight text-balance">
            AI Specialist & Web Developer crafting intelligent, high-performance digital systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-background rounded-full font-bold text-sm"
            >
              Start a Project
            </motion.button>
            <div className="flex items-center gap-2 px-6 py-4 rounded-full border-subtle font-semibold text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              India, GMT+5:30
            </div>
          </div>
        </motion.div>
      </section>

      {/* About & Expertise */}
      <section id="about" className="py-40 px-6 bg-surface">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-16">
          <motion.div className="md:col-span-7" {...fadeIn}>
            <span className="section-label">Identity & Background</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Bridging Machine <br /> Intelligence with Web.
            </h2>
            <p className="text-xl text-secondary leading-relaxed mb-8 font-medium">
              Currently pursuing B.Tech in CSE (AI) at Mandsaur University. I specialize in building functional systems where AI isn't just a buzzword, but a core architectural strength.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="font-bold mb-2">Focus</h4>
                <p className="text-secondary text-sm font-medium">Computer Vision, Machine Learning, Scalable Backend.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Experience</h4>
                <p className="text-secondary text-sm font-medium">5+ Personal Projects, 1M1B Internship, IBM & Google Certified.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:col-span-5 flex flex-col justify-center"
            {...fadeIn}
          >
            <div className="p-8 bg-background border-subtle rounded-2xl shadow-xl">
              <BookOpen className="text-accent mb-6" size={32} />
              <h3 className="text-xl font-bold mb-2">Academic Foundation</h3>
              <p className="font-bold text-sm text-accent mb-4">Mandsaur University — 2027</p>
              <p className="text-sm text-secondary leading-relaxed font-medium">
                Deep-diving into Neural Networks, Data Structures, and Modern Web Architectures.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects - Interactive Grid */}
      <section id="projects" className="py-40 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div {...fadeIn}>
            <span className="section-label">Selected Portfolio</span>
            <h2 className="text-5xl font-bold tracking-tighter">Case Studies</h2>
          </motion.div>
          <motion.p className="text-secondary max-w-xs font-medium text-sm lg:text-right" {...fadeIn}>
            Each project is a unique challenge solved through thoughtful design and robust engineering.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="perspective"
            >
              <motion.div
                whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="card-formal p-10 h-full flex flex-col group preserve-3d"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-surface rounded-xl">
                    {p.icon}
                  </div>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-40 transition-opacity" />
                </div>
                <span className="text-[10px] font-bold text-accent uppercase mb-2 tracking-widest">{p.category}</span>
                <h3 className="text-2xl font-bold mb-1">{p.title}</h3>
                <p className="text-sm font-semibold opacity-40 mb-6">{p.role}</p>
                <p className="text-secondary mb-10 flex-grow font-medium text-sm leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-card-border/50">
                  {p.tech.map(t => (
                    <span key={t} className="text-[9px] font-bold px-2 py-1 bg-surface rounded uppercase opacity-60">{t}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills & Certifications */}
      <section className="py-40 px-6 bg-primary text-background">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-20">
          <motion.div {...fadeIn}>
            <span className="text-accent font-bold text-[10px] uppercase tracking-widest mb-4 block">Competencies</span>
            <h2 className="text-5xl font-bold mb-10 leading-tight tracking-tight">The Technical <br /> Arsenal.</h2>
            <div className="space-y-4">
              {["Python / OpenCV", "Machine Learning", "FastAPI / Auth", "React / Next.js", "MongoDB / SQL"].map(s => (
                <div key={s} className="flex items-center justify-between py-5 border-b border-background/10 group cursor-default">
                  <span className="text-2xl font-bold group-hover:text-accent transition-colors">{s}</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(dot => (
                      <div key={dot} className={`w-1.5 h-1.5 rounded-full ${dot < 5 ? 'bg-accent' : 'bg-background/20'}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeIn}>
            <span className="text-accent font-bold text-[10px] uppercase tracking-widest mb-4 block">Verified Expertise</span>
            <h2 className="text-5xl font-bold mb-10 leading-tight tracking-tight">Accredited <br /> Mastery.</h2>
            <div className="grid gap-4">
              {[
                "IBM SkillsBuild: AI Agents",
                "Google Cloud: Generative AI",
                "Deloitte: Data Analytics Certification",
                "Infosys: Python Foundation",
                "1M1B Virtual Internship"
              ].map(c => (
                <div key={c} className="p-6 bg-background/5 border border-background/10 rounded-2xl flex items-center justify-between hover:bg-background/10 transition-colors">
                  <p className="font-bold">{c}</p>
                  <Award size={18} className="text-accent" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Contact */}
      <footer id="contact" className="py-48 px-6 text-center">
        <motion.div className="max-w-2xl mx-auto" {...fadeIn}>
          <h2 className="text-6xl md:text-8xl font-serif mb-12 tracking-tighter">Let's build <br /> together.</h2>
          <div className="flex justify-center gap-8 mb-16">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                whileHover={{ scale: 1.2, color: "var(--accent)" }}
                className="p-5 border-subtle rounded-full text-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          <p className="font-bold text-lg mb-2">mokshika470@gmail.com</p>
          <p className="text-secondary font-medium">+91 9376445467</p>
          <div className="mt-32 opacity-20 text-[10px] font-bold uppercase tracking-[0.5em]">
            © 2026 Mokshika Sharma — Built with Next.js & Framer Motion
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
