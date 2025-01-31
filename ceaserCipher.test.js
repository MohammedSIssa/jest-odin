const caesarChiper = require('./caesarCipher')

test('hello with shift 3 should return khoor', () => {
  expect(caesarChiper('hello', 3)).toBe('khoor')
})