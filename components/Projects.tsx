import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "@/assets";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="flex flex-col w-full p-4 items-center">
      <h1 className="text-4xl mb-2">Projects</h1>
      <Carousel className="flex w-[85%] h-full items-center justify-between">
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem className="lg:basis-1/3 md:basis-1/2" key={project.title}>
              <Project project={project}/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Projects;
