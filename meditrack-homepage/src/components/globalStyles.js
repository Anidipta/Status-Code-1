import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#121212')};
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    transition: background-color 0.3s, color 0.3s;
  }
`;

export default GlobalStyle;
