import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] Inside constructor')
    this.state = {
      persons: [
        { id: '6y6',name: 'Remya', age: 30},
        { id: 'hj',name: 'Libin', age:30},
        { id: 'yhn',name: 'Renjith', age:32}
      ],
      otherState: 'some other state',
      flag: false
    }
  }
  componentWillMount(){
    console.log('[App.js] Inside componentWillMount'); 
  }
  componentDidMount(){
    console.log('[App.js] Inside componentdidMount');
  }
  // state = {
  //   persons: [
  //     { id: '6y6',name: 'Remya', age: 30},
  //     { id: 'hj',name: 'Libin', age:30},
  //     { id: 'yhn',name: 'Renjith', age:32}
  //   ],
  //   otherState: 'some other state',
  //   flag: false
  // }

  
  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; 
    });
    const person = {
      ...this.state.persons[personIndex]
    };
      person.name =event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;
    this.setState({
      persons: persons  })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }
toggleHandler=()=>{
  const localFlag = this.state.flag;
  this.setState({flag: !localFlag});
}

  render() {
    console.log('[App.js] inside Render');
   let  persons = null;
    if(this.state.flag){
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
        appTitle={this.props.title}
         persons={this.state.persons}
         clicked={this.toggleHandler}
         flag={this.state.flag}
        />
        {persons} 
      </div>
    );
    
  }
}

export default App;   
