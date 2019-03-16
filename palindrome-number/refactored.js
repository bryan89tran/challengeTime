/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || x % 10 === 0 && x !== 0) {
        return false
    }


    let revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x = ~~(x / 10);
    }
    return ~~(x) == revertedNumber || ~~(x) == ~~(revertedNumber / 10)    // while( total > 0 ){



};

// console.log(isPalindrome(-121))
// console.log(isPalindrome(20))
console.log(isPalindrome(11))
