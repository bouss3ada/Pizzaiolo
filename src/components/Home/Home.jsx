
import React from "react";
import { TypeAnimation } from "react-type-animation";
import 'react-toastify/dist/ReactToastify.css';
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

  
                    
const Home = ({ handleClick }) => {



  return (
    <div id="home" className={`bg-gray-300`}>
    <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
      <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
        <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
          <h2
            data-aos="fade-up"
            className=" text-5xl font-bold sm:text-[2rem]"
          >
            Pizza to fill your soul
          </h2>
          <TypeAnimation
            data-aos="fade-up"
            sequence={[
              "You have to taste",
              2000,
              "the best pizza",
              2000,
              "",
             ]}
            speed={30}
            wrapper="h2"
            repeat={Infinity}
            className="text-yellow-500 text-4xl font-bold sm:text-3xl"
          />
          
        </div>
       

      </div>
      <div className=" right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
              <div data-aos="zoom-in" data-aos-duration="1000"  className=" relative cursor-pointer">
                <img
                  className=" w-[400px] md:w-[90px] circle-text"
                  src="https://i.postimg.cc/GpSzQtgB/klipartz-com.png"
                  alt=""
                />
         
              </div>
              </div>
      
     
    </div>
     
    <Menu handleClick={handleClick}/>
  
    
    <Contact />
    <Footer />
  </div>
  );
};


export default Home;
