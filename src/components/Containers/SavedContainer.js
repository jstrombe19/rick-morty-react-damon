import React from 'react';
import Card from '../Cards/Card.js';

export default function SavedContainer({savedCharacters}) {

  const characterCards = savedCharacters.map(character => (
      <Card
        character={character}
        key={Math.random() * savedCharacters.length}
     />
  ))

  return (
      <div className='card-container'>
          {characterCards}
      </div>
  )
}
