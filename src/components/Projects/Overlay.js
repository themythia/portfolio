import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Overlay = ({ project, mobile }) => {
  const text = {
    f1ref: {
      title: 'F1/REF',
      desc: 'A personal project about Formula 1. Check news, race results, team & driver stats and race schedule.',
      stack: ['React, Redux Toolkit, TailwindCSS, Ergast API, Vercel'],
      demo: 'https://f1ref-v2.vercel.app/',
      github: 'https://github.com/themythia/f1ref-v2',
    },
    resonance: {
      title: 'Resonance',
      desc: 'A music streaming app that provides 30 second previews from Spotify Web API. Please check GitHub repository for demo account.',
      stack: ['React, styled-components, Spotify Web API, Vercel'],
      demo: 'https://resonance-zeta.vercel.app/',
      github: 'https://github.com/themythia/resonance',
    },
    trello: {
      title: 'Trello Clone',
      desc: 'Front-end clone of Trello built with React, Redux & React Beautiful DnD.',
      stack: ['React, Redux, react-beautiful-dnd, SASS, Vercel'],
      demo: 'https://trello-clone-delta-fawn.vercel.app/',
      github: 'https://github.com/themythia/trello-clone',
    },
  };

  const mobileClasses = 'h-[250px] w-[calc(100%-32px)] z-10 absolute';

  return (
    <div
      className={`flex flex-col justify-center mt-4 bg-light100/60 dark:bg-dark800/60 rounded-lg mb-4 shadow-md backdrop-blur p-8 ${
        mobile ? mobileClasses : 'h-auto w-full'
      }`}
    >
      <div className='flex justify-between items-baseline'>
        <h3 className='font-josefinSans font-semibold text-xl text-left mb-4 underline underline-offset-2 decoration-accent decoration-4'>
          {text[project].title}
        </h3>
        <div className='flex items-center'>
          <a
            href={text[project].github}
            className='w-10 h-10 flex justify-center items-center mr-4'
            target='_blank'
            rel='noreferrer'
          >
            <FiGithub size={28} />
          </a>
          <a
            href={text[project].demo}
            target='_blank'
            rel='noreferrer'
            className='w-10 h-10 flex justify-center items-center'
          >
            <FiExternalLink size={28} />
          </a>
        </div>
      </div>
      <p>{text[project].desc}</p>
      <p className='text-dark/80 dark:text-light/60 text-sm mt-4'>
        {text[project].stack}
      </p>
    </div>
  );
};
export default Overlay;
