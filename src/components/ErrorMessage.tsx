'use client'

import { FC } from 'react'
import { useRouter } from 'next/navigation'

import Image from 'next/image'
import Button from './Button'

interface ErrorMessageProps {
  
}

const ErrorMessage: FC<ErrorMessageProps> = ({}) => {
  const router = useRouter()

  return (
    <div className='flex items-center flex-col justify-start bg-neutral-900 w-96 h-96 rounded-xl border-2 border-gray-800'>
      <div className='bg-neutral-800 w-full flex items-center justify-center rounded-t-lg h-6 relative'>
        Hello!
        <div className='absolute top-[5px] left-3 flex items-center justify-center gap-2'>
          <div className='bg-neutral-600 rounded-full w-3 h-3' />
          <div className='bg-neutral-600 rounded-full w-3 h-3' />
          <div className='bg-neutral-600 rounded-full w-3 h-3' />
        </div>
      </div>

      <div
        className='flex items-center justify-center flex-col text-center gap-5 w-full h-full px-2'
      >
        <Image 
          src='/assets/icons/errorIcon.svg'
          alt='ErrorIcon'
          width={98}
          height={98}
        />
        <p>This page is under maintenance, please return to the main page!</p>


        <div className='w-36'>
          <Button
            onClick={() => router.push('/')}
          >
            Go Home!
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage