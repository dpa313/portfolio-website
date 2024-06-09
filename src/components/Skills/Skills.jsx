import React from 'react'
import Html from '../../assets/img/html.png'
import Css from '../../assets/img/css.png'
import Bootstrap from '../../assets/img/bootstrap.png'
import Tailwind from '../../assets/img/tailwind.png'
import Js from '../../assets/img/js.png'
import ReactImg from '../../assets/img/react.png'
import Firebase from '../../assets/img/firebase.png'
import Git from '../../assets/img/git.png'

const Skills = () => {
  return (
    <section id="skills" className='section'>
      <div className="pb-14 text-center">
        <h2 className="relative text-4xl font-semibold pb-5 after:absolute after:w-48 after:h-[5px] after:bottom-0 after:left-1/2 after:right-1/2 after:transform after:-translate-x-1/2  after:bg-primary ">Skills</h2>
      </div>
      <div className='px-20'>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
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
        <div className='p-2 h-32 flex flex-col items-center justify-center gap-2 w-32 text-center bg-[#2f314e]'>
          <img src={Git} alt="" />
          <p className='text-xs text-[#c5c6c7]'>HTML 5</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Skills