const twoSum = require("./app");

describe("twoSum", () => {
    it("[2, 7, 11, 15], 9", () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0,1])
    });

    it("[0,4,3,0]), 0", () => {
        expect(twoSum([0,4,3,0], 0)).toEqual([0,3])
    });

    it("[-3,4,3,90], 0", () => {
        expect(twoSum([-3,4,3,90], 0)).toEqual([0,2])
    });

    it("[-1,-2,-3,-4,-5] -8", () => {
        expect(twoSum([-1,-2,-3,-4,-5], -8)).toEqual([2, 4])
    });

    it("[-1,-2,-3,-4,-5] -8", () => {
        expect(twoSum([150,24,79,50,88,345,3], 200)).toEqual([0, 3])
    });
})