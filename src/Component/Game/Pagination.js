import { Stack} from '@mui/material'
import React, { useState } from 'react'

const Pagination = () => {
    const [page,setPage]=useState(1);
    const handleChange = (event,value)=>{
        setPage(value)
    }
  return (
    <Stack spacing={2}>
        <Pagination variant="outlined"  color="secondary" count={10} page={page} onChange={handleChange}/>
    </Stack>
  )
}

export default Pagination