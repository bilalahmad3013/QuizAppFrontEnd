import React from 'react'
import { useNavigate } from 'react-router'



export default function Instructons() {

    const navigate=useNavigate()

    const handleClick=()=>{
        navigate('/test');
    }
  return (
    <div style={{fontFamily:"sans-serif"}} >
      <h1  style={{marginLeft:"42%"}}>Instructions</h1>
      <hr />
      <div style={{marginLeft:"35%"}}>
      <h3>* You have 25 secs to solve each question.</h3>
      <h3>* There are 20 questions in total.</h3>
      <h3>* Final score will be shown to you just after the completion of the test.</h3>
      <button onClick={handleClick} style={{marginLeft:"20%", marginTop:"10px", width:"100px" ,height:"40px"}} className='rounded-3 w-4 h-5 '>Start</button>
      </div>
    </div>
  )
}
