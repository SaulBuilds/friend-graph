import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Box, Container, Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography>
            {/* Add your about text here */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default About;
