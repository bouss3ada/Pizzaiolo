import React from "react";
import { useState,useEffect } from "react";
import { BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import axios from "axios";
import Contact from "../components/Contact/Contact";
import Nav from "../components/Nav/Nav";
import Menu from "../components/Menu/Menu";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Cart from "../components/Cart/Cart";
const Accueil = () => {

  const [cart, setCart] = useState([]);


  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };


  return (
   <div>
    
    <Nav />    
      <Routes>
    
        <Route path="/"   element={<Home  handleClick={handleClick}/>} />
        <Route path="/Menu" element={<Menu handleClick={handleClick} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login  />} />
        <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
          

     
      </Routes>

      </div>

  );
};

export default Accueil;