import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar/Navbar';
import ThemeWrapper from './components/ThemeWrapper';
import ThemeContext from './contexts/ThemeContext';
import './index.css';
import 'animate.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeWrapper>
        <Navbar />
      </ThemeWrapper>
    </ThemeContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
