import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Typing from 'react-typing-effect';
import doctorimage from '../images/doctor.png';
import { useTheme } from './ThemeContext'; 

const Container = styled.div`
  font-family: 'Dancing Script', cursive;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 600px; /* Ensures it fits the viewport height */
  background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#333333')};
  padding-left: 100px;
  overflow: hidden; /* Ensures no internal scroll */
  position: relative; /* Ensure child elements are positioned correctly */
`;

const TextSection = styled.div`
  max-width: 45%;
  margin-right: 40px;
  position: relative; /* Keep text section position fixed */
  z-index: 2; /* Ensure it's above other elements */
`;

const Heading = styled.h1`
  font-family: 'Calibri', cursive;
  font-size: 40px;
  color: ${({ theme }) => (theme === 'light' ? '#333' : '#ffffff')};
  margin-bottom: 60px;
`;

const ServiceButton = styled.button`
  background-color: ${({ theme }) => (theme === 'light' ? '#28a745' : '#ffffff')}; /* Green in light mode, white in dark mode */
  color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#000000')}; /* White text in light mode, black text in dark mode */
  padding: 15px 25px;
  border: 2px solid ${({ theme }) => (theme === 'light' ? '#28a745' : '#000000')}; /* Green or black border */
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Segoe Script', cursive;
  font-size: 1.2rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => (theme === 'light' ? '#218838' : '#f1f1f1')}; /* Darker green in light mode, lighter white in dark mode */
    color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#000000')}; /* Ensure text stays white in light mode and black in dark mode */
  }
`;

const ImageSection = styled.div`
  position: absolute; /* Position absolutely within container */
  right: 20px;
  bottom: 20px;
  max-width: 50%;
  text-align: center;
  z-index: 1; /* Ensure it's above the SVG blob */
`;

const BlobSVG = styled(motion.svg)`
  position: absolute;
  bottom: 120px;
  left: 120px;
  width: 420px;
  height: 420px;
  z-index: 0;
  fill: ${({ theme }) => (theme === 'light' ? '#28a745' : '#ffffff')}; /* Green in light mode, white in dark mode */
`;
const StyledImage = styled(motion.img)`
  width: 80%;
  height: auto;
  border-radius: 10px;
  position: relative; /* Ensure correct stacking */
  z-index: 2; /* Ensure it's above the SVG blob */
`;

const HomePage = () => {
  const { theme } = useTheme(); 
  return (
    <Container theme={theme}>
      <TextSection>
        <Heading theme={theme}>
          <Typing
            text={["Revolutionize Patient Care", "Streamline Healthcare Management", "Innovative Care Solutions"]}
            speed={50}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={3000}
            showcursor={false}
          />
        </Heading>
        <ServiceButton theme={theme}>Get Services</ServiceButton>
      </TextSection>
      <ImageSection>
        <StyledImage
          src={doctorimage}
          alt="Doctor"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        />
        <BlobSVG theme={theme}
          className="home__blob"
          viewBox="0 0 479 460"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <mask id="mask0" mask-type="alpha">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
          </mask>
          <g mask="url(#mask0)">
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
            <image x="50" y="105" href={doctorimage}/>
          </g>
        </BlobSVG>
      </ImageSection>
    </Container>
  );
};

export default HomePage;
