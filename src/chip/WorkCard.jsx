import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const WorkCard = ({ item, handleClick }) => {
  const {title, price, img } = item;
  return (
    <div 
    
    key={data.id}
     className="flex flex-col justify-center items-center gap-4">
      <POPUP className="img-content relative">
      <div className="h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto">
        <img src={img} alt="" className=" object-fit w-full h-full hover:scale-125 transition duration-500 cursor-pointer" />
      </div>
      <div className={` popup w-full  h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4`}>

                <div className=" flex items-center justify-center gap-4">
                </div>
      </div>

      </POPUP>
    
        <p className="text-gray-800 text-xl font-medium sm:text-lg">{title}</p>
        <p className=" text-gray-900 text-base leading-[1.4] text-justify w-[10%]">   {price}</p>
        <button className=" btn-3" onClick={() => handleClick(item)}>Add to Cart</button>
    
    </div>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
