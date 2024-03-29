

'use client';

import { useEffect, useRef, useState } from "react";
import img from "../../public/SVG/smallBtn1.svg"
 
const Select = ({setSelected =  () => alert("setSelected missed"), options = ["25", "50", "75"]}) =>{

   
    return(
    <>
    <div className="h-full w-full flex">
        <select onChange={(e) => setSelected(e.target.value)} name="cars" id="cars" className="w-[70%] h-full appearance-none border-2 border-[#00ff00] bg-[#00ff004b] p-2">
            {options.map((opt, index) =>
                <option value={opt} key={index}>{opt}</option>
            
            )}
            
        </select>
        <svg width="30%" transform="rotate(180)" height="100%" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2126 19.2576C12.1301 21.5491 8.86988 21.5491 7.78742 19.2576L0.831076 4.53136C-0.108997 2.54127 1.34271 0.25 3.54366 0.25L17.4563 0.25C19.6573 0.25 21.109 2.54128 20.1689 4.53136L13.2126 19.2576Z" fill="black"/>
        </svg>
    </div>
    </>
    )
}
export default Select