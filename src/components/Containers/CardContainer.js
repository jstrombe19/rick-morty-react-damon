import React from 'react'
import Card from '../Cards/Card'

export default function CardContainer({characters, setActiveCard, saveCharacter}) {

    const characterCards = characters.map(character => (
        <Card
          character={character}
          setActiveCard={setActiveCard}
          saveCharacter={saveCharacter}
          key={Math.random() * characters.length}
       />
    ))

    return (
        <div className='card-container'>
            {characterCards}
        </div>
    )
}
