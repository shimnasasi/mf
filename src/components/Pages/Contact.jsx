import React from 'react'
import Layout from '../Layout/Layout'

function Contact() {
  return (
    <Layout>
      <div className='w-full h-64 bg-bannerbg px-32'>
        <h1 className="text-white mx-32 pt-24 text-5xl font-bold">Contact Us</h1>
        <h2 className='text-white mx-32 pt-2 '>Home/Contact us</h2>
      </div>
      <h1 className='text-xl text-clip pl-60 pt-10'>Online Inquiry</h1>
      {/* <h1 className='text-xl'>Contact Details</h1> */}
      <div className='w-full h-[35rem] bg-white'>
        <div className='flex gap-12'>
          <div className='flex flex-col gap-5 ml-60 mt-10'>
            <input type="text" className='w-[35rem] h-12 border border-[#e1e1e1] pl-5' placeholder="Your Full Name" />
            <input type="text" className='w-[35rem] h-12 border border-[#e1e1e1] pl-5' placeholder="Your Email Address" />
            <input type="text" className='w-[35rem] h-12 border border-[#e1e1e1] pl-5' placeholder="Your Phone Number" />
            <input type="text" className='w-[35rem] h-12 border border-[#e1e1e1] pl-5' placeholder="Your Address" />
            <input type="text" className='w-[35rem] h-32 border border-[#e1e1e1] pl-5' placeholder="Enter Your Message Here" />
          <button className='w-56 h-12 bg-[#002060] text-white'>
            send
          </button>
          
          </div>

          <div>
            
            <div className='w-[25rem] h-[15rem] bg-[#f1f1f3]  pl-8 pt-7' >

              {/* <h1 className="text-5xl font-bold cursor-pointer  "> */}
              {/* Mech <span className="text-[#595959]">Fusion</span> */}
              <div className='flex pt-6 pl-8 '>
                <h1 className='text-5xl text-[#002060] font-bold cursor-pointer'>Mech</h1>
                <h1 className='text-[#595959] font-bold text-5xl'>fusion</h1>
                {/* </h1> */}
              </div>
              <h1 className="text-xs text-[#494949]  pl-16 uppercase">E n g i n e e r i n g  S o l u t i o n s</h1>
              <h1 className='flex flex-col gap-7 pt-5 pl-8'>
                {/* Santhosh nagar <br /> */}
                {/* Attur layout <br /> */}
                Yelahanka Newtown<br />
                Bangalore <br />
                Karnataka India – 560064
              </h1>
            </div>

            <iframe className='w-[25rem] h-[10rem] mt-10' src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9344122337816!2d77.56663177460582!3d13.103341511977225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19da06202f0f%3A0xf4ec8ed295f83a94!2sSuvilla%20residency!5e0!3m2!1sen!2sin!4v1708938681579!5m2!1sen!2sin"
            ></iframe>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact