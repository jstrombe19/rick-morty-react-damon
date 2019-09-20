import React, { Component } from 'react';
import './App.css';
import Container from './components/Containers/Container'

class App extends Component {

  state = {
    characters: []
  }

  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(result => this.setState({
        characters: result.results
      }))
  }

  render() {
    return (
      <div className="App">
        {this.state.characters.length > 0 ? <Container characters={this.state.characters} /> : null }
      </div>
    )
  }
  
}

export default App;
