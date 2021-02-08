const checkIfEqual = require('../lib/random.js')

test("checks if 10 is equal to 10", () => {//2 arguments, 1. descriptive string about the outcome of the test, 2. callback function
  expect(randomNumber()).toBeGreaterThanOrEqual(1)
  expect(randomNumber()).toBeLessThanOrEqual(10)
})