const handleToggle = (theme, setTheme) => {
  if (theme === 'light') {
    setTheme('dark');
    localStorage.setItem('theme', 'dark');
  } else if (theme === 'dark') {
    setTheme('light');
    localStorage.setItem('theme', 'light');
  }
};

export default handleToggle;
