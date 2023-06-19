'use client'

import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-2 w-full lg:max-w-3xl px-5 lg:px-0"
    >
      <ProjectCard 
        onClick={() => {}}
        titile="Project"
        subtitle="text"
        year="2021"
      />
      <ProjectCard 
        onClick={() => {}}
        titile="Project"
        subtitle="text"
        year="2021"
      />
      <ProjectCard 
        onClick={() => {}}
        titile="Project"
        subtitle="text"
        year="2021"
      />
      <ProjectCard 
        onClick={() => {}}
        titile="Project"
        subtitle="text"
        year="2021"
      />
      <ProjectCard 
        onClick={() => {}}
        titile="Project"
        subtitle="text"
        year="2021"
      />
    </section>
  )
}