import React, { useState, useEffect } from 'react';
import { Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material';
import Bid from '../BetAmount/Bid'; // Adjust the import path as needed
import Timer from '../Game/Timer'; // Adjust the import path as needed

const BettingButton = () => {
  const [open, setOpen] = useState(false); // Opening for the dialog box
  const [selectedBet, setSelectedBet] = useState(''); // Which bet has been selected
  const [bettingDisabled, setBettingDisabled] = useState(false); // When 5 seconds remain, disable the betting button
  const [timerDialogOpen, setTimerDialogOpen] = useState(false); // Control the visibility of the timer dialog
  const [seconds, setSeconds] = useState(60); // Assuming timer starts at 60 seconds

  // Function to handle when the timer resets
  const handleTimerReset = () => {
    setBettingDisabled(false); // Re-enable betting
    setTimerDialogOpen(false); // Close timer dialog if open
    setSeconds(60); // Reset seconds if your Timer component doesn't do this automatically
  };

  // Function to handle betting button click
  const handleBetClick = (bet) => {
    setSelectedBet(bet);
    console.log('which bet has been clicked', bet);
    setOpen(true);
  };

  // Function to handle closing bid dialog
  const handleClose = () => {
    setOpen(false);
    setSelectedBet('');
  };

  // Effect to show dialog when 5 seconds are remaining
  useEffect(() => {
    if (seconds <= 5 && seconds > 0) {
      console.log("Remaining time is", seconds);
      setBettingDisabled(true);
      setTimerDialogOpen(true);
    } else if (seconds > 5) {
      setBettingDisabled(false);
      setTimerDialogOpen(false);
    }
  }, [seconds]);

  return (
    <div>
      <Timer onReset={handleTimerReset} onTick={setSeconds} /> {/* Pass onTick to update seconds in parent */}
      <Grid container spacing={2} sx={{ height: '20vh', marginLeft: '-28px' }}>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            name="red"
            variant="contained"
            color="error"
            sx={{ px: 4 }}
            onClick={() => handleBetClick("red")}
            disabled={bettingDisabled}
          >
            Red
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            name="green"
            variant="contained"
            color="success"
            sx={{ px: 4 }}
            onClick={() => handleBetClick("green")}
            disabled={bettingDisabled}
          >
            Green
          </Button>
        </Grid>
      </Grid>
      <Bid open={open} onClose={handleClose} selectedValue={selectedBet} />

      {/* Dialog that opens automatically when 5 seconds are left */}
      <Dialog open={timerDialogOpen} onClose={() => setTimerDialogOpen(false)}>
        <DialogTitle>Wait</DialogTitle>
        <DialogContent>
          <Typography>Result is going to be announced</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTimerDialogOpen(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BettingButton;
