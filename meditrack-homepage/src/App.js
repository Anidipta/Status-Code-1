// src/App.js
import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import GlobalStyle from './components/globalStyles';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <NavBar />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;