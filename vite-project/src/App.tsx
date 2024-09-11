import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [apiValues, setAPIValues] = useState("");
  const [coords, setCoords] = useState("")

// useEffect (() => {
//   fetch('http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&appid=48404bfdde79b99ab720c89112005316')
//    .then(response => response.json())
//    .then(data => {setAPIValues(data); console.log(apiValues)})

// }, [inputValue])
   
   

  
  async function handleCord (){

    const url= `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&appid=48404bfdde79b99ab720c89112005316`

    try {
    const response= await fetch(url);
    const jsonData= await response.json();
    setAPIValues(jsonData);
    setCoords({lat:jsonData[0].lat, lon:jsonData[0].lon});
    console.log(coords)
    }

    catch (error){
      console.error(error.message)
    }

  }

  async function getWeather(){
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=48404bfdde79b99ab720c89112005316`

    try {
      const response= await fetch(url)
      const jsonData= await response.json();
      console.log(jsonData)
    }

    catch (error) {
      console.error(error.message)
    }
  }

  async function handleclick(event: any) {
    event.preventDefault();
    await handleCord();
    await getWeather();

  }


    



  function handleChange(event: any) {
    setInputValue(event.target.value);
    console.log(inputValue);
  }

  return (
    <main>
      <h1>Weather App</h1>
      <form>
        <label>
          Insert your city
          <input
            type="text"
            name="country"
            onChange={(event) => handleChange(event)}
            value={inputValue}
          ></input>
        </label>
        <button onClick={(event) => handleclick(event)}>Search</button>
      </form>
    </main>
  );
}

export default App;
