import {useState} from 'react'

export default function DivEx (){
  const colors = ["#c14e08", "black", "red", "blue", "green", "yellow", "gray", "orange", "brown", "gold"]
  let [num, setNum] = useState(200)
  let [colorIndex, setColorIndex] = useState(0)

  function changeColor(){
    var randomNumber = Math.floor(Math.random() * 10)
    // check if div background color will change or not
    if(colorIndex === randomNumber){
      changeColor()
    }else{
      setColorIndex(randomNumber)
    }
  }

  function increase(){
    setNum(prev => prev + 100)
  }

  return (
    <div>
      <button onClick = {increase}>increase</button>
      <button onClick = {changeColor}>change the color of div</button>
      <div style={{backgroundColor: colors[colorIndex], width: num+"px", height: num+"px"}}></div>
    </div>
  );
}



