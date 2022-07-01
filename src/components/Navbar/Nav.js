import useWindowSize from '../../hooks/useWindowSize';
import NavbarMobile from './mobile/NavbarMobile';
import Navbar from './Navbar';

const Nav = () => {
  const { width } = useWindowSize();

  if (width < 600) return <NavbarMobile />;
  else if (width >= 600) return <Navbar />;
};
export default Nav;
