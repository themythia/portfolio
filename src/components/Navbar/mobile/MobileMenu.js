import { useLayoutEffect } from 'react';
import ListItem from '../ListItem';
import ToggleSwitch from './ToggleSwitch';
import TransitionWrapper from './TransitionWrapper';

const MobileMenu = ({ showMenu, setShowMenu }) => {
  useLayoutEffect(() => {
    // locks scrolling when menu is open
    if (showMenu) {
      // Get original body overflow
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // Prevent scrolling on mount
      document.body.style.overflow = 'hidden';
      // Re-enable scrolling when component unmounts
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [showMenu]);

  return (
    <TransitionWrapper state={showMenu}>
      <div className='bg-light100 dark:bg-dark800 w-full max-w-full h-screen pt-[72px] top-0 fixed z-50 p-4 text-lg '>
        <ul className='flex flex-col border-b dark:border-light/40 border-dark/40 pb-4'>
          <ListItem
            id='#home'
            text='Home'
            mobile={true}
            setShowMenu={setShowMenu}
          />
          <ListItem
            id='#about'
            text='About'
            mobile={true}
            setShowMenu={setShowMenu}
          />
          <ListItem
            id='#projects'
            text=' Projects'
            mobile={true}
            setShowMenu={setShowMenu}
          />
          <ListItem
            id='#contact'
            text='Contact'
            mobile={true}
            setShowMenu={setShowMenu}
          />
        </ul>
        <ul className='pt-4'>
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
