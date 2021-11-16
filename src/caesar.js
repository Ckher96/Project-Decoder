// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift > 25 || shift < -25 || shift === 0) return false

    const strArray = input.toLowerCase().split('')

    const numArray = strArray.map(letter => letter.charCodeAt(0))

    if (encode) 
    {
      const encodedArray = numArray.map(number => 
        {
        if (number >= (122 - shift) && number <= 122)
          {
            const remainder = 122 - number
            const rollOver = shift - remainder
            return 96 + rollOver
          }

        if (number <= (97 - shift) && number >= 97)
        {
          const remainder = number - 97
          const rollOver = shift + remainder
          return 123 + rollOver
        }

        if (number >= 32 && number <= 64) return number

        return (number + shift)
      })
      const encodedMessage = encodedArray.map(number => String.fromCharCode(number)).join('')
      return encodedMessage
     
    }

    const encodedArray = numArray.map(number => 
      {
        if (number > (122 + shift) && number <= 122)
          {
            const remainder = 122 - number
            const rollOver = shift + remainder
            return (96 - rollOver)
          }

        if (number < (97 + shift) && number >= 97)
          {
          const remainder = number - 96
          const rollOver = shift - remainder
          return 122 - rollOver
          }

        if (number >= 32 && number <= 64) return number

        return (number - shift)
      })

      const encodedMessage = encodedArray.map(number => String.fromCharCode(number)).join('')
      return encodedMessage
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
