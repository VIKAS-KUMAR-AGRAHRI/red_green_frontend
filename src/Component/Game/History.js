import { Container, Grid } from '@mui/material'
import React from 'react'
import CircleIcon from './CircleIcon'
const chooseColor = ["red", "green"];

function getRandomColor() {
  return chooseColor[Math.floor(Math.random() * chooseColor.length)];
}
const History = () => {
    const gridItems = Array.from({ length: 10 }, (_, index) => ({
        id: index,
        color: getRandomColor(),
      }));
  return (
    <Container maxWidth='sm'>
        <Grid container spacing={2} sx={{textAlign:"center"}}>
            <Grid item xs={4}>
                Color
            </Grid>
            <Grid item xs={4}>
                Number
            </Grid>
            <Grid item xs={4}>
                Max
            </Grid>
        </Grid>
        <Grid container spacing={2} my={2} sx={{textAlign:"center"}}>
      {gridItems.map((item) => (
        <Grid container spacing={2} key={item.id}>
          <Grid item xs={4}>
            <CircleIcon sx={{ color: item.color }} />
          </Grid>
          <Grid item xs={4}>
            6
          </Grid>
          <Grid item xs={4}>
            10000
          </Grid>
        </Grid>
      ))}
    </Grid>
        
    </Container>
  )
}

export default History