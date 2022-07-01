import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Navbar/Nav';
import ThemeWrapper from './components/ThemeWrapper';
import ThemeContext from './contexts/ThemeContext';
import './index.css';
import 'animate.css';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    console.log(
      `
██╗  ██╗███████╗██╗     ██╗      ██████╗ ██╗
██║  ██║██╔════╝██║     ██║     ██╔═══██╗██║
███████║█████╗  ██║     ██║     ██║   ██║██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║╚═╝
██║  ██║███████╗███████╗███████╗╚██████╔╝██╗
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝`
    );
    console.log('To view more of my work:');
    console.log('https://github.com/themythia');
  }, []);

  // useEffect(() => {
  //   ReactGA.initialize('G-5K71HY9Q07');
  //   ReactGA.send({ hitType: 'pageview', page: location.pathname });
  // }, [location.pathname]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeWrapper>
        <Nav />
        <Home />
        <Footer />
      </ThemeWrapper>
    </ThemeContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
