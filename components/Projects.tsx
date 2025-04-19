"use client";
import React from "react";
import { projects } from "@/assets";
import Project from "./Project";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  return (
    <div className="w-full h-full p-4 overflow-hidden flex flex-col">
      <motion.h2
        className="text-2xl font-bold mb-4 text-amber-800"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      
      <div className="relative flex-1">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="h-full"
        >
          <CarouselContent className="h-[calc(100%-5rem)]">
            {projects.map((project, index) => (
              <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3 h-full pl-4">
                <div className="h-full pb-4">
                  <div className="h-[400px]"> {/* Fixed height container */}
                    <Project project={project} />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2 py-2">
            <CarouselPrevious className="relative static transform-none mx-1 bg-white/80 border-amber-200 text-amber-800 hover:bg-amber-100 hover:text-amber-900" />
            <CarouselNext className="relative static transform-none mx-1 bg-white/80 border-amber-200 text-amber-800 hover:bg-amber-100 hover:text-amber-900" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
