/**
 * Returns the smallest number that is divisible by the numbers and its lesser
 *
 * @param  {Number} maxNumber  The maximum end of the number.
 * @return {Number}         
 */

var smallest = function(maxNumber) {
    let counter = 1;
    let isNumberFound = true;

    while(isNumberFound) {
        let i;
        let hasBeenFound = true;
        for(i = 0; i < maxNumber; i+=1) {
            if((counter % i) > 0) {
                hasBeenFound = false;
                counter += 1;
                break;
            }
        }

        if(hasBeenFound) {
            isNumberFound = false;
        }

    }

    return counter;

}

// console.log(smallest(10)); //2520
console.log(smallest(20)); //?  232792560