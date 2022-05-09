import React, { Component } from 'react';

class Exercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            currentExercise: 0,
            correctAnswers: 0,
            answerChecked: false
        };
    }


    enterSpecialCharacter = (event) => {
        this.setState({userInput: this.state.userInput + event.target.textContent});
    }

    handleChange = (event) => {
        this.setState({userInput: event.target.value});
    }

    changeExercise = () => {
        if (this.state.currentExercise < this.props.tasks.length-1) {
            this.setState({currentExercise: this.state.currentExercise + 1});
            this.setState({answerChecked: false});
        } else {
            console.log("Stop!");
        }
    }

    checkExercise = () => {
        if (this.state.currentExercise < this.props.tasks.length-1) {
            this.setState({answerChecked: true});
        }
    }


    render() {
     return(
        <div className='verticalContainer'>
            <h2 className="sectionTitle">{this.props.currentSection.toUpperCase()}</h2>
            <p className="exerciseText">{this.props.tasks[this.state.currentExercise].english}</p>
            <textarea value={this.state.userInput} className="userInput" onChange={this.handleChange}></textarea>
            <div className="specialCharsContainer">
                <button onClick={this.enterSpecialCharacter} className="specialCharButton">ä</button>
                <button onClick={this.enterSpecialCharacter} className="specialCharButton">ö</button>
            </div>
            <button onClick={this.checkExercise}>Check</button>
            {this.state.answerChecked ? <button onClick={this.changeExercise}>Next</button> : null}
            <button onClick={this.props.returnToSections}>Return</button>
        </div>
     );
    }
}
  
export default Exercise;