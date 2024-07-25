import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, TextField, Grid } from '@mui/material';

const WalletSummary = () => {
  const [balance, setBalance] = useState(1000); // Initial balance
  const [amount, setAmount] = useState('');

  const handleDeposit = () => {
    if (amount > 0) {
      setBalance(balance + parseFloat(amount));
      setAmount('');
    }
  };

  const handleWithdraw = () => {
    if (amount > 0 && amount <= balance) {
      setBalance(balance - parseFloat(amount));
      setAmount('');
    }
  };

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Wallet Summary
        </Typography>
        <Typography variant="h6" gutterBottom>
          Balance: ${balance.toFixed(2)}
        </Typography>
        <Box mt={2}>
          <TextField
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
          />
          <Grid container spacing={1} mt={1}>
            <Grid item xs={6}>
              <Button variant="contained" color="success" fullWidth onClick={handleDeposit}>
                Deposit
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="error" fullWidth onClick={handleWithdraw}>
                Withdraw
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WalletSummary;
