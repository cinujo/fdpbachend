import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const AddEmployee = () => {
    var[inputs,setInputs] =  useState({sname:'',age:'',pos:'',sal:''})
    const inputHandler = (e)=>{
        const {name,value} = e.target
        setInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs)
    }
  return (
    <div style={{paddingTop:'80px'}}>
    <TextField name='sname' value={inputs.sname} label='Name'variant='outlined'onChange={inputHandler}/>
      <br /><br />
      <TextField name='age' value={inputs.age} label='Age'variant='outlined'onChange={inputHandler}/>
      <br /><br />
      <TextField name='pos' value={inputs.pos} label='Position'variant='outlined'onChange={inputHandler}/>
      <br /><br />
      <TextField name='sal' value={inputs.sal} label='Salary'variant='outlined'onChange={inputHandler}/>
      <br /><br />
      <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default AddEmployee
