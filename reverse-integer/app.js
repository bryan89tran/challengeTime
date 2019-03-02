/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    var array = Math.abs(x).toString().split("");
    var num = parseInt(array.reverse().join(""));

    if(num > 2147483648) {
        return 0;
    }

    if(Math.sign(x) === -1){
        num *= -1;
        return num
    } 
    else {
        return num;
    }
};

console.log(reverse(-123))