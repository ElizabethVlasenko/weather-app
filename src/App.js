import "./App.css";
import Footer from "./Components/Footer/Footer";
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
      <Footer></Footer>
    </div>
  );
}

export default App;
