'use client'

import { FC, useState } from 'react'

import Image from 'next/image';

import { ProjectInfoProps } from '@/@types/projectInfo';
interface ProjectCardProps {
  projectInfo: ProjectInfoProps;
}

const ProjectCard: FC<ProjectCardProps> = ({
  projectInfo
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  return (
    <>
      <button 
        onClick={() => setIsVisible((prevState) => !prevState)}
        className='flex items-center justify-start transition-all duration-500 hover:bg-neutral-800 w-full px-2 py-3 rounded-xl gap-2'
      >
        {projectInfo.title}
        <span className='text-gray-500 text-xs'>{projectInfo.subtitle}</span>
        <div className='w-full h-[2px] bg-neutral-700' />
        <span className='text-gray-500 text-xs'>{projectInfo.year}</span>
      </button>

      <div 
        className={`rounded-lg w-full bg-neutral-800 transition-all duration-500 flex flex-col gap-2 items-center justify-start 
        ${
          isVisible ? 'visible opacity-100 h-96' : 'invisible opacity-0 h-0'
        }`}
      >
        <div className='w-full h-36'>
          <Image 
            src={projectInfo.href}
            alt='ProjectImage'
            width={500}
            height={500}
            className='w-full h-full object-cover rounded-t-lg'
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