import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  function handleclick(event: any) {
    event.preventDefault();
    console.log("initializate our API");
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
