import React from 'react';
import './Answer.css';

const Answer = (props) => {

    return (
        <div>

            <div className="answer_item">
               <button
                   className="answer_button"
                   onClick={() => props.handleAnswerClick(props.choice, props.answer)}
               >
               {props.answer}
               </button>
           </div>

        </div>
    )
};

export default Answer;
