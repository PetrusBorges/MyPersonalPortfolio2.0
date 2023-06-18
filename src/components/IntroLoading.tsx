'use client'

import { FC, useEffect, useState } from 'react'

interface IntroLoadingProps {
  
}

const IntroLoading: FC<IntroLoadingProps> = ({}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const e = () => {
      setIsVisible(true)

      setTimeout(() => {
        setIsVisible(false)
      }, 1000)
    }
    e()
  }, [])

  return (
    <div className={`transition-all duration-500 w-full h-full items-center justify-center bg-black absolute z-50 ${isVisible ? 'flex' : 'hidden' }`}>oi</div>
  )
}

export default IntroLoading