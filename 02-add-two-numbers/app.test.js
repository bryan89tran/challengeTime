const addTwoNumbers = require("./app");
const createNodes = require("./helper").createNodes;
const expect = require("chai").expect;

describe("addTwoNumbers", () => {
    it("(2 -> 4 -> 3) + (5 -> 6 -> 4) = 7 -> 0 -> 8", () => {
        const listOne = createNodes([2, 4, 3]);
        const listTwo = createNodes([5, 6, 4]);
        const listAnswer = createNodes([7, 0, 8]);
        expect(addTwoNumbers(listOne, listTwo)).to.eql(listAnswer);
    });

    it("(1 -> 8) + (0) = 1 -> 8", () => {
        const listOne = createNodes([1,8]);
        const listTwo = createNodes([0]);
        const listAnswer = createNodes([1, 8]);
        expect(addTwoNumbers(listOne, listTwo)).to.eql(listAnswer);
    });

    it("(5) + (5) = 0 -> 1", () => {
        const listOne = createNodes([5]);
        const listTwo = createNodes([5]);
        const listAnswer = createNodes([0,1]);
        expect(addTwoNumbers(listOne, listTwo)).to.eql(listAnswer);
    });
});
