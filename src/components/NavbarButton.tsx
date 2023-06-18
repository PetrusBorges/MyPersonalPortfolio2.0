'use client'

import { FC } from 'react'

import { useRouter, usePathname } from 'next/navigation';

import Image from 'next/image';

interface NavbarButtonProps {
  src: string;
  href: string;
}

const NavbarButton: FC<NavbarButtonProps> = ({
  src,
  href
}) => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <button
      onClick={() => router.push(href)}
      className={`flex items-center justify-center rounded-full hover:bg-neutral-800 w-12 h-12 duration-500 hover:w-20 hover:h-20 ${pathname === href ? 'bg-neutral-400 hover:bg-neutral-300' : 'bg-neutral-900'}`}
    >
      <Image 
        src={src}
        alt='ex'
        width={26}
        height={26}
      />
    </button>
  )
}

export default NavbarButton