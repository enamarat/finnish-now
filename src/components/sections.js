import React, { Component } from 'react';
import Exercise from './exercise.js';
import greetings from '../tasks/greetings.js';
import colors from '../tasks/colors.js';
import persons from '../tasks/persons.js';
import animals from '../tasks/animals.js';
import countries from '../tasks/countries.js';


class Sections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greetings: greetings,
            colors: colors,
            persons: persons,
            animals: animals,
            countries: countries,
            currentSection: null
        };
    }

    returnToSections = () => {
        this.setState({currentSection: null});
    }


    showSection = (event) => {
        const section = event.target.textContent.toLowerCase();
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
                    <button onClick={this.showSection}>Countries</button>
                </div>
             );
        } else {
            return <Exercise 
                        returnToSections={this.returnToSections}
                        currentSection={this.state.currentSection}
                        tasks={this.state[this.state.currentSection]}
                   />;
        }
    }
  }
  
export default Sections;