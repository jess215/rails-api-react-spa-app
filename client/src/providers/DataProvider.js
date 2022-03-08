import React, { useEffect, useState } from "react";
import axios from 'axios'

export const DataContext = React.createContext();

const DataProvider = (props) => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        console.log('DataProvider mounted')
        getLocations()
    },[])

    const getLocations = async() => {
        try {
            let res = await axios.get('/api/locations')
            setLocations(res.data)
        } catch(err){
            alert('error getting locations')
            console.log(err.response.data)
        }
    }

    const createLocation = async(linkObjFromForm) => {
        try {
            let res = await axios.post('/api/locations', linkObjFromForm)
            setLocations([res.data, ...locations]) 
        } catch(err) {
            alert('error creating location')
            console.log(err.response)
        }
    }

    const updateLocation = async(linkObjFromForm) => {
        if(!linkObjFromForm.id){
            alert('no id given, will not work')
            return
        } try {
            let res = await axios.put(`/api/locations/${linkObjFromForm.id}`, linkObjFromForm)

            let updatedLocation = res.data
            let updateLocations = locations.map(location => location.id === updatedLocation.id ? updatedLocation : location)
            setLocations(updateLocations)
        } catch(err) {
            alert('error updating location')
            console.log(err.response)
        }
    }

    const deleteLocation = async(id) => {
        try{
            let res = await axios.delete(`/api/locations/${id}`)
            console.log(res)
            let filteredLocations = locations.filter(l => l.id !== id)
            setLocations(filteredLocations)
        } catch(err) {
            alert('error deleting location')
            console.log(err.response)
        }
    }

    const locationProviderThing = {
        getLocations,
        createLocation,
        updateLocation,
        deleteLocation,
        locations
    };

    return (
        <DataContext.Provider value={locationProviderThing}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider