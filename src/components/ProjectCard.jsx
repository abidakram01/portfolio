import React from 'react'
import { Link } from 'react-router-dom';

function ProjectCard({ item }) {
  return (
    <>
      <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
        <img src={item.img} alt="project" className='w-full' />
        <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 flex items-center justify-center">
          <div>
            <h1 className="font-semibold text-2xl">{item.title}</h1>
            <p className="font-normal italic">{item.description}</p>
            <Link to={item.path}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-normal rounded-lg text-xs px-4 py-2 text-center mt-3">Explore</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard