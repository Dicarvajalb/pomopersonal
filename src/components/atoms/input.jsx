import { useState } from 'react'

export const Input = ({
  type = 'text',
  label = 'label',
  id,
  required = false,
  defaultValue = '',
}) => {
  const color = '#CC7AE6'

  const [errorMsg, setErrorMsg] = useState('')
  const [validationMsg, setValidationMsg] = useState()
  const onBlr = (e) => {
    const target = e.target

    if (!!validationMsg) {
      setValidationMsg(target.validationMessage)
    }
  }
  const onInvalid = (e) => {
    const target = e.target
    setValidationMsg(target.validationMessage)
  }
  return (
    <div className="w-full h-full ">
      <label>
        <h4 className="font-inter font-bold text-[1.2rem]">{label}</h4>
        <div className="w-full h-fit relative">
          <input
            id={id}
            name={id}
            type={type}
            className="w-full h-full bg-[transparent] text-black rounded-[0] text-[1rem] p-[0.4rem] font-inter font-bold"
            maxLength={50}
            onBlur={onBlr}
            onInvalid={onInvalid}
            required={required}
            defaultValue={defaultValue}
          />
          <div
            className="absolute h-full w-full top-0 pointer-events-none"
            style={{ backgroundColor: color, opacity: '0.3' }}
          ></div>
        </div>
      </label>
      <p className="text-[red]">{errorMsg || validationMsg}</p>
    </div>
  )
}
