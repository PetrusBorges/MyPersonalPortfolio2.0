'use client'

import { useCallback, useState } from 'react'

import Image from "next/image";
import Link from "next/link";

const InitialPage = () => {
  const [hover, setHover] = useState({
    about: false,
    work: false,
    contact: false,
  })

  const handleHover = useCallback((key: string, value: boolean) => {
    setHover((prevState) => ({
      ...prevState,
      [key]: value
    }))
  }, [])

  return (
    <>
      <div
        className="
        w-full
        h-full
        top-0
        left-0
        overflow-hidden
        -z-10
        fixed
        "
      >
        <Image
          className="
            w-full
            h-full
            object-cover
          "
          alt="InitalPage"
          height='100'
          width='100'
          src='/images/initialPage.svg'
        />
      </div>
      <div
        className="
          fixed
          top-1/3
          left-1/3
          transform
          -translate-x-16
          sm:-translate-x-32
          md:-translate-x-52
          lg:-translate-x-64
          -translate-y-10
          flex
          flex-col
          items-start
          justify-center
          text-7xl
          md:text-8xl
          lg:text-9xl
        "
      >
        <Link
          href='/about'
          className="
          text-white
          font-medium
          transition
          hover:translate-x-9
          animated-move-in-slow-1
        "
          onMouseOver={() => handleHover('about', true)}
          onMouseOut={() => handleHover('about', false)}
        >
          {hover.about ? 'About' : 'Hello.'}
        </Link>
        <Link
          href='/work'
          className="
          text-white
          font-medium
          transition
          hover:translate-x-9
          animated-move-in-slow-2
          opacity-0
        "
          onMouseOver={() => handleHover('work', true)}
          onMouseOut={() => handleHover('work', false)}
        >
          {hover.work ? 'Work' : 'I am'}
        </Link>
        <Link
          href='/contact'
          className="
          bg-gradient-to-br from-cyan-500 to-purple-500
          bg-clip-text text-transparent
          font-medium
          transition
          hover:translate-x-9
          animated-move-in-slow-3
          opacity-0
        "
          onMouseOver={() => handleHover('contact', true)}
          onMouseOut={() => handleHover('contact', false)}
        >
          {hover.contact ? 'Contact' : 'Petrus'}
        </Link>
      </div>
    </>
  );
};

export default InitialPage;
