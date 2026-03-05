import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "ScriptSheetAI – AI-Powered Sheet Generator",
      desc: "An AI-powered tool that generates structured sheets from text or data using OCR and LLMs.",
      tech: ["Python", "OpenCV", "Tesseract", "Flask", "MongoDB"],
      category: "AI & Automation"
    },
    {
      title: "ShopEasy – E-commerce Website",
      desc: "Full-stack online shopping platform with product browsing and smooth checkout.",
      tech: ["Node.js", "Express", "MongoDB", "JavaScript"],
      category: "Web Development"
    },
    {
      title: "ChatRoomApp – Real-Time Messaging",
      desc: "Real-time messaging platform allowing multi-user chatrooms and instant communication.",
      tech: ["Python", "Flask", "Socket.IO", "JavaScript"],
      category: "Real-time Apps"
    },
    {
      title: "Nutrition Tracker Web App",
      desc: "Helps users track daily meals, calculate nutrition values, and get recipe suggestions.",
      tech: ["HTML", "CSS", "JavaScript", "Recipes API"],
      category: "Health Tech"
    },
    {
      title: "DSCApp – Daily Task Tracker",
      desc: "Productivity app for students to complete daily tasks and build consistent study habits.",
      tech: ["Flask", "Python", "JavaScript", "HTML/CSS"],
      category: "Productivity"
    }
  ];

  const skills = [
    { name: "Python", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "OpenCV", category: "AI & Vision" },
    { name: "Machine Learning", category: "AI & ML" },
    { name: "FastAPI / Flask", category: "Backend" },
    { name: "Node.js / Express", category: "Backend" },
    { name: "Git & GitHub", category: "Tools" },
    { name: "Problem Solving", category: "Soft Skills" }
  ];

  const certs = [
    "1M1B Virtual Internship Certificate",
    "Deloitte Data Analytics Certificate",
    "Infosys Python Foundation Certificate",
    "AI for Beginners (HP Life)",
    "Google Cloud: Intro to Generative AI",
    "IBM SkillsBuild: AI Agents"
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="inline-block px-4 py-1.5 mb-6 glass rounded-full text-sm font-bold text-primary">
          Computer Science Engineering (AI) Student
        </div>
        <h1 className="text-6xl md:text-8xl font-heading font-extrabold mb-8 leading-tight">
          Mokshika <span className="text-gradient">Sharma</span>
        </h1>
        <p className="text-2xl md:text-3xl font-heading font-semibold text-secondary mb-12">
          AI & Web Application Developer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
            Explore Projects
          </a>
          <a href="#contact" className="px-8 py-4 glass rounded-full font-bold hover:bg-surface transition-colors">
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 grid md:grid-cols-2 gap-16 items-center border-t border-card-border">
        <div>
          <h2 className="text-4xl font-heading font-bold mb-8">About Me</h2>
          <p className="text-xl text-secondary leading-relaxed mb-6">
            I am a passionate and curious Computer Science student specializing in Artificial Intelligence. With hands-on experience in Python and OpenCV, I enjoy building intelligent systems that solve real-world problems.
          </p>
          <p className="text-xl text-secondary leading-relaxed mb-8">
            I thrive in collaborative environments and am always eager to learn, experiment, and contribute to impactful projects that bridge the gap between AI and user experience.
          </p>
          <div className="glass p-8 rounded-3xl border-l-4 border-primary">
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <p className="font-bold text-lg">B.Tech (CSE) in Artificial Intelligence</p>
            <p className="text-secondary mb-2">Mandsaur University, MP</p>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Expected Graduation: 2027</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="glass p-6 rounded-3xl animate-float">
            <div className="text-3xl font-bold text-gradient mb-2">AI</div>
            <p className="text-sm text-secondary font-bold">Specialization</p>
          </div>
          <div className="glass p-6 rounded-3xl" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold text-gradient mb-2">Web</div>
            <p className="text-sm text-secondary font-bold">Development</p>
          </div>
          <div className="col-span-2 glass p-6 rounded-3xl">
            <h4 className="font-bold mb-4 uppercase tracking-widest text-xs">Technical Achievements</h4>
            <ul className="space-y-2">
              {certs.slice(0, 3).map(c => (
                <li key={c} className="text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <h2 className="text-4xl font-heading font-bold mb-16 text-center">Core Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="glass p-8 rounded-3xl hover:border-primary transition-all group hover:-translate-y-2">
              <div className="text-xs font-bold text-primary uppercase mb-2 opacity-50">{skill.category}</div>
              <div className="text-xl font-bold">{skill.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <h2 className="text-4xl font-heading font-bold mb-16">Projects Showcase</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <div key={i} className="group glass rounded-[40px] overflow-hidden p-8 border hover:border-primary transition-all shadow-xl hover:shadow-primary/5">
              <div className="inline-block px-3 py-1 rounded-full bg-surface text-[10px] font-bold uppercase tracking-widest mb-6">
                {p.category}
              </div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{p.title}</h3>
              <p className="text-secondary text-lg mb-8 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="px-4 py-1.5 bg-surface rounded-full text-xs font-semibold">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 bg-surface rounded-[60px] px-8 md:px-16">
        <h2 className="text-4xl font-heading font-bold mb-16">Certs & Badges</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert) => (
            <div key={cert} className="glass dark:bg-black/40 p-6 rounded-3xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                ⭐
              </div>
              <div className="font-semibold leading-snug">{cert}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 text-center border-t border-card-border">
        <h2 className="text-6xl font-heading font-bold mb-8">Let's <span className="text-gradient">Collaborate</span>.</h2>
        <div className="max-w-2xl mx-auto glass p-12 rounded-[50px] shadow-2xl">
          <p className="text-2xl mb-8 font-semibold">Available for AI & Web Development opportunities.</p>
          <div className="space-y-4 mb-12">
            <p className="text-xl font-bold">📍 Mandsaur, MP, India</p>
            <p className="text-xl font-bold">📧 Mokshika470@gmail.com</p>
            <p className="text-xl font-bold">📞 +91 9376445467</p>
          </div>
          <div className="flex justify-center gap-6">
            <a href="mailto:Mokshika470@gmail.com" className="px-10 py-5 bg-foreground text-background rounded-full text-lg font-bold hover:scale-105 transition-transform">
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
