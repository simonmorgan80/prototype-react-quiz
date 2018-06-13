import React from 'react';

function Information(props) {

    return (
        <div className="quiz_information">

            <h2>You selected {props.userData.answer}</h2>
            <p>{props.userData.status ? <strong>Its true</strong> : <strong>Its False</strong> }</p>
            
            <article>
                {props.questionDataSet.information} 
            </article>

            <button onClick={() => props.handleNextQuestion()}>Next Question</button>

        </div>
    )
}

export default Information;