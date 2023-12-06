'use client'

import { useEffect, useState } from "react"

import Image from "next/image"

import Slider from "@/components/Slider"

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isBrazil, setIsBrazil] = useState<boolean>(true)

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
        className={`hidden xl:flex items-center justify-center w-full h-full px-10 mb-10 transition-all duration-500 ${
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
        <div className="flex items-center justify-center gap-5 mb-5 p-2">
          <Image
            src='/assets/images/iconPetrus.png'
            alt='iconPetrus'
            width={80}
            height={80}
            className="rounded-full border-2 border-neutral-700"
          />
          <div className="flex flex-col">
            <div className="flex items-center justify-start gap-1">
              <p className="text-neutral-500 font-bold">Petrus Borges.</p>
              <Image
                src='/assets/icons/startIcon.svg'
                alt='iconPetrus'
                width={22}
                height={22}
              />
            </div>
            <div className="flex items-start justify-center flex-col lg:flex-row lg:items-center gap-2">
              <p className="text-neutral-500 text-xs lg:text-sm">
                {isBrazil ? 'Desenvolvedor Front End | Desenvolvedor Full Stack' : 'Front End Developer | Full Stack Developer'}
              </p>
              <div className="flex items-center justify-center gap-2">
                <button onClick={() => setIsBrazil(true)}>
                  <Image
                    width={20}
                    height={20}
                    src='/assets/icons/brazil.svg'
                    alt="flag brazil"
                  />
                </button>
                <button onClick={() => setIsBrazil(false)}>
                  <Image
                    width={20}
                    height={20}
                    src='/assets/icons/eua.svg'
                    alt="flag united states"
                  />
                </button>
              </div>
              <a href="/assets/curriculum/curriculum.pdf" download='Currículo PETRUS BORGES MACHADO' className="flex items-center justify-center text-neutral-500 border-b-2 transition-all duration-500 border-neutral-700 animate-pulse text-xs lg:text-sm">
                {isBrazil ? 'Meu CV' : 'My CV'}
                <Image
                  src='/assets/icons/arrowLinkIcon.svg'
                  alt='iconPetrus'
                  width={17}
                  height={17}
                />
              </a>
            </div>
          </div>
        </div>
        <p className="text-justify p-2">
        {
          isBrazil ?
          'Desenvolvedor Front End e Full Stack com 1 ano de experiência na criação de aplicativos móveis e software. Contribuí ativamente no desenvolvimento de mais de 13 aplicações web como Front End utilizando tecnologias como React, Vue.js e NestJS. Além disso, tive a oportunidade de participar da criação de 7 aplicativos móveis utilizando React Native. Trabalhei em projetos de sistemas web e mobile para empresas no Brasil como Eldorado Prime, Xerife do Carro, Global SCM e Estados Unidos como HomeShine.'
          : 'Front End and Full Stack Developer with 1 year of experience creating mobile applications and software. I actively contributed to the development of more than 13 web applications as Front End using technologies such as React, Vue.js and NestJS. Furthermore, I had the opportunity to participate in the creation of 7 mobile applications using React Native. I worked on web and mobile systems projects for companies in Brazil such as Eldorado Prime, Xerife do Carro, Global SCM and the United States such as HomeShine.'
        }
        </p>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/bluelogic-sistemas-e-consultoria/"
          className="flex items-center justify-center gap-1 text-neutral-500 border-b-2 border-transparent transition-all duration-500 hover:border-neutral-700 animate-pulse p-2 text-xs"
        >
          {isBrazil ? 'atualmente trabalhando na Bluelogic Sistemas' : 'currently working at Bluelogic Sistemas'}
          <Image
            src='/assets/icons/arrowLinkIcon.svg'
            alt='iconPetrus'
            width={17}
            height={17}
          />
        </a>
      </section>
    </section>
  )
}
