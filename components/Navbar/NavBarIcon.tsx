import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react'

export interface NavBarIconProps {
  href: string;
  altName: string;
  source:  string;
}

const NavBarIcon: FC<NavBarIconProps> = ({
  href,
  altName,
  source,
}) => {
  return (
    <Link
      href={href}
      className='
        border-2
        border-gray-900
        rounded-full
        p-3
        flex
        items-center
        justify-center
        transition
        hover:scale-110
        hover:border-gray-800
      '
    >
      <Image
        alt={altName}
        width={24}
        height={24}
        src={source}
      />
    </Link>
  )
}

export default NavBarIcon
