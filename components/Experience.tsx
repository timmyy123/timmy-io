"use client";
import React from "react";
import { experience } from "@/assets";
import { ExperienceType } from "@/types";
import { motion } from "framer-motion";
import { Separator } from "./ui/separator";

const Experience = () => {
  return (
    <div className="w-full h-full p-4 overflow-hidden flex flex-col">
      <motion.h2
        className="text-2xl font-bold mb-4 text-amber-800"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      
      <div className="overflow-y-auto pr-2 flex-1">
        {experience.map((exp: ExperienceType, index: number) => (
          <motion.div
            key={`${exp.company}-${index}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-4 last:mb-0"
          >
            <div className="space-y-2">
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-amber-800">{exp.role}</h3>
                <p className="text-sm font-medium text-amber-700">{exp.company}</p>
                <p className="text-xs text-amber-600">{exp.time}</p>
              </div>
              
              <Separator className="bg-amber-200" />
              
              <p className="text-sm text-gray-700 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 