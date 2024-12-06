import { useState } from 'react'

export const ArrowButton = ({
  handleClick = () => console.log('handle click undefined'),
  orientation = 'up',
  type = 'button',
}) => {
  const [clicked, setClicked] = useState(false)

  return (
    <button
      onClick={handleClick}
      type="button"
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      onMouseLeave={() => setClicked(false)}
      className="w-full h-full flex"
    >
      <svg
        style={{
          transform:
            orientation == 'up'
              ? 'rotate(0Deg)'
              : orientation == 'down' && 'rotateZ(180Deg)',
        }}
        width="100%"
        height="100%"
        viewBox="0 0 18 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.03236 0C10.807 0 19.6855 17.0323 17.7181 19.871C15.7507 22.7097 1.92826 22.7097 0.263504 19.871C-1.40125 17.0323 5.25776 0 8.03236 0Z"
          fill="black"
        />
      </svg>
    </button>
  )
}
