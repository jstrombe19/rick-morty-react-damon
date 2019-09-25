import React, {useState} from 'react'
import CardContainer from './CardContainer'
import SavedContainer from './SavedContainer'
import Card from '../Cards/Card'
import './Container.css'

export default function Container({characters, savedCharacters, saveCharacter}) {
    const [activeCard, setActiveCard] = useState(null)

    return (
        <div className='container'>
            <SavedContainer savedCharacters={savedCharacters} />
            <CardContainer characters={characters} setActiveCard={setActiveCard} saveCharacter={saveCharacter}/>
            {activeCard ?  <Card character={activeCard}  activeCard={true} setActiveCard={setActiveCard} /> : null }
        </div>
    )
}
