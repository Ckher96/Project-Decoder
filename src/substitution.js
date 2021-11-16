// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alphabetArray = []
  for (let i = 0; i < 26; i++)
  {
    alphabetArray.push(String.fromCharCode(97 + i))
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet) return false
    if(alphabet.length < 26 || alphabet.length > 26) return false

    const substituteAlphabetArray = alphabet.split('')
    const inputArray = input.split('')

    if(substituteAlphabetArray.some(letter =>
      {
        let accumalator = 0
        substituteAlphabetArray.forEach(arrayLetter => 
          {
          if(arrayLetter === letter) accumalator++
          })
        
          if(accumalator > 1) return true
      })) 
      {
        return false
      }

    if(encode)
    {
      const encoder = {}

      for(let i = 0; i < alphabetArray.length; i++)
      {
        encoder[alphabetArray[i]] = substituteAlphabetArray[i]
      }

      const encodedMessageArray = inputArray.map(letter => letter === ' ' ? letter : encoder[letter.toLowerCase()])
      const encodedMessage = encodedMessageArray.join('')
      return encodedMessage
    }

    const decoder = {}
    
    for(let i = 0; i < substituteAlphabetArray.length; i++)
    {
      decoder[substituteAlphabetArray[i]] = alphabetArray[i]
    }
    const decodedMessageArray = inputArray.map(letter => letter === ' ' ? letter : decoder[letter.toLowerCase()])
    const decodedMessage = decodedMessageArray.join('')
    return decodedMessage
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
