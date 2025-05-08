import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const ThemeWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  // let storedtheme = localStorage.getItem('theme');

  // // handles theming
  // useEffect(() => {
  //   // checks localStorage to see if user set a specific theme
  //   if (localStorage.getItem('theme')) {
  //     setTheme(localStorage.getItem('theme'));
  //   } else {
  //     if (
  //       window.matchMedia &&
  //       window.matchMedia('(prefers-color-scheme: dark)').matches
  //     ) {
  //       setTheme('dark'); // if users prefers dark theme, sets theme to dark
  //     }

  //     // listens for theme preferences and changes the theme accordingly
  //     const listener = (e) => {
  //       setTheme(e.matches ? 'dark' : 'light');
  //     };

  //     window
  //       .matchMedia('(prefers-color-scheme: dark)')
  //       .addEventListener('change', listener);

  //     return () => window.removeEventListener('change', listener);
  //   }
  // }, [setTheme, storedtheme]);

  return (
    <div className={theme}>
      <div className='bg-light dark:bg-dark text-dark dark:text-light h-full min-h-screen max-w-screen font-poppins box-border flex flex-col justify-center items-center'>
        {children}
      </div>
    </div>
  );
};
export default ThemeWrapper;
