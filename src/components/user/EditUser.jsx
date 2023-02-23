import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useNavigate,useParams} from 'react-router-dom'
const EditUser = () => {
    const {userId}=useParams();   // grab the user id from url and return them
    const navigate=useNavigate();
    const initialState={name:"",username:"",email:"" ,phone:"",website:""};
    const [user,setUser]=useState(initialState);

    
    const getUserbyId=async ()=>{
      const response =await axios.get(`http://localhost:5000/users/${userId}`)
      // console.log(response);
      setUser(response.data);

    }
    useEffect(()=>{
      getUserbyId();
    },[])
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

       await axios.put(`http://localhost:5000/users/${userId}`,user)
        navigate({pathname:"/"})



    }
  return (
    <div className='container'>
    <div className='w-75 mx-auto p-5 shadow-sm '>
    <h2 className='text-center mb-4' >Edit User</h2>
   
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
    <button type='submit' className='btn btn-info text-white col-12'>Save user</button>
    </form>
    </div>
    </div>
  )
}

export default EditUser