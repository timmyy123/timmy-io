"use client";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Info = () => {
  return (
    <div className="h-full w-full p-6 flex flex-col sm:flex-row">
      {/* Left column */}
      <motion.div 
        className="flex flex-col justify-center space-y-6 w-full sm:w-1/2"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold text-amber-800 mb-2">Education</h2>
          <div className="pl-1 border-l-2 border-amber-200 space-y-0.5">
            <p className="font-medium">Master of Information Technology</p>
            <p className="text-sm text-amber-700">Monash University, AU</p>
            <p className="text-xs text-amber-600">Jul 2023 - Jul 2025</p>
          </div>
        </motion.div>

        <Separator className="bg-amber-200" />
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold text-amber-800 mb-2">Contact</h2>
          <div className="pl-1 border-l-2 border-amber-200 space-y-2">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-amber-600" size={14} />
              <p className="text-sm">+61 433837313</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-amber-600" size={14} />
              <p className="text-sm">timmyy32123@outlook.com</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right column */}
      <motion.div 
        className="flex flex-col justify-center items-center gap-6 w-full sm:w-1/2 mt-6 sm:mt-0"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-amber-300 bg-gradient-to-r from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 text-amber-700 font-medium shadow-sm"
          >
            <a href="/Resume.pdf" className="flex items-center gap-2 px-6">
              <FiDownload size={16} />
              <span>Download Resume</span>
            </a>
          </Button>
        </motion.div>
        
        <div className="flex justify-center items-center gap-8">
          <motion.a 
            href="https://github.com/timmyy123" 
            className="bg-amber-100 p-3 rounded-full text-amber-700 hover:text-amber-900 hover:bg-amber-200 transition-colors"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/timmy-qian-37b4862b0/" 
            className="bg-amber-100 p-3 rounded-full text-amber-700 hover:text-amber-900 hover:bg-amber-200 transition-colors"
            whileHover={{ scale: 1.1, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
