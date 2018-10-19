import React from 'react';

const Question = (props) => {

    return (
        <div className="quiz_question">

            <p className="lead">Question {props.questionCurrent + 1}</p>

            <p className="quiz_question__header">{props.questionData.question}</p>

        </div>
    )
};

export default Question;
