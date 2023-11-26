'use client'

import { useState } from "react";

import ProjectCard from "@/components/ProjectCard";
import { projectsMock } from "./mock";

export default function Projects() {
  const [isVisible, setIsVisible] = useState<string | null>(null)

  const handleOpen = (index: string) => {
    if (isVisible === index) {
      setIsVisible(null)
    } else {
      setIsVisible(index)
    }
  }

  return (
    <section
      className="flex flex-col items-center justify-center gap-1 w-full lg:max-w-3xl px-5 lg:px-0"
    >
      {projectsMock.map((project, index) => (
        <ProjectCard 
          key={project.id}
          projectInfo={project}
          handleOpen={handleOpen}
          isVisible={isVisible}
        />
      ))}
    </section>
  )
}