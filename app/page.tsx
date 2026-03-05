import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "ScriptSheetAI",
      role: "AI-Powered Sheet Generator",
      desc: "Structured data generation using OCR and LLMs for rapid information organization.",
      tech: ["Python", "OpenCV", "Tesseract", "Flask"],
      category: "AI & Automation"
    },
    {
      title: "ShopEasy",
      role: "E-commerce Platform",
      desc: "Full-stack marketplace with optimized checkout flows and inventory management.",
      tech: ["Node.js", "Express", "MongoDB", "Auth"],
      category: "Web Engineering"
    },
    {
      title: "ChatRoomApp",
      role: "Messaging Platform",
      desc: "Instant communication with persistent chatrooms and socket-based updates.",
      tech: ["Flask", "Socket.IO", "React", "State"],
      category: "Real-time"
    },
    {
      title: "Nutrition Tracker",
      role: "Health Web App",
      desc: "A data-driven nutrition tracker with recipe integration and calorie profiling.",
      tech: ["JavaScript", "Recipes API", "CSS3", "HTML5"],
      category: "Health"
    }
  ];

  const education = {
    degree: "B.Tech in Computer Science & Engineering (AI)",
    school: "Mandsaur University",
    period: "2023 — 2027",
    details: "Specializing in Intelligent Systems and Machine Learning applications."
  };

  const certifications = [
    "Google Cloud: Generative AI Suite",
    "IBM SkillsBuild: AI Agents Mastery",
    "Deloitte: Data Analytics Certification",
    "Infosys: Python Foundation",
    "1M1B Virtual Internship"
  ];

  return (
    <main className="min-h-screen pt-40 pb-32 px-6 max-w-5xl mx-auto selection:bg-accent selection:text-white">
      {/* Hero */}
      <section className="mb-40">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-balance">
          Mokshika Sharma
        </h1>
        <p className="text-xl md:text-2xl text-secondary mb-10 max-w-2xl font-medium leading-relaxed">
          AI & Web Application Developer. Specializing in intelligent systems and robust digital experiences.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-primary text-background rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border-subtle rounded-lg font-semibold text-sm hover:bg-surface transition-colors">
            Contact
          </a>
        </div>
      </section>

      {/* About & Education */}
      <section id="about" className="grid md:grid-cols-2 gap-20 mb-40 pt-20 border-t border-card-border">
        <div>
          <span className="section-label">Identity</span>
          <h2 className="text-3xl font-bold mb-6">Pragmatic AI Specialist</h2>
          <p className="text-secondary leading-relaxed mb-6 font-medium">
            Passionate about building systems that bridge modern AI with functional web architecture. Hands-on experience with OpenCV, Python, and the full web stack.
          </p>
          <p className="text-secondary leading-relaxed font-medium">
            Thrives in collaborative environments, focusing on solving real-world challenges through elegant, well-documented code and scalable design.
          </p>
        </div>
        <div className="card p-8 bg-surface border-none shadow-sm">
          <span className="section-label">Education</span>
          <h3 className="text-xl font-bold mb-2">{education.degree}</h3>
          <p className="font-semibold text-sm mb-4 opacity-70">{education.school}</p>
          <div className="px-3 py-1 bg-background border-subtle inline-block rounded-md text-[10px] font-bold uppercase mb-4">
            {education.period}
          </div>
          <p className="text-sm text-secondary font-medium">{education.details}</p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-40">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="section-label">Experience</span>
            <h2 className="text-3xl font-bold">Selected Work</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="card p-10 flex flex-col group">
              <span className="text-[10px] font-bold text-accent uppercase mb-4">{p.category}</span>
              <h3 className="text-2xl font-bold mb-1">{p.title}</h3>
              <p className="text-sm font-semibold opacity-50 mb-6">{p.role}</p>
              <p className="text-secondary mb-10 flex-grow leading-relaxed font-medium">{p.desc}</p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-card-border/50">
                {p.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold opacity-60 px-2 py-1 bg-surface rounded uppercase">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Certs */}
      <section className="grid lg:grid-cols-3 gap-16 mb-40">
        <div className="lg:col-span-1">
          <span className="section-label">Competencies</span>
          <h2 className="text-3xl font-bold mb-6">Technical Arsenal</h2>
          <p className="text-secondary font-medium">Core proficiencies in AI, Backend, and Scalable Web Foundations.</p>
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
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-4">Certifications</p>
            {certifications.map(c => (
              <div key={c} className="text-sm font-semibold p-4 bg-surface rounded-xl border border-transparent hover:border-card-border transition-colors">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 text-center border-t border-card-border">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">Let's connect.</h2>
        <div className="max-w-xl mx-auto space-y-6 font-bold text-lg">
          <p className="hover:text-accent transition-colors cursor-pointer">mokshika470@gmail.com</p>
          <p className="opacity-50">+91 9376445467</p>
          <p className="opacity-50">Mandsaur, MP, India</p>
        </div>
      </section>
    </main>
  );
}
