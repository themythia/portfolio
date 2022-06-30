import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import MobileMenu from './MobileMenu';

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className='w-screen h-[72px] p-4 flex justify-between sm:p-0 sm:h-14 sm:bg-dark800 sm:shadow-md col-span-full '>
        <button onClick={() => setShowMenu(!showMenu)} className='z-[500]'>
          {showMenu ? <MdClose size={40} /> : <MdMenu size={40} />}
        </button>
      </nav>
      <MobileMenu showMenu={showMenu} />
    </>
  );
};
export default NavbarMobile;
