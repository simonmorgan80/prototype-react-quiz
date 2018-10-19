import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1,
        };

        this.handleNicknameChange = this.handleNicknameChange.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        this.handleContinue = this.handleContinue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNicknameChange(event) {
        this.props.onNicknameChange(event.target.value);
    }

    handleCompanyChange(event) {
        this.props.onCompanyChange(event.target.value);
    }

    handleDepartmentChange(event) {
        this.props.onDepartmentChange(event.target.value);
    }

    handleContinue(event) {

        if (this.state.step < 4) {
            this.setState({step: this.state.step + 1});
        } else {
            this.props.history.push('/quiz')
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    renderNickname() {

        return (
             <fieldset>
                <h2>Lets start with a nickname</h2>

                <div className="form-group">
                    <label>Nickname: </label>
                    <input type="text" value={this.props.profileData.nickname} onChange={this.handleNicknameChange} className="form-control" />
                </div>

                <button className={this.props.profileData.nickname ? 'button' : 'button button--disabled'} onClick={() => this.handleContinue()} disabled={!this.props.profileData.nickname}>
                    Continue
                </button>

            </fieldset>
        )
    }

    renderCompany() {

        return (
            <fieldset>
                <h2>{this.props.profileData.nickname}, Who do you work for</h2>
                <div className="form-group">
                    <label>Company: </label>
                    <select value={this.props.profileData.company} onChange={this.handleCompanyChange} className="form-control">
                        <option value="">Select</option>
                        <option value="company1">Company 1</option>
                        <option value="company2">Company 2</option>
                        <option value="company3">Company 3</option>
                        <option value="company3">Company 4</option>
                    </select>
                </div>

                <button className={this.props.profileData.company ? 'button' : 'button button--disabled'} onClick={() => this.handleContinue()} disabled={!this.props.profileData.company}>
                    Continue
                </button>
            </fieldset>
        )
    }

    renderDepartment() {

        return (

            <fieldset>
                <h2>And which department do you work in?</h2>
                <div className="form-group">
                    <label>Department: </label>
                    <select value={this.props.profileData.department} onChange={this.handleDepartmentChange} className="form-control">
                        <option value="">Select</option>
                        <option value="department1">Department 1</option>
                        <option value="department2">Department 2</option>
                        <option value="department3">Department 3</option>
                        <option value="department4">Department 4</option>
                    </select>
                </div>

                <button className={this.props.profileData.department ? 'button' : 'button button--disabled'} onClick={() => this.handleContinue()} disabled={!this.props.profileData.department}>
                    Continue
                </button>




            </fieldset>

        )
    }

    renderSummary() {

        return (
            <div className="">

                <h1>OK {this.props.profileData.nickname}, lets start the quiz</h1>

                <p>
                    You work for {this.props.profileData.company} in the {this.props.profileData.department}
                </p>

                <button className="button" onClick={() => this.handleContinue()}>
                    Lets Begin
                </button>

            </div>
        )
    }

    renderProfileStep() {

        switch(this.state.step) {
            case 1:
                return this.renderNickname();
            case 2:
                return this.renderCompany();
            case 3:
                return this.renderDepartment();
            case 4:
                return this.renderSummary();
            default:
                return null;
        }

    }

    render() {
        return (
            <TransitionGroup>
                <CSSTransition key={this.state.step} classNames="slide" timeout={400}>

                    <div className="page">
                        <div className="page__content">

                            <form onSubmit={this.handleSubmit}>

                                {this.renderProfileStep()}

                            </form>

                        </div>
                    </div>

                </CSSTransition>
            </TransitionGroup>
        )
    }
}

export default Profile;
