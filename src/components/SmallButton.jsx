

'use client';

import { useEffect, useRef, useState } from "react";

 
const SmallButton = ({handleClick =  () => alert("Handle click missed"), text = "button"}) =>{
    const [isDown, setIsDown] = useState(false)
    

    const toggleButton = (value) =>{        
        setIsDown(value)
    }
    return(
    
        <button onMouseLeave={() => toggleButton(false)} onMouseUp={() => toggleButton(false)}  onMouseDown={() => toggleButton(true)} onClick={handleClick} className="block text-center w-full h-full  relative ">
        <span className="absolute bottom-[100%] w-full left-0">{text}</span>
        {isDown?
        <svg width="100%" height="100%" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="16.5" cy="12" rx="16.5" ry="12" fill="black"/>
        <ellipse cx="16.5" cy="12" rx="16.5" ry="12" fill="black"/>
        <path d="M26 9.5C26 13.4551 21.9545 17 16.5 17C11.0455 17 7 13.4551 7 9.5C7 5.5449 11.0455 2 16.5 2C21.9545 2 26 5.5449 26 9.5Z" fill="black"/>
        <path d="M26 9.5C26 13.4551 21.9545 17 16.5 17C11.0455 17 7 13.4551 7 9.5C7 5.5449 11.0455 2 16.5 2C21.9545 2 26 5.5449 26 9.5Z" fill="black"/>
        <path d="M26 9.5C26 13.4551 21.9545 17 16.5 17C11.0455 17 7 13.4551 7 9.5C7 5.5449 11.0455 2 16.5 2C21.9545 2 26 5.5449 26 9.5Z" stroke="white" strokeWidth="2"/>
        <path d="M26 9.5C26 14.1026 21.8432 18 16.5 18C11.1568 18 7 14.1026 7 9.5C7 4.89739 11.1568 1 16.5 1C21.8432 1 26 4.89739 26 9.5Z" fill="black"/>
        <path d="M26 9.5C26 14.1026 21.8432 18 16.5 18C11.1568 18 7 14.1026 7 9.5C7 4.89739 11.1568 1 16.5 1C21.8432 1 26 4.89739 26 9.5Z" fill="black"/>
        <path d="M26 9.5C26 14.1026 21.8432 18 16.5 18C11.1568 18 7 14.1026 7 9.5C7 4.89739 11.1568 1 16.5 1C21.8432 1 26 4.89739 26 9.5Z" stroke="black" stroke-width="2"/>
        </svg>
        
        
    :
    <svg width="100%" height="100%" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="16.5" cy="14" rx="16.5" ry="12" fill="black"/>
    <ellipse cx="16.5" cy="14" rx="16.5" ry="12" fill="black"/>
    <path d="M26 11.5C26 15.4551 21.9545 19 16.5 19C11.0455 19 7 15.4551 7 11.5C7 7.5449 11.0455 4 16.5 4C21.9545 4 26 7.5449 26 11.5Z" fill="black"/>
    <path d="M26 11.5C26 15.4551 21.9545 19 16.5 19C11.0455 19 7 15.4551 7 11.5C7 7.5449 11.0455 4 16.5 4C21.9545 4 26 7.5449 26 11.5Z" fill="black"/>
    <path d="M26 11.5C26 15.4551 21.9545 19 16.5 19C11.0455 19 7 15.4551 7 11.5C7 7.5449 11.0455 4 16.5 4C21.9545 4 26 7.5449 26 11.5Z" stroke="white" strokeW
    idth="2"/>
    <path d="M26 9C26 13.2792 21.8969 17 16.5 17C11.1031 17 7 13.2792 7 9C7 4.72079 11.1031 1 16.5 1C21.8969 1 26 4.72079 26 9Z" fill="black"/>
    <path d="M26 9C26 13.2792 21.8969 17 16.5 17C11.1031 17 7 13.2792 7 9C7 4.72079 11.1031 1 16.5 1C21.8969 1 26 4.72079 26 9Z" fill="black"/>
    <path d="M26 9C26 13.2792 21.8969 17 16.5 17C11.1031 17 7 13.2792 7 9C7 4.72079 11.1031 1 16.5 1C21.8969 1 26 4.72079 26 9Z" stroke="black" stroke-width="2"/>
    </svg>}
        
        </button> 

    )
}
export default SmallButton