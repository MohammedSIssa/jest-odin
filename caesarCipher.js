function caesarChiper(str, shiftNum) {
  let array = str.split("");
  for (let i = 0; i < array.length; i++) {
    let code = array[i].charCodeAt(0);
    let shiftedCode = code + shiftNum;
    if ((code > 64 && code < 91) || (code > 96 && code < 123)) {
      if ((shiftedCode > 90 && shiftedCode < 97) || shiftedCode > 122) {
        array[i] = String.fromCharCode(shiftedCode - 26);
      } else if (
        (shiftedCode > 64 && shiftedCode < 91) ||
        (shiftedCode > 96 && shiftedCode < 123)
      ) {
        array[i] = String.fromCharCode(shiftedCode);
      }
    }
  }
  return array.join("");
}

module.exports = caesarChiper