import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useLocation } from 'react-router-dom'
import { DataContext } from '..//providers/DataProvider'


const LocationShow = (props)=>{
    const params = useParams()
    const {state} = useLocation()

    useEffect(()=> {
        getLocationFromProvider()
        getLocationFromAPI()
        setLocationFromRouter(state)
    },[])

    const [locationFromDataProvider, setLocationFromDataProvider] = useState(null)
    const [locationFromAPI, setLocationFromAPI] = useState(null)
    const [locationFromRouter, setLocationFromRouter] = useState(null)
    const {locations} = useContext(DataContext)

    const getLocationFromAPI = async()=> {
        try {
            let res = await axios.get(`/api/locations/${params.id}`)
            setLocationFromAPI(res.data)
        } catch(err) {
            alert('err')
        }
    }

    const getLocationFromProvider =() => {

        let location = locations.find(f => f.id === parseInt(params.id))
        console.log(locations)
        console.log(location)
        setLocationFromDataProvider(location)
    }


    return (
        <div className='border'>
            <h1>LocationShow</h1>
            <p>id: {params.id}</p>
            <p>locationFromDataProvider</p>
            <code>{JSON.stringify(locationFromDataProvider)}</code>
            <p>locationFromAPI</p>
            <code>{JSON.stringify(locationFromAPI)}</code>
            <p>factFromRouter</p>
            <code>{JSON.stringify(locationFromRouter)}</code>
        </div>
    )
}

export default LocationShow