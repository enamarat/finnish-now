import React, { Component } from 'react';

class Exercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            currentExercise: 0,
            correctAnswers: 0,
            answerChecked: false,
            tasks: this.props.tasks,
            answerStatus: 'Correct!',
            lastExercise: false,
            finalScreen: false
        };
    }


    enterSpecialCharacter = (event) => {
        this.setState({userInput: this.state.userInput + event.target.textContent});
    }

    handleChange = (event) => {
        this.setState({userInput: event.target.value});
    }

    changeExercise = () => {
        if (this.state.currentExercise < this.state.tasks.length-1) {
            this.setState({currentExercise: this.state.currentExercise + 1});
            this.setState({answerChecked: false});
            this.setState({userInput: ""});
        } else {
            this.setState({lastExercise: true});
            this.setState({finalScreen: true});
        }
    }


    checkExercise = () => {
        const currentTask = this.state.tasks[this.state.currentExercise].finnish.toLowerCase().split(" ");
        let userAnswer = this.state.userInput.toLowerCase();
        userAnswer = userAnswer.replace(/\r?\n|\r/g, "").replace(/\s{2,}/g, " ").split(" ");
        let correctAnswer = true;

        for (let i = 0; i < currentTask.length; i++) {
            if (currentTask[i] != userAnswer[i]) {
                correctAnswer = false;
            }
        }

        if (correctAnswer == true) {
            this.setState({
                answerStatus: 'Correct!',
                correctAnswers: this.state.correctAnswers +1
            });
        } else {
            this.setState({answerStatus: 'Wrong!'});
        }
        this.setState({answerChecked: true});
    }


    handleKeyPress = (event) => {
        if (event.key == 'Enter' && !this.state.answerChecked) {
           this.checkExercise();
        } else  if (event.key == 'Enter' && this.state.answerChecked) {
            this.changeExercise();
        }
    }


    render() {
     if (this.state.finalScreen == true) {
       return (
        <div className='verticalContainer'>
            <p className='frame'>{this.state.correctAnswers}/{this.state.tasks.length}</p>
            {this.state.correctAnswers == 0 ? <p className='finalScore'>Try again!</p> : null}
            {this.state.correctAnswers == this.state.tasks.length ? <p className='finalScore'>Amazing!</p> : null}
            {this.state.correctAnswers < this.state.tasks.length && this.state.correctAnswers > 0 ? <p className='finalScore'>Nice try!</p> : null}
            <button onClick={this.props.returnToSections}>Return</button>
        </div>
       );
     } else {
        return(
            <div className='verticalContainer'>
                <h2 className="sectionTitle">{this.props.currentSection.toUpperCase()}</h2>
                <p className="exerciseText">{this.state.tasks[this.state.currentExercise].english}</p>
                <textarea value={this.state.userInput} className="userInput" onChange={this.handleChange} onKeyPress={this.handleKeyPress}></textarea>
                {this.state.answerStatus == 'Wrong!' && this.state.answerChecked ? <p className='hint'>{this.state.tasks[this.state.currentExercise].finnish}</p> : <p></p>}
                <div className="specialCharsContainer">
                    <button onClick={this.enterSpecialCharacter} className="specialCharButton">ä</button>
                    <button onClick={this.enterSpecialCharacter} className="specialCharButton">ö</button>
                </div>
                {!this.state.answerChecked ? <button onClick={this.checkExercise}>Check</button> : null}
                {this.state.answerChecked && !this.state.lastExercise ? <button onClick={this.changeExercise}>Next</button> : null}
                <button onClick={this.props.returnToSections}>Return</button>
                <div className={`statusAnswerDiv ${this.state.answerStatus == 'Correct!' ? 'statusCorrect' : 'statusWrong'} ${this.state.answerChecked ? 'statusAnswerDivTrans' : null}`}>
                    <h2>{this.state.answerStatus}</h2>
                </div>
            </div>
         );
     }
    }
}
  
export default Exercise;