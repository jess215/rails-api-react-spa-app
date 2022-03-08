import React, { useEffect } from 'react'

const LocationForm = (props)=>{
    useEffect(() => {
        console.log('LocationForm mounted')
    },[])

    return (
        <div className='border'>
            <h1>LocationForm</h1>
        </div>
    )
}

export default LocationForm