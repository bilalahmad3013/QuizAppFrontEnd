import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from './QuizContext';

export default function Card(props) {
  const { data } = props;
  const navigate=useNavigate();
  
  const { fetchQuestions } = useContext(QuizContext);

  const handleButtonClick = () => {
    fetchQuestions(data.category);
    navigate('/testInstruction');
  };

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{data.category}</h5>
          <p className="card-text">
            <strong>Example question -</strong> {data.question}
          </p>
          <button style={{ borderRadius: "20px" ,height:"30px" ,width:"90px"}} onClick={handleButtonClick}>
            Take Test
          </button>
        </div>
      </div>
    </div>
  );
}
