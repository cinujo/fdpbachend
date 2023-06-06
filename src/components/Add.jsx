import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = (props) => {
    var[datas,setDatas] = useState(props.data);
    console.log("method",props.method)
    console.log("updated",datas._id)
    const navigate= useNavigate();
    const inputHandler = (e)=>{
        const {name,value} = e.target;
        setDatas((datas)=>({...datas,[name]:value}))
    }
    const addHandler=()=>{
        console.log("clicked")
        if(props.method==='post'){
        axios.post("http://localhost:3005/new",datas)
        .then((response)=>{
            alert("Successfully added")
            navigate('/');
        })
        .catch(err=>console.log(err))
    }
    if(props.method==='put'){
    axios.put("http://localhost:3005/edit/"+datas._id,datas)
    .then((response)=>{
        alert("updated")
        window.location.reload(false)
    })
    }
}
  return (
    <div style={{paddingTop:'80px'}}>
        <TextField label= 'name' 
        name='sname'
        value={datas.sname}
        variant='outlined'
        onChange={inputHandler}/>
        <br/><br/>
        <TextField label= 'age' 
        name='age'
        value={datas.age}
        variant='outlined'
        onChange={inputHandler}/>&nbsp;
        
        <br/><br/>
         <TextField label= 'pos' 
        name='pos'
        value={datas.pos}
        variant='outlined'
        onChange={inputHandler}/>&nbsp;
         <br/><br/>
        <TextField label= 'salary' 
        name='salary'
        value={datas.salary}
        variant='outlined'
        onChange={inputHandler}/>
<br/><br/>
<Button variant='contained' onClick={addHandler}>Submit</Button>


          

    </div>
 
  )
}

export default Add
