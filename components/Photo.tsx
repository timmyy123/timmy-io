"use client";
import React from "react";
import { photo } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-full w-full relative"
    >
      <Image
        src={photo}
        alt="profile photo"
        fill
        priority
        className="object-cover object-center"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-amber-800/30 to-transparent" />
    </motion.div>
  );
};

export default Photo;
