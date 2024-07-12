import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section ">
      <div className="container mx-auto">
        <div className="pb-14 text-center">
          <h2 className="relative after-line after:w-40">
            Contact
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-[80%] mx-auto space-y-10 lg:space-y-0">
          <div className="flex-1 text-center pt-5 ">
            <h4 className="font-medium uppercase">Get in touch</h4>
            <h2 className="text-3xl text-[42px] font-semibold text-primary leading-snug">
              Let's Work <br /> together
            </h2>
          </div>
          <div className="flex-1 flex-col space-y-5">
            <div className="relative">
              <label
                htmlFor=""
                className="absolute -top-3 left-3 px-1 bg-white"
              >
                Name
              </label>
              <input
                className="w-full border border-primary/30 pl-3 py-2 rounded-lg outline-none "
                type="text"
                placeholder="Enter name"
              />
            </div>
            <div className="relative">
              <label
                className="absolute -top-3 left-3 px-1 bg-white"
                htmlFor=""
              >
                Email
              </label>
              <input
                className="w-full border border-primary/30 pl-3 py-2 rounded-lg outline-none "
                type="email"
                placeholder="Enter email"
              />
            </div>
            <div className="relative">
              <h3 className="absolute -top-3 left-3 px-1 bg-white">Message:</h3>
              <textarea className=" bg-white w-full   overflow-hidden border outline-none resize-none border-primary/30 pl-3 py-2 rounded-lg " rows="5"></textarea>
            </div>
            <button className="btn text-center ">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
