import React from 'react';

function Question(props) {

    return (
        <div className="quiz_question">
            <h1 className="quiz_question__header">{props.questionDataSet.question}</h1>
        </div>
    )
}

export default Question