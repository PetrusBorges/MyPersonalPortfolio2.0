'use client'

import { useEffect, useState } from "react"

import Image from "next/image"

import Slider from "@/components/Slider"

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const showSlider = () => {
      setTimeout(() => {
        setIsVisible(true)
      }, 1000)
    }
    showSlider()
  }, [])

  return (
    <section className="flex flex-col w-full items-center justify-center">
      {/* Section slider */}
      <section
        className={`hidden lg:flex items-center justify-center w-full h-full px-10 mb-10 transition-all duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Slider />
      </section>

      {/* Section info petrus */}
      <section
        className={`flex flex-col items-start justify-center h-full max-w-sm lg:max-w-3xl transition-all duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex items-center justify-center gap-5 mb-5">
          <Image 
            src='/assets/images/iconPetrus.png'
            alt='iconPetrus'
            width={80}
            height={80}
            className="rounded-full border-2 border-neutral-700"
          />
          <div className="flex flex-col">
            <div className="flex items-center justify-start gap-1">
              <p className="text-neutral-500 font-bold">petrus, borges</p>
              <Image 
                src='/assets/icons/startIcon.svg'
                alt='iconPetrus'
                width={22}
                height={22}
              />
            </div>
            <p className="text-neutral-500">Front End | React.js | Vue.js | Nest.js</p>
          </div>
        </div>
        <p className="text-justify">
          Front End Developer with 1 year of experience in creating mobile apps and software. I actively contributed to the development of more than 10 web applications as Front End, using technologies such as React, Vue.js and NestJS. Also, I had the opportunity to participate in the creation of 7 mobile apps using React Native.
          I worked on web and mobile systems projects for companies like Vasco, Eldorado Prime, Xerife do Carro, Bahia APP, Global SCM and Pé de Podologia.
        </p>
        <a 
          target="_blank"
          href="https://www.linkedin.com/company/bluelogic-sistemas-e-consultoria/" 
          className="flex items-center justify-center gap-1 text-neutral-500 border-b-2 border-transparent transition-all duration-500 hover:border-neutral-700 animate-pulse"
        >
          currently working at Bluelogic Sistemas
          <Image 
            src='/assets/icons/arrowLinkIcon.svg'
            alt='iconPetrus'
            width={22}
            height={22}
          />
        </a>
      </section>
    </section>
  )
}
