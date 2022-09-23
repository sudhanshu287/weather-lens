import React, { useState, useEffect } from "react";
import "./App.css";
import TopButton from "./components/TopButton";
import Input from "./components/Input";
import TimeLocation from "./components/TimeLocation";
import TempretureAndDetails from "./components/TempretureAndDetails";
import Forecast from "./components/Forecast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getFormattedWeatherData from "./services/WeatherServices";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

function App() {
  const [query, setQuery] = useState({ q: "kanpur" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";
      toast.info("Fetching weather for " + message);
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";
    return "from-yellow-700 to-orange-700";
  };
  return (
    <div>
      <Navbar />
      <div className={`container container-new ${formatBackground()}`}>
        <TopButton setQuery={setQuery} />
        <Input setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <div>
            <TimeLocation weather={weather} />
            <TempretureAndDetails weather={weather} />
            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
          </div>
        )}
        <ToastContainer autoClose={3000} theme="colored" newestOnTop={true} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
