import React from "react";
import WorkCard from "../../chip/WorkCard";
import { data } from "../../data/data";

const Menu = ({ handleClick }) => {
  




  return (
   <div id="works" className="container m-auto mt-16">
     <div 
    data-aos="fade-up"
     className="relative mb-5">
      <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">Menu</h3>
      <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
    </div>
    <div 
    data-aos="fade-up"
     className="left flex-1 w-full">
      <p className="text-gray-700 font-medium w-[100%]">
        Here are some Pizza.
      </p>
    </div>

<div className="card-wrapper mx-auto w-[100%] sm:w-fit mt-5 mb-5">
  <div className="card-box grid grid-cols-3 space-y-5 space-x-5 w-full md:grid-cols-2 sm:gap-8 sm:grid-cols-1 sm:space-y-0 ">
      {data.map((item) => (
        <WorkCard key={item.id} item={item} handleClick={handleClick} />
      ))}
  </div>
</div>   
   </div>
  );
};

export default Menu;
