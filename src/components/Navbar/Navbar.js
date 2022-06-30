import { useContext } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import ThemeContext from '../../contexts/ThemeContext';
import useWindowSize from '../../hooks/useWindowSize';
import ListItem from './ListItem';
import NavbarMobile from './mobile/NavbarMobile';
import SwitchTransitionWrapper from './SwitchTransitionWrapper';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { width } = useWindowSize();

  const icons = {
    dark: MdLightMode,
    light: MdDarkMode,
  };
  const Icon = icons[theme];

  const style = {
    nav: 'max-w-screen w-full h-14 bg-light100 dark:bg-dark800 shadow-md flex justify-center text-dark/70 dark:text-light/60 row-start-1 row-end-2',
    ul: 'h-full w-full flex justify-center items-center text-lg',
    button:
      'absolute right-4 md:right-6 top-2 w-10 h-10 rounded flex justify-center items-center bg-light dark:bg-dark shadow-sm hover:shadow-md hover:text-dark hover:dark:text-light',
  };

  if (width < 600) return <NavbarMobile />;
  else if (width >= 600)
    return (
      <nav className={style.nav}>
        <ul className={style.ul}>
          <ListItem id='#home' text='Home' />
          <ListItem id='#about' text='About' />
          <ListItem id='#projects' text='Projects' />
          <ListItem id='#contact' text='Contact' />
        </ul>
        <button
          className={style.button}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <SwitchTransitionWrapper state={theme}>
            <Icon size={24} />
          </SwitchTransitionWrapper>
        </button>
      </nav>
    );
};
export default Navbar;
