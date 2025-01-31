const calculator = require('./calculator')

test('1 + 2 = 3', () => {
  expect(calculator(1,2).add).toBe(3)
})

test('10 / 2 = 5', () => {
  expect(calculator(10, 2).divide).toBe(5)
})

test('5 * 3 = 15', () => {
  expect(calculator(5, 3).multiply).toBe(15)
})

test('10 - 2 = 8', () => {
  expect(calculator(10, 2).subtract).toBe(8)
})