import React, { useState } from "react";
import img1 from "../assets/images/project-img1.png";
import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "OLX Redesign",
      description: "UX Design",
      img: img1,
      path: 'olx'
    },
    // {
    //   id: 2,
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   img: img2,
    // },
    // {
    //   id: 3,
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   img: img3,
    // },
    // {
    //   id: 4,
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   img: img2,
    // },
    // {
    //   id: 5,
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   img: img3,
    // },
    // {
    //   id: 6,
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   img: img1,
    // },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-2">Projects</h1>
        <div className="flex justify-center items-center gap-4 mt-5 mb-3">
          <button className="font-light text-[15px] border-2 bg-[#171717] rounded-[6px] py-1 px-3 bg-[linear-gradient(90deg,#b004b0,#38097a)]">
            Design & Development
          </button>
        </div>
        <div className="grid grid-cols-4 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1">
          {projects.map((item, i) => <ProjectCard key={i} item={item} />)}
        </div>
      </div>
    </>
  );
}

export default Projects;
