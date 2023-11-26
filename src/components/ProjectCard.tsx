'use client'

import { FC, useState } from 'react'

import Image from 'next/image';

import { ProjectInfoProps } from '@/@types/projectInfo';
interface ProjectCardProps {
  projectInfo: ProjectInfoProps;
  handleOpen: (index: string) => void;
  isVisible: string | null;
}

const ProjectCard: FC<ProjectCardProps> = ({
  projectInfo,
  handleOpen,
  isVisible
}) => {
  return (
    <>
      <button 
        onClick={() => handleOpen(projectInfo.id)}
        className='flex items-center justify-between transition-all duration-500 hover:bg-neutral-800 w-full px-3 py-3 rounded-xl gap-2'
      >
        <div className='flex items-center justify-between gap-2 w-52'>
          {projectInfo.title}
          <span className='text-gray-500 text-xs'>{projectInfo.subtitle}</span>
        </div>
        <div className='w-[500px] h-[2px] bg-neutral-700' />
        <span className='text-gray-500 text-xs'>{projectInfo.year}</span>
      </button>

      <div 
        className={`rounded-lg w-full bg-neutral-800 transition-all duration-500 flex flex-col gap-2 items-center justify-start ${ isVisible === projectInfo.id ? 'visible opacity-100 h-[500px]' : 'invisible opacity-0 h-0' }`}
      >
        <div className='w-full h-72'>
          <Image 
            src={projectInfo.href}
            alt='ProjectImage'
            width={800}
            height={800}
            className='w-full h-full object-cover  rounded-t-lg'
          />
        </div>

        <p className='h-full w-full break-words px-3'>
          {projectInfo.description}
        </p>

        <div className='w-full flex items-center justify-end gap-3 pr-2 py-2 border-t-2 border-[#363636]'>
          <a
            target='_blank'
            href={projectInfo.githubLink}
          >
            <Image 
              src='/assets/icons/linkIcon.svg'
              alt='ProjectImage'
              width={26}
              height={26}
            />
          </a>
          <a
            target='_blank'
            href={projectInfo.githubLink}
          >
            <Image 
              src='/assets/icons/gitIcon.svg'
              alt='ProjectImage'
              width={26}
              height={26}
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default ProjectCard