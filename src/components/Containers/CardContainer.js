import React from 'react'
import Card from '../Cards/Card'

export default function CardContainer({characters, setActiveCard, characterAction, savedCharacters}) {

    const characterCards = characters.map(character => (
        <Card
          character={character}
          savedCharacters={savedCharacters}
          setActiveCard={setActiveCard}
          characterAction={characterAction}
          key={Math.random() * characters.length}
       />
    ))

    return (
        <div className='card-container'>
            {characterCards}
        </div>
    )
}
