import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const Bid = ({ onClose, open, selectedValue }) => {
  const [amount, setAmount] = useState('');
  const [color, setColor] = useState('red');

  const colorChoose = (value) => {
    if (value === 'red') {
      setColor('red');
    } else {
      setColor('green');
    }
  };

  useEffect(() => {
    colorChoose(selectedValue);
  }, [selectedValue]);

  const handleClose = () => {
    setAmount('');  // Reset the amount input
    onClose();
  };

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDone = () => {
    console.log('Amount:', amount); // Do something with the amount
    handleClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      fullWidth
      sx={{
        width: "100%",
        '& .MuiDialog-container': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // Add custom positioning here
          '& .MuiPaper-root': {
            position: 'absolute',
            bottom: '0px',
          },
        },
      }}
    >
      <DialogTitle sx={{ color: color }}>Place Your Bet</DialogTitle>
      <DialogContent>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Amount</Typography>
              <TextField
                id="outlined-basic"
                label="Amount"
                variant="outlined"
                fullWidth
                value={amount}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDone} color="primary">
          Place
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Bid;
