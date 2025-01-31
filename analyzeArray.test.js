const analyze = require('./analyzeArray')

const testArr = [1,2,3,4,5]

test('max is 5 in testArr', () => {
  expect(analyze(testArr).max).toBe(5)
})

test('min is 1 in testArr', () => {
  expect(analyze(testArr).min).toBe(1)
})

test('average is 3 in testArr', () => {
  expect(analyze(testArr).avg).toBe(3)
})

test('testArr length is 5', () => {
  expect(analyze(testArr).length).toBe(5)
})