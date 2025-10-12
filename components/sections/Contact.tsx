"use client";

import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, ExternalLink, Download } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "0433837313",
      href: "tel:0433837313",
    },
    {
      icon: Mail,
      label: "Email",
      value: "timmyy32123@outlook.com",
      href: "mailto:timmyy32123@outlook.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/timmyy123",
      href: "https://github.com/timmyy123",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:64px_64px]" />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
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
                Let's Connect
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities
              </p>
            </motion.div>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <FadeIn key={contact.label} delay={0.2 + index * 0.1}>
                <motion.a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all cursor-pointer h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 bg-blue-500/10 rounded-lg mb-4">
                        <contact.icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {contact.label}
                      </h3>
                      <p className="text-slate-400 text-sm break-all">
                        {contact.value}
                      </p>
                    </div>
                  </Card>
                </motion.a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <Card className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 border-blue-500/30 p-8 md:p-12 backdrop-blur-sm text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to start a project?
              </h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Whether you're looking for a full-stack developer, mobile app specialist, or need help with data visualization, I'd love to hear from you!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 group"
                    onClick={() => window.location.href = 'mailto:timmyy32123@outlook.com'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-600 bg-slate-800/80 text-white hover:bg-slate-700 hover:border-slate-500 shadow-lg group"
                    onClick={() => window.open('/Resume.pdf', '_blank')}
                  >
                    <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                    Download Resume
                  </Button>
                </motion.div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

