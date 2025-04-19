"use client";
import { ProjectType } from "@/types";
import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <motion.div
      className="group relative h-full bg-white/80 rounded-2xl overflow-hidden shadow-sm border border-amber-100 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <Link 
        href={project?.link || "#"} 
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
      >
        <span className="sr-only">View {project?.title}</span>
      </Link>

      {/* Image with gradient overlay - fixed height */}
      <div className="relative h-40 w-full overflow-hidden flex-shrink-0">
        <Image
          src={project?.image}
          alt={project?.title || "Project"}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        
        {/* Title overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-lg font-medium text-white">{project?.title}</p>
        </div>
      </div>
      
      {/* Content - scrollable if needed */}
      <div className="p-4 flex-1 flex flex-col overflow-hidden">
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {project?.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mt-auto relative z-20 pointer-events-none overflow-y-auto max-h-[140px]">
          {project?.stacks?.map((stack) => (
            <Badge 
              key={stack} 
              variant="outline" 
              className="bg-amber-50 text-xs py-0 h-5 text-amber-700 border-amber-200 mb-1.5"
            >
              {stack}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
