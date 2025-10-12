"use client";

import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/assets";
import Image from "next/image";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 opacity-50" />
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
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
      
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                A showcase of my recent work in web and mobile development
              </p>
            </motion.div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -12 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="h-full"
              >
                <Card className="bg-slate-800/50 border-slate-700 overflow-hidden backdrop-blur-sm hover:border-blue-500/50 transition-all h-full flex flex-col group">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Overlay with links */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      className="absolute inset-0 flex items-center justify-center gap-3"
                    >
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit
                      </Button>
                      {project.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-2 border-slate-600 bg-slate-800/90 text-white hover:bg-slate-700 hover:border-slate-500 shadow-md"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      {project.date && (
                        <p className="text-xs text-slate-500 mb-3">
                          {project.date}
                        </p>
                      )}
                      
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {project.metrics && (
                        <div className="flex items-center gap-2 mb-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                          <TrendingUp className="h-4 w-4 text-blue-400 shrink-0" />
                          <p className="text-xs text-blue-300">{project.metrics}</p>
                        </div>
                      )}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-700">
                      {project.stacks.slice(0, 4).map((stack) => (
                        <Badge
                          key={stack}
                          variant="secondary"
                          className="text-xs bg-slate-700/50 hover:bg-slate-600 border-slate-600 text-slate-300"
                        >
                          {stack}
                        </Badge>
                      ))}
                      {project.stacks.length > 4 && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-slate-700/50 border-slate-600 text-slate-400"
                        >
                          +{project.stacks.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* View More on GitHub */}
        <FadeIn delay={0.6}>
          <div className="text-center mt-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-600 bg-slate-800/80 text-white hover:bg-slate-700 hover:border-blue-500 shadow-lg group"
                onClick={() => window.open('https://github.com/timmyy123', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                View More on GitHub
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

