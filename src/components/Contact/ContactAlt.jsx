import React from 'react'

const ContactAlt = () => {
  return (
    <section id="contact" className="section w-[80%] h-full mx-auto ">
      <div className="container mx-auto">
        <div className="pb-8 text-center">
          <h2 className=" relative after-line after:w-40 text-[#eaf7fb] ">
            Contact
          </h2>
        </div>
        <div className="flex  bg-[#215F6A]/10 py-16 rounded-md ">
          <div className="w-2/5 text-center ">
            {/* <h4 className="font-medium uppercase text-[#eaf7fb] ">Get in touch</h4> */}
            <h2 className="text-[42px] font-semibold text-[#eaf7fb] leading-snug">
              Let's Work together
            </h2>
            <div>

            </div>
          </div>
          <div className="w-3/5 flex-col space-y-5 pl-16 border-l border-primary/40 pr-20">
            <div className="space-y-1">
              <label
                htmlFor=""
                className="text-[#eaf7fb] "
              >
                Name
              </label>
              <input
                className="w-full border-b border-primary/30 pl-3 bg-[#081a24] py-2 text-[#eaf7fb]  outline-none "
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-1">
              <label
                className="text-[#eaf7fb] "
                htmlFor=""
              >
                Email
              </label>
              <input
                className="w-full border-b border-primary/30 pl-3 bg-[#081a24] py-2 text-[#eaf7fb]  outline-none "
                type="email"
                placeholder="Enter email"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-[#eaf7fb] ">Message</h3>
              <textarea className=" w-full border-b border-primary/30 pl-3 bg-[#081a24] py-2 text-[#eaf7fb]  outline-none " rows="5"></textarea>
            </div>
            <button className="btn text-center bg-[#eaf7fb] text-[#081a24] hover:bg-[#081a24] hover:text-[#eaf7fb] transition-all duration-300 ">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactAlt