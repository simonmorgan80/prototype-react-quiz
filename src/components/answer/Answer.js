import React from 'react';

import './Answer.css';

function Answer(props) {
    return (
        <div className="answer_item"> 
            <button 
            	className="answer_button"
            	onClick={() => props.handleAnswerClick(props.choice, props.answer)}
            >
            {props.answer}
            </button>
        </div>
    )
}

export default Answer;