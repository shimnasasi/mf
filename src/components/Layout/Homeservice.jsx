import React from 'react'
import { Link } from 'react-router-dom'
import serv1 from '../../Assets/01.jpg'
import cam from '../../Assets/cam.jpeg'
import design from '../../Assets/design1.webp'
import documentation from '../../Assets/documentation.webp'
import other from '../../Assets/other.webp'

function Homeservice() {
    return (
        <div className='w-full bg-[#595959]/10 md:h-[40rem] h-full flex  gap-14 justify-center items-center flex-col '>
            {/* <h1 className='text-3xl text-[#595959] font-bold'>Our Services</h1> */}
            <div className="flex">
                <h1 className="text-4xl font-bold text-[#595959]">Our</h1>
                <h1 className="text-4xl font-bold text-[#002060] pl-3">Services</h1>
            </div>
            <div className='flex md:flex-row flex-col gap-5'>
                <div className='w-80 h-80 relative bg-[#002060]  cursor-pointer   flex  flex-col  justify-center items-center'>
                    <div className="absolute top-0 bg-white w-80 duration-1000 flex justify-center flex-col  items-center  hover:hidden h-80">
                        <img src={design} className='w-36 rounded-full' alt="" />
                        <h1 className='font-bold text-2xl'>Mechanical Design</h1>
                    </div>
                    <ul className='text-white flex flex-col gap-3'>
                        <li>Jigs and Fixtures</li>
                        <li>Moulds</li>
                        <li>Product Design</li>
                        <li>Gauges</li>
                        <li>Electrode Design</li>
                        <li>Sheet metal</li>
                    </ul>
                    <div className='absolute top-0 80 h-80 bg-blue-950' />
                </div>
                <div className='w-80 h-80 relative bg-[#002060]  cursor-pointer   flex  flex-col  justify-center items-center'>
                    <div className="absolute top-0 bg-white w-80 duration-1000 flex justify-center flex-col  items-center  hover:hidden h-80">
                        <img src={cam} className='w-36 rounded-full' alt="" />
                        <h1 className='font-bold text-2xl'>CNC Programming</h1>
                    </div>
                    <ul className='text-white flex flex-col gap-3'>
                        <li>Milling</li>
                        <li>Turning</li>
                        <li>CAM Sheet Generation</li>
                        <li>Prototype Support</li>
                        <li>CNC Process Planning</li>
                        <li>CNC Programming Optimization</li>
                    </ul>
                    <div className='absolute top-0 80 h-80 bg-blue-950' />
                </div>
                <div className='w-80 h-80 relative bg-[#002060]  cursor-pointer   flex  flex-col  justify-center items-center'>
                    <div className="absolute top-0 bg-white w-80 duration-1000 flex justify-center flex-col  items-center  hover:hidden h-80">
                        <img src={documentation} className='w-36 rounded-full' alt="" />
                        <h1 className='font-bold text-2xl'>Engineering Documentation</h1>
                    </div>
                    <ul className='text-white flex flex-col gap-3'>
                        <li>Work Instruction (WI)</li>
                        <li>Standard Operation Procedure (SOP)</li>
                        <li>Control Plan</li>
                        <li>Setup Approval Sheet</li>
                        <li>CAM Sheet</li>
                        <li>Inspection Plan / Inspection Report</li>
                    </ul>
                    <div className='absolute top-0 80 h-80 bg-blue-950' />
                </div>
                <div className='w-80 h-80 relative bg-[#002060]  cursor-pointer   flex  flex-col  justify-center items-center'>
                    <div className="absolute top-0 bg-white w-80 duration-1000 flex justify-center flex-col  items-center  hover:hidden h-80">
                        <img src={other} className='w-36 rounded-full' alt="" />
                        <h1 className='font-bold text-2xl'>Others</h1>
                    </div>
                    <ul className='text-white flex flex-col gap-3'>
                        <li>Mould Flow Analysis</li>
                        <li>Part Costing</li>
                        <li>Fixture Costing</li>
                        <li>Prototype Manufacturing Support</li>
                        <li>IT Training</li>
                    </ul>
                    <div className='absolute top-0 80 h-80 bg-blue-950' />
                </div>
            </div>
            <Link to={"/Service"}>
                <button className=' w-40 h-10 border bg-[#002060] text-white'>View More</button>
            </Link>
        </div>
    )
}

export default Homeservice