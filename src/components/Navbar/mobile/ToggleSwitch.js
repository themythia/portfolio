import { useContext } from 'react';
import ThemeContext from '../../../contexts/ThemeContext';

const ToggleSwitch = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <input
      type='checkbox'
      id='switch'
      className={`appearance-none accent-transparent cursor-pointer h-6 w-16 rounded-full border-4 border-transparent bg-dark dark:bg-light inline-block relative transition-all duration-200 ease-linear text-center after:content-['OFF'] checked:after:content-['ON'] after:text-xs after:absolute after:left-0 after:w-8 after:h-4 after:rounded-full after:bg-light after:dark:bg-dark after:text-bg-dark after:dark:text-bg-light after:transition-all after:duration-200 after:ease-linear checked:border-transparent checked:bg-dark checked:bg-none checked:after:translate-x-6 checked:focus:bg-dark checked:hover:bg-dark checked:hover:dark:bg-light focus:ring-0 focus:ring-offset-0 focus:bg-dark focus:dark:bg-light font-semibold`}
      checked={theme === 'dark' ? true : false}
      onChange={handleToggle}
    />
  );
};
export default ToggleSwitch;
