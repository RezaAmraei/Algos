function caesarCipherEncryptor(string, key) {
  // str.charCodeAt(pos)
  // String.fromCharCode(67)
  //a === 97
  //z === 122

  let newString = "";
  //write a for loop and adjust the letters char code by the value of the key,
  for (let i = 0; i < string.length; i++) {
    //first get char code of the letter
    let initCharCode = string.charCodeAt(i);
    //then adjust alue by the key
    let charCodeWithKey = initCharCode + key;
    //if char code goes above the value of z then start it at value a
    while (charCodeWithKey > 122) {
      charCodeWithKey = charCodeWithKey - 26;
    }
    //then with that value get the letter that matches it
    newString += String.fromCharCode(charCodeWithKey);
  }

  //return new string
  return newString;
}
