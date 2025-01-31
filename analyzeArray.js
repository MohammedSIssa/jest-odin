function analyzeArray(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
    avg: arr.reduce((curr, prev) => curr + prev, 0) / arr.length,
    length: arr.length
  }
}

module.exports = analyzeArray