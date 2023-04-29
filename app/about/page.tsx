'use client'

/* eslint-disable react/no-unescaped-entities */
import { useCallback, useState } from 'react'
import Link from "next/link";

const About = () => {
  const [language, setLanguage] = useState(false)

  const handleLanguage = useCallback(() => {
    setLanguage(prevState => !prevState)
  }, [])

  return (
    <>
      <Link
        href='/'
        className="
          text-white
          fixed
          top-44
          right-5
          font-bold
          text-xl
        "
      >
        petrus.
      </Link>
      <button
        onClick={handleLanguage}
        type="button"
        className="
          text-white
          fixed
          top-56
          right-5
          text-sm
        "
      >
        {language ? 'Inglês' : 'Português'}
      </button>
      <div
        className="
          flex
          flex-col
          items-start
          justify-center
          bg-black
          min-h-screen
          pl-10
        "
      >
        <h1 className="
          text-white
          text-4xl
          md:text-6xl
          lg:text-6xl
          xl:text-9xl
          mt-40
          mb-32
        "
        >
          {language ? 'Eu projeto e construo produtos digitais' : 'I design and build digital products'}
        </h1>
        <h2
          className="
            text-2xl
            md:text-3xl
            lg:text-5xl
            font-bold
            text-white
            mb-8
          "
        >
          {language ? 'Sobre' : 'About' }
        </h2>
        <div
          className="
          text-white
            text-lg
            flex
            flex-col
            items-start
            justify-center
            text-justify
            gap-8
            w-2/3
            xl:w-2/4
            pb-10
          "
        >
          <p>
            {
              language
                ? 'Olá, sou o Dejan. Sou um ser humano multi-talentoso com mais de 10 anos de experiência em uma ampla gama de disciplinas de design.'
                : 'Hi, Im Dejan. Im a multi-talented human with over 10+ years of experiences in wide range of design disciplines.'
            }
          </p>
          <p>
            {
              language
                ? 'Você também pode me chamar de designer de produto, designer de experiência, interação, UI, UX ou por qualquer outro título de função definido pelo mercado. Também sou um criador multidisciplinar com mais de 10 anos de experiência em uma ampla gama de disciplinas de design, gerente, consultor, empresário, desenvolvedor front-end, entusiasta da música, viajante, fotógrafo e muito mais.'
                : 'You can also call me a product designer, experience designer, interaction, UI, UX or by any other market defined function-title. Im also a multi-disciplinary maker with over 10 years of experiences in wide range of design disciplines, manager, advisor, entrepreneur, front-end developer, music enthusiast, traveler, photographer and more.'
            }
          </p>
          <p>
            {
              language
                ? 'Não gosto de me definir pelo trabalho que fiz. Eu me defino pelo trabalho que quero fazer. As habilidades podem ser ensinadas, a personalidade é inerente. Prefiro continuar aprendendo, continuar me desafiando e fazer coisas interessantes que importam.'
                : 'I dont like to define myself by the work Ive done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.'
            }
          </p>
          <p>
            {
              language
                ? 'Alimentado por altos níveis de energia e entusiasmo sem limites, sou facilmente inspirado e mais do que disposto a seguir meus fascínios onde quer que eles me levem. Sou um espírito apaixonado, expressivo e multitalentoso com uma habilidade natural para entreter e inspirar. Nunca estou satisfeito em apenas ter ideias. Em vez disso, tenho uma necessidade quase impulsiva de agir sobre eles.'
                : 'Fueled by high energy levels and boundless enthusiasm, Im easily inspired and more then willing to follow my fascinations wherever they take me. Im passionate, expressive, multi-talented spirit with a natural ability to entertain and inspire. Im never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them.'
            }
          </p>
          <p>
            {
              language
                ? 'Minha energia abundante me alimenta na busca de muitos interesses, hobbies, áreas de estudo e empreendimentos artísticos. Aprendo rápido, capaz de adquirir novas habilidades e fazer malabarismos com diferentes projetos e funções com relativa facilidade.'
                : 'My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavors. Im a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.'
            }
          </p>
          <p>
            {
              language
                ? 'Gosto de desenvolver conhecimentos em diversas áreas ao longo da minha vida e carreira. Meu tipo de personalidade é ENTJ. Atualmente trabalho remotamente com uma base selecionada de clientes freelancers e estou aberto a novas oportunidades.'
                : 'I like to develop expertise in a number of areas over the course of my life and career. My personality type is ENTJ. I currently work remotely with a selected freelance client base and are open for new opportunities.'
            }
          </p>
          <p>
            {
              language
                ? 'Você pode ler mais sobre minha biografia, experiência, habilidades, educação e muito mais no PDF anexado abaixo:'
                : 'You can read more about my biography, experience, skills, education and much more in the PDF attached bellow:'
            }
          </p>
          <Link
            href='https://drive.google.com/file/d/1P9NRyhs-6wC_Mbp599I_etC4X3t4zSA4/view'
            target="_blank"
            className="
              text-red-500
            "
          >
            Curriculum.
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
