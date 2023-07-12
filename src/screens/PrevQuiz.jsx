import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';

export default function PrevQuiz() {

    const [arr,Setarr]=useState([]);

    const fetchQuiz=async ()=>{
        let userEmail = localStorage.getItem("userEmail");
        await fetch('https://quizbackend-w62b.onrender.com/api/prevQuiz',{
            
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         
          email: userEmail
        
        })
        }).then(async(response)=>{
           let res=await response.json();
           if(res!==null){
            Setarr(res);
           }
           console.log(arr);
        })
       
    }

    useEffect(()=>{
       fetchQuiz();
    },[])
    return (
       
        <div>
             <Navbar />
        <div style={{padding:"10px"}}>
           
            <h3>Your Previous results</h3>
            <hr />
           {
            arr.map((item, key)=>{
                   return (
                    <div  style={{width: "100%"}}>
                
                    <div >
                        <p ><h5>Test {key+1})</h5> Category - {item[0]}</p>
                        <p >Your scroe - {item[1]}/20</p>
                        <p >Date - {item[2]}</p>
                        <hr />
                    </div>
                    </div>
                   )
            })
           }
        </div>
        </div>
    )
}
