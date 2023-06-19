import NavbarButton from "./NavbarButton"

const Navbar = () => {
  return (
    <nav
      className='border-2 border-neutral-700 hover:border-transparent flex items-center justify-center gap-1 p-1 rounded-full absolute bottom-7 duration-500'
    >
      <NavbarButton 
        isButton
        src="../assets/icons/homeIcon.svg"
        href='/'
      />
      <NavbarButton 
        isButton
        src="../assets/icons/projectIcon.svg"
        href='/projects'
      />
      <NavbarButton 
        isButton
        src="../assets/icons/photoIcon.svg"
        href='/photos'
      />
      <div className="w-[1px] h-10 bg-neutral-800 mx-1" />
      <NavbarButton 
        isButton
        src="../assets/icons/mailIcon.svg"
        href='mailto:contatopetrusborges@gmail.com'
      />
      <NavbarButton 
        isAnchor
        src="../assets/icons/linkedinIcon.svg"
        href='https://www.linkedin.com/in/petrusborgesmachado/'
      />
      <NavbarButton 
        isAnchor
        src="../assets/icons/twitterIcon.svg"
        href='https://twitter.com/PetrusBorges_'
      />
      <NavbarButton 
        isAnchor
        src="../assets/icons/gitIcon.svg"
        href='https://github.com/PetrusBorges'
      />
    </nav>
  )
}

export default Navbar