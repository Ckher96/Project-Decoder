// Write your tests here!
const caesar = require("../src/caesar").caesar
const {expect} = require("chai")

describe('Caesar', () => 
{
    describe('Edge Cases', () => 
    {
        it('If shift is 0, return false', () => 
            {
                const zero = caesar('thinkful', 0)
                expect(zero).to.be.false
            })
    
        it('If shift is greater than 25, return false', () => 
            {
                const greater = caesar('thinkful', 26)
                expect(greater).to.be.false
            })
    
        it('If shift is less than -25, return false', () => 
            {
                const less = caesar('thinkful', -26)
                expect(less).to.be.false
            })
    
    })
    describe('Encoding', () => 
    {
        it('Should encode inputs', () => 
            {
                const expected = 'wklqnixo'
                const actual = caesar('thinkful', 3)
                expect(actual).to.equal(expected)
            })

        it('Should ignore capital letters', () =>
            {
                const expected = 'wklqnixo'
                const actual = caesar('ThinkFul', 3)
                expect(actual).to.equal(expected)
            })
        
        it('Should ignore spaces', () =>
            {
                const expected = 'wklqnixo wklqnixo'
                const actual = caesar('thinkful thinkful', 3)
                expect(actual).to.equal(expected)
            })
        
        it('Should wrap to the front of the alphabet if shifted past z', () =>
            {
                const expected = 'abc'
                const actual = caesar('xyz', 3)
                expect(actual).to.equal(expected)
            })
        
        it('Should wrap to the end of the alphabet if shifted past a', () =>
            {
                const expected = 'xyz'
                const actual = caesar('abc', -3)
                expect(actual).to.equal(expected)
            })      
    })

    describe('Decoding', () => 
    {
        it('Should decode inputs', () =>
            {
                const expected = 'thinkful'
                const actual = caesar('wklqnixo', 3, false)
                expect(actual).to.equal(expected)
            })

        it('Should ignore capital letters', () =>
            {
                const expected = 'thinkful'
                const actual = caesar('WklqnIxo', 3, false)
                expect(actual).to.equal(expected)
            })
        
        it('Should ignore spaces', () =>
            {
                const expected = 'thinkful thinkful'
                const actual = caesar('wklqnixo wklqnixo', 3, false)
                expect(actual).to.equal(expected)
            })
        
        it('Should wrap to the front of the alphabet if shifted past z', () =>
            {
                const expected = 'xyz'
                const actual = caesar('abc', 3, false)
                expect(actual).to.equal(expected)
            })
        
        it('Should wrap to the end of the alphabet if shifted past a', () =>
            {
                const expected = 'abc'
                const actual = caesar('xyz', -3, false)
                expect(actual).to.equal(expected)
            })      
    })
})