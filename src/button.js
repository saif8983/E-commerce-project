import { useState, useEffect } from 'react'
import React from 'react'

const Counter = () => {

    const [value, updatevalue] = useState(0)
    const [type, typeupdate] = useState("even")
    useEffect(() => { value % 2 === 0 ? typeupdate('even') : typeupdate('odd') }, [value])
    return (
        <>
            <p>{value + " " + type}</p>
            <button onClick={() => updatevalue(value + 1)}>Counter</button>

        </>
    )
}


export default Counter