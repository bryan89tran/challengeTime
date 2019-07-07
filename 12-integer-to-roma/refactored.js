/**
 * Return the highest rounded number down
 * 340 -> 100; 539 -> 100; 49 -> 10;
 *
 * @param  {number} number
 * @return {number}
 */

var rndDwnToHighestDec = function(number) {
    let decimalPlaces = number.toString().length -1;
    return roundedNumber = +("1" + "0".repeat(decimalPlaces));
}

/**
 * @param  {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanNumOnes =  ["I", "X", "C", "M"];
    const romanNumFives = ["V", "L", "D"];

    let index = num.toString().length - 1;
    let currentMulti = rndDwnToHighestDec(num);
    let rtnString = "";
    let five = 5;
    let nine = 9;
    let four = 4;
    let one = 1;

    while (num > 0) {
        const tempNum = ~~(num / currentMulti);
        const modules = tempNum % 5;
        
        if (tempNum >= 5) {

            if (modules === 4) {
                rtnString += romanNumOnes[index] + romanNumOnes[index + 1];
                num -= 9 * currentMulti;
            } else {
                rtnString += romanNumFives[index] + romanNumOnes[index].repeat(modules);
                num -= (5 + modules) * currentMulti;
            }

        } 
        else if (tempNum >= 1) {

            if (modules === 4) {
                rtnString += romanNumOnes[index] + romanNumFives[index];
                num -= 4 * currentMulti;
            } else {
                rtnString += romanNumOnes[index].repeat(modules);
                num -= modules * currentMulti;
            }

        }

        index -= 1;
        currentMulti /= 10;
    }

    return rtnString;
};

// console.log(intToRoman(1600)) //MDC
// console.log(intToRoman(1100)) //MC
// console.log(intToRoman(1550)) //MDL
// console.log(intToRoman(1660)) //MDCLX
// console.log(intToRoman(60)) //LX
// console.log(intToRoman(40)) //XL
// console.log(intToRoman(9)) //IX

module.exports = intToRoman;
