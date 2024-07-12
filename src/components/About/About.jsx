import React from "react";
// import AboutImg from "../../assets/img/about.png";
import AboutImg from "../../assets/img/about7.png";
import { MdOutlineWorkHistory, MdOutlineSimCardDownload } from "react-icons/md";
import Info from "./Info";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../variants";
const About = () => {
  return (
    <motion.div
      variants={staggerContainer(0.3, 1)}
      initial="hidden"
      whileInView={"show"}
      className="bg-[#215F6A]/10 h-[380px] flex"
    >
      <div className="relative w-2/5 flex justify-center items-center ">
        <div className="bg-[#081a24] w-[90%] h-36"></div>
        <img
          src={AboutImg}
          alt=""
          className="absolute h-[300px] object-cover"
        />
      </div>
      <div className="pl-20 pt-10 w-3/5">
        <div className="pb-10">
          <motion.h2 
          variants={fadeIn('right','tween',0.5,1.1)}
          className=" relative text-4xl font-semibold pb-3 after:absolute after:h-[5px] after:top-1/2 after:bottom-1/2 after:left-[170px] after:transform after:-translate-y-1/2  after:bg-primary after:w-20 text-[#eaf7fb] ">
            About me
          </motion.h2>
        </div>
        <p className="text-sm  text-center md:text-left max-w-md pb-10  text-white tracking-widest">
          I’m a Front-End React Developer who loves building smooth and
          interactive websites. I focus on clean, efficient code and great
          design. Always learning and adapting, I turn ideas into user-friendly
          experiences. Let’s create something amazing together.
        </p>
        <div>
          <button className="btn flex items-center gap-2 hover:scale-105 tranisition-all duration-500 ">
            Download CV <MdOutlineSimCardDownload className="text-xl" />
          </button>
        </div>
      </div>
    </motion.div>
    // <section id="about" className="section">
    //   <div className="pb-14 text-center">
    //     <h2 className="relative after-line after:w-44 ">About-Me</h2>
    //   </div>
    //   <div className=" flex flex-col items-center lg:items-start justify-center lg:flex-row lg:gap-28 gap-10  ">
    //     <div className="w-1/2 lg:max-w-[400px] rounded-md">
    //       {/* images */}
    //       <img src={AboutImg} alt="" className="rounded-md w-full" />
    //     </div>
    //     <div className="w-1/2 flex flex-col items-center lg:items-start space-y-10">
    //       <Info />
    //       <p className="text-sm  text-center md:text-left max-w-lg">
    //         Frontend developer. I create web pages with UI/UX use interface. I
    //         have years of experience and many clients are happy with the project
    //         carried out
    //       </p>
    //       <div>
    //         <button className="btn flex items-center gap-2 hover:scale-105 tranisition-all duration-500 ">
    //           Download CV <MdOutlineSimCardDownload className="text-xl" />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default About;
