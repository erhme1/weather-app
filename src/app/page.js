"use client";
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&display=swap');
</style>
const API_KEY = 'e53d1d3bda3240f79f272452241312'
import { Comp } from "./component.jsx";
export default function Home() {
  return(
    <div className="bg-[#404040] font-extrabold">
      <div className="m-auto">
        <div className="w-full h-screen flex justify-center my-px">
           <div className="w-[40%] h-full bg-[#F3F4F6] rounded-lg">
           <div className="flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif] mt-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
          className="fill-gray-600 mr-3 rotate-90">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
        <input type="email" placeholder="Search City..." className="w-full outline-none bg-transparent text-gray-600 text-sm" />
      </div>
     
           <Comp style={" bg-[#FFFFFFBF]"} image={"/daySun.png"} p={"26°"} y={"Bright"} text={"text-[#FF8E27]"}/>
            
           </div>
            <div className="w-[40%] h-full bg-[#0F141E] rounded-lg">
             <Comp style={"bg-[#111827BF] mt-52"} image={"/Moon.png"} p={"17°"} y={"Clear"} text={"text-[#777CCE]"}/>
            </div>
        </div>
      </div>
    </div>
  );
};
 