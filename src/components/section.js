import React, { Component } from 'react';

class Section extends Component {
    constructor(props) {
        super(props);
       // this.state = {greetings: greetings};
    }

  
    render() {
     return(
        <div className='verticalContainer'>
            <h2 className="sectionTitle">{this.props.currentSection.toUpperCase()}</h2>
            <p>{this.props.tasks[0].english}</p>
            <textarea className="userInput"></textarea>
            <button onClick={this.showSection}>Check</button>
            <button onClick={this.props.returnToSections}>Return</button>
        </div>
     );
    }
}
  
export default Section;