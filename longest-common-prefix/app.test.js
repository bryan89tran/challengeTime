const longestCommonPrefix = require("./app");


describe('longestCommonPrefix', () => {
    it('returns empty string', () => {
        expect(longestCommonPrefix([''])).toEqual('')
    });

    it("returns fl", () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl")
    });

    it("Does not find a match returns empty string", () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("")
    });
})