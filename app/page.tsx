import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center py-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-block px-4 py-1.5 mb-6 glass rounded-full text-sm font-semibold text-primary">
          Available for new opportunities
        </div>
        <h1 className="text-6xl md:text-8xl font-heading font-extrabold mb-8 leading-tight">
          Crafting <span className="text-gradient">Digital</span> <br />
          Experiences
        </h1>
        <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto mb-12">
          I'm Mokshika, a developer focused on building beautiful, functional, and user-centered web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 glass rounded-full font-bold hover:bg-surface transition-colors">
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto py-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-3xl overflow-hidden glass p-2">
          <div className="w-full h-full bg-surface rounded-2xl flex items-center justify-center text-6xl">
            👋
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
        </div>
        <div>
          <h2 className="text-4xl font-heading mb-6">About Me</h2>
          <p className="text-lg text-secondary mb-6 italic">
            "Passionate about creating seamless user experiences and solving complex problems with elegant code."
          </p>
          <p className="text-lg text-secondary mb-8">
            With a strong foundation in modern web technologies, I specialize in building responsive and performant applications that stand out. I believe in clean code, accessible design, and continuous learning.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="glass p-4 rounded-2xl">
              <div className="text-3xl font-bold text-gradient mb-1">3+</div>
              <div className="text-sm text-secondary uppercase tracking-wider font-bold">Years Experience</div>
            </div>
            <div className="glass p-4 rounded-2xl">
              <div className="text-3xl font-bold text-gradient mb-1">50+</div>
              <div className="text-sm text-secondary uppercase tracking-wider font-bold">Projects Built</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto py-32 text-center">
        <h2 className="text-4xl font-heading mb-16">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {['React', 'Next.js', 'Typescript', 'Tailwind', 'Node.js', 'JavaScript'].map((skill) => (
            <div key={skill} className="glass p-6 rounded-2xl hover:border-primary transition-colors group">
              <div className="w-12 h-12 bg-surface rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform"></div>
              <div className="font-semibold">{skill}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto py-32">
        <h2 className="text-4xl font-heading mb-16">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[1, 2].map((i) => (
            <div key={i} className="group relative">
              <div className="aspect-video bg-surface rounded-3xl overflow-hidden glass mb-6 transition-all group-hover:shadow-2xl">
                {/* Image Placeholder */}
              </div>
              <div className="px-2">
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">Web Application</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Project Name {i}</h3>
                <p className="text-secondary mb-6">A brief description of the amazing work done on this project and the challenges solved.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-surface rounded-full text-xs font-medium">Next.js</span>
                  <span className="px-3 py-1 bg-surface rounded-full text-xs font-medium">Tailwind</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto py-32 text-center">
        <h2 className="text-5xl font-heading mb-8">Let's build something <span className="text-gradient">exceptional</span> together.</h2>
        <p className="text-xl text-secondary mb-12">
          Currently open to freelance projects and full-time opportunities.
        </p>
        <a href="mailto:contact@example.com" className="inline-block px-12 py-6 bg-foreground text-background rounded-full text-xl font-bold hover:scale-105 transition-transform">
          Start a Project
        </a>
      </section>
    </main>
  );
}
