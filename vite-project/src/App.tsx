import { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [weather, setWeather] = useState<any>(null);

  // Get input
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.target.value);
  }

  // Get coordinates based on input
  async function handleCord(): Promise<void> {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&appid=48404bfdde79b99ab720c89112005316`;
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setCoords({ lat: jsonData[0].lat, lon: jsonData[0].lon });
    } catch (error) {
      console.error((error as Error).message);
    }
  }

  // Get weather based on coordinates
  async function getWeather(): Promise<void> {
    if (coords) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=48404bfdde79b99ab720c89112005316`;
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData);
        setWeather(jsonData);
      } catch (error) {
        console.error((error as Error).message);
      }
    }
  }

  // Trigger getWeather when coords changes
  useEffect(() => {
    if (coords) {
      getWeather();
    }
  }, [coords]); // Effect runs only when coords changes

  // Handle click event
  async function handleClick(event: React.MouseEvent<HTMLButtonElement>): Promise<void> {
    event.preventDefault();
    await handleCord(); // Wait for handleCord to complete
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
            onChange={handleChange}
            value={inputValue}
          />
        </label>
        <button onClick={handleClick}>Search</button>
      </form>
      {weather ? <p>{weather.weather[0].main}</p> : <p>No weather data</p>}
    </main>
  );
}

export default App;
