var stringToInteger = require('./app');

describe('string', () => {
    it('returns an integer from string', () => {
        expect(stringToInteger("words and 987")).toEqual(0)
    });

    it('returns an integer from string', () => {
        expect(stringToInteger("-words and 987")).toEqual(0)
    });

    it('returns a negative number', () => {
        expect(stringToInteger("   -42")).toEqual(-42)
    });

    it('returns a negative number', () => {
        expect(stringToInteger("-")).toEqual(0)
    });

    it('returns return a number', () => {
        expect(stringToInteger('4193 with words')).toEqual(4193)
    });


    it('returns return a number', () => {
        expect(stringToInteger('-91283472332')).toEqual(-2147483648)
    });

    it('returns return a number', () => {
        expect(stringToInteger('91283472332')).toEqual(2147483648)
    });

    it('returns return a number', () => {
        expect(stringToInteger('2147483649')).toEqual(2147483648)
    });

    it('returns return a number', () => {
        expect(stringToInteger('9999999990')).toEqual(2147483648)
    });

});