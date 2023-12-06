import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';
import Dashboard from '@/components/pages/Dashboard';
import DashboardPage from './dashboard';

const Home: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box my={4}>
          <DashboardPage />
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to My Application
          </Typography>

          
          <Typography variant="h5" component="h1" gutterBottom>
          <Link href="/about">
            About Us
          </Link>
          </Typography>
          <Typography variant="h5" component="h1" gutterBottom>
          <Link href="/dashboard/">
            Visit Dashboard
          </Link>
          </Typography>
          
        </Box>
      </Container>
    </>
  );
};

export default Home;
