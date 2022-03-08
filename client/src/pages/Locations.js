import React, { useContext, useEffect } from 'react'
import { DataContext } from '../providers/DataProvider'
import Location from './Location'

const Locations = (props)=>{
    const {locations} = useContext(DataContext)
    useEffect(() => {
        console.log('Locations mounted')
    },[])
    const renderLocations = () => {
        return locations.map((location)=> {
            return <Location key={location.id}{...location} />
        })
    }
    return (
        <div className='border'>
            <h1>Locations</h1>
            <div className='border'>
                <code>{renderLocations()}</code>
            </div>
            <div className='border'>
                <code>{JSON.stringify(locations)}</code>
            </div>
        </div>
    )
}

export default Locations

