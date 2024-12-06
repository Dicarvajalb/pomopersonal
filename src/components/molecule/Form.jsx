export const Form = ({ children, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const formElement = e.target
    const isValid = formElement.checkValidity()

    // focusing the first invalid field
    const firstInvalidField = formElement.querySelector(':invalid')

    firstInvalidField?.focus()

    // submit the dataObject if isValid===true
    if (isValid) {
      const dataObject = new FormData(formElement)
      onSubmit(dataObject)
    }
  }
  return (
    <form noValidate onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
