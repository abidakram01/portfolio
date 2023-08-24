import React, { useState } from "react";
import downloadCV from '../assets/images/Abid_Akram_UIUX_Designer_Resume.pdf'
import "../styles.css";
import logo from "../assets/images/logo.svg";
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [durum, setDurum] = useState(true);
  console.log(durum);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".navbarcon").style.backgroundColor = "#0c0d0c";
    } else {
      document.querySelector(".navbarcon").style.backgroundColor = "rgba(19, 19, 19, 19)";
      // document.querySelector(".tl").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  }

  return (
    <>
      <div className="navbarcon flex justify-between items-center px-20 py-4 bg-transparent z-40 text-white lg:px-4 fixed w-full">
        <h1 className="logo"><img src={logo} /></h1>
        <nav
          className={` flex justify-center items-center gap-x-10 ${durum && "lg:hidden"
            } lg:fixed lg:top-0 -z-20  lg:flex-col lg:w-full lg:bg-[#0c0d0c]  lg:h-[450px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}
        >
          <ul className=" flex gap-10 text-xl mr-4 lg:flex-col lg:gap-6 ">
            <li className="bla">
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>

          {/* <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10">
            <a href="https://twitter.com/reayhs" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>

            <a href="https://www.instagram.com/iburakz/" target="_blank">
              <i className="fa-brands fa-instagram border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a
              href="https://github.com/Reayhs/react-tailwind-portfolio"
              target="_blank"
            >
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>*/}
          <div className="btn">
            <a href={downloadCV} download="Abid_Akram_UIUX_Designer_Resume.pdf" target="_blank" rel="noreferrer">
              <button className="border-[1px] border-white border-solid py-1 px-3 hover:bg-white hover:text-black font-semibold">
                Download CV
              </button>
            </a>
          </div>
        </nav>
        <i
          onClick={(e) => setDurum(!durum)}
          className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer"
        ></i>
      </div>
    </>
  );
}

export default Navbar;