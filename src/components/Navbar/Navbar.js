import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import handleToggle from '../../utils/handleToggle';
import Icon from '../shared/Icon';
import SwitchTransitionWrapper from './SwitchTransitionWrapper';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className='max-w-screen w-full h-14 bg-light dark:bg-dark text-dark/70 dark:text-light/60  lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] flex items-center justify-end fixed top-0'>
      <button
        className='w-10 h-10 rounded flex justify-center items-center bg-light100 dark:bg-dark800 shadow-sm hover:shadow-md hover:text-dark hover:dark:text-light'
        onClick={() => handleToggle(theme, setTheme)}
      >
        <SwitchTransitionWrapper state={theme}>
          <Icon icon={theme} size={24} />
        </SwitchTransitionWrapper>
      </button>

      {/* <div className='sm:col-start-2 sm:col-end-8 md:col-start-3 md:col-end-11 flex justify-between items-center'>
        <ul className='h-full w-full flex items-center text-lg '>
          <NavListItem id='#home' text='Home' />
          <NavListItem id='#about' text='About' />
          <NavListItem id='#projects' text='Projects' />
          <NavListItem id='#contact' text='Contact' />
        </ul>
      </div> */}
    </nav>
  );
};
export default Navbar;
