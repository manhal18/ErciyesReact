import React, { useState } from 'react'

export default function NumbersList(){
    let [numbers, setNumbers] = useState([])
    function add(){
        var randomNumber = Math.floor(Math.random() * 100) + 1
        if(!numbers.includes(randomNumber)){
            setNumbers(prev => [...prev, randomNumber])
        }
    }
    return (
        <>
            <button onClick={add}>Add</button>
            <ul>
                {
                    numbers.map(item => <li>{item}</li>) 
                }
            </ul>
        </>
    )
}

