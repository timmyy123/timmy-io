"use client";

import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/assets";

const categories = {
  "Frontend": ["React.js", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap", "Framer Motion"],
  "Mobile": ["React Native", "Expo", "Jetpack Compose", "Kotlin"],
  "Backend": ["Node.js", "Express.js", "Firebase", "Supabase", "Appwrite", "Mongodb"],
  "Languages": ["Typescript", "Python", "Java", "Kotlin", "R", "SQL"],
  "Data & AI": ["D3.js", "Tableau", "R.shiny", "Google Gemini"],
  "Tools & CMS": ["Sanity.io", "AWS", "Outsystems"],
};

export default function Skills() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 opacity-50" />
      
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
                Skills & Technologies
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                A comprehensive toolkit for building modern, scalable applications
              </p>
            </motion.div>
          </div>
        </FadeIn>

        <div className="max-w-6xl mx-auto space-y-12">
          {Object.entries(categories).map(([category, categorySkills], categoryIndex) => (
            <FadeIn key={category} delay={categoryIndex * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {category}
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill, index) => {
                    const isInSkillsList = skills.includes(skill);
                    if (!isInSkillsList) return null;
                    
                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + index * 0.05,
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <Badge
                          variant="secondary"
                          className="px-4 py-2 text-sm bg-slate-800/50 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white transition-all cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </FadeIn>
          ))}

          {/* Additional skills not categorized */}
          <FadeIn delay={0.6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center pt-8">
                <Badge
                  variant="outline"
                  className="px-6 py-3 text-base bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-blue-500/30 text-blue-400 animate-pulse"
                >
                  I'm learning more...
                </Badge>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

