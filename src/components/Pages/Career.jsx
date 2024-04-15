import React from 'react'
import Layout from '../Layout/Layout';

function Career() {
    return (
        <Layout>
            <div className='w-full h-64 bg-bannerbg md:px-32'>
                <h1 className="text-white mx-32 pt-24 text-5xl font-bold">Career</h1>
                <h2 className='text-white mx-32 pt-2 '>Home/Career</h2>
            </div>
            <div className='w-full  bg-white '>
                <div className='flex'>
                    <h1 className='invisible lg:visible md:flex  hidden text-3xl pl-[5rem] md:pl-[35rem] pt-16 font-bold text-[#002060] ' >Mech</h1>
                    <h1 className='invisible lg:visible md:flex  hidden text-3xl pt-16 font-bold text-[#595959] ' >fusion  </h1>
                    <h1 className='text-3xl pt-16 font-bold pl-8 md:pl-3 text-[#002060]  ' >Career Opportunities </h1>
                </div>
                <p className='px-8 md:px-64  pt-8 text-lg '>Mechfusion seeks highly talented and hardworking
                    individuals with a passion for developing their careers and the desire to </p>
                <p className='md:px-64 text-lg flex justify-center  '>excel in the information technology industry.</p>
                <p className='px-8 md:px-64 pt-10 text-lg'>We offer a creative collaborative & challenging environment
                    and we are committed to diversity and professional development</p>
                <p className='font-bold pt-10 px-8 md:px-64 flex flex-col justify-center text-lg'>
                    If you are interested in current or future career opportunities with Mechfusion, please complete the form below and
                </p>
                <p className='px-8 md:px-64 text-lg flex md:justify-center font-bold '> submit your resume. </p>

                <div className='mt-12 ml-8 md:ml-64 flex flex-col gap-5 md:gap-10'>
                    <div className='md:flex  gap-10'>
                        <input type="text" className='w-[23rem] md:w-[31rem] h-12 border pl-5 shadow' placeholder='FirstName' />
                        <input type="text" className='w-[23rem] md:w-[31rem] h-12 border pl-5 shadow mt-5 md:mt-0' placeholder='LastName' />
                    </div>
                    <div className='md:flex  gap-10'>
                        <input type="text" className='w-[23rem] md:w-[31rem] h-12 border pl-5 shadow' placeholder='Contact Number' />
                        <input type="text" className='w-[23rem] md:w-[31rem] h-12 border pl-5 shadow mt-5 md:mt-0' placeholder='Email Address' />
                    </div>
                    <div className='md:flex  gap-10'>
                        <input type="text" className='w-[23rem] md:w-[31rem] h-12 border pl-5 shadow' placeholder='Qualification' />
                        <input type="text" className='w-[23rem] md:w-[31rem] h-12 border pl-5 shadow mt-5 md:mt-0' placeholder='Position Applied For' />
                    </div>
                    <div className='flex  gap-10'>
                        <input type="file" className='w-[23rem] md:w-[31rem] h-12 border pl-5 shadow' />
                    </div>
                    <button className='w-56 h-12 bg-[#002060] text-white'>
                        Apply
                    </button>

                </div>
            </div>
        </Layout >
    )
}

export default Career