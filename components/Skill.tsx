"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

const Skill = ({ skill }: { skill: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
    >
      <Badge variant="secondary" className="bg-amber-100 hover:bg-amber-200 text-amber-700 border-amber-200">
        {skill}
      </Badge>
    </motion.div>
  );
};

export default Skill;
