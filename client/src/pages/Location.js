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
                <button onClick={()=>navigate(`/locations/${id}/edit`)}>Edit</button>
                <button onClick={()=>deleteLocation(id)}>Delete</button>
                <button onClick={()=>navigate(`/locations/${id}`, {state: props})}>Show</button>
            </div>
        </div>
    )
}

export default Location