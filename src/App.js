import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import characters from "./friends.json"
import Jumbotron from './components/Jumbotron'
import Card from './components/Card'

class App extends Component {
  alertMe = id =>{
    alert("I've been clicked" + id)
  }
  render() {
    return (

        <Jumbotron>
          {characters.map(character => {
            return <Card alertMe ={this.alertMe} id={character.id} name={character.name} alt={character.name} image={character.image} />
          })}
        </Jumbotron>
    )
  }
}

export default App;
