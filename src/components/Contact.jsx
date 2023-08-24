import React from "react";
import img from "../assets/images/contact-img.svg";
import downloadCV from '../assets/images/Abid_Akram_UIUX_Designer_Resume.pdf'

function Contact() {
  return (
    <>
      <div className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full">
        <div className="wrapper flex justify-center  py-16 gap-52 lg:py-12">
          <div className="imgbox lg:hidden">
            <img className="w-[550px] h-full" src={img} alt="" />
          </div>
          <div className="content-box ">
            <h1 className="text-white font-semibold text-4xl py-2">Contact</h1>
            <p className="text-lg font-normal py-1 text-white mb-5">Reach Out and Ignite the Conversation!</p>
            <p className="text-xl font-thin py-3 text-white"><i class="me-3 fa-solid fa-envelope"></i>abid.akram01@gmail.com</p>
            <p className="text-xl font-thin py-3 text-white"><i class="me-3 fa-solid fa-phone"></i>+91-9026553313</p>
            <p className="text-xl font-normal py-5 text-center text-white dark:text-white">Else</p>
           
            <a href={downloadCV} download="Abid_Akram_UIUX_Designer_Resume.pdf" target="_blank" rel="noreferrer">
              <button class="relative inline-flex mt-4 items-center w-full justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span class="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download CV
                </span>
              </button>
            </a>
          </div>


        </div>

      </div>
    </>
  );
}

export default Contact;
