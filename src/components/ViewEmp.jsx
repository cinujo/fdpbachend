import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Add from './Add';

const ViewEmp= () => {
  var[employees,setEmployees] = useState([]);
  var[oneValue,setOnevalue] = useState([]);
  var[edit,setEdit] = useState(false);
  useEffect(()=>{
    axios.get("http://localhost:3005/view")
  .then(response =>{
    console.log(response.data)
    setEmployees(response.data)
  })
  .catch(err=>console.log(err))

  },[])
  const deleteValues =(id)=>{
    console.log("delete clicked",id)
    axios.delete("http://localhost:3005/remove/"+id)
    .then((response)=>{
      alert("Data deleted")
      window.location.reload(false);
    
  })
}
const editValues= (value)=>{
  console.log("edit clicked",value)
  setOnevalue(value);setEdit(true);
}
var finalJSX = <TableContainer>
<Table>
    <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Salary</TableCell>
            
        </TableRow>
    </TableHead>
<TableBody>
  {employees.map((value,index)=>{
    return(
      <TableRow key={index}>
        <TableCell>{value.sname}</TableCell>

        <TableCell>{value.age}</TableCell>
        <TableCell>{value.pos}</TableCell>
        <TableCell>{value.salary}</TableCell>
        <TableCell><DeleteForeverIcon color='error' onClick = {()=>deleteValues(value._id)} /></TableCell>
              
               <TableCell> <ModeEditIcon color='success'
               onClick = {()=>editValues(value)}/>
               </TableCell>
      </TableRow>
    )
  })}
</TableBody>


</Table>
</TableContainer>
  if(edit)
  finalJSX= <Add data={oneValue} method='put'/>
  return (

      finalJSX
    
  )
}

export default ViewEmp
