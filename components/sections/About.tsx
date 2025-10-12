"use client";

import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, TrendingUp } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        "Master of IT - Monash University (2025)",
        "Bachelor of Applied Physics (2022)",
      ],
    },
    {
      icon: Award,
      title: "Achievements",
      items: [
        "1000+ downloads on LLM Hub",
        "Monash PG Student Choice Award",
      ],
    },
    {
      icon: TrendingUp,
      title: "Focus Areas",
      items: [
        "Full-stack Development",
        "Mobile Applications",
      ],
    },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:64px_64px]" />
      
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
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
            </motion.div>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0.2}>
            <Card className="bg-slate-800/50 border-slate-700 p-8 md:p-12 backdrop-blur-sm mb-12">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
                Highly motivated and results-oriented <span className="text-blue-400 font-semibold">Full Stack Developer</span> specializing in the design and development of dynamic, user-centric applications and scalable solutions for web and mobile platforms.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                Proficient in modern JavaScript frameworks including <span className="text-purple-400 font-medium">Next.js, React.js, and Vue.js</span>, leveraging TypeScript, Tailwind CSS, and Bootstrap to build robust and visually appealing front-ends.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                Experienced in developing high-performance Android and cross-platform mobile applications using <span className="text-blue-400 font-medium">React Native, Expo, Kotlin, and Jetpack Compose</span>.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Possesses a strong back-end foundation with Node.js, Firebase, Supabase, Appwrite, and MongoDB, ensuring efficient server-side functionality. Adept at data visualization (D3.js, R) and data wrangling (Python, R, SQL) to extract insights and build data-driven solutions.
              </p>
            </Card>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <FadeIn key={item.title} delay={0.3 + index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 p-6 backdrop-blur-sm h-full hover:border-blue-500/50 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-500/10 rounded-lg">
                        <item.icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {item.items.map((text, i) => (
                        <li key={i} className="text-slate-400 text-sm leading-relaxed">
                          {text}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

