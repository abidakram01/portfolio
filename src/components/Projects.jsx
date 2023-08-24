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
          <button
            onClick={() => setDurum(1)}
            className={`font-light text-[15px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Design & Development
          </button>
          {/* <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }  `}
          >
            Frontend Project
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Text-2
          </button> */}
        </div>
        <div className="grid grid-cols-4 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1">
          {durum === 1 ? projects.map((item, i) => <ProjectCard key={i} item={item} />) : null}
        </div>
        {/* {durum === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            atque porro quasi dolorum facere tempore maxime nemo quia nulla
            blanditiis doloribus, dolore, voluptas aspernatur harum facilis
            cumque magni soluta sapiente.
          </div>
        ) : null}
        {durum === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nisi.
          </div>
        ) : null} */}
      </div>
    </>
  );
}

export default Projects;
