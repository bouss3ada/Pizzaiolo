import  { useState, useEffect } from "react";
import "../../styles/cart.css";
import axios from "axios";



const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);
  
    const handleRemove = (id) => {
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
      handlePrice();
    };
  
    const handlePrice = () => {
      let ans = 0;
      cart.map((item) => (ans += item.amount * item.price));
      setPrice(ans);
    };
  
    useEffect(() => {
      handlePrice();
    });
  
    return (
      <div className=" mx-auto  h-[680px]  md:h-[100vh] md:flex-col-reverse sm:h-[780px]   flex sm:flex-col-reverse sm:pt-0  bg-gray-300">
      <article >
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total Price of your Cart</span>
          <span> {price}</span>
        </div>
        <div className="right flex-1  " >
          <form            
            data-aos="zoom-in"            
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[75%] mx-auto"
            style={{'height':'360px'}}>

            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="Nom Commande"
              name="from_name"
            />               
        
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="tet"
              placeholder="Email"
              name="from_email"
            />
            
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="Phone Number"
              name="from_tel"
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="Adresse"
              name="from_adress"
            />
             <button type="submit" action=""
              className="bg-yellow-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
                
            >             
              Valider
            </button>
                    



          </form>
        </div>

      </article>

      
      </div>
    );
  };
export default Cart;