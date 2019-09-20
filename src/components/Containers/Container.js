import React, {useState} from 'react'
import CardContainer from './CardContainer'
import Card from '../Cards/Card'
import './Container.css'

export default function Container({characters}) {
    const [activeCard, setActiveCard] = useState(null)

    return (
        <div className='container'>
            <CardContainer characters={characters} setActiveCard={setActiveCard}/>
            {activeCard ?  <Card character={activeCard}  activeCard={true} setActiveCard={setActiveCard} /> : null }
        </div>
    )
}
