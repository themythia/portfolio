import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import MobileMenu from './MobileMenu';

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className='w-full max-w-full h-[72px] flex justify-between p-4 sm:p-0 sm:bg-dark800 sm:shadow-md row-start-1 row-end-2 '>
        <button onClick={() => setShowMenu(!showMenu)} className='z-[500]'>
          {showMenu ? <MdClose size={40} /> : <MdMenu size={40} />}
        </button>
      </nav>
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};
export default NavbarMobile;
