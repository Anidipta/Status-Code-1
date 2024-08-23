import React from 'react';
import styled from 'styled-components';
import LogoImage from '../images/logo.png'; 
import ThemeSwitcher from './ThemeSwitcher'; 
import { useTheme } from './ThemeContext'; 

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 60px;
  background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#2c2c2c')}; /* Darker gray for dark mode */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px; /* Adjust as needed */
  height: auto;
  margin-right: 10px;
`;

const Brand = styled.h1`
  font-family: 'Segoe Script', cursive;
  font-size: 2.5rem;
  margin: 0;
  display: flex;
  align-items: center;
`;

const Medi = styled.span`
  color: ${({ theme }) => (theme === 'light' ? '#28a745' : '#a0d911')}; /* Adjusted green for dark mode */
`;

const Track = styled.span`
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')}; /* White color for dark mode */
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px; /* Increased spacing between menu items */
  margin: 0;
`;

const MenuItem = styled.li`
  cursor: pointer;
  font-family: 'Inter', sans-serif; /* More formal font style */
  font-size: 1.5rem; /* Larger font size */
  color: ${({ theme }) => (theme === 'light' ? '#333' : '#e0e0e0')}; /* Light gray for dark mode */
  transition: color 0.3s ease;

  &:hover {
    color: #28a745;
  }
`;

const RegisterButton = styled.button`
  background-color: ${({ theme }) => (theme === 'light' ? '#28a745' : '#fff')}; /* Darker background for dark mode */
  color: ${({ theme }) => (theme === 'light' ? '#fff' : '#000')}; /* Adjusted text color for dark mode */
  padding: 12px 28px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  font-size: 1.3rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => (theme === 'light' ? '#218838' : '#28a745')}; /* Darker hover effect */
  }
`;

const NavBar = () => {
  const { theme } = useTheme();

  return (
    <Nav theme={theme}>
      <LogoContainer>
        <Logo src={LogoImage} alt="Logo" />
        <Brand>
          <Medi theme={theme}>Medi</Medi>
          <Track theme={theme}>Track</Track>
        </Brand>
      </LogoContainer>
      <Menu>
        <MenuItem theme={theme}>Home</MenuItem>
        <MenuItem theme={theme}>Contact</MenuItem>
        <MenuItem theme={theme}>FAQs</MenuItem>
      </Menu>
      <RegisterButton theme={theme}>Register Now</RegisterButton>
      <ThemeSwitcher />
    </Nav>
  );
};

export default NavBar;
