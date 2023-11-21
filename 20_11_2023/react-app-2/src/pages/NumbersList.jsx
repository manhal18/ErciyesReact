import React, { useState } from 'react'

export default function NumbersList(){
    let [numbers, setNumbers] = useState([])
    let [numbers2, setNumbers2] = useState([1, 5, 6, 9, 3, 18, 2, 20, 10, 11, 30, 41, 50, 62, 70, 88, 77, 90, 92, 99])

    function add(){
        let randomNumber = Math.floor(Math.random() * 100) + 1
        if(!numbers.includes(randomNumber)){
            setNumbers(prev => [...prev, randomNumber])
        }
    }

    function remove(){
        if(numbers2.length > 0){
            let randomNumber = Math.floor(Math.random() * numbers2.length) 
            console.log(randomNumber);
            setNumbers2(prev => prev.slice(0,randomNumber).concat(prev.slice(randomNumber+1)))
        }
    }
    return (
        <>
            <div style={{float: "left", marginRight: "400px"}}>
                <button onClick={add}>Add</button>
                <ul>
                    {
                        numbers.map((item, i) => <li key={i}>{item}</li>) 
                    }
                </ul>
            </div>

            <hr style={{width: "1px", height: "600px", float: "left"}}></hr>

            <div style={{float: "left", marginLeft: "100px"}}>
                <button onClick={remove}>Remove</button>
                <ul>
                    {
                        numbers2.map((item, i) => <li key={i}>{item}</li>) 
                    }
                </ul>
            </div>
        </>
    )
}

