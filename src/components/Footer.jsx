import React from "react";

function Footer() {
  return (
    <>
      <div className="footer bg-[#0c0d0c]">
        <div className="wrap flex justify-between items-center px-12 text-white font-bold py-4 tl:px-4 tl:py-4 ">
          <h1 className="text-2xl">Abid Akram <p className="text-xs italic font-thin">Designed and built by me.</p></h1>
          <div className="flex gap-4 cursor-pointer ">
            <a href="https://www.instagram.com/abid.akram" target="_blank">
              <i className="fa-brands fa-instagram border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://github.com/abidakram01" target="_blank">
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
