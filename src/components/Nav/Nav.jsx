import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import Home from "../Home/Home";


const Nav = ()=> {
  

  return (
    <nav   >
     <div className="  m-auto  flex items-center justify-between bg-gray-300 "> 
      <div data-aos="fade-down" className="logo" >
          <NavLink
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-3xl    font-bold sm:text-3xl  "
          >
            Pizzaiolo.
          </NavLink>
        </div>
    
        <div
          data-aos="fade-down"
          className="nav-items flex items-center space-x-11  "
        >


          
    <NavLink  className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center"  to="/">
      Home
    </NavLink>
    <NavLink  className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center" to="/Menu">
      Menu
    </NavLink>
    
    <NavLink  className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center" to="/Contact">
      Contact
    </NavLink>
    <NavLink  className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center" to="/Login">
      Login
    </NavLink>
    <NavLink   to="/Cart">
          <button className="custom-btn btn-3 bg-yellow-300">
              <span >🛒Cart</span>
              </button>    
    </NavLink>



    

    </div>

    </div>
      




  </nav>
  


  
  )
};

export default Nav;