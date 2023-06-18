import NavbarButton from "./NavbarButton"

const Navbar = () => {
  return (
    <nav
      className='shadow-2xl border-2 border-neutral-800 backdrop-blur bg-white/5 flex items-center justify-center gap-1 p-2 rounded-full absolute bottom-7 duration-500 hover:border-transparent'
    >
      <NavbarButton 
        isButton
        src="../assets/icons/homeIcon.svg"
        href='/'
      />
      <NavbarButton 
        isButton
        src="../assets/icons/projectIcon.svg"
        href='/test'
      />
      <NavbarButton 
        isButton
        src="../assets/icons/photoIcon.svg"
        href='/photos'
      />
      <div className="w-[1px] h-10 bg-neutral-800 mx-2" />
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