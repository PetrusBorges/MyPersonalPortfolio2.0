import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

const Home = () => {

  return (
    <>
      <Image
        src='/images/petrusPhoto.svg'
        alt='Petrus Photo'
        fill
        className='w-full h-full object-cover absolute -z-50'
      />

      <Navbar />
    </>
  );
};

export default Home;
