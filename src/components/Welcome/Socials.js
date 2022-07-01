import Icon from '../shared/Icon';

const Link = ({ link, children }) => (
  <a
    href={link}
    target='_blank'
    rel='noreferrer'
    className='sm:mx-2 md:mx-3 hover:text-dark hover:dark:text-light duration-200'
  >
    {children}
  </a>
);

const Socials = () => {
  return (
    <div className='flex items-center animate__animated animate__fadeInLeft animate__fast'>
      <div className='w-2/5 sm:w-1/4 h-[1px] bg-dark/60 dark:bg-light/60'></div>
      <div className='flex w-3/5 sm:w-auto sm:ml-4 md:ml-6 justify-around text-dark/60 dark:text-light/60 text-2xl sm:text-[32px]'>
        <Link link='https://github.com/themythia'>
          <Icon icon='github' />
        </Link>
        <Link link='https://www.linkedin.com/in/emiral/'>
          <Icon icon='linkedin' />
        </Link>
        <Link link='mailto:al.emir@outlook.com'>
          <Icon icon='mail' />
        </Link>
      </div>
    </div>
  );
};
export default Socials;
