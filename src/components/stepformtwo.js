import React from 'react'

const Stepformtwo = () => {
    return (
        <>
            <div className="form-background-parent bg-white	rounded-3xl text text-black p-8	">
                <div className="form-title flex flex-nowrap justify-between	pb-6">
                    <h3>Create a job</h3>
                    <h3>Step 2</h3>
                </div>
                <div className="form-inner-parent w-100">
                    <label className="text-left">Experience</label>
                    <div className="minimumparent flex justify-between">
                        <input type="text" placeholder="Minimum" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                        <input type="text" placeholder="Maximum" className=" ml-6 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                    </div>

                    <label className="pt-6">Salary</label>
                    <div className="minimumparent flex justify-between">
                        <input type="text" placeholder="Minimum" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                        <input type="text" placeholder="Maximum" className="ml-6 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                    </div>

                    <label className="pt-6">Total employee</label>
                    <input type="text" placeholder="ex.100 " className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                    <div className="form-apply-parent  pt-6"  >
                        <h6 className="text-left pb-3">Apply Type</h6>
                        <div className="flex justify-start"
                        >
                            <div className="form-location apply-location pr-3 flex justify-between flex-row-reverse	">
                                <label>Quick Apply</label>
                                <input type="radio" value="Quick Apply" ></input>
                            </div>
                            <div className="remote-location apply-location pl-3 flex justify-between flex-row-reverse	">
                                <label>External Apply</label>
                                <input type="radio" value="External Apply"  ></input>

                                {/* <input type="radio"  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"> External apply</input> */}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex justify-end text-white	mb-8 mt-24">

                    <button className="bg-sky-600 pt-2 pb-2 pl-4 pr-4 rounded-md" >Save</button>
                </div>
            </div>
        </>
    )
}

export default Stepformtwo;