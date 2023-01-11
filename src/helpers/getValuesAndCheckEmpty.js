const getValueAndCheckEmpty = (input) => {
  const value = input.value

  if (value.trim() === '') {
    input.classList.add('is-invalid')
    return null
  } else {
    input.classList.remove('is-invalid')
    return value
  }
}

const getValuesAndCheckEmpty = (...inputs) => {
  const values = []

  for (const input of inputs) {
    const value = input.value

    if (value.trim() === '') {
      input.classList.add('is-invalid')
      values.push(null)
    } else {
      input.classList.remove('is-invalid')
      values.push(value)
    }
  }

  return values
}

export { getValueAndCheckEmpty, getValuesAndCheckEmpty }
