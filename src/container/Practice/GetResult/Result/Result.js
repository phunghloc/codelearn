import React from 'react';

import './Result.css';

const result = (props) => (
    <div className="Question-Question">
        <div className="Question-Detail-Container">
            <div className="Question-Detail-Order">
                <h2>{props.current}</h2>
            </div>
            <div className="Question-Detail">
                <h3>{props.detail}</h3>
            </div>
        </div>
        <div className="Question-Form Result-Form">
            {props.answers.map(answer => {
                const classes = [];
                if (answer === props.correct) classes.push("Question-Ans-Wrong");
                if (answer === props.currentAns) classes.push("Question-Ans-Correct");
                return (
                    <div key={answer} 
                        className={["Question-Ans", ...classes].join(' ')}
                    >
                        <p>{answer}</p>
                    </div>
                )
            })}
            
        </div>
    </div>
);

export default result;