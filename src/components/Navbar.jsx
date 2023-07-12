import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components';




export default function Navbar() {

  
  const navigate=useNavigate();
  const handleLogout= ()=>{
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    navigate('/login');
  }

  const DIV=styled.div`
  .btn:hover{
    border:none;
    color:white;
    background-color:#35383d;
  }
  `

  return (
    <DIV>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="#">GoQuiz</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active fs-5" to="/">Home</Link>
            </li>
            {
              (localStorage.getItem("authToken")) ? <li className="nav-item">
                <Link className="nav-link active fs-5" to="/PrevQuiz">PreviousTests</Link>
              </li> : ""
            }
          </ul>
          {
            (!localStorage.getItem("authToken")) ? <div className='d-flex'>
              <Link className="btn" to="/login" style={{ border: "1px solid black", borderRadius: "10px" ,marginRight:"4px"}}>Login</Link>

              <Link className="btn" to="/createuser" style={{ border: "1px solid black", borderRadius: "10px" }}>SignUp</Link>
            </div> : <div>
              
             
          
              <div className='btn' style={{ border: "1px solid black", borderRadius: "10px" }} onClick={handleLogout}>
                Logout
              </div>
            </div>
          }

        </div>
      </nav>
    </DIV>
  )
}
