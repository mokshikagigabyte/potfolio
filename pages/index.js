import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center h-[70vh]"
      >
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Mokshika Sharma</h2>
        <p className="text-lg text-gray-300 mb-6">
          A passionate developer building modern web experiences.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-2 bg-blue-500 rounded-lg shadow-lg"
        >
          View My Work
        </motion.button>
      </motion.section>

      {/* About Section */}
      <section id="about" className="p-10">
        <h3 className="text-3xl font-semibold mb-6">About Me</h3>
        <p className="text-gray-300">
          I specialize in creating responsive, animated websites using Next.js, TailwindCSS, and Framer Motion.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-10">
        <h3 className="text-3xl font-semibold mb-6">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h4 className="text-xl font-bold">Contact Manager App</h4>
            <p className="text-gray-400">A Flutter-based mobile application that allows users to add, update, delete, and manage contacts efficiently. The app focuses on clean UI design and smooth API-based data handling.

Problem Solved:
Managing contacts manually can be inefficient and unorganized. This app provides a structured and digital way to store and manage contact information.

Technologies Used:
Flutter, Dart, REST API, Firebase

Key Learnings:
API integration, state management basics, UI/UX practices, real-world app structure.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h4 className="text-xl font-bold">ChatRoomApp – Real-Time Messaging Platform</h4>
            <p className="text-gray-400">A real-time chat application that allows multiple users to join chat rooms, send instant messages, and stay connected.

Tech Stack:
Python, Flask, HTML, CSS, JavaScript

What I Worked On:

Real-time message handling

Flask backend for chat logic

Multi-user chatroom functionality

Key Learning:
Real-time communication concepts, Flask backend development</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 bg-gray-800">
        <h3 className="text-3xl font-semibold mb-6">Contact-9376445467</h3>
        <p>Email: <span className="text-blue-400">mokshika470@email.com</span></p>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center bg-gray-900 border-t border-gray-700">
        <p>&copy; 2026 My Portfolio</p>
      </footer>
    </div>
  );
}