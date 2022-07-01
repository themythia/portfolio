import { useState } from 'react';
import MobileMenu from './MobileMenu';
import Icon from '../../shared/Icon';
import SwitchTransitionWrapper from '../SwitchTransitionWrapper';

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className='w-full max-w-full h-[72px] flex justify-between p-4 sm:p-0 sm:bg-dark800 sm:shadow-md row-start-1 row-end-2 '>
        <SwitchTransitionWrapper state={showMenu}>
          <button onClick={() => setShowMenu(!showMenu)} className='z-[500]'>
            <Icon icon={showMenu ? 'close' : 'menu'} size={40} />
          </button>
        </SwitchTransitionWrapper>
        <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </nav>
    </>
  );
};
export default NavbarMobile;
