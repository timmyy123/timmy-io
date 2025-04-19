"use client";
import React from "react";
import { motion } from "framer-motion";

const Hello = () => {
  return (
    <div className="flex items-center justify-center w-full h-full p-6">
      <div className="space-y-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-amber-800">
            Hello <motion.span 
              animate={{ 
                rotate: [0, 20, 0, 20, 0] 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatDelay: 5
              }}
              className="inline-block"
            >👋</motion.span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-1"
        >
          <p className="text-xl text-amber-700 font-medium">I'm Yuan (Timmy) Qian</p>
          <p className="text-lg text-amber-600">Full Stack Developer</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hello;