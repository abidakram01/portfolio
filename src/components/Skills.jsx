import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import bg from "../assets/images/banner-bg.png"

function Skills() {
  return (
    <>
      <div id="skills" style={{ backgroundImage: `url(${bg})` }} className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4">
        <div className="skills-wrapper text-center text-white bg-[#171717] p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl ">Skills</h1>
          <p className="text-lg py-3 text-[#939191]">
            I'm a big believer in always challenging yourself and learning new skills....
          </p>
          <div className="box text-left bg-[#171717] my-6">
            <div className="grid grid-cols-5 md:grid-cols-1 gap-10">
              <div>
                <h2 className="mb-2 text-xl font-normal text-sky-200 dark:text-white">Frontend Technologies:</h2>
                <ul className="max-w-md space-y-1 text-white-500 list-disc list-inside dark:text-gray-400">
                  <li>HTML5 / CSS3</li>
                  <li>Angular</li>
                  <li>Angular Material</li>
                  <li>Bootstrap</li>
                  <li>Tailwind</li>
                  <li>GIT</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div>
                <h2 className="mb-2 text-xl font-normal text-sky-200 dark:text-white">Design:</h2>
                <ul className="max-w-md space-y-1 text-white-500 list-disc list-inside dark:text-gray-400">
                  <li>Product Design</li>
                  <li>User Experience Design</li>
                  <li>Interaction Design</li>
                  <li>Wireframing</li>
                  <li>Prototyping</li>
                  <li>Mobile Design</li>
                  <li>Web Design</li>
                </ul>
              </div>
              <div>
                <h2 className="mb-2 text-xl font-normal text-sky-200 dark:text-white">Research:</h2>
                <ul className="max-w-md space-y-1 text-white-500 list-disc list-inside dark:text-gray-400">
                  <li>User Research</li>
                  <li>Usability Testing</li>
                  <li>Personas & Scenarios</li>
                </ul>
              </div>
              <div>
                <h2 className="mb-2 text-xl font-normal text-sky-200 dark:text-white">Collaboration:</h2>
                <ul className="max-w-md space-y-1 text-white-500 list-disc list-inside dark:text-gray-400">
                  <li>Project Management</li>
                  <li>Communication</li>
                  <li>Problem Solving</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-normal text-sky-200 dark:text-white">Tools:</h2>
                <ul className="max-w-md space-y-1 text-white-500 list-disc list-inside dark:text-gray-400">
                  <li>Figma</li>
                  <li>Notion</li>
                  <li>Zeplin</li>
                  <li>InVision</li>
                  <li>Visual Studio Code</li>
                  <li>WordPress</li>

                </ul>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Skills;
