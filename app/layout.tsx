import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Mokshika Sharma | Luxury AI & Web Experience",
  description: "Elite professional portfolio of Mokshika Sharma, specializing in Artificial Intelligence and High-Performance Web Architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/about" },
    { name: "Internship", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans bg-background text-foreground selection:bg-primary selection:text-background">
        <AnimatedBackground />

        <header className="fixed top-0 w-full z-50 px-6 py-10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center border-b border-white/5 pb-6">
            <Link href="/" className="text-2xl font-serif gold-text-gradient tracking-tighter hover:opacity-70 transition-opacity italic">
              MS.
            </Link>

            <nav className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary hover:text-primary transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              <a href="https://github.com/mokshikagigabyte" className="text-secondary hover:text-primary transition-colors"><Github size={18} /></a>
              <a href="https://linkedin.com/in/mokshika-sharma" className="text-secondary hover:text-primary transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>
        </header>

        <div className="relative z-10">
          {children}
        </div>

        <footer className="py-32 px-6 border-t border-white/5 bg-background relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-16">
            <div>
              <h2 className="text-6xl font-serif gold-text-gradient italic mb-6">Mokshika Sharma</h2>
              <p className="text-secondary font-medium tracking-wide uppercase text-xs">AI Specialist & Web Architect</p>
            </div>

            <div className="flex gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[9px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="text-right opacity-20 text-[9px] font-bold uppercase tracking-[0.3em]">
              © 2026 Crafted for Excellence
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
