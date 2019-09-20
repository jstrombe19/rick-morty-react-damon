import React from 'react'
import Card from '../Cards/Card'

export default function CardContainer({characters, setActiveCard}) {

    const characterCards = characters.map(character => (
        <Card character={character} setActiveCard={setActiveCard} />
    ))

    return (
        <div className='card-container'>
            {characterCards}
        </div>
    )
}
