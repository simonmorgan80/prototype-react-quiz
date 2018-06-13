import React, { Component } from 'react';
import update from 'immutability-helper';

import QuizQuestions from './api/QuizQuestions';
import Quiz from './components/Quiz';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            showInformation: false,
            userData: {

            }
        }

        this.handleAnswerClick = this.handleAnswerClick.bind(this);
        this.handleNextQuestion = this.handleNextQuestion.bind(this);
    }

    componentWillMount() {

        this.setState({
            questionData: QuizQuestions
        });
    }

    handleAnswerClick(choice, choiceText) {

        let answerStatus = false;

        if (choice === this.state.questionData[this.state.current].correct) {
            answerStatus = true;
            // console.log('correct');
        } else {
            // this.setState({incorrect: this.state.incorrect + 1})
            // console.log('incorrect');
        }

        this.setState({
            showInformation: true,
            userData: update(this.state.userData, {$merge: {[this.state.current]: {'answer':choiceText, 'status': answerStatus}}})
        });
    }

    handleNextQuestion() {

        if (this.state.current < ( this.state.questionData.length - 1) ) {
            // console.log('next question');

            this.setState({
                current: this.state.current + 1,
                showInformation: false
            });

        } else {
            // console.log('end of questions');

            this.setState({
                showInformation: false
            });
        }

    }

    render() {
        return (
            <div className="quiz">
                
                <Quiz
                    questionDataSet={this.state.questionData[this.state.current]}
                    handleAnswerClick={this.handleAnswerClick}
                    handleNextQuestion={this.handleNextQuestion}
                    showInformation={this.state.showInformation}
                    userData={this.state.userData[this.state.current]}
                />

            </div>
        );
    }
}

export default App;
