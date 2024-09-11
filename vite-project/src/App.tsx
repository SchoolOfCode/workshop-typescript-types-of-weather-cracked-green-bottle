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
   
   



  async function handleclick(event: any) {
    event.preventDefault();
    console.log("initialize our API");
    await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&appid=48404bfdde79b99ab720c89112005316`)
   .then(response => response.json())
   .then(data => {setAPIValues(data); setCoords({lat:data[0].lat, lon:data[0].lon}); console.log(coords)})

   
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
