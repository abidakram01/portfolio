import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import bg from "../assets/images/bannerBg.jpg"
import cisco from "../assets/images/cisco.svg"
import open from "../assets/images/open.svg"
import ibm from "../assets/images/ibm.svg"
import adverb from "../assets/images/adverb.svg"

function Brands() {
  return (
    <>
      <div id="brands" style={{ backgroundImage: `url(${bg})` }} className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4">
        <div className="brands-wrapper text-center text-white bg-[#171717] p-10 rounded-[50px] lg:p-2 mb-5">
          <h1 className="text-4xl ">Brands</h1>
          <p className="text-lg py-3 text-[#939191]">
            I have had the privilege of working with
          </p>
          <div class="grid gap-x-8 gap-y-4 grid-cols-4 py-6">
            <div className="px-4"><img src={cisco} /></div>
            <div className="px-4"><img src={open} /></div>
            <div className="px-4"><img src={ibm} /></div>
            <div className="px-4"><img src={adverb} /></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brands;
