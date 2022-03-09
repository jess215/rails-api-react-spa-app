import React from 'react'
import DragonForm from './DragonForm'

const Dragon = (props) => {
    const {id, variety, color, element, personality, alignment, age, hp, cr, deleteDragon, updateDragon} = props
    return (
        <div className='dragonContainer'>
            <h2>{age} {color} Dragon</h2>
            <h3>{variety} | {alignment}</h3>
            <p>Breath Weapon/s: {element}</p>
            <p><b>Personality:</b></p> 
            <p>{personality}</p>
            <p><b>HP:</b> {hp} | <b>CR:</b> {cr}</p>
            <p>ID: {id}</p>
            <button onClick={() => deleteDragon(id)}>Delete Dragon</button>
            <DragonForm id={id} color={color} updateDragon={updateDragon} />
        </div>
    )
}

export default Dragon