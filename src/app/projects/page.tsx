'use client'

import ProjectCard from "@/components/ProjectCard";
import { projectsMock } from "./mock";

export default function Projects() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-1 w-full lg:max-w-3xl px-5 lg:px-0"
    >
      {projectsMock.map((project) => (
        <ProjectCard 
          key={project.id}
          projectInfo={project}
        />
      ))}
    </section>
  )
}