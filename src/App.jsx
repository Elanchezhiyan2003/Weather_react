import React, { useEffect, useRef, useState } from 'react';
import Temperature from './Components/Temperature';
import Highlights from './Components/Highlights';

const App = () => {
  const [city, setCity] = useState("Namakkal");
  const [weatherData, setWeatherData] = useState(null);

  const inputRef = useRef();
  const apiURL = `https://api.weatherapi.com/v1/current.json?key=df3626d3fbc440b9ae272110240410&q=${city}&aqi=no`;

useEffect(() => {
   fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setWeatherData(data);
    })
    .catch((error) => {
      console.error(error);
    });
}, [city]);


  return (
    <div className="bg-[#1F213A] h-screen flex justify-center align-top">
      <div className="mt-20 w-1/5 h-1/3">
        {weatherData &&
          <Temperature
            setCity={setCity}       
            stats={{
              temp: weatherData.current.temp_c,
              condition: weatherData.current.condition.text,
              icon: weatherData.current.condition.icon,
              isDay: weatherData.current.is_day,
              location: weatherData.location.name,
              time: weatherData.location.localtime,
            }}
          />}
      </div>

      <div className="mt-20 w-1/3 h-1/3 p-10 grid grid-cols-2 gap-6">
        <h2 className="text-slate-200 text-2xl col-span-2">Today's Highlight</h2>
        {
          weatherData && (
            <>
            <Highlights
            stats={{
              title:"Wind Status",
              value:weatherData.current.wind_mph,
              unit:'mph',
              direction:weatherData.current.wind_dir
            }}
            />
            <Highlights
             stats={{
              title:"Humidity",
              value:weatherData.current.humidity,
              unit:'%'
            }}
            />
            <Highlights
             stats={{
              title:"Visibility",
              value:weatherData.current.vis_miles,
              unit:'miles',
            }}
            />
            <Highlights 
             stats={{
              title:"Air Pressure",
              value:weatherData.current.pressure_mb,
              unit:'mb'
            }}
            />
            </>
          )
        }
        
      </div>
    </div>
  );
};

export default App;
