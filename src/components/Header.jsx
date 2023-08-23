import React from 'react'
import logo from "../assets/images/astronout.png"
import logo1 from "../assets/images/astronout1.png"
import bg from "../assets/images/bg.jpg"
import Navbar from './Navbar'
import downloadCV from '../assets/images/Abid_Akram_UIUX_Designer_Resume.pdf'
import "../styles.css"

function Header() {
  return (
   <>
   <div id='home' style={{backgroundImage: `url(${bg})`}} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
    <Navbar/>
    <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
      <div className="content lg:text-center">
        <div className="btn py-3">
          <button  className=' border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl'>Welcome to my Space</button>
        </div>
        <h1 className='text-white text-5xl font-bold'>Hi! I'm Abid Akram</h1>
        <p className='text-white py-4 max-w-lg'>Hello, I'm a UI/UX designer and Front-end Developer with 5+ years of experience. I'm passionate about creating seamless digital experiences, blending creativity with technical expertise. I have a keen eye for user behavior, staying up-to-date with design trends for captivating interfaces. I design and code all websites from scratch, specialising in web standards compliant code.</p>
        <p className='text-white py-4 max-w-lg'>Also, enjoy photography, which adds an emotional touch to my work. My goal is to leave a lasting impact on every project.</p>
        <a href={downloadCV} download="Abid_Akram_UIUX_Designer_Resume.pdf" target="_blank" rel="noreferrer"><button  className='mr-3 border-2 border-[#b0aaaa] font-light text-sm text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-2 rounded-xl'>Download CV </button></a>
        {/* <a href={downloadCV} download="Abid_Akram_UIUX_Designer_Resume.pdf" target="_blank" rel="noreferrer"><button  className='border-2 border-[#b0aaaa] font-light text-sm text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-2 rounded-xl'>Download CV </button></a> */}
      </div>
      <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
      <img className='w-96 ast-img' src={logo1} alt="" />
    
      </div>
      <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
     
      <img className='w-96 ast-img' src={logo} alt="" />
      </div>
   
    </div>
   </div>
   </>
  )
}

export default Header