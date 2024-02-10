import "../src/input.css";
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from "react-hot-toast";
function App() {
  const [weatherData, SetWeatherData] = useState();
  const [weatherError, setWeatherError] = useState();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("weather-input data", data);
    reset();

    axios.post("https://weather-api-server-new.vercel.app/api/v2/weatherapi", data).then(function (response) {
      console.log("resp", response);
      SetWeatherData(response);
      toast.success(response?.data?.message, {
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
          <div className="weather-header mb-2">
            <img src="../img/weather-fav.webp" style={{width:"350px" , objectFit:"contain"}} alt="weather-appimg" />
           <h3 className="">Find Weather of Your City</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-nowrap mb-4">
            <input type="text" class="w-full text-black p-1 " placeholder="Enter Your City" {...register("cityname", { required: true, maxLength: 80 })} style={{ color: "#000!important" }} />
            <input type="submit" className="bg-slate-700 p-2" />
          </form>
          {weatherData?.status == "200" && weatherData?.data?.data?.count == "1" ?

            <div className="weather-details-parent bg-white text-black p-4 shadow">
              <div className="weather-box-1">
                <div className="temperature flex items-center justify-evenly mt-2">
                  <h4 className="text-xl">{Math.round(weatherData?.data?.data.list[0]?.main.temp)}℃ | {weatherData?.data?.data.list[0].weather[0].main}</h4>
                  <img src={`http://openweathermap.org/img/w/${weatherData?.data?.data.list[0].weather[0].icon}.png`} />
                </div>
                <h1 className="text-2xl font-bold mt-2" style={{color:"#f5a101"}}>{weatherData?.data?.data?.list[0].name} , {weatherData?.data.data.list[0].sys.country}</h1>

              </div>
              <div className="weather-box-2 ">
                <h3 className="text-left mt-2 mb-2 font-semibold">Weather Info:</h3>
                <div className="info-parent flex justify-between flex-wrap">
                  <div className="weather-details-parent flex justify-evenly w-2/4 mt-4">
                    <div className="wind-icon w- 2/4">
                      <img src="../img/thermometer.png" alt="icon" style={{width:"30px" , height:"30px" , objectFit:"contain"}} />
                    </div>
                    <h4 class="w-2/4 text-xl">{weatherData?.data?.data.list[0]?.wind.deg}<br /><span>Deg</span></h4>
                  </div>
                  <div className="weather-details-parent flex justify-evenly w-2/4 mt-4">
                    <div className="wind-icon w- 2/4">
                      <img src="../img/wind-socket.png" alt="icon" style={{width:"30px" , height:"30px" , objectFit:"contain"}} />
                    </div>
                    <h4 class="w-2/4 text-xl">{weatherData?.data?.data.list[0]?.wind.speed}<br /><span>Windy</span></h4>
                  </div>
                  <div className="weather-details-parent flex justify-evenly w-2/4 mt-4">
                    <div className="wind-icon w- 2/4">
                      <img src="../img/wind-pressure.png" alt="icon" style={{width:"30px" , height:"30px" , objectFit:"contain"}} />
                    </div>
                    <h4 class="w-2/4 text-xl">{weatherData?.data?.data.list[0]?.main.pressure}<br /><span>Pressure</span></h4>
                  </div>
                  <div className="weather-details-parent flex justify-evenly w-2/4 mt-4">
                    <div className="wind-icon w- 2/4">
                      <img src="../img/humidity.png" alt="icon" style={{width:"30px" , height:"30px" , objectFit:"contain"}} />
                    </div>
                    <h4 class="w-2/4 text-xl">{weatherData?.data?.data.list[0].main.humidity}<br /><span>Humidity</span></h4>
                  </div>
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
