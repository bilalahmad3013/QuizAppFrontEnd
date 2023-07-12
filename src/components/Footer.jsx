import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <section className="">
  
  <footer className="bg-secondary text-white">
    
    <div className="container p-4">
     
      <div className="row">
        
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">How giving quiz tests helps you ?</h5>

          <p>
          Quizzes allow you to assess your current knowledge level on a specific topic. By answering questions, you can identify areas where you're knowledgeable and areas where you need improvement. Quizzes provide instant feedback, highlighting correct answers and explaining incorrect ones, which helps you understand the correct information.
          </p>
        </div>
        

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <Link to="#!" className="text-white">Link 1</Link>
            </li>
            <li>
              <Link to="#!" className="text-white">Link 2</Link>
            </li>
            <li>
              <Link to="#!" className="text-white">Link 3</Link>
            </li>
            <li>
              <Link to="#!" className="text-white">Link 4</Link>
            </li>
          </ul>
        </div>
     
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-0">Links</h5>

          <ul className="list-unstyled">
            <li>
              <Link to="#!" className="text-white">Link 1</Link>
            </li>
            <li>
              <Link to="#!" className="text-white">Link 2</Link>
            </li>
            <li>
              <Link to="#!" className="text-white">Link 3</Link>
            </li>
            <li>
              <Link to="#!" className="text-white">Link 4</Link>
            </li>
          </ul>
        </div>
      
      </div>
    
    </div>


   
    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2020 Copyright:
      <h5>Devloped by Bilal Ahmad</h5>
    </div>
   
  </footer>

</section>
    </div>
  )
}
