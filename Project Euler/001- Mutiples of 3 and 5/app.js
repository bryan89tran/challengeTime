/**
  * If we list all the natural numbers below 10 that are
  * multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
  *
  * Find the sum of all the multiples of 3 or 5 below 1000.
  */

/**
 * Get Multiples of 3 and 5 and add them all up
 * 
 * @param  {Number} Num The max number to be passed in
 * @return              The sum multiples of 3 and 5
 */
var multiples = function (num) {
  let sum = 0, i;

  for (i = 0; i < num; i += 1) {
    if (!(i % 3)) {
      sum += i;
    }
    else if (!(i % 5)) {
      sum += i;
    }
  }

  return sum;
}

console.log(multiples(1000));