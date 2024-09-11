import "./App.css";
import { useState, useEffect } from "react";



function App() {
  const [inputValue, setInputValue] = useState("");
  const [coords, setCoords] = useState("");
  const [weather, setWeather] = useState(false);

  //get input
  function handleChange(event: any) {
    setInputValue(event.target.value);
    console.log(inputValue);
  }

  //get coordinate
  async function handleCord() {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&appid=48404bfdde79b99ab720c89112005316`;
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setCoords({ lat: jsonData[0].lat, lon: jsonData[0].lon });
      console.log(coords);
    } catch (error) {
      console.error(error.message);
    }
  }

  //get weather
  async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=48404bfdde79b99ab720c89112005316`;
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log(jsonData);
      setWeather(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  }

  // useEffect(() => {
  //   inputValue && getWeather();
  // }, [inputValue, coords, weather]);

  // click event
  async function handleclick(event: any) {
    event.preventDefault();
    await handleCord();
    await getWeather();
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
      {weather ? <p>true</p> : <p>false</p>}
      {/* <p>{weather.weather[0].main}</p> */}
    </main>
  );
}

export default App;