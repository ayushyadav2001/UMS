import React, { useState } from 'react'
import axios from "axios";
import {useNavigate} from 'react-router-dom'
const AddUser = () => {
    const navigate=useNavigate();
    const initialState={name:"",username:"",email:"" ,phone:"",website:""};
    const [user,setUser]=useState(initialState);


    const OnChangeInput = event =>{
        // console.log(event);
        // console.log(event.target.name)
        // console.log(event.target.value)
        //setUser Values
        setUser({...user,[event.target.name]:event.target.value})


    }

    const formOnSubmit= async (event)=>{
        event.preventDefault();
        if(!user.name){
            alert("Name Can not be empty!");
            return;
        }
        if(!user.username){
            alert("Username Can not be empty!");
            return;
        }
        if(!user.email){
            alert("Email Can not be empty!");
            return;

        }
        if(!user.phone){
            alert("Phone Can not be empty!");
            return;

        }
        if(!user.website){
            alert("Website Can not be empty!");
            return;
        }

       await axios.post("http://localhost:5000/users",user)
        navigate({pathname:"/"})



    }
  return (
    <div className='container'>
    <div className='w-75 mx-auto p-5 shadow-sm '>
    <h2 className='text-center mb-4' >Add User</h2>
   
    <form  onSubmit={(event)=>formOnSubmit(event)}>
    <div className='form-group mb-2'>

    <input type="text" className='form-control form-control-lg' 
    placeholder='Enter your full name' name='name'
    value={user.name}
    onChange={(event)=>OnChangeInput(event)}
    />
    
    </div>

    <div className='form-group mb-2'>

    <input type="text" className='form-control form-control-lg' 
    placeholder='Enter your Username' name='username'
    value={user.username}
    onChange={(event)=>OnChangeInput(event)}
    />
    
    </div>
    <div className='form-group mb-2'>

    <input type="email" className='form-control form-control-lg' 
    placeholder='Enter your email' name='email'
    value={user.email}
    onChange={(event)=>OnChangeInput(event)}
    />
    
    </div>
    <div className='form-group mb-2'>

    <input type="text" className='form-control form-control-lg' 
    placeholder='Enter your phone number' name='phone'
    value={user.phone}
    onChange={(event)=>OnChangeInput(event)}
    />
    
    </div>
    <div className='form-group mb-4'>

    <input type="text" className='form-control form-control-lg' 
    placeholder='Enter your website' name='website'
    value={user.website}
    onChange={(event)=>OnChangeInput(event)}
    />
    
    </div>
    <button type='submit' className='btn btn-info text-white col-12'>Add user</button>
    </form>
    </div>
    </div>
  )
}

export default AddUser