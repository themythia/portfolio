import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ThemeWrapper from './components/ThemeWrapper';
import LangContext from './contexts/LangContext';
import ThemeContext from './contexts/ThemeContext';
import './index.css';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('en');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LangContext.Provider value={{}}>
        <ThemeWrapper></ThemeWrapper>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
