import React from 'react';
import Card from '../Cards/Card.js';

export default function SavedContainer({savedCharacters, characterAction, setActiveCard}) {

  const characterCards = savedCharacters.map(character => (
      <Card
        character={character}
        savedCharacters={savedCharacters}
        characterAction={characterAction}
        key={Math.random() * savedCharacters.length}
     />
  ))

  return (
      <div className='card-container'>
          {characterCards}
      </div>
  )
}
