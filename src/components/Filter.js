import React, { useState } from 'react'

const Filter = ({ data }) => {
    //const [filtre, setFiltre] = useState("");
    // const d = (e) => {
    //     //setFiltre(e.target.value)
    //     handleFiltre(e.target.value)
    // }
    return (
        <div>
            <input onChange={(e) => {
                data(e.target.value)
            }} className="filter" />
        </div>
    )
}

export default Filter
