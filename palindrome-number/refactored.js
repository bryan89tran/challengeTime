/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    if (x < 0) {
        return false
    }



    if (x % 10 === 0 && x !== 0) {
        return false
    }

    let revertedNumber = 0;
    while (x > revertedNumber) {
        console.log(revertedNumber * 10, '+', x % 10)
        revertedNumber = revertedNumber * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return Math.floor(x) == revertedNumber || Math.floor(x) == Math.floor(revertedNumber / 10)    // while( total > 0 ){


};

// console.log(isPalindrome(-121))
// console.log(isPalindrome(20))
console.log(isPalindrome(11))
