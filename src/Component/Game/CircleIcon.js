import React from 'react';
import { SvgIcon } from '@mui/material';

function CircleIcon(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
    </SvgIcon>
  );
}

export default CircleIcon;
