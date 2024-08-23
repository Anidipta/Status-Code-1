import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa'; 
import { useTheme } from './ThemeContext'; 

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SliderLabel = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  position: relative;
  top: 6px; /* Adjust this value to move the icons down */
`;

const ToggleSwitch = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  width: 60px;
  height: 30px;
`;

const SliderInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  background: ${({ theme }) => (theme === 'light' ? '#f1f1f1' : '#555')};
  border-radius: 30px;
  width: 100%;
  height: 100%;
  transition: background 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const SliderCircle = styled.span`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#333')};
  transition: transform 0.3s ease;
  transform: ${({ checked }) => (checked ? 'translateX(30px)' : 'none')};
`;

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <SliderContainer>
      <SliderLabel theme={theme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </SliderLabel>
      <ToggleSwitch>
        <SliderInput
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <Slider theme={theme} />
        <SliderCircle checked={theme === 'dark'} theme={theme} />
      </ToggleSwitch>
      <SliderLabel theme={theme}>
        {theme === 'light' ? <FaSun /> : <FaMoon />}
      </SliderLabel>
    </SliderContainer>
  );
};

export default ThemeSwitcher;
