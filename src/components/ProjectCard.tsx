import { FC } from 'react'

interface ProjectCardProps {
  year: string;
  titile: string;
  subtitle: string;
  onClick: () => void;
}

const ProjectCard: FC<ProjectCardProps> = ({
  year,
  titile,
  subtitle,
  onClick
}) => {
  return (
    <button 
      onClick={onClick}
      className='flex items-center justify-start transition-all duration-500 hover:bg-neutral-800 w-full px-2 py-3 rounded-xl gap-2'
    >
      {titile}
      <span className='text-gray-500 text-xs'>{subtitle}</span>
      <div className='w-full h-[1px] bg-neutral-700' />
      <span className='text-gray-500 text-xs'>{year}</span>
    </button>
  )
}

export default ProjectCard