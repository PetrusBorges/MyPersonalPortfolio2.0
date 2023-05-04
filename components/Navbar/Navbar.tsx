import { FC } from 'react'

import NavBarIcon from './NavBarIcon'

import { navbarIconMock } from './mock'

interface NavbarProps {
}

const Navbar: FC<NavbarProps> = ({
}) => {
  return (
    <div
      className='
        flex
        items-center
        justify-center
        inset-0
        z-50
      '
    >
      <div
        className='
          bottom-5
          absolute
          border-2
          border-gray-900
          rounded-full
          text-white
          p-1
          flex
          flex-row
          items-center
          justify-center
          gap-2
          bg-black
        '
      >
        {navbarIconMock.map((navbar) => (
          <NavBarIcon
            key={navbar.href}
            href={navbar.href}
            altName={navbar.altName}
            source={navbar.source}
          />
        ))}
      </div>
    </div>
  )
}

export default Navbar
