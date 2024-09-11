import './App.css'
import React, { useState } from 'react';

function App() {


  const [inputValue, setInputValue]=useState('')

  function handleclick(event){
    event.preventDefault();
    console.log(event.target.value)
  }


  function handleChange(event){
    setInputValue(event.target.value)
    console.log(inputValue)
  }


  return (
    <main>

      <h1>Weather App</h1>
      <form>
        <label>Insert your city
          <input type="text" name="country" onChange={(event)=>handleChange(event)} value={inputValue}></input>
        </label>
        <button onClick={(event)=>handleclick(event)}>Search</button>
      </form>
       
    </main>
  )
}

export default App
