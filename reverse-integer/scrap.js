var reverse = function (x) {

    if (x < 0) {
        
        var newNum = -Math.abs(parseInt(x.toString().split('').reverse().join('')));

        if (Math.abs(newNum) > 2147483648) {
            
            return 0;
            
        } else {
            return -Math.abs(parseInt(x.toString().split('').reverse().join('')));
        }

    } else {

        var newNum = parseInt(x.toString().split('').reverse().join(''));
        
        if (newNum > 2147483648) {
            return 0;
        } else {
            return parseInt(x.toString().split('').reverse().join(''));
        }
        
        
    }

};

// var reverse = function (x) {

//     if (x < 0) {
//         if()
//         return -Math.abs(parseInt(x.toString().split('').reverse().join('')));
//     } else {
//         return parseInt(x.toString().split('').reverse().join(''));
//     }

// };


console.log(reverse(123)); //  === 321
console.log(reverse(-123)); // == -321
console.log(reverse(120)); // == 21