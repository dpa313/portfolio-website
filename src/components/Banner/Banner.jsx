import React from "react";
import BannerImg from "../../assets/img/banner.png";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <section id="home" className="relative bg-no-repeat w-full min-h-[68vh] md:min-h-[78vh] lg:min-h-[85vh] z-10 flex items-center ">      
      <div className="mx-auto">
        <div className="flex flex-col max-w-[400px] md:max-w-[600px] lg:max-w-full md:flex-row items-center justify-center gap-y-10 lg:gap-y-0">
          <div className="hidden lg:flex md:flex-col gap-4 text-lg">
            <div className="cursor-pointer hover:scale-105 transition-all">
              <FaInstagram />
            </div>
            <div className="cursor-pointer hover:scale-105 transition-all">
              <FaGithub />
            </div>
            <div className="cursor-pointer hover:scale-105 transition-all">
              <FaLinkedin />
            </div>
          </div>
          {/* Text */}
          <div className="flex-1 font-light text-sm  lg:pr-20">
            <div className="text-center md:text-left md:pl-15 lg:pl-20 ">
              <h1 className="text-3xl  lg:text-[42px] text-primary  font-bold pb-2 leading-[50px] ">
                Web Developer
              </h1>
              <h3 className="text-2xl text-[#eaf7fb]  font-bold relative before:absolute before:w-32 before:-bottom-1 lg:before:w-14 before:h-[2px] lg:before:bottom-4 lg:before:-left-0 before:bg-[#eaf7fb] lg:pl-16">
                Apu Ahmed
              </h3>
              <p className="lg:max-w-[350px] font-medium py-8 text-[#eaf7fb] tracking-wide">
                I'm a self-taught front-end developer from bangladesh.I'm very
                passionate and dedicated to my work..
              </p>
              <div>
                <button className="btn tranisition-all duration-500 ">
                  Contact me!
                </button>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="flex-1 max-w-[320px] lg:max-w-[400px] lg:ml-14">
            <img src={BannerImg} alt="" className=" lg:w-[70%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
