"use client";

import { motion } from "framer-motion";
import { Github, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
              Timmy Qian
            </h3>
            <p className="text-slate-400 text-sm">
              Full Stack Developer & Mobile Specialist
            </p>
          </motion.div>

          {/* Center - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-6 text-sm"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Projects
            </button>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Resume
            </a>
            <a
              href="mailto:timmyy32123@outlook.com"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            <motion.a
              href="https://github.com/timmyy123"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-5 w-5 text-slate-300" />
            </motion.a>
            <motion.a
              href="mailto:timmyy32123@outlook.com"
              className="p-2 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5 text-slate-300" />
            </motion.a>
            <motion.a
              href="https://timmy-io.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="h-5 w-5 text-slate-300" />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom - Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-slate-800 text-center"
        >
          <p className="text-slate-500 text-sm">
            © {currentYear} Timmy Qian. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

