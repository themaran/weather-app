import  {useState } from "react";
import Search from "./Search.jsx";
import { FaTemperatureHigh } from "react-icons/fa";
import { GiPaperWindmill } from "react-icons/gi";
import { BiWater } from "react-icons/bi";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=bee2aeecf8d8dcaff343acb0ada25d57&units=metric`
      );
      const data = await response.json();
      console.log("data :", data);
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }
  async function handleSearch() {
    fetchWeatherData(search);
  }


  console.log(weatherData);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-100 ">
      <div className="bg-gradient-to-r from-rose-100 to-teal-100 rounded-lg shadow-lg w-1/2 h-96 flex flex-col items-center">
        <div className="mt-4 w-full">
          <Search
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
        </div>
        <div>
          {loading && weatherData == null ? (
            <div className="size-56 mt-6 rounded-full bg-gradient-to-r from-rose-200 to-teal-200 animate-ping flex justify-center items-center text-slate-700">Loading...</div>
          ) : (
            <div className="mt-10 text-slate-900">
              <div>
                <h1 className="text-center font-bold text-4xl">
                  {weatherData?.name}, <span className="text-gray-400">{weatherData?.sys?.country}</span>
                </h1>
              </div>
              <div className="mt-4">
                <h1 className="text-2xl text-gray-400">Weather : &nbsp; <span className="text-slate-900">{weatherData && weatherData.weather && weatherData.weather[0]
                    ? weatherData.weather[0].description
                    : ""}</span>
                </h1>
                <p className="flex gap-3 text-xl mt-5 font-bold text-center"><FaTemperatureHigh size={30} color="grey"/>{weatherData?.main?.temp} &nbsp;C &deg;</p>
              </div>
              <div className="flex justify-evenly gap-10 mt-10 ">
                <p className="flex gap-2"><GiPaperWindmill color="grey" size={24}/><span className="text-slate-400">Wind:</span> {weatherData?.wind?.speed}km/hr</p>
                <p className="flex gap-2"><BiWater  size={24} color="grey"/><span className="text-slate-400">Humidity:</span> {weatherData?.main?.humidity}%</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
