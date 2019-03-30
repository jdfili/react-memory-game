import React, { Component } from 'react';
import './App.css';
import characters from "./friends.json"
import Wrapper from "./components/Wrapper"
import Jumbotron from './components/Jumbotron'
import Card from './components/Card'
import Nav from './components/Nav'

class App extends Component {

  state = {
    score: 0,
    characters: characters,
    baseCharacters: characters,
    highScore: 0,
    feedBack: ""
  }

  //compares the character id that was clicked, with the remaining character.id still in the characters array
  guessed = id => {

    const checkArr = this.state.characters.map(character => {
      if (character.id === id) {
        return true
      } else return false
    });
    this.checkArr(checkArr, id)
  };
  //carries out proper steps depending on whether or not a match was found
  checkArr = (arr, id) => {
    if (arr.length === 1 && arr.includes(true)) {
      this.setState({ feedBack: "You win!" });
      this.setState({ highScore: this.state.baseCharacters.length });
      this.reset();
    }
    else if (arr.includes(true)) {
      this.setState({ score: this.state.score + 1 });
      const characters = this.state.characters.filter(character => character.id !== id);
      this.setState({ characters: characters });
      this.setState({ feedBack: "You've guessed correctly" })
      this.shuffle(this.state.baseCharacters)
    } else {
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: this.state.score });
      };
      this.setState({ feedBack: "You've guessed incorrectly" })
      this.reset();
    }
  };
  //resets to original state
  reset = () => {
    this.shuffle(this.state.baseCharacters)
    this.setState({ score: 0 })
    this.setState({ characters: this.state.baseCharacters })
  };
  //used to shuffle the baseCharacter array which displays the characters to the user
  shuffle = array => {
    array.sort(() => Math.random() - 0.5);
    this.setState({ baseCharacters: array })
  };
  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          highScore={this.state.highScore}
          feedback={this.state.feedBack ? this.state.feedBack : "Click a character to begin"} />
        <Wrapper>
          <Jumbotron>
            {this.state.baseCharacters.map(character => {
              return <Card
                onClick={this.guessed}
                key={character.id}
                id={character.id}
                alt={character.name}
                image={character.image} />
            })}
          </Jumbotron>
        </Wrapper>
      </div>
    )
  }
}

export default App;
