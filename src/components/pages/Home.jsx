import {React,useState,useEffect} from 'react'
import axios from "axios";
import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


function Home() {

 
  const [users,setUsers]=useState([]); // we are createing useState hooks with array by default the array is empty
  const [loading,setLoading]=useState(true);
  
  // Called on load of the component only onces because the dependecies i.e [] is blank
  useEffect(()=>{
    // console.log("On Load")
    // getAllUsers();
    getAllUsersWithAwait();

  },[])

  const getAllUsersWithAwait= async ()=>{
    const result = await axios.get("http://localhost:5000/users");
    setLoading(false);
    // console.log(result);
    // console.log(result.data);
    setUsers(result.data.reverse());
    // console.log("After Axios Call");

  }

  const deleteUser=async(userId)=>{
    await axios.delete(`http://localhost:5000/users/${userId}`)
    getAllUsersWithAwait();
  
    }
  // const getAllUsers=()=>{
  //   axios.get("http://localhost:5000/users")
  //   .then(function (response){

  //     setUsers(response.data);
  //     console.log(response.data)

  //   })  //do something if data is fetched from api
  //   .catch( function (err){
  //     console.log(err)
  //   })   // do something when unable to fetch data from api
  // } 

  return (
    <div className='container'>
  {loading?<Spinner animation="grow" />: 
  <div>
    <h3 className='py-3'>User Management System</h3>
    <Table striped bordered hover shadow variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
     {
        users.map((user,index)=>(
           <tr key={index}>
          <td>{index+1}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>
          <Link className='btn btn-info me-2' to={`/users/view/${user.id}`}>View</Link>
          <Link className='btn btn-outline-info me-2' to={`/users/edit/${user.id}`} >Update</Link>
          <Button onClick={()=>deleteUser(user.id)} variant="danger">Delete</Button>
          </td>
        </tr>

        ))
      }
    {  /*{
        users.map((user,index)=>{
          return <tr key={index}>
          <td>{index+1}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
        </tr>

        })
      }*/}
       
      </tbody>
    </Table>
    </div>}
    
    </div>
  )
}

export default Home