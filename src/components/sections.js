import React, { Component } from 'react';
import greetings from '../tasks/greetings.js';
import colors from '../tasks/colors.js';
import Section from './section.js';


class Sections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greetings: greetings,
            colors: colors,
            currentSection: null
        };
    }

    returnToSections = () => {
        this.setState({currentSection: null});
    }


    showSection = (event) => {
        console.log(event.target.textContent.toLowerCase());
        const section = event.target.textContent.toLowerCase();
        console.log(this.state[section]);
        this.setState({currentSection: section});
    }


    render() {
        if (this.state.currentSection == null) {
            return(
                <div className='verticalContainer'>
                    <button onClick={this.showSection}>Greetings</button>
                    <button onClick={this.showSection}>Colors</button>
                    <button onClick={this.showSection}>Persons</button>
                    <button onClick={this.showSection}>Animals</button>
                </div>
             );
        } else {
            return <Section 
                    returnToSections={this.returnToSections}
                    currentSection={this.state.currentSection}
                    tasks={this.state[this.state.currentSection]}
                   />;
        }
    }
  }
  
export default Sections;