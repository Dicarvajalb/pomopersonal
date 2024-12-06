import { ArrowButton } from './arrow-button'

export const Select = () => {
  return (
    <>
      <div className="h-[1rem] w-full">
        <ArrowButton />
      </div>
      <div className="h-[1rem] w-full">
        <ArrowButton orientation="down" />
      </div>
    </>
  )
}
