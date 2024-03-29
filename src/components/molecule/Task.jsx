export const Task = () => {
  const text = 'Completar la aplicación de pomopersonal..'
  const time = 2
  const pomoTime = 25
  const CompletedMins = 20
  const color = '#CC7AE6'
  const lighColor = '#F4E4FA'
  const classBorderColor = `bg-[${color}]`
  const classBgColor = `bg-[${color}]`
  return (
    <div
      style={{ backgroundColor: lighColor, border: '1px solid ' + color }}
      className="w-full h-full pointer-events-auto relative mt-[5rem] border-2 p-[0.5rem] lg:p-[1rem] rounded-[0.3rem]"
    >
      <div>
        <div className="flex flex-col w-fit h-[4rem] items-center absolute top-[-4rem] left-[50%] translate-x-[-50%] pointer-events-none">
          <div
            id="final-point__connector"
            className=" border-black border-t-[transparent] border-2 w-[2rem] rounded- h-[2rem]"
          ></div>
          <div className="w-[0.5rem]  flex-1 border-black border-2 bg-black"></div>
        </div>
        <div className="flex flex-col items-end">
          <h3
            style={{ hyphens: 'manual' }}
            className="text-[3rem] h-[10rem] w-full break-all line-clamp-2 font-pally font-bold text-ellipsis overflow-hidden"
          >
            {text}
          </h3>
          <h4 className="text-[1rem]  font-inter font-bold">
            {CompletedMins + '/' + time * pomoTime + 'min'}
          </h4>
        </div>
      </div>
    </div>
  )
}
