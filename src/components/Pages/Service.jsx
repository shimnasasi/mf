import React from 'react'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'

function Service() {
    return (
        <Layout>
            <div className='w-full h-64 bg-bannerbg px-5  md:px-32'>
                <h1 className="text-white md:mx-32 pt-24 text-5xl font-bold">Services</h1>
                <h5 className='text-white md:mx-32 pt-2'>Home/Services</h5>
            </div>

            <div className='w-full bg-white flex  flex-col justify-center items-center'>
                <div className='md:flex'>
                    <div className='w-[30rem] h-80 md:bg-design  mt-10 bg-center bg-cover
                    hover:scale-105 duration-1000 md:flex hidden'>
                    </div>
                    <div className='w-96 md:w-[30rem] h-80 bg-[#002060] mt-10'>
                        <h1 className='text-3xl text-white mt-10 ml-16 font-bold'>Mechanical Design</h1>
                        <ul className='text-white ml-16 mt-5'>
                            <li>Jigs and Fixtures</li>
                            <li>Moulds</li>
                            <li>Product Design</li>
                            <li>Gauges</li>
                            <li>Electrode Design</li>
                            <li>Sheet metal</li>
                        </ul>
                        <Link to={"/Service/1"}>
                            <button className='w-52 h-10 text-white border ml-16 mt-5'>Show more</button>
                        </Link>
                    </div>
                </div>

                <div className='md:flex'>
                    <div className='w-96 md:w-[30rem] h-80  bg-[#002060]  '>
                        <h1 className='text-3xl text-white mt-5 md:mt-10 ml-16 font-bold'>CNC Programming</h1>
                        <ul className='text-white ml-16 mt-5'>
                            <li>Milling</li>
                            <li>Turning</li>
                            <li>CAM Sheet Generation</li>
                            <li>Prototype Support</li>
                            <li>CNC Process Planning</li>
                            <li>CNC Programming Optimization</li>
                        </ul>
                        <Link to={"/Service/2"}>
                            <button className='w-52 h-10 text-white border ml-16 mt-5'>Show more</button>
                        </Link>
                    </div>
                    <div className='w-[30rem] h-80 md:bg-cam bg-center md:bg-cover hover:scale-105 duration-1000 md:flex hidden  '>
                    </div>
                </div>

                <div className='md:flex'>
                    <div className='w-[30rem] h-80 md:bg-documentation bg-center bg-cover hover:scale-105 duration-1000 md:flex hidden '>
                    </div>
                    <div className='w-96 md:w-[30rem] h-80 bg-[#002060] '>
                        <h1 className='text-3xl text-white mt-5 md:mt-10 ml-16 font-bold'>Engineering Documentation</h1>
                        <ul className='text-white ml-16 mt-5'>
                            <li>Work Instruction (WI)</li>
                            <li>Standard Operation Procedure (SOP)</li>
                            <li>Control Plan</li>
                            <li>Setup Approval Sheet</li>
                            <li>CAM Sheet</li>
                            <li>Inspection Plan / Inspection Report</li>
                        </ul>
                        <Link to={"/Service/3"}>
                            <button className='w-52 h-10 text-white border ml-16 mt-5'>Show more</button>
                        </Link>
                    </div>
                </div>

                <div className='md:flex'>
                    <div className='w-96 md:w-[30rem] h-80 bg-[#002060] '>
                        <h1 className='text-3xl text-white mt-5 md:mt-10 ml-16 font-bold'>Other Services</h1>
                        <ul className='text-white ml-16 mt-5'>
                            <li>Mould Flow Analysis</li>
                            <li>Part Costing</li>
                            <li>Fixture Costing</li>
                            <li>Prototype Manufacturing Support</li>
                            <li>IT Training</li>
                        </ul>
                        <Link to={"/Service/4"}>
                            <button className='w-52 h-10 text-white border ml-16 mt-5'>Show more</button>
                        </Link>
                    </div>
                    <div className='w-[30rem] h-80 md:bg-other-service  bg-cover hover:scale-105 duration-1000 md:flex hidden '>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Service