import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import WalletSummary from './WalletSummary';
import TransactionHistory from './TransactionHistory';
import Header from '../Header';
const WalletPage = () => {
  return (
    <Container maxWidth="md">
      <CssBaseline />
      <Header/>
      <WalletSummary />
      <TransactionHistory />
    </Container>
  );
};

export default WalletPage;
