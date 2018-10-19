import React, { Component } from 'react';
import update from 'immutability-helper';
import { HashRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './containers/home/Home';
import Profile from './containers/profile/Profile';
import Quiz from './containers/quiz/Quiz';
import QuestionData from './api/QuestionData';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            profile: {
                company: '',
                department: '',
                nickname: ''
            },
            questionCount: 0,
            questionCurrent: 0,
            questionData: [],
            section: 'question',
            userAnswers: []
        }

        this.handleNicknameChange = this.handleNicknameChange.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);

        this.handleAnswerClick = this.handleAnswerClick.bind(this);
        this.handleNextQuestion = this.handleNextQuestion.bind(this);
    }

    componentWillMount() {

        const questionCount = QuestionData.length;

        this.setState({
            questionCount: questionCount,
            questionData: QuestionData
        })
    }

    handleNicknameChange(nickname) {

        this.setState({
            profile: update(this.state.profile, {
                $merge: {
                    nickname: nickname
                }
            })
        });
    }

    handleCompanyChange(company) {

        this.setState({
            profile: update(this.state.profile, {
                $merge: {
                    company: company
                }
            })
        });
    }

    handleDepartmentChange(department) {

        this.setState({
            profile: update(this.state.profile, {
                $merge: {
                    department: department
                }
            })
        });
    }

    handleAnswerClick(userAnswer, userAnswerText) {
        let answerStatus = false;
        let correctAnswer = this.state.questionData[this.state.questionCurrent].correct;

        if (userAnswer === correctAnswer) {
            answerStatus = true
        }

        this.setState({
            section: 'information',
            userAnswers: update(
                this.state.userAnswers,
                {
                    $merge: {
                        [this.state.questionCurrent] : {
                            'answer': userAnswerText,
                            'status': answerStatus
                        }
                    }
                }
            )
        });
    }

    handleNextQuestion() {

        if (this.state.questionCurrent < (this.state.questionCount - 1)) {
            // console.log('next question');

            this.setState({
                questionCurrent: this.state.questionCurrent + 1,
                section: 'question'
            })

        } else {
            // console.log('no more questions');

            this.setState({
                section: 'result'
            })
        }
    }

    render() {
        console.log(this.state);
        return (

            <div className="app container">

                <Router>

                    <Route render={({ location }) => (
                        <TransitionGroup>

                            <CSSTransition key={location.pathname} classNames="slide" timeout={500}>
                                <Switch location={location}>
                                    <Route
                                        exact
                                        path="/"
                                        component={Home}
                                    />
                                    <Route
                                        path="/profile"
                                        render={(props) => <Profile {...props}
                                            onNicknameChange={this.handleNicknameChange}
                                            onCompanyChange={this.handleCompanyChange}
                                            onDepartmentChange={this.handleDepartmentChange}
                                            profileData={this.state.profile}
                                        />}
                                    />
                                    <Route
                                        path="/quiz"
                                        render={(props) => {

                                                if (this.state.profile.nickname === '') {
                                                    return <Redirect to="/" />
                                                } else {
                                                    return (
                                                        <TransitionGroup>
                                                            <CSSTransition key={this.state.section} classNames="slide" timeout={500}>
                                                                <Quiz {...props}
                                                                    handleAnswerClick={this.handleAnswerClick}
                                                                    handleNextQuestion={this.handleNextQuestion}
                                                                    profileData={this.state.profile}
                                                                    questionCount={this.state.questionCount}
                                                                    questionCurrent={this.state.questionCurrent}
                                                                    questionData={this.state.questionData[this.state.questionCurrent]}
                                                                    section={this.state.section}
                                                                    userAnswers={this.state.userAnswers}
                                                                />
                                                            </CSSTransition>
                                                        </TransitionGroup>
                                                    )
                                                }
                                            }
                                        }
                                    />

                                </Switch>
                            </CSSTransition>

                        </TransitionGroup>
                    )}/>


                </Router>

            </div>

        );
    }
}

export default App;
