import React from 'react'
import './Cards.css'

export default function Card({character, setActiveCard, activeCard, characterAction, savedCharacters}) {

    const {image, name, species, gender} = character

    const handleClick = (character) => (
      (savedCharacters.includes(character)
        ? characterAction(character)
        : (characterAction(character),
          setActiveCard(character))
      )
    )

    return (
        <div className={ activeCard ? 'active-card' : 'card'} onClick={() => (activeCard ? null : handleClick(character))}>
            <h3>{name}</h3>
            <img src={image} />
            {activeCard
                ? ( <section className='details'>
                    <p>{gender}</p>
                    <p>{species}</p>
                    </section>
            )
            :null
        }

        </div>
    )
}
