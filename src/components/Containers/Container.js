import React, {useState} from 'react'
import CardContainer from './CardContainer'
import SavedContainer from './SavedContainer'
import Card from '../Cards/Card'
import './Container.css'

export default function Container({characters, savedCharacters, saveCharacter, removeCharacter}) {
    const [activeCard, setActiveCard] = useState(null)

    return (
        <div className='container'>
            <SavedContainer
              savedCharacters={savedCharacters}
              characterAction={removeCharacter}
            />
            <CardContainer
              characters={characters}
              setActiveCard={setActiveCard}
              characterAction={saveCharacter}
              savedCharacters={savedCharacters}
            />
            {activeCard ?  <Card character={activeCard}  activeCard={true} setActiveCard={setActiveCard} /> : null }
        </div>
    )
}
