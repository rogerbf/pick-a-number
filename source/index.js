const randomNumber = min => max =>
  Math.floor(Math.random() * (1 + max - min)) + min

const optionsInput = ({ min, max }) => randomNumber(min)(max)

const random = (state = {}) => ({
  between: min => random({ ...state, min }),
  from: min => random({ ...state, min }),
  and: max => optionsInput({ ...state, max }),
  to: max => optionsInput({ ...state, max })
})

export default Object.assign(
  options => optionsInput(options),
  random()
)
