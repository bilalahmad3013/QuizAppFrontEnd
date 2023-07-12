
import React, { useState, useEffect } from 'react';
import { QuizContext } from '../components/QuizContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router';

function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}

export default function Questions() {
    const { questions, setResult ,setC,result} = useContext(QuizContext);
    const [idx, setIdx] = useState(0);
    const [ops, setops] = useState([]);
    const [ans, setAns] = useState([]);
    const [count, setCount] = useState(0);
    const [isOptionSelected, setIsOptionSelected] = useState(false);
    const navigate = useNavigate();
   
   
    const handleOptionChange = (event) => {
        setIsOptionSelected(true);
        const updatedAns = [...ans];
        updatedAns[idx] = event.target.value;
        setAns(updatedAns);
    };

    useEffect(() => {
        if (questions.length > 0 && idx >= 0 && idx < questions.length) {
            let ops = [questions[idx].correct_answer, ...questions[idx].incorrect_answers];
            ops = shuffleOptions(ops);
            setops(ops);
        }
    }, [idx, questions]);

    const handleSubmitAnswer =async () => {
        setCount(0);
        setC(questions[0].category);
        let res = 0;
        for (let i = 0; i < ans.length; i++) {
            if (ans[i] === questions[i].correct_answer) {
                res += 1;
            }
        }
      
        setResult(res);
        let arr=[questions[0].category, res, new Date().toDateString()]
        let userEmail = localStorage.getItem("userEmail");
        const response= await fetch('https://quizbackend-w62b.onrender.com/api/StoreQuiz',{
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         
          email: userEmail,
          prev_Quiz:arr
        })
       
      })
      console.log("JSON RESPONSE:::::", response.status)

        navigate('/testResult');
        console.log('Submitted answers:', ans);
    };

    const handleNextQuestion = () => {
        setCount(0);
        setIsOptionSelected(false);
        setIdx((prevIndex) => prevIndex + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (count === 25) {
            setCount(0);
            if(idx===questions.length-1){
                handleSubmitAnswer();
            }
            handleNextQuestion();
        }
    }, [count]);


    return (
        <div style={{padding:"10px"}}>
            {questions.length > 0 && idx < questions.length ? (
                <div >
                    <h2>Question {idx + 1}</h2>
                    <span> <h4>{questions[idx].question}</h4></span>
                    {ops.map((option) => {
                        return (
                            <div key={option}>
                                <label>
                                    <input
                                        type="radio"
                                        name="selectedOption"
                                        value={option}
                                        onChange={handleOptionChange}
                                        required
                                    />
                                    <h4 className='d-inline'>{option}</h4>
                                </label>
                                <br />
                            </div>
                        );
                    })}
                    {idx < questions.length - 1 ? (
                        <button type="submit" onClick={handleNextQuestion} disabled={!isOptionSelected} style={{height: "50px",
                            width: "200px",
                            marginTop: "10px",
                            borderRadius: "20px"}}>
                            Next Question
                        </button>
                    ) : (
                        <button type="submit" onClick={handleSubmitAnswer} disabled={!isOptionSelected} style={{height: "50px",
                        width: "200px",
                        marginTop: "10px",
                        borderRadius: "20px"}}>
                            Submit
                        </button>
                    )}

                    <div style={{position:"absolute" , top:"90%", left:"85%" ,padding:"8px" , border:"2px solid black", borderRadius:"50px", backgroundColor:"white"}}> <h3>Timer-{count}/25</h3></div>
                </div>

            ) : (
                <div><h2>Waiting for the test to start.</h2></div>
            )}
        </div>
    );
}

