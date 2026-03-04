import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mokshika | Portfolio",
  description: "A professional portfolio showcasing creative work and technical expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span className="text-2xl font-heading font-extrabold text-gradient">Mokshika.</span>
            <div className="space-x-8 hidden md:flex font-medium">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="py-12 glass border-t-0 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center text-secondary">
            <p>© {new Date().getFullYear()} Mokshika. Created with ✨</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
