import React, { Component } from 'react';
import Exercise from './exercise.js';
import greetings from '../tasks/greetings.js';
import colors from '../tasks/colors.js';
import persons from '../tasks/persons.js';
import animals from '../tasks/animals.js';
import countries from '../tasks/countries.js';
import possession from '../tasks/possession.js';


class Sections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {name: 'greetings'},
                {name: 'colors'},
                {name: 'persons'},
                {name: 'animals'},
                {name: 'countries'},
                {name: 'possession'}
            ],
            greetings: greetings,
            colors: colors,
            persons: persons,
            animals: animals,
            countries: countries,
            possession: possession,
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
            const content = this.state.sections.map((d,i) => <button key={i} onClick={this.showSection}>{d.name}</button>);
            return(
                <div className='verticalContainer'>
                    {content}
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