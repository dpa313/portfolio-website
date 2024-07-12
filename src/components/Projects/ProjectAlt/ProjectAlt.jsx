import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import SliderButton from './SliderButton'

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate similique distinctio recusandae sit corrupti vero illo consequatur ",
    stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
    image: '/src/assets/img/portfolio-01.jpg',
    live: "",
    github: ""
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate similique distinctio recusandae sit corrupti vero illo consequatur ",
    stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
    image: '/src/assets/img/portfolio-02.jpg',
    live: "",
    github: ""
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate similique distinctio recusandae sit corrupti vero illo consequatur ",
    stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
    image: '/src/assets/img/portfolio-03.jpg',
    live: "",
    github: ""
  }
]


const ProjectAlt = () => {
  const [project,setProject] = useState(projects[0])

  const handleSlideChange = (swiper) =>{
    // get current index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex])
  }
  return (
    <motion.section
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='space-y-3'>
              {/* Outline number */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
              {/* Project Category */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-primary transition-all duration-500 capitalize'>{project.category} project</h2>
              {/* project Description */}
              <p className='text-white/60'>{project.description}</p>
              {/* Stack */}
              <ul className='flex gap-4'>
                {
                  project.stack.map((item,index)=>{
                    return (
                      <li key={index} >
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    )
                  })
                }
              </ul>
              <div className='border border-white/20'></div>
              <div className=''>
                <button className='btn'>Live View</button>
                <button className='btn'>View Code</button>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-1/2'>
                <Swiper
                 spaceBetween={30}
                 slidesPerView={1}
                 className='xl:h-[520px] mb-12'
                 onSlideChange={handleSlideChange}
                >
                  {
                    projects.map((project,index)=>{
                      return <SwiperSlide key={index} className='w-full'>
                        <div className='h-[460px] relative group flex justify-center items-center bg-pink-100/20'>
                          {/* overlay */}
                          <div className='absolute top-0 bottom-0 w-full h-full bg-black-100/10'></div>
                          {/* image */}
                          <div>
                            <img 
                              src={project.image} alt=""
                              className='object-cover'
                              />
                          </div>
                        </div>
                      </SwiperSlide>
                    })
                  }
                  <SliderButton
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-primary text-white text-[22px] size-[44px] flex justify-center items-center transition-all"
                  />
                </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectAlt