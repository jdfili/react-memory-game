import React, { Component } from 'react';
import './App.css';
import characters from "./friends.json"
import Wrapper from "./components/Wrapper"
import Jumbotron from './components/Jumbotron'
import Card from './components/Card'

class App extends Component {

  state = {
    score: 0,
    characters: characters,
    baseCharacters: characters,
    highScore: 0,
    feedBack: ""
  }

  //increments score +1
  score = () => {
    this.setState({ score: this.state.score + 1 });
  };
  //compares the character id that was clicked, with the remaining character.id still in the characters array
  guessed = id => {

    const checkArr = this.state.characters.map(character => {
      if (character.id === id) {
        return true
      } else return false
    })
    this.checkArr(checkArr, id)
  };
  //carries out proper steps depending on whether or not a match was found
  checkArr = (arr, id) => {
    if (arr.includes(true)) {
      this.score();
      const characters = this.state.characters.filter(character => character.id !== id);
      this.setState({ characters: characters });
      if (this.state.score === 10) {
        this.setState({ feedBack: "Congrats, you win!" })
        this.reset();
      } else {
        this.setState({ feedBack: "You've guessed correctly" })
      }
      this.shuffle(this.state.baseCharacters)
    } else {
      this.setState({ feedBack: "You've guessed incorrectly" })
      this.reset();
    }
  };
  //resets to original state
  reset = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score })
    };
    this.shuffle(this.state.baseCharacters)
    this.setState({ score: 0 })
    this.setState({ characters: this.state.baseCharacters })
  };
  //used to shuffle the baseCharacter array which displays the characters to the user
  shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
    this.setState({ baseCharacters: array })
  };
  render() {
    return (
      <Wrapper>
        <h3>Score: {this.state.score}</h3>
        <h3>High Score: {this.state.highScore}</h3>
        <h3>{this.state.feedBack ? this.state.feedBack : "Click a character to begin"}</h3>
        <Jumbotron>
          {
            this.state.baseCharacters.map(character => {
              return <Card
                onClick={this.guessed}
                alertMe={this.alertMe}
                key={character.id}
                id={character.id}
                name={character.name}
                alt={character.name}
                image={character.image} />
            })}
        </Jumbotron>
      </Wrapper>
    )
  }
}

export default App;
