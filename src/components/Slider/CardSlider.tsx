'use client'

import { FC } from 'react'
import { useRouter } from 'next/navigation';

import Image from 'next/image'

interface CardSliderProps {
  href: string;
}

const CardSlider: FC<CardSliderProps> = ({
  href
}) => {
  const router = useRouter()

  return (
    <button 
      onClick={() => router.push('/projects')} 
      className='flex items-center justify-center w-full h-full rounded-lg transition-all duration-500 grayscale hover:grayscale-0'
    >
      <Image 
        src={href}
        alt='cardSliderIcon'
        width={500}
        height={500}
        className='rounded-lg'
      />
    </button>
  )
}

export default CardSlider