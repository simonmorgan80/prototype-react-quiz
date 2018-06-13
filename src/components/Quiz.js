import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import Question from './Question';
import AnswerList from './AnswerList';
import Information from './Information';

function Quiz(props) {

    function renderQuiz() {
        return (
            <div className="quiz_page" key={'quizgroup'}>
                <div className="quiz_page__content">

                    <Question 
                        questionDataSet={props.questionDataSet} 
                    />
                    <AnswerList 
                        questionDataSet={props.questionDataSet} 
                        handleAnswerClick={props.handleAnswerClick} 
                    />
                    
                </div>
            </div>
        );
    }

    function renderInformation() {
        
        return (
            <div className="quiz_page quiz_page--information" key={'infogroup'}>
                <div className="quiz_page__content">

                    <Information
                        questionDataSet={props.questionDataSet}
                        userData={props.userData}
                        handleNextQuestion={props.handleNextQuestion}
                    />

                </div>
            </div>
        );

    }

    return (
        <div>
            <CSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionName="quiz_page"
                transitionEnterTimeout={400}
                transitionLeaveTimeout={400}
            >
                {props.pageInformation ? renderInformation() : renderQuiz()}
            </CSSTransitionGroup>
        </div>
    );
}

export default Quiz;