import React from "react";
const Valider = () =>{
    return (
        
            
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
    );
};
export default Valider;