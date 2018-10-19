import React from 'react';
import Answer from '../answer/Answer.js';

const AnswerList = (props) => {

    const renderAnswers = (key, index) => {
        return (
            <Answer
                key={key}
                choice={index}
                answer={key}
                handleAnswerClick={props.handleAnswerClick} 
            />
        )
    }

    return (
        <div>
            {props.questionData.answers.map(renderAnswers)}
        </div>
    )
}

export default AnswerList;
