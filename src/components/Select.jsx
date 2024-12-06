'use client'

import { useEffect, useRef, useState } from 'react'
import img from '../../public/SVG/smallBtn1.svg'
import { ArrowButton } from './atoms/arrow-button'

const Select = ({
  options = ['25', '50', '75'],
  value = '50',
  handleChange = () => console.log('Expected handleChange'),
  id,
  label = 'label',
}) => {
  const color = '#CC7AE6'

  const [selectedIndex, setSelectedTime] = useState(options.indexOf(value))

  const handleClickUp = () => {
    if (selectedIndex == options.length - 1) return
    console.log(selectedIndex)
    const newPos = (selectedIndex + 1) % options.length
    handleChange(options[newPos])
    setSelectedTime(newPos)
  }
  const handleClickDown = () => {
    if (selectedIndex == 0) return
    const newPos =
      (((selectedIndex - 1) % options.length) + options.length) % options.length

    handleChange(options[newPos])
    setSelectedTime(newPos)
  }
  return (
    <>
      <div className="h-full w-full flex flex-col">
        <h4 className="font-inter font-bold text-[1.2rem]">{label}</h4>
        <div className="h-full flex flex-row">
          <div className="h-full relative">
            <select
              onChange={(e) => handleChange(e.target.value)}
              value={value}
              name={id}
              id={id}
              className="w-[3.5rem] h-full appearance-none p-[0.5rem] bg-[transparent] font-inter font-bold text-[1rem]"
              required
            >
              {options.map((opt, index) => (
                <option value={opt} key={index}>
                  {opt}
                </option>
              ))}
            </select>
            <div
              className="absolute h-full w-full top-0 pointer-events-none"
              style={{ backgroundColor: color, opacity: 0.3 }}
            ></div>
          </div>
          <div className="flex flex-col gap-[2px] justify-center">
            <div className="h-[1rem] w-[1.5rem]">
              <ArrowButton handleClick={handleClickUp} />
            </div>
            <div className="h-[1rem] w-[1.5rem]">
              <ArrowButton orientation="down" handleClick={handleClickDown} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Select
