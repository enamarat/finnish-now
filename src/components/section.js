import React, { Component } from 'react';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ""
        };
    }


    enterSpecialCharacter = (event) => {
        this.setState({userInput: this.state.userInput + event.target.textContent});
    }

    handleChange = (event) => {
        this.setState({userInput: event.target.value});
    }


    render() {
     return(
        <div className='verticalContainer'>
            <h2 className="sectionTitle">{this.props.currentSection.toUpperCase()}</h2>
            <p>{this.props.tasks[0].english}</p>
            <textarea value={this.state.userInput} className="userInput" onChange={this.handleChange}></textarea>
            <div className="specialCharsContainer">
                <button onClick={this.enterSpecialCharacter} className="specialCharButton">ä</button>
                <button onClick={this.enterSpecialCharacter} className="specialCharButton">ö</button>
            </div>
            <button onClick={this.showSection}>Check</button>
            <button onClick={this.props.returnToSections}>Return</button>
        </div>
     );
    }
}
  
export default Section;