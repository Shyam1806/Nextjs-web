import "../src/input.css";
import React from 'react';
import axios from 'axios';

import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from "react-hot-toast";
function App() {
  const [weatherData, SetWeatherData] = useState();
  const [weatherError, setWeatherError] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("weather-input data", data);
    reset();

    // try {

    // const weatherData = async () => {

    // }

    axios.post("https://weather-api-server-new.vercel.app/api/v2/weatherapi", data).then(function (response) {
      console.log("resp", response);
      SetWeatherData(response);
      toast.success(response?.data.message, {
        position: "bottom-left"
      });
    })
      .catch(function (error) {
        console.log("error", error);
        setWeatherError(error);
        toast.error(error?.message, {
          position: "bottom-left"
        })
      })


    console.log("weatherDatas->", weatherData);
    console.log("weather??", weatherError);
    // console.log("statuscode", weatherError)
  }

  return (
    <>

      <div className="App">
        <header className="App-header">


          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap">
            <input type="text" class="w-full text-black p-1" placeholder="Enter Your City" {...register("cityname", { required: true, maxLength: 80 })} style={{ color: "#000!important" }} />
            <input type="submit" />
          </form>
          {weatherData?.status == "200" ?

            <div className="weather-details-parent bg-white text-black p-4 shadow">
              <div className="weather-box-1 	">
                <div className="temperature flex items-center justify-between">
                  <h4 className="text-xl">{Math.round(weatherData?.data?.data.list[0].main.temp)}℃ | {weatherData?.data?.data.list[0].weather[0].main}</h4>
                  <img src={`http://openweathermap.org/img/w/${weatherData?.data?.data.list[0].weather[0].icon}.png`} />
                </div>
                <h1 className="text-2xl">{weatherData?.data?.data?.list[0].name} , {weatherData?.data.data.list[0].sys.country}</h1>

              </div>
              <div className="weather-box-2 	">
                <h3 className="text-left">Weather Info:</h3>
                <div className="info-parent flex">
                  <h4 class="w-2/4">Wind Deg:{weatherData?.data?.data.list[0]?.wind.deg}</h4>
                  <h4 class="w-2/4">Wind Speed:{weatherData?.data?.data.list[0]?.wind.speed}</h4>
                  <h4 className="w-2/4">Pressure:{weatherData?.data?.data.list[0]?.main?.pressure}</h4>
                  <h4 class="w-2/4">Humidity:{weatherData?.data?.data.list[0].main.humidity}</h4>
                  <h4 class="w-2/4">Feels Like:{weatherData?.data?.data.list[0].main.feels_like}</h4>
                </div>


              </div>
            </div>

            : ""}
          {/* {(weatherError?.response?.status == "400") ? <>
            <div>
              <p>{weatherError?.message}<br />Please Check the Cityname</p>
            </div>
          </> : ""} */}
          {/* weatherError ? response?.status == "400" ? <div>
            <p>{weatherError.message}</p>
          </div> : 
          <div>
            <p></p>
          </div> */}


          {/* <h3>{weatherData.data.data.list[0].name}</h3> */}
        </header>
        
      </div>
      <Toaster left />

    </>
  );
}

export default App;
