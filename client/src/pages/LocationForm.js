import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider'

const LocationForm = (props)=>{
    const navigate = useNavigate()
    const { addLocation, updateLocation } = useContext(DataContext)
    const { state } = useLocation()
    const [name, setName] = useState(state.name)
    const [city, setCity] = useState(state.city)
    const [us, setUs] = useState(state.us)
    const [built, setBuilt] = useState(state.built)
    const [rating, setRating] = useState(state.rating)
    useEffect(() => {
        console.log('LocationForm mounted')
    },[])

    const handleSubmit = (e) => {
        console.log('handleSubmit called')
        e.preventDefault();
        if (rating <= 0 || rating >= 5) {
            alert('invalid rating')
            return
        }
        if (state && state.id) {
            console.log('update')
            updateLocation({ name, city, us, built, rating, id: state.id}, navigate)
        } else {
            console.log('create')
            console.log({name, city, us, built, rating}, navigate)
        }
    }

    return (
        <div className='border'>
            <h1>LocationForm</h1>
            <form onSubmit={handleSubmit}>
                <p>Location:</p>
                <input value={name} onChange={(e)=>setName(e.target.value)}></input>
                <p>City:</p>
                <input value={city} onChange={(e)=>setCity(e.target.value)}></input>
                <p>State:</p>
                <input value={us} onChange={(e)=>setUs(e.target.value)}></input>
                <p>City:</p>
                <input value={built} onChange={(e)=>setBuilt(e.target.value)}></input>
                <p>Rating:</p>
                <input
                    step="any"
                    type="number"
                    min="0"
                    max="5"
                    value={rating}
                    onChange={(e)=> setRating(e.target.value)}
                />
                <button>{state && state.id ? "Edit" : "New"}</button>
            </form>
        </div>
    )
}

export default LocationForm