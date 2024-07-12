import React from "react";
import Html from "../../assets/img/html.png";
import Css from "../../assets/img/css.png";
import Bootstrap from "../../assets/img/bootstrap.png";
import Tailwind from "../../assets/img/tailwind.png";
import Tail from "../../assets/img/tail (2).png";
import Js from "../../assets/img/js.png";
import ReactImg from "../../assets/img/react.png";
import Firebase from "../../assets/img/firebase.png";
import Git from "../../assets/img/git.png";
import Express from "../../assets/img/express.png"
import Mongo from "../../assets/img/mongo.png"

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="pb-14 text-center">
        <h2 className="relative text-4xl font-semibold pb-5 after:absolute after:w-48 after:h-[5px] after:bottom-0 after:left-1/2 after:right-1/2 after:transform after:-translate-x-1/2  after:bg-primary ">
          Skills
        </h2>
      </div>
      <div className="px-20">
        {/* <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
        <div className='p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center rounded-md border border-primary hover:shadow-[0_7px_30px_-5px_rgba(0,240,168,0.2)]  hover:scale-105 transition ease-in duration-300'>
          <img src={Html} alt="" />
          <p className='text-xs text-[#c5c6c7]'>HTML 5</p>
        </div>
        <div className='p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center bg-[#0e1b40]'>
          <img src={Css} alt="" />
          <p className='text-xs text-[#c5c6c7]'>HTML 5</p>
        </div>
        <div className='p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center bg-[#0e1b40]'>
          <img src={Js} alt="" />
          <p className='text-xs text-[#c5c6c7]'>HTML 5</p>
        </div>
        <div className='p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center bg-[#0e1b40]'>
          <img src={Tailwind} alt="" />
          <p className='text-xs text-[#c5c6c7]'>HTML 5</p>
        </div>
        <div className='p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center bg-[#0e1b40]'>
          <img src={ReactImg} alt="" />
          <p className='text-xs text-[#c5c6c7]'>HTML 5</p>
        </div>
        <div className='p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center bg-[#0e1b40]'>
          <img src={Firebase} alt="" />
          <p className='text-xs text-[#c5c6c7]'>HTML 5</p>
        </div>
        <div className='p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center bg-[#0e1b40]'>
          <img src={Bootstrap} alt="" />
          <p className='text-xs text-[#c5c6c7]'>HTML 5</p>
        </div>
        <div className='p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center bg-[#215F6A]/10 rounded-lg hover:shadow-[0_7px_30px_-5px_rgba(33,95,106,0.5)]  hover:scale-105 transition ease-in duration-300'>
          <img src={Git} alt="" className='object-fit object-cover size-24' />
          <p className='text-xs text-[#c5c6c7]'>HTML 5</p>
        </div>
      </div> */}
        <div className="space-y-9">
          <div className="flex justify-center gap-10">
            <div className="p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center bg-[#215F6A]/10 rounded-lg hover:shadow-[0_7px_30px_-5px_rgba(33,95,106,0.5)]  hover:scale-105 transition ease-in duration-300">
              <img
                src={Html}
                alt=""
                className="object-fit object-cover size-24"
              />
              <p className="text-xs text-[#c5c6c7]">HTML 5</p>
            </div>
            <div className="p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center bg-[#215F6A]/10 rounded-lg hover:shadow-[0_7px_30px_-5px_rgba(33,95,106,0.5)]  hover:scale-105 transition ease-in duration-300">
              <img
                src={Css}
                alt=""
                className="object-fit object-cover size-24"
              />
              <p className="text-xs text-[#c5c6c7]">CSS3</p>
            </div>
            <div className="p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center bg-[#215F6A]/10 rounded-lg hover:shadow-[0_7px_30px_-5px_rgba(33,95,106,0.5)]  hover:scale-105 transition ease-in duration-300">
              <img
                src={Tail}
                alt=""
                className="object-fit object-cover size-24"
              />
              <p className="text-xs text-[#c5c6c7]">Tailwind</p>
            </div>
            <div className="p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center bg-[#215F6A]/10 rounded-lg hover:shadow-[0_7px_30px_-5px_rgba(33,95,106,0.5)]  hover:scale-105 transition ease-in duration-300">
              <img
                src={Bootstrap}
                alt=""
                className="object-fit object-cover size-24"
              />
              <p className="text-xs text-[#c5c6c7]">Bootstrap</p>
            </div>
            <div className="p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center bg-[#215F6A]/10 rounded-lg hover:shadow-[0_7px_30px_-5px_rgba(33,95,106,0.5)]  hover:scale-105 transition ease-in duration-300">
              <img
                src={Js}
                alt=""
                className="object-fit object-cover size-24"
              />
              <p className="text-xs text-[#c5c6c7]">Javascript</p>
            </div>
          </div>
          <div className="flex justify-center gap-10">
            <div className="p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center bg-[#215F6A]/10 rounded-lg hover:shadow-[0_7px_30px_-5px_rgba(33,95,106,0.5)]  hover:scale-105 transition ease-in duration-300">
              <img
                src={ReactImg}
                alt=""
                className="object-fit object-cover size-24"
              />
              <p className="text-xs text-[#c5c6c7]">React</p>
            </div>
            <div className="p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center bg-[#215F6A]/10 rounded-lg hover:shadow-[0_7px_30px_-5px_rgba(33,95,106,0.5)]  hover:scale-105 transition ease-in duration-300">
              <img
                src={Firebase}
                alt=""
                className="object-fit object-cover size-24"
              />
              <p className="text-xs text-[#c5c6c7]">Firebase</p>
            </div>
            <div className="p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center bg-[#215F6A]/10 rounded-lg hover:shadow-[0_7px_30px_-5px_rgba(33,95,106,0.5)]  hover:scale-105 transition ease-in duration-300">
              <img
                src={Mongo}
                alt=""
                className="object-fit object-cover size-24"
              />
              <p className="text-xs text-[#c5c6c7]">MongoDB Atlas</p>
            </div>
            <div className="p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center bg-[#215F6A]/10 rounded-lg hover:shadow-[0_7px_30px_-5px_rgba(33,95,106,0.5)]  hover:scale-105 transition ease-in duration-300">
              <img
                src={Express}
                alt=""
                className="object-fit object-cover size-24"
              />
              <p className="text-xs text-[#c5c6c7]">Express.js</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
