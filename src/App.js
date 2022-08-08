import "./App.css";
import Header from "./Components/Header/Header";
import WeatherForecast from "./Components/WeatherForecast/WeatherForecast";
import { WeatherState } from "./Context/WeatherContext/WeatherState";

function App() {
  return (
    <div className="App">
      <WeatherState>
        <Header></Header>
        <WeatherForecast></WeatherForecast>
      </WeatherState>
    </div>
  );
}

export default App;
