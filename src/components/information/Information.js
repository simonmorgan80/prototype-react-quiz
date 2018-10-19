import React from 'react';
import Button from '../button/Button';

const Information = (props) => {

    return (
        <div>
            info

            <h2>You selected {props.userAnswer.answer}</h2>
            <p>{props.userAnswer.status ? <strong>Thats Correct</strong> : <strong>Thats Incorrect</strong> }</p>

            <article>
                {props.questionData.information}
            </article>
            
            <div className="quiz_information__footer">
                <Button
                    handler={props.handleNextQuestion}
                    label="Next Question"
                />
            </div>

        </div>
    )
}

export default Information;
