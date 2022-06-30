import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Link = ({ link, icon }) => {
  const icons = {
    github: FiGithub,
    external: FiExternalLink,
  };
  const Icon = icons[icon];
  return (
    <a
      href={link}
      className='w-10 h-10 flex justify-center items-center mr-4 last:mr-0 text-dark/60 dark:text-light/60 hover:text-dark hover:dark:text-light duration-200'
      target='_blank'
      rel='noreferrer'
    >
      <Icon size={28} />
    </a>
  );
};

const ItemInfo = ({ project }) => {
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
  return (
    <div className='h-auto w-full max-w-lg flex flex-col justify-center mt-4 bg-light100/60 dark:bg-dark800/60 rounded-lg mb-4 p-4 sm:p-8'>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='font-josefinSans font-semibold text-xl sm:text-2xl text-left underline underline-offset-2 decoration-accent decoration-4'>
          {text[project].title}
        </h3>
        <div className='flex items-center last:mr-0'>
          <Link link={text[project].github} icon='github' />
          <Link link={text[project].demo} icon='external' />
        </div>
      </div>
      <p className='md:text-lg'>{text[project].desc}</p>
      <p className='text-dark/80 dark:text-light/60 text-sm mt-4'>
        {text[project].stack}
      </p>
    </div>
  );
};
export default ItemInfo;
