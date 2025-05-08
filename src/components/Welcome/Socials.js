import Icon from '../shared/Icon';
import Link from '../shared/Link';

const Socials = () => {
  return (
    <div className='flex items-center animate__animated animate__fadeInLeft animate__fast'>
      <div className='w-2/5 sm:w-1/4 h-[1px] bg-dark/60 dark:bg-light/60'></div>
      <div className='flex w-3/5 sm:w-auto sm:ml-4 md:ml-6 justify-around text-dark/60 dark:text-light/60 text-2xl sm:text-[32px]'>
        <Link
          type='social'
          link='https://github.com/themythia'
          label='My Github Profile'
        >
          <Icon icon='github' />
        </Link>
        <Link
          type='social'
          link='https://www.linkedin.com/in/emiral/'
          label='My LinkedIn Profile'
        >
          <Icon icon='linkedin' />
        </Link>
        <Link
          type='social'
          link='mailto:al.emir@outlook.com'
          label='Send me a mail'
        >
          <Icon icon='mail' />
        </Link>
      </div>
    </div>
  );
};
export default Socials;
