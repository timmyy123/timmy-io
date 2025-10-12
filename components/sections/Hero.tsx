"use client";

import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import { photo } from "@/assets";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <FadeIn delay={0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                  Full Stack Developer
                </span>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Timmy Qian
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl">
                Crafting dynamic, user-centric applications for web and mobile platforms
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                Specializing in modern JavaScript frameworks, mobile development, and data visualization. 
                Master's student at Monash University with a passion for building scalable solutions.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 group"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-600 bg-slate-800/80 text-white hover:bg-slate-700 hover:border-slate-500 shadow-lg group"
                  onClick={() => window.open('/Resume.pdf', '_blank')}
                >
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  Resume
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex gap-4 justify-center lg:justify-start pt-4">
                <motion.a
                  href="https://github.com/timmyy123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-5 w-5 text-slate-300" />
                </motion.a>
                <motion.a
                  href="mailto:timmyy32123@outlook.com"
                  className="p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5 text-slate-300" />
                </motion.a>
              </div>
            </FadeIn>
          </div>

          {/* Right image */}
          <FadeIn delay={0.4} className="flex-1 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
                <Image
                  src={photo}
                  alt="Timmy Qian"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-slate-400 rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

