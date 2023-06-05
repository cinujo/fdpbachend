import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const View = () => {
    var[pname,setPname]=useState("Tiya");
    var[val,setVal]= useState()
    const changeName = ()=>{
        setPname(val)
    }
    const inputHandler = (e)=>{
        console.log(e.target.value)
        setVal(e.target.value)
    }
  return (
    <div style={{paddingTop:'80px'}}>
      {/* <hi>cinu p</hi>
      <Typography variant='h1'>cinnu</Typography>
      <input placeholder='Name'></input> */}
      {/* <TextField variant='outlined' label='Name'/>
      <Button variant='contained'>Submit</Button>
       */}
       <Typography variant='h4'>Welcome {pname}</Typography>
       <br/>
       <TextField label='Name' onChange={inputHandler}/>
       <br /><br />
       <Button variant='contained' onClick={changeName}>Change</Button>
    </div>
  )
}

export default View
