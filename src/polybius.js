// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const decoder = 
  {1 : {1 : 'a', 2 : 'f', 3 : 'l', 4 : 'q', 5 : 'v'},
  2 : {1 : 'b', 2 : 'g', 3 : 'm', 4 : 'r', 5 : 'w'},
  3 : {1 : 'c', 2 : 'h', 3 : 'n', 4 : 's', 5: 'x'},
  4 : {1 : 'd', 2 : '(i/j)', 3 : 'o', 4 : 't', 5 : 'y'},
  5 : {1 : 'e', 2 : 'k', 3 : 'p', 4 : 'u', 5 : 'z'}}

  const encoder = 
  {'a' : 11, 'b' : 21, 'c' : 31, 'd' : 41, 'e' : 51,
  'f' : 12, 'g' : 22, 'h' : 32, 'i' : 42, 'j' : 42, 'k' : 52,
  'l' : 13, 'm' : 23, 'n' : 33, 'o' : 43, 'p' : 53,
  'q' : 14, 'r' : 24, 's' : 34, 't' : 44, 'u' : 54,
  'v' : 15, 'w' : 25, "x" : 35, 'y' : 45, 'z' : 55}



  function polybius(input, encode = true) {
    
    // your solution code here
    if (encode)
    {
      const strArray = input.split('')
      const encodedArray = strArray.map(letter => letter === ' ' ? letter : encoder[letter.toLowerCase()])
      const encodedMessage = encodedArray.join('')
      return encodedMessage
    }

    if (input.split(' ').join('').length % 2 === 1)
    {
      return false
    }
    const newArray = input.split(' ')
    const decodedMessageArray = newArray.map(word => 
      {
        let decodedWord = ''
        for(let i = 0; i < word.length; i+=2)
          {
            decodedWord = decodedWord + decoder[word[i]][word[i + 1]]
      }
    return decodedWord
      })

      const decodedMessage = decodedMessageArray.join(' ')
      return decodedMessage
  }

  return {
    polybius, 
  };
})();

module.exports = {polybius : polybiusModule.polybius}
