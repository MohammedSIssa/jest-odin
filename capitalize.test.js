const capitalize = require('./capitalize')

test('hello should return Hello', () => {
  expect(capitalize('hello')).toBe('Hello')
})

test('coding should return Cello', () => {
  expect(capitalize('coding')).toBe('Coding')
})