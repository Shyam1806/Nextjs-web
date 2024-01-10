import React, { useState } from 'react'
import Jobposting from './jobposting';
const Stepformone = ({nextStep}) => {
  
        
    
    return (
        <>
            <div className="form-background-parent bg-white	rounded-3xl text text-black p-8	mt-6 mb-6">
                <div className="form-title flex flex-nowrap justify-between	pb-6">
                    <h3>Create a job</h3>
                    <h3>Step 1</h3>
                </div>
                <div className="form-inner-parent w-100">
                    <label className="text-left">Job title</label>
                    <input type="text" placeholder="ex.UX UI Designer" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                    <label className="pt-6">Company name</label>
                    <input type="text" placeholder="ex.Google" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                    <label className="pt-6">Industry</label>
                    <input type="text" placeholder="ex.Information Technology" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                    <div className="form-location-parent flex justify-between pt-6">
                        <div className="form-location pr-3">
                            <label>Location</label>
                            <input type="text" placeholder="ex.Chennai" className=" block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                        </div>
                        <div className="remote-location pl-3">
                            <label>Remote type</label>
                            <input type="text" placeholder="ex.In-Office" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                        </div>
                    </div>

                </div>
                <div className="flex justify-end text-white	mb-8 mt-24">
                 
                    <button className="bg-sky-600 pt-2 pb-2 pl-4 pr-4 rounded-md" >Next</button>
                </div>
            </div>
            {/* {showJobposting && <Jobposting/>}  */}
        </>
    );
}

export default Stepformone;