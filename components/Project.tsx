import { ProjectType } from "@/types";
import Image from "next/image";
import React from "react";
import Skill from "./Skill";

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <a
      className="card-top h-full flex-col justify-center items-center gap-2 p-2"
      href={project?.link}
    >
      <h1 className="text-2xl text-center">{project?.title || "Title"}</h1>
      <Image
        src={project?.image}
        alt={project?.title || "Screenshot"}
        className="aspect-16/9 object-cover object-center w-[90%] rounded-2xl"
      />
      <p className="p-2 bg-stone-50 rounded-2xl">{project?.description}</p>
      {project?.stacks.length > 0 && (
        <>
          <h2>Tech Stacks</h2>
          <div className="flex flex-wrap gap-2">
            {project.stacks.map((s) => (
              <Skill skill={s} key={s} />
            ))}
          </div>
        </>
      )}
    </a>
  );
};

export default Project;
