const reverseString = require('./reverseString')

test('hello should return olleh', () => {
  expect(reverseString('hello')).toBe('olleh')
})