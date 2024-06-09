import React, { useEffect, useState } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";
const Projects = () => {
  const [nextItems, setNextItems] = useState(3);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab,setSelectTab] = useState('all')
  const [showModal,setShowModal] = useState(false)
  const [activeID,setActiveID] = useState(null) 

  const loadMoreHandler = () => {
    setNextItems(prev => prev + 3 );
  };

  const showModalHandler = (id) =>{
      setShowModal(true)
      setActiveID(id)
  }

  useEffect(()=>{
    
    if(selectTab === "all"){
      setPortfolios(data)
    }

    if(selectTab === "web-design"){
      const filteredData = data.filter(item=> item.category === 'Web Design')
      setPortfolios(filteredData)
    }

    if(selectTab === "ux-design"){
      const filteredData = data.filter(item => item.category === "Ux")
      setPortfolios(filteredData)
    }

  },[selectTab])

  return (
    <section id="projects" className="mt-20">
      <div className="pb-14 text-center">
        <h2 className="relative after-line after:w-40 ">
          Projects
        </h2>
      </div>
      <div className="flex gap-3 justify-center">
        <button 
          onClick={()=>setSelectTab('all')}
          className="border border-primary px-4 py-2 rounded-md">
          All
        </button>
        <button 
          onClick={()=>setSelectTab('web-design')}
          className="border border-primary px-4 py-2 rounded-md">
          Web Design
        </button>
        <button 
          onClick={()=>setSelectTab('ux-design')}
          className="border border-primary px-4 py-2 rounded-md">
          UX Design
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-3 mt-12 d">
        {portfolios.slice(0, nextItems).map((portfolio, index) => (
          <div key={index} className="relative z-[1] group max-w-sm mx-auto ">
            <figure>
              <img className="rounded-md" src={portfolio.imgUrl} alt="" />
            </figure>
            <div className="absolute top-0 left-0 h-full w-full bg-black/20 hidden group-hover:block z-[5] rounded-md ">
              <div className="w-full h-full flex items-center justify-center">
                <button 
                  onClick={()=>showModalHandler(portfolio.id)}
                  className="btn">
                  See Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        {nextItems < portfolios.length && data.length > 6 && (
          <button
            onClick={loadMoreHandler}
            className="btn"
          >
            Load More
          </button>
        )}
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>}
    </section>
  );
};

export default Projects;
