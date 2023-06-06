import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography align='left' sx={{ flexGrow: 1 }}>EmployeeApp</Typography>
            <Button><Link to='/view'     style={{textDecoration:'none',color:'white'}}>View</Link></Button>
            {/* <Button ><Link style={{textDecoration:'none',color:'white'}}>Home</Link></Button> */}
            <Button><Link to='/add'     style={{textDecoration:'none',color:'white'}}>Add</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
