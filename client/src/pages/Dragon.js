import React from 'react'
import DragonForm from './DragonForm'

const Dragon = (props) => {
    const {id, variety, color, element, personality, alignment, age, hp, cr, deleteDragon, updateDragon} = props
    return (
        <div className='box'>
            <p>Color: {color}</p>
            <p>Type: {variety}</p>
            <p>Alignment: {alignment}</p>
            <p>Breath Weapon/s: {element}</p>
            <p>Personality: {personality}</p>
            <p>Age: {age}</p>
            <p>HP: {hp} | CR: {cr}</p>
            <p>ID: {id}</p>
            <button onClick={() => deleteDragon(id)}>Delete Dragon</button>
            <DragonForm id={id} color={color} updateDragon={updateDragon} />
        </div>
    )
}

export default Dragon