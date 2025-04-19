"use client";

import { motion } from "framer-motion";
import React from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  fullWidth?: boolean;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  fullWidth = false,
  className = "",
}: FadeInProps) {
  let initial = { opacity: 0 };
  
  if (direction === "up") initial = { ...initial, y: 40 };
  if (direction === "down") initial = { ...initial, y: -40 };
  if (direction === "left") initial = { ...initial, x: 40 };
  if (direction === "right") initial = { ...initial, x: -40 };

  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.21, 0.45, 0.15, 0.95],
        delay: delay * 0.1,
      }}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}