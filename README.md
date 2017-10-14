# pick-a-number

Get a random number. This module uses `Math.random()`.

```javascript
const randomNumber = require(`pick-a-number`)

randomNumber({ min: 10, max: 100 })

randomNumber.between(9).and(101)

randomNumber.from(10).to(100)
```
