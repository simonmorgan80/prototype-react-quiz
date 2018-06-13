import React from 'react';

import Button from './button/Button';

function Information(props) {

    return (
        <div className="quiz_information">

            <h2>You selected {props.userData.answer}</h2>
            <p>{props.userData.status ? <strong>Thats Correct</strong> : <strong>Thats Incorrect</strong> }</p>
            
            <article>
                {props.questionDataSet.information} 
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