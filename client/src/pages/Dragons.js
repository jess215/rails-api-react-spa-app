import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Dragon from './Dragon'
import DragonForm from './DragonForm'

const Dragons = () => {
    const [dragons, setDragons] = useState([])
        useEffect(() => {
            getDragons()
        }, [])

    const getDragons = async () => {
        try {
            let res = await axios.get('/api/dragons')
            setDragons(res.data)
        } catch (err) {
            alert('error in getDragons')
        }
    }

    const addDragon = async (dragon) => {
        try {
            let res = await axios.post('/api/dragons', dragon)
            setDragons([res.data, ...dragons])
        } catch (err) {
            alert('error in addDragon')
        }
    }

    const deleteDragon = async (id) => {
        try {
            let res = await axios.delete(`/api/dragons/${id}`)
            setDragons(dragons.filter((d) => d.id !== res.data.id))
        } catch (err) {
            alert('error in deleteDragon')
        }
    }

    const updateDragon = async (dragon) => {
        try {
            let res = await axios.put(`/api/dragons/${dragon.id}`, dragon)
            const updatedDragons = dragons.map(d => d.id === res.data.id ? res.data : d)
            setDragons(updatedDragons)
        } catch (err) {
            alert('error in updateDragon')
        }
    }

    const renderDragons = () => {
        return dragons.map((d) => {
            return (
                <Dragon
                    key={d.id}
                    id={d.id}
                    color={d.color}
                    variety={d.variety}
                    element={d.element}
                    personality={d.personality}
                    alignment={d.alignment}
                    age={d.age}
                    hp={d.hp}
                    cr={d.cr}
                />
            )
        })
    }

    return (
        <div className="box">
            <h1>Dragons</h1>
            <DragonForm addDragon={addDragon} />
            <hr />
            <p>{renderDragons()}</p>
        </div>
    )
}


export default Dragons