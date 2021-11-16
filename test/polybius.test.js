// Write your tests here!
const polybius = require('../src/polybius').polybius
const {expect} = require('chai')

describe('polybius', () => 
{
    describe('encoding', () => 
    {

        it('Should encode "thinkful" to "4432423352125413"', () => 
            {
                const expected = "4432423352125413"
                const actual = polybius('thinkful')
                expect(actual).to.equal(expected)
            })

        it('Output should be a string', () => 
            {
                const output = polybius('thinkful')
                expect(output).to.be.a('string')
            })

        it('Should leave spaces alone', () => 
            {
                const expected = '3251131343 2543241341'
                const actual = polybius('hello world')
                expect(actual).to.equal(expected)
            })

        it('Should ignore capital letters', () => 
            {
                const expected = '3251131343 2543241341'
                const actual = polybius('Hello World')
                expect(actual).to.equal(expected)
            })
    })
    describe('decoding', () => 
    {

        it('Should decode "4432423352125413" to "th(i/j)nkful"', () => 
            {
                const expected = 'th(i/j)nkful'
                const actual = polybius("4432423352125413", false)
                expect(actual).to.equal(expected)
            })

        it('When decoding, the number of characters in the string should be even, if not, then it should return false', () => 
            {
                const output = polybius('123 14', false)
                expect(output).to.be.false
            })

        it('Output should be a string', () => 
            {
                const output = polybius("4432423352125413", false)
                expect(output).to.be.a('string')
            })

        it('Should leave spaces alone', () => 
            {
                const expected = 'hello world'
                const actual = polybius('3251131343 2543241341', false)
                expect(actual).to.equal(expected)
            })
    })
})