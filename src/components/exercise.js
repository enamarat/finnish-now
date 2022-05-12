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
            lastExercise: false
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
            if (this.state.currentExercise == this.state.tasks.length-2) {
                this.setState({lastExercise: true});
            }
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
            this.setState({answerStatus: 'Correct!'});
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
     return(
        <div className='verticalContainer'>
            <h2 className="sectionTitle">{this.props.currentSection.toUpperCase()}</h2>
            <p className="exerciseText">{this.state.tasks[this.state.currentExercise].english}</p>
            <textarea value={this.state.userInput} className="userInput" onChange={this.handleChange} onKeyPress={this.handleKeyPress}></textarea>
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
  
export default Exercise;