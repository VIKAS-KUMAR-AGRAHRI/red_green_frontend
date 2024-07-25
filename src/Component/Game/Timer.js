import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const Timer = ({ onReset, onTick }) => { // Accept onTick callback as a prop
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => {
        const newSeconds = prevSeconds <= 1 ? 60 : prevSeconds - 1; // Reset to 60 or decrement
        if (newSeconds === 60) {
          onReset(); // Call onReset function when timer resets
        }
        onTick(newSeconds); // Call onTick with the updated seconds
        return newSeconds;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [onReset, onTick]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="10vh">
      <Typography variant="h3">
        {String(Math.floor(seconds / 60)).padStart(2, '0')}:{String(seconds % 60).padStart(2, '0')}
      </Typography>
    </Box>
  );
};

export default Timer;
