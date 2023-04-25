/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
        <Link
          href='/'
          className="
            text-white
            fixed
            top-44
            right-72
            transition
            hover:bg-gradient-to-br from-cyan-500 to-purple-500
            hover:bg-clip-text text-transparent
            font-bold
            text-xl
          "
        >
          petrus.
        </Link>
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          bg-black
          min-h-screen
        "
      >
        <h1 className="
          text-white
          text-9xl
          w-[1300px]
          mt-72
          mb-32
        ">
          I design and build digital products
        </h1>
        <div
          className="
            w-3/4
            h-[1000px]
            flex
            flex-col
            items-start
            justify-center
            gap-10
            text-white
          "
        >
          <h2
            className="
              text-6xl
            "
          >About</h2>
          <div
            className="
              text-lg
              flex
              flex-col
              items-start
              justify-center
              text-justify
              gap-3
              w-2/3
            "
          >
            <p>Hi, I’m Dejan. I'm a multi-talented human with over 10+ years of experiences in wide range of design disciplines.</p>
            <p>
              You can also call me a product designer, experience designer, interaction, UI, UX or by any other market defined function-title. I'm also a multi-disciplinary maker with over 10 years of experiences in wide range of design disciplines, manager, advisor, entrepreneur, front-end developer, music enthusiast, traveler, photographer and more.
            </p>
            <p>
            I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
            </p>
            <p>
            Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more then willing to follow my fascinations wherever they take me. I’m passionate, expressive, multi-talented spirit with a natural ability to entertain and inspire. I’m never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them.
            </p>
            <p>
            My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavors. I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.
            </p>
            <p>
            I like to develop expertise in a number of areas over the course of my life and career. My personality type is ENTJ. I currently work remotely with a selected freelance client base and are open for new opportunities.
            </p>
            <p>
            You can read more about my biography, experience, skills, education and much more in the PDF attached bellow:
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
