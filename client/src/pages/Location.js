import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider'

const Location = (props)=>{
    const {deleteLocation} = useContext(DataContext)
    const navigate = useNavigate
    const {id, name, city, state, built, rating} = props
    return (
        <div className='border'>
            <h3>Haunted Location:</h3>
            <h2>{name}</h2>
            <p>{city}, {state}</p>
            <p>Built in: {built}</p>
            <p>Rating: {rating}/5</p>
            <p>ID: {id}</p>
            <div className='border' style={{display:'flex', justifyContent: 'space-around'}}>
                <p onClick={()=>navigate(`/locations/${id}/edit`, {
                    state: {id, name, city, state, built, rating},
                    })}>Edit</p>
                <p onClick={()=>deleteLocation(id)}>Delete</p>
                <p onClick={()=>navigate(`/locations/${id}`, {state: props})}>Show</p>
            </div>
        </div>
    )
}

export default Location