import * as React from 'react';
import { Grid ,Container, Pagination} from '@mui/material';
import Header from '../Header';
import History from './History';
import BettingButton from './BettingButton';

export default function Main() {
  const border={
    
    width:"99%",
    margin:"auto"
  }
  const border1={
    border:"2px solid green",
    marginTop:"5px"
  }
  return (
    <Container maxWidth="md" >
      <Header/>
    <Grid container my={1} spacing={2} style={border }>
      <Grid item xs={12} style={border1}>
      
          {/* <Timer/> */}
          <BettingButton/>
      </Grid>
      <Grid item xs={12} style={border1}>
            <History/>
      </Grid>
      <Grid item xs={12} style={border1}>
          <Pagination/>
      </Grid>
    </Grid>
    
    </Container>
  );
}
