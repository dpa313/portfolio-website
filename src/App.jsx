import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
// import Contact from "./components/Contact/Contact";
import ContactAlt from "./components/Contact/ContactAlt";
import Footer from "./components/Footer/Footer";
import Header from "./components/Nav/Header";
import ProjectAlt from "./components/Projects/ProjectAlt/ProjectAlt";
// import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./variants";

function App() {
  return (
    <div className="font-primary h-full text-primary bg-[#081a24]">
      <div className="h-full">
        <div className="bg-[#215F6A]/10 backdrop-blur-3xl px-2 lg:px-0 sticky z-50 top-0 ">
          <Header />
        </div>
        <div className="lg:max-w-[80%] mx-auto">
          <motion.div
            variants={staggerContainer(0.3, 1)}
            initial="hidden"
            whileInView={"show"}
            className="relative pt-10 md:pt-0 "
          >
            <motion.div
              variants={fadeIn("down", "tween", 0.5, 1.1)}
              className="before:absolute before:w-24 before:h-[10px]  before:bg-primary 
                        md:before:top-10
                        md:before:left-20
                        lg:before:left-0
                        after:absolute after:w-[10px] after:h-24  after:bg-primary 
                        md:after:top-10
                        md:after:left-20
                        lg:after:left-0
            "
            ></motion.div>
            <Banner />
            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1.1)}
              className="before:absolute before:w-24 before:h-[10px] before:bg-primary
                           md:before:bottom-10
                           md:before:right-20
                           lg:before:right-0
                           after:absolute after:w-[10px] after:h-24 after:bg-primary 
                           md:after:bottom-10
                           md:after:right-20
                           lg:after:right-0
                             
            "
            ></motion.div>
          </motion.div>
          <About />
          <Skills />
          {/* <Projects /> */}
          <ProjectAlt />
          {/* <Contact /> */}
        </div>
        <div className=" h-full my-24">
          <ContactAlt />
        </div>
        <div className="bg-[#215F6A]/10 backdrop-blur-3xl ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
