"use client";

import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/assets";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
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
                Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Professional journey and contributions
              </p>
            </motion.div>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <FadeIn key={index} delay={0.2}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ x: 8 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 p-8 backdrop-blur-sm hover:border-blue-500/50 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-500/10 rounded-lg shrink-0">
                        <Briefcase className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-xl text-blue-400 mb-2">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-slate-700/50 border-slate-600 text-slate-300 w-fit"
                    >
                      <Calendar className="h-3 w-3 mr-2" />
                      {exp.time}
                    </Badge>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </Card>
              </motion.div>
            </FadeIn>
          ))}

          {/* Timeline decoration */}
          <div className="absolute left-6 md:left-12 top-32 bottom-32 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent hidden lg:block" />
        </div>
      </div>
    </section>
  );
}

