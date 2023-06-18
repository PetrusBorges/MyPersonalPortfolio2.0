'use client'

import { FC } from 'react'

import Image from 'next/image'

interface CardSliderProps {
  href: string;
}

const CardSlider: FC<CardSliderProps> = ({
  href
}) => {
  return (
    <button 
      onClick={() => alert('oi')} 
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