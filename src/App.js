import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Theme from './styles/theme';
import Main from './components/main/Main'
const Home = () => {
  const [theme, setTheme] = useState(Theme.get());

  // Toogle theme on click
  const toggleTheme = () => {
    Theme.set(Theme.getName() === 'light' ? 'dark' : 'light');
    setTheme(Theme.get());
  };
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Main toggleTheme={toggleTheme} />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Home;
