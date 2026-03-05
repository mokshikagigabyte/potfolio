import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mokshika Sharma | AI & Web Developer",
  description: "Professional portfolio of Mokshika Sharma, specializing in Artificial Intelligence and Web Application Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Internship", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/mokshikagigabyte" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/mokshika-sharma" },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans bg-background text-foreground selection:bg-accent selection:text-white">
        <header className="fixed top-0 w-full z-50 px-6 py-8 backdrop-blur-md border-b border-card-border/50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
              MS.
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-widest text-secondary hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </header>

        {children}

        <footer className="py-24 px-6 border-t border-card-border">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-serif italic mb-4">Mokshika Sharma</h2>
              <p className="text-secondary font-medium">AI Specialist & Web Developer</p>
            </div>

            <div className="flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="text-center md:text-right opacity-30 text-[10px] font-bold uppercase tracking-[0.2em]">
              © 2026 Mokshika Sharma — All Rights Reserved
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
