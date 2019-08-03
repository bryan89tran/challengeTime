/**
 * Returns the difference of the sum squared of the range and the square of the sum
 *
 * @param  {Number} rangeNum  The maximum end of the number.
 * @return {Number}         
 */

const difference = function(rangeNum) {
    let i;
    let squareFirstThenSome = 0;
    let difference;
    for(i = 0; i <= rangeNum; i+=1) {
        squareFirstThenSome += i * i;
    }

    let j;
    let sumFirstThenSquare = 0;
    for(j = 0; j <= rangeNum; j+=1) {
        sumFirstThenSquare += j;
    }

    sumFirstThenSquare = sumFirstThenSquare * sumFirstThenSquare;

    difference = sumFirstThenSquare - squareFirstThenSome;

    return difference;
}

console.log(difference(100))
