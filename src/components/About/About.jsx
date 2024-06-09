import React from "react";
import AboutImg from "../../assets/img/about.png";
import { MdOutlineWorkHistory, MdOutlineSimCardDownload } from "react-icons/md";
import Info from "./Info";
const About = () => {
  return (
    <section id="about" className="section">
      <div className="pb-14 text-center">
        <h2 className="relative after-line after:w-44 ">About-Me</h2>
      </div>
      <div className=" flex flex-col items-center lg:items-start justify-center lg:flex-row lg:gap-28 gap-10  ">
        <div className="w-1/2 lg:max-w-[400px] rounded-md">
          {/* images */}
          <img src={AboutImg} alt="" className="rounded-md w-full" />
        </div>
        <div className="w-1/2 flex flex-col items-center lg:items-start space-y-10">
          <Info />
          <p className="text-sm  text-center md:text-left max-w-lg">
            Frontend developer. I create web pages with UI/UX use interface. I
            have years of experience and many clients are happy with the project
            carried out
          </p>
          <div>
            <button className="btn flex items-center gap-2 hover:scale-105 tranisition-all duration-500 ">
              Download CV <MdOutlineSimCardDownload className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
