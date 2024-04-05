import React, { useState,useRef} from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import emailjs from '@emailjs/browser';

const TopBar = () => {
  const [chatvisibility, setChatvisibility] = useState(true);
  const form = useRef()

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j8kbaal', 'template_72i8nlj', form.current, {
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
  };;
  return (
    <div>
      <div
        className="w-full border-red-900 text-3xl
    items-center shadow-sm gap-5
    font-bold py-1
     px-0 md:px-32
     text-[#002060]  bg-white
    flex
    justify-center
    md:justify-end
     "
      >
        <a href="https://www.instagram.com/mechfusion_/">
        
         <FaInstagram className="  hover:p-1 hover:scale-110 border-[#002060] cursor-pointer p-[0.15rem]  hover:text-[#002060]" />
         </a>
        <a href="https://www.facebook.com/MechfusionEngineeringSolutions">
        <FaFacebook className="  hover:p-1 hover:scale-110  border-[#002060] cursor-pointer p-[0.15rem]  hover:text-[#002060]" />
        </a>
        {/* <FaWhatsapp className="  hover:p-1 hover:scale-110  border-[#002060] cursor-pointer p-[0.15rem]  hover:text-[#002060]" /> */}
        <a href="https://wa.me/+918138923143/?text=let me know more about mechfusion">
          <FaWhatsapp className="  hover:p-1 hover:scale-110  border-[#002060] cursor-pointer p-[0.15rem]  hover:text-[#002060]" />
        </a>

        <a href="https://www.linkedin.com/company/mechfusion/">
        <FaLinkedin className="  hover:p-1 hover:scale-110  border-[#002060] cursor-pointer p-[0.15rem]  hover:text-[#002060]" />
        </a>
      </div>
      {!chatvisibility ? (
        <div className="fixed top-16 right-2 z-50">
          <div
            className="w-72  md:w-72 h-[77vh] overflow-clip
        flex flex-col items-center  border-2 shadow-lg
         bg-white "
          >
            <div className="bg-[#002060] w-full items-center flex flex-col text-right ">
              <div>
                <h1 className="cursor-pointer text-white text-4xl font-bold ">
                  Mech<span className="text-[#595959]">fusion</span>
                </h1>
                <div className="flex">
                <h1 className="text-[.46rem] uppercase pl-20   text-[#595959] ">
                  E n g i n e e r i n g 
                </h1>
                <h1 className="text-[.46rem] uppercase   text-[#595959] pl-2 ">
                  S o l u t i o n s
                </h1>
                </div>
              </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className='h-[120vh] flex flex-col gap-5 mt-5'>
            {/* <label htmlFor="">Name</label> */}
            <input type="text" className="border h-8 pl-2" name="user_name"placeholder="Enter Your Name" id="" />
            {/* <label htmlFor="">Email</label> */}
            <input type="email" className="border h-8 pl-2" name="user_email"placeholder="Enter your Email" id="" />
            <input type="text" className="border h-8 pl-2" name="user_no"placeholder=" Phone Number" id="" />
            <textarea
              name="message"
              className="border pl-2"
              id=""
              cols="20"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className='w-32 h-8 bg-[#002060] text-white ml-8'>
            Send
            </button>
            </form>
          </div>
        </div>
      ) : null}
      {chatvisibility ? (
        <div
          onClick={() => {
            setChatvisibility(!chatvisibility);
          }}
          className="text-white flex justify-center items-center text-4xl fixed z-50
                right-2 bottom-1  rounded-full w-14 h-14 bg-[#002060]"
        >
          <IoChatboxEllipsesOutline />
        </div>
      ) : (
        <div
          onClick={() => {
            setChatvisibility(!chatvisibility);
          }}
          className="text-white flex justify-center items-center text-4xl fixed z-50
                right-2 bottom-1  rounded-full w-14 h-14 bg-[#002060]"
        >
          <IoCloseSharp />
        </div>
      )}
    </div>
  );
}

export default TopBar;