'use client'

import { useEffect, useRef, useState } from 'react'

const SmallButton = ({
  handleClick = () => alert('Handle click missed'),
  type = 'button',
}) => {
  const [isDown, setIsDown] = useState(false)

  const toggleButton = (value) => {
    setIsDown(value)
  }
  return (
    <button
      type="submit"
      onMouseLeave={() => toggleButton(false)}
      onMouseUp={() => toggleButton(false)}
      onMouseDown={() => toggleButton(true)}
      onClick={handleClick}
      className="block text-center w-full h-full"
    >
      <div className="relative h-full w-full">
        {isDown ? (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 33 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="16.5" cy="19" rx="16.5" ry="12" fill="black" />
            <ellipse cx="16.5" cy="19" rx="16.5" ry="12" fill="black" />
            <path
              d="M26 17.2917C26 21.7057 21.8741 25.5 16.5 25.5C11.1259 25.5 7 21.7057 7 17.2917C7 12.8776 11.1259 9.08333 16.5 9.08333C21.8741 9.08333 26 12.8776 26 17.2917Z"
              fill="black"
            />
            <path
              d="M26 17.2917C26 21.7057 21.8741 25.5 16.5 25.5C11.1259 25.5 7 21.7057 7 17.2917C7 12.8776 11.1259 9.08333 16.5 9.08333C21.8741 9.08333 26 12.8776 26 17.2917Z"
              fill="black"
            />
            <path
              d="M26 17.2917C26 21.7057 21.8741 25.5 16.5 25.5C11.1259 25.5 7 21.7057 7 17.2917C7 12.8776 11.1259 9.08333 16.5 9.08333C21.8741 9.08333 26 12.8776 26 17.2917Z"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M27 18C27 23.4427 22.1588 28 16 28C9.84118 28 5 23.4427 5 18C5 12.5573 9.84118 8 16 8C22.1588 8 27 12.5573 27 18Z"
              fill="black"
            />
            <path
              d="M27 18C27 23.4427 22.1588 28 16 28C9.84118 28 5 23.4427 5 18C5 12.5573 9.84118 8 16 8C22.1588 8 27 12.5573 27 18Z"
              fill="black"
            />
            <path
              d="M27 18C27 23.4427 22.1588 28 16 28C9.84118 28 5 23.4427 5 18C5 12.5573 9.84118 8 16 8C22.1588 8 27 12.5573 27 18Z"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        ) : (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 33 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="16.5" cy="19" rx="16.5" ry="12" fill="black" />
            <ellipse cx="16.5" cy="19" rx="16.5" ry="12" fill="black" />
            <path
              d="M25.5 12.5C25.5 16.0854 21.7822 19.5 16.5 19.5C11.2178 19.5 7.5 16.0854 7.5 12.5C7.5 8.91456 11.2178 5.5 16.5 5.5C21.7822 5.5 25.5 8.91456 25.5 12.5Z"
              fill="black"
            />
            <path
              d="M25.5 12.5C25.5 16.0854 21.7822 19.5 16.5 19.5C11.2178 19.5 7.5 16.0854 7.5 12.5C7.5 8.91456 11.2178 5.5 16.5 5.5C21.7822 5.5 25.5 8.91456 25.5 12.5Z"
              fill="black"
            />
            <path
              d="M25.5 12.5C25.5 16.0854 21.7822 19.5 16.5 19.5C11.2178 19.5 7.5 16.0854 7.5 12.5C7.5 8.91456 11.2178 5.5 16.5 5.5C21.7822 5.5 25.5 8.91456 25.5 12.5Z"
              stroke="white"
              strokeWidth="3"
            />
            <path
              d="M26 9C26 13.2792 21.8969 17 16.5 17C11.1031 17 7 13.2792 7 9C7 4.72079 11.1031 1 16.5 1C21.8969 1 26 4.72079 26 9Z"
              fill="black"
            />
            <path
              d="M26 9C26 13.2792 21.8969 17 16.5 17C11.1031 17 7 13.2792 7 9C7 4.72079 11.1031 1 16.5 1C21.8969 1 26 4.72079 26 9Z"
              fill="black"
            />
            <path
              d="M26 9C26 13.2792 21.8969 17 16.5 17C11.1031 17 7 13.2792 7 9C7 4.72079 11.1031 1 16.5 1C21.8969 1 26 4.72079 26 9Z"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        )}
      </div>
    </button>
  )
}
export default SmallButton
