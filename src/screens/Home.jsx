
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import arr from '../cat';
import { useNavigate } from 'react-router';

export default function Home() {
 


    const newArr=arr.arr; 
    const smallArr=newArr.slice(0,9);
    const [showFull,setShowFull]=useState(false);
    const navigate=useNavigate();
 

    useEffect(() => {
        if (!localStorage.getItem('authToken')) {
          navigate('/login');
        } 
      }, [navigate]);
    

  return (
    <div className='bg-light'>
      <Navbar />
                   <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                     <div className="carousel-inner">
                         <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
                             <div className="d-flex justify-content-center">
                              
                             </div>
                         </div>
                         <div className="carousel-item active">
                             <img src="https://source.unsplash.com/random/900×700/?quiz" className="d-block w-100" alt="..." style={{ filter: "brightness(60%)", height: "750px", width: "100%" }} />
                         </div>
                         <div className="carousel-item">
                             <img src="https://source.unsplash.com/random/900×700/?technology" className="d-block w-100" alt="..." style={{ filter: "brightness(60%)", height: "750px", width: "100%" }} />
                         </div>
                         <div className="carousel-item">
                             <img src="https://source.unsplash.com/random/900×700/?Maths" className="d-block w-100" alt="..." style={{ filter: "brightness(60%", height: "750px", width: "100%" }} />
                         </div>
                     </div>
                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Previous</span>
                     </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                   </button>
                 </div>
      <div className='container d-flex flex-column align-items-center'>
        <h1 className='m-5'>Quiz Categories</h1>
        {
              showFull ===false ? 
              <div  className='row d-flex align-tems-center ms-3'>
                  {
                      smallArr.map((item)=>{
                          return (
                              <div className="col-12 col-md-6 col-lg-3 mb-3">
                           <Card  data={item}/>
                           </div>
                          )
                      })
                  }
              </div> : 
              <div  className='row d-flex align-tems-center ms-3'>
              {
                  newArr.map((item)=>{
                      return (
                          <div className="col-12 col-md-6 col-lg-3 ms-5 mb-3">
                       <Card  data={item}/>
                       </div>
                      )
                  })
              }
          </div>           
        }

        {
            showFull===false ?  
            <button className='mb-5 mt-3 rounded-3' onClick={()=>{setShowFull(!showFull)}}><h2>Show All</h2></button>
            :
            <button className='mb-5 mt-3 rounded-3' onClick={()=>{setShowFull(!showFull)}}><h2>Show Less</h2></button>
        }
       
         
      </div>
      <Footer />
    </div>
  );
}
