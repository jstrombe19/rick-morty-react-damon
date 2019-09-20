import React from 'react'
import './Cards.css'

export default function Card({character, setActiveCard, activeCard}) {

    const {image, name, species, gender} = character


    return (
        <div className={ activeCard ? 'active-card' : 'card'} onClick={() => setActiveCard(character)}>
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
