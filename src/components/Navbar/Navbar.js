import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import useWindowSize from '../../hooks/useWindowSize';
import NavbarMobile from './mobile/NavbarMobile';
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { width } = useWindowSize();

  if (width < 600) return <NavbarMobile />;
  else if (width >= 600) return <nav></nav>;
};
export default Navbar;
