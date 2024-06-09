import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Nav/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="font-primary h-full text-primary">
      <div className="h-full">
        <div className="bg-primary px-2 lg:px-0 sticky z-50 top-0 "><Header /></div>
        <div className="lg:max-w-[80%] mx-auto">
          <div className="relative pt-10 md:pt-0 ">
            <div 
              className="before:absolute before:w-24 before:h-[10px]  before:bg-primary 
                        md:before:top-10
                        md:before:left-20
                        lg:before:left-0
                        after:absolute after:w-[10px] after:h-24  after:bg-primary 
                        md:after:top-10
                        md:after:left-20
                        lg:after:left-0
            ">
            </div>
            <div className="before:absolute before:w-24 before:h-[10px] before:bg-primary
                           before:right-0
                           before:bottom-0
                           lg:before:bottom-10 
                           after:absolute after:w-[10px] after:h-24 after:bg-primary 
                           after:right-0 
                           after:bottom-0
                           lg:after:bottom-10  
            ">
            </div>
            <Banner />
          </div>
          <About />
          {/* <Skills /> */}
          <Projects />
          <Contact />
        </div>
        <div className="bg-primary"><Footer /></div>
      </div>
    </div>
  );
}

export default App;
