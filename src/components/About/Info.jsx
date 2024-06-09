import React from 'react'
import { MdWorkOutline,MdOutlineBookmarkBorder   } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const Info = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full gap-5 ">
          <div className=" md:w-full rounded-md border shadow border-primary/10 hover:scale-105 transition ease-in duration-300  ">
            <div className='flex flex-col justify-center items-center py-4  h-full rounded'>
            <MdOutlineBookmarkBorder  className="text-2xl" />
            <h4 className="text-lg font-semibold">Experience</h4>
            <p className="text-xs">2+ years</p>
            </div>
          </div>
          <div className="md:w-full rounded-md border shadow border-primary/10 hover:scale-105 transition ease-in duration-300  ">
            <div className='flex flex-col justify-center items-center py-4 h-full rounded'>
            <MdWorkOutline  className="text-2xl" />
            <h4 className="text-lg font-semibold">Projects</h4>
            <p className="text-xs">30+ completed</p>
            </div>
          </div>
          {/* <div className="w-[170px]  p-2 rounded-md shadow-lg hover:scale-105 transition ease-in duration-300  ">
            <div className='flex flex-col justify-center items-center py-4 bg-[#fafafa] h-full rounded'>
            <BiSupport  className="text-2xl" />
            <h4 className="text-lg font-semibold">Support</h4>
            <p className="text-xs">Online 24/7</p>
            </div>
          </div> */}
        </div>
  )
}

export default Info