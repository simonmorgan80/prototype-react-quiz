import React from 'react';

const Result = (props) => {

    let score = 0;

    props.userAnswers.forEach((result) => {
        const isCorrect = result.status;
        if (isCorrect) {
            score = score + 1;
        }
    });

    const renderResults = (result, index) => {

        const isCorrect = result.status;
        let resultStatus;

        if (isCorrect) {
            resultStatus = 'Correct';
        } else {
            resultStatus = 'Incorrect';
        }

        return (
            <p key={index}>
                {index + 1}. You answered <strong>{result.answer}</strong>.  Which is {resultStatus}
            </p>
        )
    }

    return (
        <div className="results">
            <h2>Results</h2>
            <p>You scored {score} out of {props.questionCount}</p>
            {props.userAnswers.map(renderResults)}
        </div>
    )
}

export default Result;
