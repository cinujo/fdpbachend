import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    var [users,setUsers] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        console.log(response)
        setUsers(response.data)
    })
    },[])
    
  return (
    <div style={{paddingTop:'100px'}}>
      <TableContainer>
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
              {users.map((value,index)=>{
                return(
                    <TableRow>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.username}</TableCell>
                        <TableCell>{value.email}</TableCell>
                        <TableCell>{value.id}</TableCell>

                    </TableRow>
                )
              })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home
