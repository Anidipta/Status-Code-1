import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1e3a8a',
      color: 'white',
      padding: '10px 0',
      textAlign: 'center',
    }}>
      <Container>
        <Typography variant="body2">
          Copyright MediTrack © 2024 Registered
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
