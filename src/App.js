import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
export default class App extends Component {
  state = {
    person:[
      {name :'Shahriar',age:25},
      {name :'Alex',age:23},
      {name :'Sarah',age:22} 
    ]
  }
  render(){
    return(
      <div className="App">
      <header className="App-header">
       <Person name={this.props.person[0].name} age={this.props.person[0].age}/>
       <Person name={this.props.person[1].name} age={this.props.person[1].age}>and my hobbies is : Coding</Person>
       <Person name={this.props.person[2].name} age={this.props.person[2].age}/>
      </header>
    </div>
    );
  }
}