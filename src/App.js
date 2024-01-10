import "../src/input.css";
import React from 'react';
import axios from 'axios';
import Stepformone from './components/stepformone';
import Stepformtwo from './components/stepformtwo';
import Jobposting from './components/jobposting';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const [localdatas, SetLocalDatas] = useState([]);
  const [weatherData, SetWeatherData] = useState([]);
  const datas = [{
    jobtitle: "UX UI Designer",
    salary: "INR (₹) 30,000 - 60,000 / Month",
    applicationtype: "Apply Now"
  },
  {
    jobtitle: "Developer",
    salary: "INR (₹) 50,000 - 70,000 / Month",
    applicationtype: "External  Apply"
  },
  {
    jobtitle: "Interaction Designer ",
    salary: "INR (₹) 30,000 - 50,000 / Month",
    applicationtype: "External  Apply"
  },
  {
    jobtitle: "SEO Analyst  ",
    salary: "INR (₹) 30,000 - 50,000 / Month",
    applicationtype: "Apply Now"
  }
  ];
  // useEffect(() => {
  //   SetLocalDatas(datas);
  // }, []);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log("weather-input data", data);
    // let res = await axios.post("http://localhost:3004/api/v2/weatherapi", data);
    let res = await axios.post("https://weather-api-server-new.vercel.app/api/v2/weatherapi" , data);
    SetWeatherData(res);
  }
  return (
    <>

      <div className="App">
        <header className="App-header">



          <Stepformone />
          <Stepformtwo />
          <div className="job-posting-overall flex flex-wrap justify-space-between">
            {localdatas.map(data => {
              return (
                <>
                  <Jobposting data={data} />
                </>
              )
            })}
          </div>

        </header>
        {/* <p class="text-2xl text-gray-600	font-bold underline">hello</p> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Enter Your City" {...register("cityname", { required: true, maxLength: 80 })} />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
