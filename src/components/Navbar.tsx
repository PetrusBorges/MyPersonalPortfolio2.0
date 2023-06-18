import NavbarButton from './NavbarButton'

const Navbar = () => {
  return (
    <nav
      className='border-2 border-neutral-900 flex items-center justify-center gap-1 p-2 rounded-full absolute bottom-5 duration-500 hover:border-transparent'
    >
      <NavbarButton 
        src="../assets/icons/homeIcon.svg"
        href='/'
      />
      <NavbarButton 
        src="../assets/icons/projectIcon.svg"
        href='/test'
      />
      <NavbarButton 
        src="../assets/icons/photoIcon.svg"
        href='/x'
      />
      <NavbarButton 
        src="../assets/icons/twitterIcon.svg"
        href='/a'
      />
      <NavbarButton 
        src="../assets/icons/mailIcon.svg"
        href='/v'
      />
      <NavbarButton 
        src="../assets/icons/gitIcon.svg"
        href='/b'
      />
    </nav>
  )
}

export default Navbar