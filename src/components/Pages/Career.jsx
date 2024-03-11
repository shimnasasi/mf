import React from 'react'
import Layout from '../Layout/Layout';

function Career() {
    return (
        <Layout>
            <div className='w-full h-64 bg-bannerbg px-32'>
                <h1 className="text-white mx-32 pt-24 text-5xl font-bold">Career</h1>
                <h2 className='text-white mx-32 pt-2 '>Home/Career</h2>
            </div>
            {/* <div className='w-full h-[37rem] flex bg-white'>
                <div className='w-[30rem] h-[32rem] ml-72 mt-10 bg-white'>
                    <h1 className="text-4xl font-bold capitalize text-[#595959] pl-8 pt-32">
                        Join Our<span className="text-[#002060]">  Team </span>
                    </h1>
                    <p className='pl-8 pt-5'> <span className="text-lg text-[#002060] font-bold">MechFusion</span> is committed to providing quality professional engineering services to enhance the
                        communities where our clients live and work. Our approach combines exceptional design, innovative
                        solutions, an d proven performance .</p>
                    <button className='mt-8 ml-8 border shadow h-10 w-52 font-bold'>View Job Opening</button>
                </div>
                <div className='bg-careerbg w-[30rem] h-[32rem] mt-10 bg-center bg-cover'></div>

            </div> */}
            <div className='w-full h-[70rem] bg-white '>
                <div className='flex'>
                    <h1 className='text-3xl pl-[35rem] pt-16 font-bold text-[#002060] ' >Mech</h1>
                    <h1 className='text-3xl pt-16 font-bold text-[#595959] ' >fusion  </h1>
                    <h1 className='text-3xl pt-16 font-bold pl-3 text-[#002060] ' >Career </h1>
                    <h1 className='text-3xl pt-16 font-bold pl-3 text-[#595959] ' >Opportunities</h1>
                </div>
                <p className='pl-[16rem] pt-8 pr-[15rem]'>Mechfusion, your premier provider of Engineering services tailored to meet your design and manufacturing needs. With years of expertise in the industry, we pride ourselves on delivering innovative solutions that streamline your production processes and bring your ideas to life with precision and efficiency. Our dedicated team of skilled professionals utilizes cutting-edge technology and software to deliver high-quality designs, prototyping, and manufacturing services that exceed expectations. We are committed to provide personalized attention and customized solutions to help you achieve your goals.
                    <p className='font-bold pt-10'>Mechfusion, your premier provider of Engineering services tailored to meet your design and manufacturing needs. With years of expertise in the industry, we pride ourselves on delivering innovative solutions that streamline your production processes and bring your ideas to life with precision and efficiency.

                    </p>
                </p>
                <div className='mt-12 ml-64 flex flex-col gap-10'>
                    <div className='flex  gap-10'>
                        <input type="text" className='w-[31rem] h-12 border pl-5 shadow' placeholder='FirstName' />
                        <input type="text" className='w-[31rem] h-12 border pl-5 shadow' placeholder='LastName' />
                    </div>
                    <div className='flex  gap-10'>
                        <input type="text" className='w-[31rem] h-12 border pl-5 shadow' placeholder='Contact Number' />
                        <input type="text" className='w-[31rem] h-12 border pl-5 shadow' placeholder='Email Address' />
                    </div>
                    <div>
                    <input type="text" className='w-[64.5rem] h-32 border pl-5 shadow' placeholder='Address' /> 
                    </div>
                    <div>
                    <input type="text" className='w-[64.5rem] h-12 border pl-5 shadow' placeholder='Qulification' /> 
                    </div>
                    <div className='flex  gap-10'>
                        <input type="text" className='w-[31rem] h-12 border pl-5 shadow' placeholder='City' />
                        <input type="text" className='w-[31rem] h-12 border pl-5 shadow' placeholder='Pincode' />
                    </div>
                    <div className='flex  gap-10'>
                        
                        <input type="text" className='w-[31rem] h-12 border pl-5 shadow' placeholder='Country' />
                        <input type="file" className='w-[31rem] h-12 border pl-5 shadow' placeholder='FullName' />
                    </div>
                    <button className='w-56 h-12 bg-[#002060] text-white'>
            send
          </button>
                    
                </div>
            </div>
        </Layout >
    )
}

export default Career