import React from 'react'
import InnerNavbar from '../InnerNavbar'
import olxImg from '../../assets/images/olx.svg'

function Olx() {
  return (
    <>
      <InnerNavbar />
      <div id="olx" className="projects  bg-[#171717]">
        <div className='px-20 py-20'>
          <img className='w-full ast-img' src={olxImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default Olx