import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [arr,setArr]=useState([
    {num:"9",type:"General Knowledge"},
    {num:"10",type:"Entertainment: Books"},
    {num:"11",type:"Entertainment: Film"},
    {num:"12",type:"Entertainment: Music"},
    {num:"13",type:"Entertainment: Musicals & Theatres"},
    {num:"14",type:"Entertainment: Television"},
    {num:"15",type:"Entertainment: Video Games"},
    {num:"16",type:"Entertainment: Board Games"},
    {num:"17",type:"Science & Nature"},
    {num:"18",type:"Science: Computers"},
    {num:"19",type:"Science: Mathematics"},
    {num:"20",type:"Mythology"},
    {num:"21",type:"Sports"},
    {num:"22",type:"Geography"},
    {num:"23",type:"History"},
    {num:"24",type:"Politics"},
    {num:"25",type:"Art"},
    {num:"26",type:"Celebrities"},
    {num:"27",type:"Animals"},
    {num:"28",type:"Vehicles"},
    {num:"29",type:"Entertainment: Comics"},
    {num:"30",type:"Science: Gadgets"},
    {num:"31",type:"Entertainment: Japanese Anime & Manga"},
    {num:"32",type:"Entertainment: Cartoon & Animations"}
   
  ]);
  const [questions, setQuestions] = useState([]);
  const [result,setResult]=useState(0);
  const [c,setC]=useState('');

  const fetchQuestions = async (category) => {
    
    try {
        let n=100;
      for(let i=0;i<arr.length;i++){
        let obj=arr[i];
        if(obj.type===category){
            n=obj.num;
           
        }
      }  
      const response = await fetch(`https://opentdb.com/api.php?amount=20&category=${n}`);
      const res = await response.json();
      setQuestions(res.results);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <QuizContext.Provider value={{ questions, fetchQuestions ,arr, setResult,result,setQuestions, c ,setC}}>
      {children}
    </QuizContext.Provider>
  );
};
