import React, { useEffect } from 'react';
import { Progress } from 'antd';

import './Question.css';

const Question = (props) => {
    useEffect(() => window.scrollTo(0,0));
    
    return (
        <div className="Question-Question">
            <Progress
                strokeColor={{
                    from: '#eec83d',
                    to: '#86cbcc',
                }}
                strokeWidth="15px"
                percent={props.percent}
                status={props.percent === 100 ? "success" : "active"}
                trailColor={'#ccc'}
            />

            <div className="Question-Detail-Container">
                <div className="Question-Detail-Order">
                    <h2>{props.current}</h2>
                </div>
                <div className="Question-Detail">
                    <h3>{props.detail}</h3>
                </div>
            </div>
            <div className="Question-Form">
                {props.answers.map(answer => (
                    <div key={answer} 
                        className={["Question-Ans", answer === props.currentAns ? "Question-Ans-Active":""].join(' ')} 
                        onClick={() => props.change(answer)}
                    >
                        <p>{answer}</p>
                    </div>
                ))}
                
            </div>
        </div>
)}

export default Question;