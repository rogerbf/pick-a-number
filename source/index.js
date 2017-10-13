const randomNumber = min => max =>
  Math.floor(Math.random() * (1 + max - min)) + min

const withOptions = ({ min, max }) => randomNumber(min)(max)

const between = min => ({
  and: max => randomNumber(min + 1)(max - 1)
})

const from = min => ({
  to: max => randomNumber(min)(max)
})

export default Object.assign(withOptions, { between, from })
