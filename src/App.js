import React, { Component } from 'react';
import './App.css';
import Container from './components/Containers/Container'

class App extends Component {

  state = {
    characters: [],
    savedCharacters: []
  }

  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(result => this.setState({
        characters: result.results
      }))
  }

  saveCharacter = (character) => (
    (this.state.savedCharacters.includes(character)
    ? null
    : this.setState({
        savedCharacters: [...this.state.savedCharacters, character]
      })
    )
  )

  removeCharacter = (character) => (
    (this.state.savedCharacters.includes(character)
    ? this.setState({
      savedCharacters: this.state.savedCharacters.filter(c => c !== character)
    })
    : null
    )
  )

  render() {
    return (
      <div className="App">
        {this.state.characters.length > 0
          ? <Container
              characters={this.state.characters}
              savedCharacters={this.state.savedCharacters}
              saveCharacter={this.saveCharacter}
              removeCharacter={this.removeCharacter}
            />
          : null }
      </div>
    )
  }

}

export default App;
