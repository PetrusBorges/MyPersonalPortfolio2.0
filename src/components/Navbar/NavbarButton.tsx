'use client'

import { FC } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import useSound from 'use-sound';

import Image from 'next/image';

interface NavbarButtonProps {
  src: string;
  href: string;
  isButton?: boolean;
  isAnchor?: boolean;
}

const NavbarButton: FC<NavbarButtonProps> = ({
  src,
  href,
  isButton = false,
  isAnchor = false
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const [play] = useSound('/sound/bite.mp3')

  const handleNavigate = () => {
    play()
    router.push(href)
  }

  return (
    <>
      {isButton && (
        <button
        onClick={handleNavigate}
        className={`flex items-center justify-center rounded-full border-t-2 border-neutral-700 w-12 h-12 duration-500 hover:w-20 hover:h-20 ${pathname === href ? 'bg-neutral-400 border-neutral-200' : 'bg-neutral-800'}`}
      >
        <Image 
          src={src}
          alt='ex'
          width={26}
          height={26}
        />
      </button>
      )}
      {isAnchor && (
        <a
          target='_blank'
          href={href}
          className={`flex items-center justify-center rounded-full border-t-2 border-neutral-700 w-12 h-12 duration-500 hover:w-20 hover:h-20 ${pathname === href ? 'bg-neutral-400 border-neutral-200' : 'bg-neutral-800'}`}
        >
          <Image 
            src={src}
            alt='navbarIcon'
            width={26}
            height={26}
          />
        </a>
      )}
    </>
  )
}

export default NavbarButton