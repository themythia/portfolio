import ToggleSwitch from './ToggleSwitch';
import TransitionWrapper from './TransitionWrapper';

const MobileMenu = ({ showMenu }) => {
  return (
    <TransitionWrapper state={showMenu}>
      <div className='bg-light100 dark:bg-dark800 w-screen h-screen pt-[72px] top-0 fixed z-50 p-4 text-lg '>
        <ul className='flex flex-col gap-y-2 border-b dark:border-light/40 border-dark/40 pb-4'>
          <li className=''>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About Me</a>
          </li>
          <li>
            <a href='#projects'>Featured Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <ul className='pt-4 flex flex-col gap-y-2'>
          <li className='flex justify-between'>
            <label htmlFor='switch'>Dark Mode:</label>
            <ToggleSwitch />
          </li>
        </ul>
      </div>
    </TransitionWrapper>
  );
};
export default MobileMenu;
