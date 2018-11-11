import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '6y6',name: 'Remya', age: 30},
      { id: 'hj',name: 'Libin', age:30},
      { id: 'yhn',name: 'Renjith', age:32}
    ],
    otherState: 'some other state',
    flag: false
  }

  
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

    };
   let  persons = null;
    if(this.state.flag){
      persons = (
        <div>
          {
            this.state.persons.map((person,index) => {
              return <Person
              click={(index) =>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event,person.id)}
              />
            })
          }
         </div>
      );
    style.backgroundColor='red';
    
    }
    const classes=[];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>Hi,I'm a React App</h1>
        <p className = {classes.join(' ')}>This is really working </p>
        <button 
        onClick={this.toggleHandler}
        style = {style}
        >Switch Name</button>
        {persons}
        
      </div>
    );
    
  }
}

export default App;   
