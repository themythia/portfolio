import ListItem from '../ListItem';
import ToggleSwitch from './ToggleSwitch';
import TransitionWrapper from './TransitionWrapper';

const MobileMenu = ({ showMenu }) => {
  return (
    <TransitionWrapper state={showMenu}>
      <div className='bg-light100 dark:bg-dark800 w-screen h-screen pt-[72px] top-0 fixed z-50 p-4 text-lg '>
        <ul className='flex flex-col border-b dark:border-light/40 border-dark/40 pb-4'>
          <ListItem id='#home' text='Home' mobile={true} />
          <ListItem id='#about' text='About' mobile={true} />
          <ListItem id='#projects' text=' Projects' mobile={true} />
          <ListItem id='#contact' text='Contact' mobile={true} />
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
