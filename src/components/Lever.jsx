'use client'

import { useEffect, useRef, useState } from 'react'

const Lever = ({
  handleClick = () => alert('No se ha especificado handle click'),
  text = 'button',
  value = 0,
  data = [25, 5, 15],
  hClass = 'h-[50px]',
  wClass = 'w-[50px]',
}) => {
  const button = useRef()

  const leverSVG = [
    <svg
      key={1}
      width="100%"
      height="100%"
      viewBox="0 0 54 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-8.19547e-06 11C-8.19547e-06 11 10.5028 11.3585 10.5028 26.7744C10.5028 42.1904 -8.19547e-06 41.8318 -8.19547e-06 41.8318L-8.19547e-06 11Z"
        fill="black"
      />
      <path
        d="M41.1139 6.54795C38.5866 10.2803 40.1955 12.6434 44.0722 12.8921C47.9489 13.1408 7.08707 30.3091 8.82554 29.3279C10.564 28.3467 8.3563 21.8175 5.86721 22.9837C3.37812 24.15 43.6411 2.8156 41.1139 6.54795Z"
        fill="black"
      />
      <circle
        cx="46.0978"
        cy="8.32516"
        r="5.5"
        transform="rotate(65.126 46.0978 8.32516)"
        fill="black"
      />
    </svg>,

    <svg
      key={2}
      width="100%"
      height="100%"
      viewBox="0 0 54 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-8.19547e-06 11C-8.19547e-06 11 10.5028 11.3585 10.5028 26.7744C10.5028 42.1904 -8.19547e-06 41.8318 -8.19547e-06 41.8318L-8.19547e-06 11Z"
        fill="black"
      />
      <path
        d="M44.0102 21.7951C40.1423 24.1097 40.6018 26.9313 44.0102 28.7951C47.4186 30.6589 3.12954 28.9496 5.11978 28.7951C7.11003 28.6406 7.86855 21.79 5.11978 21.7951C2.37101 21.8002 47.878 19.4805 44.0102 21.7951Z"
        fill="black"
      />
      <circle
        cx="47.7761"
        cy="25.5121"
        r="5.5"
        transform="rotate(90.126 47.7761 25.5121)"
        fill="black"
      />
    </svg>,

    <svg
      key={3}
      width="100%"
      height="100%"
      viewBox="0 0 54 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-8.19547e-06 11C-8.19547e-06 11 10.5028 11.3585 10.5028 26.7744C10.5028 42.1904 -8.19547e-06 41.8318 -8.19547e-06 41.8318L-8.19547e-06 11Z"
        fill="black"
      />
      <path
        d="M44.2556 39.1133C39.772 39.5764 38.9959 42.3279 41.2973 45.4575C43.5986 48.5871 4.18153 28.3206 6.05061 29.0217C7.9197 29.7228 11.5023 23.8346 9.00895 22.6775C6.51557 21.5205 48.7393 38.6502 44.2556 39.1133Z"
        fill="black"
      />
      <circle
        cx="46.0978"
        cy="44.0736"
        r="5.5"
        transform="rotate(115.126 46.0978 44.0736)"
        fill="black"
      />
    </svg>,
  ]

  return (
    <div className={`w-fit ${hClass} relative flex flex-row items-center`}>
      <button
        onClick={() => handleClick((value + 1) % data.length)}
        ref={button}
        className={`${hClass} ${wClass} border-[#00FF00] active:bg-[#00FF01] border-2 flex`}
      >
        {leverSVG.at(value)}
      </button>
      <span className="w-[20%] h-[150%] flex flex-col justify-between text-black right-[-23%] top-[-50%]">
        {data.map((v, index) => (
          <p
            key={index}
            className={`${
              value === index ? 'border-black' : 'border-[transparent]'
            } w-fit border-b-2 cursor-pointer font-inter font-bold`}
            onClick={() => handleClick(index)}
          >
            {data[index]}
          </p>
        ))}
      </span>
    </div>
  )
}
export default Lever
