import React from 'react';

function Answer(props) {
    return (
        <div> 
            <button onClick={() => props.handleAnswerClick(props.choice, props.answer)}>{props.answer}</button>
        </div>
    )
}

export default Answer;