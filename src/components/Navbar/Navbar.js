import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import useWindowSize from '../../hooks/useWindowSize';
import handleToggle from '../../utils/handleToggle';
import Icon from '../shared/Icon';
import ListItem from './ListItem';
import NavbarMobile from './mobile/NavbarMobile';
import SwitchTransitionWrapper from './SwitchTransitionWrapper';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { width } = useWindowSize();

  if (width < 600) return <NavbarMobile />;
  else if (width >= 600)
    return (
      <nav className='max-w-screen w-full h-14 bg-light100 dark:bg-dark800 shadow-md justify-center text-dark/70 dark:text-light/60 row-start-1 row-end-2 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 md:gap-x-6'>
        <div className='sm:col-start-2 sm:col-end-8 md:col-start-3 md:col-end-11 flex justify-between items-center'>
          <ul className='h-full w-full flex items-center text-lg '>
            <ListItem id='#home' text='Home' />
            <ListItem id='#about' text='About' />
            <ListItem id='#projects' text='Projects' />
            <ListItem id='#contact' text='Contact' />
          </ul>
          <button
            className='w-10 h-10 rounded flex justify-center items-center bg-light dark:bg-dark shadow-sm hover:shadow-md hover:text-dark hover:dark:text-light'
            onClick={() => handleToggle(theme, setTheme)}
          >
            <SwitchTransitionWrapper
              state={theme}
              enter='animate__animated rotateInReversed animate__faster'
              exit='animate__animated animate__rotateOut animate__faster'
              timeout={500}
            >
              <Icon icon={theme} size={24} />
            </SwitchTransitionWrapper>
          </button>
        </div>
      </nav>
    );
};
export default Navbar;
