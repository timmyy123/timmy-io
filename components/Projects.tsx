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
    <div className="flex justify-center items-center w-full h-full">
      <Carousel className="">
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem className="basis-1/3" key={project.title}>
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
