"use client"
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export function Comp (props){
    return (
       <>
        <div className={`w-[55%] h-[75%] items-center ${props.style} ml-56 mt-32 rounded-[48px] justify-center `} >
               <div className="flex items-center place-content-around mt-16"> 
                <div className="flex flex-col"> <p className="text-[#9CA3AF] text-l mt-11">September 10, 2021 </p>
                <p className="text-black text-6xl mt-5">Ulaanbaatar </p> </div>
            
              <IoLocationOutline className="text-black flex text-[48px] mt-20" />
              </div>
                <img src={props.image}
                className="m-auto size-64 mt-20 mb-auto"/>
                <p className="text-9xl font-extrabold text-transparent bg-gradient-to-b from-[#111827] to-[#6B7280] bg-clip-text ml-32 mt-20">{props.p}</p>
                <p className={`font-extrabold ml-32 ${props.text}`}>{props.y}</p>
                <div className="flex gap-20 mt-24 justify-center">
                <FiHome  className="text-3xl hover:text-black"/>
                <IoLocationOutline className="text-2xl hover:text-black"/>
                <FaRegHeart className="text-2xl hover:text-black "/>
                <FaRegUser className="text-2xl hover:text-black "/>
                </div>
            </div>
       </>
    )
}