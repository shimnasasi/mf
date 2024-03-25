import React , {useRef} from 'react'
import Layout from '../Layout/Layout'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j8kbaal', 'template_3afcoq8', form.current, {
        publicKey: 'edVBBFxveILzzL9a7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <Layout>
      <div className='w-full h-64 bg-bannerbg md:px-32'>
        <h1 className="text-white mx-20 md:mx-32 pt-24 text-5xl font-bold">Contact Us</h1>
        <h2 className='text-white mx-32 pt-2 '>Home/Contact us</h2>
      </div>
      <h1 className='text-xl text-clip pl-36 md:pl-60 pt-10'>Online Inquiry</h1>
      {/* <h1 className='text-xl'>Contact Details</h1> */}
      <div className='w-full  bg-white'>
        <div className='md:flex gap-12'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5 mx-10 md:ml-60 mt-10'>
            <input type="text" className='w-[22rem] md:w-[35rem] h-12 border border-[#e1e1e1] pl-5' placeholder="Your Full Name" name="user_name" required/>
            <input type="text" className='w-[22rem] md:w-[35rem] h-12 border border-[#e1e1e1] pl-5' placeholder="Your Email Address" name="user_email" required/>
            <input type="text" className='w-[22rem] md:w-[35rem] h-12 border border-[#e1e1e1] pl-5' placeholder="Your Phone Number" name="user_number" required/>
            {/* <input type="text" className='w-[22rem] md:w-[35rem] h-12 border border-[#e1e1e1] pl-5' placeholder="Your Address" name="user_address" required/> */}
            <textarea name="message" cols="30" rows="10" className='w-[22rem] md:w-[35rem] h-32 border border-[#e1e1e1] pl-5' placeholder="Enter Your Message Here"></textarea>
            <button className='w-56 h-12 bg-[#002060] text-white'>
            Send
            </button>
          </form>

          <div>
            
            <div className='invisible lg:visible md:flex flex-col hidden md:w-[25rem] md:h-[15rem] md:bg-[#f1f1f3]  md:pl-8 md:pt-7' >

              {/* <h1 className="text-5xl font-bold cursor-pointer  "> */}
              {/* Mech <span className="text-[#595959]">Fusion</span> */}
              <div className='flex pt-6 pl-8 '>
                <h1 className='text-5xl text-[#002060] font-bold cursor-pointer'>Mech</h1>
                <h1 className='text-[#595959] font-bold text-5xl'>fusion</h1>
                {/* </h1> */}
              </div>
              <div className='flex'>
              <h1 className="text-[.60rem] text-[#494949]  pl-32 pr-2 uppercase">E n g i n e e r i n g  </h1>
              <h1 className="text-[.60rem] text-[#494949]   uppercase">  S o l u t i o n s</h1>
              </div>
              <h1 className='flex flex-col gap-7 pt-5 pl-8'>
                {/* Santhosh nagar <br /> */}
                {/* Attur layout <br /> */}
                Yelahanka Newtown<br />
                Bangalore <br />
                Karnataka India – 560064
              </h1>
            </div>

            <iframe className=' w-[22rem] md:w-[25rem] h-[10rem] mt-10 ml-[2.5rem] md:ml-0 ' src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9344122337816!2d77.56663177460582!3d13.103341511977225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19da06202f0f%3A0xf4ec8ed295f83a94!2sSuvilla%20residency!5e0!3m2!1sen!2sin!4v1708938681579!5m2!1sen!2sin"
            ></iframe>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact