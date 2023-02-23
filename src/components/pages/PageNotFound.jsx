import React from 'react'
import Button from 'react-bootstrap/Button';
import "./PageNotFound.css"

function PageNotFound() {
  return (
    <div className="hide-navBar" >
    <h1 className='p-4' >Page you are looking for Does not exist !</h1>
    <h2>404</h2>
    <button type="button" class="btn btn-primary">Normal Booststrap</button>
    <Button className='m-5' variant="outline-danger">React Bootstrap</Button>{' '}
    <a href="/">Home</a>
 
    </div>
  )
}

export default PageNotFound