"use client";

import { useEffect, useRef, useState } from "react";
import img from "../../public/SVG/smallBtn1.svg";

const Accordion = ({
  items = [
    { name: "Discipline", emoji: "😄", color: "#F12F23" },
    { name: "Happiness", emoji: "👽" },
    { name: "Order", emoji: "👤" },
  ],
}) => {
  const [selected, setSelected] = useState(undefined);

  return (
    <>
      <div className="h-full w-full flex flex-row ">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col align-end justify-end border-2 border-[${item.color}]`}
          >
            {index == selected && <div className="h-1/2 ">{item.emoji}</div>}
            <div
              onClick={() => setSelected(index)}
              className={`h-1/2 block bg-black ml-[-0.1em] w-[1em] text-white p-auto hover:scale-125 hover:z-10 ${
                index == selected ? "scale-125" : "z-0"
              }`}
            >
              {item.name.at(0).toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Accordion;
