'use client'

import { useState } from 'react'

const Button = ({
  handleClick = () => console.log('handle click unspecified in button'),
  value,
}) => {
  const [clicked, setClicked] = useState(false)
  return (
    <button
      onClick={handleClick}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      onMouseLeave={() => setClicked(false)}
      className="w-full h-full border-[#00FF00] active:bg-[#00FF01] border-2 flex"
    >
      {!clicked ? (
        <svg
          className="self-end"
          width="100%"
          height="100%"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.272495 20C0.272495 20 -2.75523 8.73007 11.3741 9.00495C25.5035 9.27982 21.466 20 21.466 20H0.272495Z"
            fill="black"
          />
          <path
            d="M4.62017 10.4018C4.33965 12.8071 -1.59089 0.00375537 11.1549 7.94146e-07C23.9006 -0.00375378 17.5952 13.3071 17.4007 10.4018C17.2062 7.49648 4.90068 7.99648 4.62017 10.4018Z"
            fill="black"
          />
        </svg>
      ) : (
        <svg
          className="self-end"
          width="100%"
          height="77%"
          viewBox="0 0 22 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.272495 15C0.272495 15 -2.75523 3.73007 11.3741 4.00495C25.5035 4.27982 21.466 15 21.466 15H0.272495Z"
            fill="black"
          />
          <path
            d="M4.62017 10.4018C4.33965 12.8071 -1.59089 0.00375537 11.1549 7.94146e-07C23.9006 -0.00375378 17.5952 13.3071 17.4007 10.4018C17.2062 7.49648 4.90068 7.99648 4.62017 10.4018Z"
            fill="black"
          />
        </svg>
      )}
    </button>
  )
}

export default Button
