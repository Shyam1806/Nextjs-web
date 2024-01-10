import React from 'react'

const Jobposting = ({ data }) => {
  // console.log(data)
  return (
    <>
      <div className="jobcard-parent flex flex-nowrap justify-space-between bg-white text-black pt-4 pb-4 pl-6 pr-6 text-left">
        <div className="company-logo pr-2">
          <img src="./img/Netflix.png" alt="Company-logo" />
        </div>
        <div className="company-jd">
          <h3>{data.jobtitle}</h3>
          <h4>Great Vibes - Information Technology</h4>
          <p>Chennai, Tamilnadu, India (In-office)</p>
          <div className="jd-timings pt-6 pb-6">
            <p>Part-Time(9.00 am - 5.00 pm IST) </p>
            <p>Experience(1 - 2 years) </p>
            <p>{data.salary} </p>
            <p>51-200 employees </p>

          </div>

          <button className="bg-sky-600 pt-2 pb-2 pl-4 pr-4 rounded-md text-white">{data.applicationtype}</button>
        </div>
      </div>
    </>
  )
}

export default Jobposting;