import React from 'react';
import Answer from './Answer';

function AnswerList(props) {
    
    function renderAnswerOptions(key, index) {
        return (
            <Answer 
                key={key} 
                choice={index} 
                handleAnswerClick={props.handleAnswerClick} 
                answer={key}
            />
        );
    }

    return (
        <div className="quiz_answerlist">
            {props.questionDataSet.answers.map(renderAnswerOptions)}
        </div>
    );
};

export default AnswerList;