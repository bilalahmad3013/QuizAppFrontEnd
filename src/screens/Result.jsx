import React, { useState } from 'react'
import { QuizContext } from '../components/QuizContext'
import { useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Result() {
  const { result, setQuestions, c, questions } = useContext(QuizContext);
  const [ show, setShow ] = useState(true);
  let feedback = "Feedback -";

  
  if (result <= 5) {
    feedback += "Not good need to work on ";
    feedback += c;
  }
  else if (result >= 6 && result <= 13) {
    feedback += "Still learning is there !!";

  }
  else {
    feedback += "Greate Work done, You have good understanding on "
    feedback += c;
  }


  useEffect(() => {
    if (questions.length === 0) {
      setShow(false);
    }

    setQuestions([]);
  }, [setQuestions]);

  return (
      
    <>
    <Navbar />
    {
      show ?  <div style={{marginTop:"20px"}}>
      <h1 style={{marginLeft:"40%"}}>Your result {result}/20</h1>
      <h3 style={{marginLeft:"25%"}}>{feedback}</h3>
    </div>:<div> <h1>Nothing to display</h1></div>
    }
    </>
   
   

  )
}
