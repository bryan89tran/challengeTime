/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var arr = x.toString().split('').reverse().join('');

    return x.toString() === arr ? true: false;
};

console.log(isPalindrome(-121))
console.log(isPalindrome(10))
console.log(isPalindrome(121))
