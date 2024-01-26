import "../src/input.css";
import React from 'react';
import axios from 'axios';

import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const [weatherData, SetWeatherData] = useState();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log("weather-input data", data);
    reset();

    let res = await axios.post("http://localhost:3004/api/v2/weatherapi", data);
    // let res = await axios.post("https://weather-api-server-new.vercel.app/api/v2/weatherapi", data);
    await SetWeatherData(res);
  }
  console.log("weatherDatas->", weatherData?.data?.data.list[0].name);
  return (
    <>

      <div className="App">
        <header className="App-header">


          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap">
            <input type="text" class="w-full" placeholder="Enter Your City" {...register("cityname", { required: true, maxLength: 80 })} />
            <input type="submit" />
          </form>
          <div className="weather-details-parent flex">
            <div className="weather-box-1 bg-sky-200	">
              <h1>{weatherData?.data?.data.list[0].name}</h1>
              <h3>{weatherData?.data?.data.list[0].weather[0].main}</h3>
              <img src={`http://openweathermap.org/img/w/${weatherData?.data?.data.list[0].weather[0].icon}.png`} />
              <h4>Wind Deg:{weatherData?.data?.data.list[0].wind.deg}</h4>
              <h4>Wind Speed:{weatherData?.data?.data.list[0].wind.speed}</h4>
              <h4>Pressure:{weatherData?.data?.data.list[0].main.pressure}</h4>
            </div>
            <div className="weather-box-2 bg-sky-200	">

              <h4>Temp:{weatherData?.data?.data.list[0].main.temp}</h4>
              <h4>Humidity:{weatherData?.data?.data.list[0].main.humidity}</h4>
              <h4>Feels Like:{weatherData?.data?.data.list[0].main.feels_like}</h4>



            </div>
          </div>
          {/* <h3>{weatherData.data.data.list[0].name}</h3> */}
        </header>
        {/* <p class="text-2xl text-gray-600	font-bold underline">hello</p> */}
      </div>
    </>
  );
}

export default App;
