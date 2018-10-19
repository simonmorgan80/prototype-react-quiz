import React from 'react';
import Question from '../../components/question/Question.js';
import AnswerList from '../../components/answerlist/Answerlist.js';
import Information from '../../components/information/Information.js';
import Result from '../../components/result/Result.js';

const Quiz = (props) => {

    const renderInformation = () => {
        return (
            <div className="page__content">

                <Information
                    handleNextQuestion={props.handleNextQuestion}
                    questionData={props.questionData}
                    userAnswer={props.userAnswers[props.questionCurrent]}
                />

            </div>
        )
    }

    const renderQuestion = () => {
        return (
            <div className="page__content">

                <Question
                    questionCurrent={props.questionCurrent}
                    questionData={props.questionData}
                />
                <AnswerList
                    handleAnswerClick={props.handleAnswerClick}
                    questionData={props.questionData}
                />

            </div>
        )
    }

    const renderResult = () => {
        return (
            <div className="page__content">

                <Result
                    questionCount={props.questionCount}
                    questionData={props.questionData}
                    userAnswers={props.userAnswers}
                />

            </div>
        )
    }

    const renderSwitch = () => {

        switch (props.section) {

            case 'question':
                return renderQuestion();
            case 'information':
                return renderInformation();
            case 'result':
                return renderResult();
            default:
                return renderQuestion();
        }
    }

    return (
        <div className="page">
            {renderSwitch()}
        </div>
    )
};

export default Quiz;
