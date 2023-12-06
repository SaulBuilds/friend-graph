import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Dashboard from '../../components/pages/Dashboard';
import { Container } from '@mui/material';

const DashboardPage: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Dashboard />
      </Container>
    </>
  );
};

export default DashboardPage;
