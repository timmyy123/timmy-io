"use client";
import React from "react";
import { skills } from "@/assets";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 }
};

const Skills = () => {
  return (
    <div className="w-full h-full p-4 overflow-hidden flex flex-col">
      <motion.h2
        className="text-2xl font-bold mb-4 text-amber-800"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      
      <motion.div
        className="overflow-y-auto pr-2 flex flex-wrap gap-2 content-start h-[calc(100%-3rem)]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={item}
            transition={{ duration: 0.3 }}
          >
            <Badge 
              className="bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border-amber-200 hover:from-amber-100 hover:to-amber-200"
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;