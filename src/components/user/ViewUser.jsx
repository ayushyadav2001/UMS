import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useParams} from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom'


const ViewUser = () => {
  const {userId}=useParams();
  const initialState={name:"",username:"",email:"" ,phone:"",website:"",address:{}};
  const [user,setUser]=useState(initialState);
  const [address,setAddress]=useState({});
  const [companyDetails,setCompanyDetails]=useState({});

  const getUserbyId=async ()=>{
    const response =await axios.get(`http://localhost:5000/users/${userId}`)
    // console.log(response);
    setUser(response.data);
    setAddress(response.data.address);
    setCompanyDetails(response.data.company);

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
  return (
    <div className='container'>
    <Link className="btn btn-outline-info mt-2 text-gray" to="/">Back</Link>
    <p className='display-3'>User Id: {user.id}</p>
    <h2 className='p-4 text-center'>User Details</h2>
    <ListGroup variant="flush" className='p-4 w-75'>
    <ListGroup.Item>Full Name: {user.name}</ListGroup.Item>
    <ListGroup.Item>Username: {user.username}</ListGroup.Item>
    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
    <ListGroup.Item>Phone Number: {user.phone}</ListGroup.Item>
    <ListGroup.Item>Add: {address.street} | {address.suite} | {address.city}| {address.zipcode} </ListGroup.Item>
    <ListGroup.Item>Company name :{companyDetails.name} | {companyDetails.catchPhrase}| {companyDetails.bs} </ListGroup.Item>
    <ListGroup.Item></ListGroup.Item>
  </ListGroup>
    </div>
  )
}

export default ViewUser