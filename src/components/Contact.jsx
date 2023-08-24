import React from "react";
import img from "../assets/images/contact-img.svg";

function Contact() {
  return (
    <>
      <div className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full">
        <div className="wrapper flex justify-center  py-16 gap-52 lg:py-12">
          <div className="imgbox lg:hidden">
            <img className="w-[550px] h-full" src={img} alt="" />
          </div>
          <div className="content-box">
            <h1 className="text-white font-bold text-4xl py-4">Get In Touch</h1>
            <p className="text-xl font-thin py-3 text-white"><i class="me-3 fa-solid fa-envelope"></i>abid.akram01@gmail.com</p>
            <p className="text-xl font-thin py-3 text-white"><i class="me-3 fa-solid fa-phone"></i>+91-9026553313</p>
            <p className="text-xl font-semibold text-center text-white dark:text-white">or</p>
            <form action="" className="flex flex-col ">
              <div className="gap-4 py-2">
                <input
                  className="bg-transparent h-14 rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white w-full"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="flex gap-4  py-4  ">
                <input
                  className="bg-transparent h-14  rounded-2xl   border-[1px] border-white pl-4 text-white placeholder-white w-full"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <textarea
                className="bg-transparent rounded-2xl border-[1px] border-white h-36 pl-4 text-white w-full placeholder-white pt-2"
                rows={40}
                cols={35}
                placeholder="Message"
              ></textarea>
              <button className="bg-white border-black border-[1] py-[16px] rounded-lg px-8 my-8 w-32 font-bold ">Send</button>
            </form>
          </div>


        </div>

      </div>
    </>
  );
}

export default Contact;
