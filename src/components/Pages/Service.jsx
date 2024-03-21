import React from 'react'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'


function Service() {
    return (
        <Layout>
            <div className='w-full h-64 bg-bannerbg px-5  md:px-32'>
                <h1 className="text-white md:mx-32 pt-24 text-5xl font-bold">Services</h1>
                <h5 className='text-white mx-32 pt-2'>Home/Services</h5>
                {/* <div className='w-64 h-2 ml-[60rem] mt-[4rem] bg-[#002060]'></div> */}
                {/* <div className='h-20 w-64 border border-[#e1e1e1] shadow bg-white ml-[60rem] '>
                    <h6 className='ml-16 mt-3'>Call Us Today</h6>
                    <h1 className='text-black ml-16 font-bold text-xl'>+12345678910</h1>
                </div> */}
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
                {/* <div className="md:flex">
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <div className='w-96 md:w-[30rem] h-80 md:bg-documentation bg-cover bg-center
                 md:ml-60 hover:scale-105 duration-1000 md:flex hidden'>
                    </div>
                    <div className='w-96 md:w-[30rem] h-80 bg-[#002060]'>
                        <h1 className='text-3xl text-white  mt-5 md:mt-10 ml-7 md:ml-16 font-bold'>Engineering Documentation</h1>
                        <ul className='text-white ml-7 md:ml-16 mt-5'>
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
                </div> */}
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
                            {/* <li>Sheet metal</li> */}
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
                            <li>Mould Flow A nalysis</li>
                            <li>Part Costing</li>
                            <li>Fixture Costing</li>
                            <li>Prototype Manufacturing Support</li>
                            <li>IT Training</li>
                            {/* <li>Sheet metal</li> */}
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