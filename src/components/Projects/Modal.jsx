import React from "react";
import portfolios from "../../assets/data/portfolioData";
import { space } from "postcss/lib/list";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);
  return (
    <div className="h-full w-full fixed top-0 left-0 z-10 bg-primary/20 ">
      <div className="max-w-[500px] absolute top-1/2 left-1/2 z-20 bg-white transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-md ">
        <div>
          <figure>
            <img className="rounded-md" src={portfolio.imgUrl} alt="" />
          </figure>
        </div>
        <div className="space-y-2">
            <h2 className="text-xl text-primary">{portfolio.title}</h2>
            <p className="text-xs">{portfolio.description}</p>
            <div className="flex items-center gap-2">
                <h4 className="text-sm font-medium">Technologies:</h4>
                {
                    portfolio.technologies.map((item,index)=>(
                        <span className="bg-gray-200 text-xs  px-2 py-1 rounded-md" key={index}>{item}</span>
                    ))
                }
            </div>
            <a href={portfolio.siteUrl}>
                <button className="px-3 py-2 bg-primary text-white rounded-md mt-4">Live Site</button>
            </a>
        </div>
        <button 
            onClick={()=>setShowModal(false)}
            className="h-5 w-5 absolute top-[1.7rem] right-[1.7rem] flex items-center justify-center bg-white text-4xl rounded-sm ">&times;</button>
      </div>
    </div>
  );
};

export default Modal;
