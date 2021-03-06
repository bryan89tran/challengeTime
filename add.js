/**
 * We want to create a function that will add numbers together when called in succession.
 * 
 * ```
 * add(1)(2);
 * returns 3
 * ```
 * 
 * We also want to be able to continue to add numbers to our chain.
 * 
 * ```
 * add(1)(2)(3); // 6
 * add(1)(2)(3)(4); // 10
 * add(1)(2)(3)(4)(5); // 15
 * 
 * and so on
 * 
 * A single call should return the number passed in.
 * 
 * ```
 * add(1); // 1
 * ```
 * 
 * We should be able to store the returned values and reuse them.
 * 
 * ```
 * var addTwo = add(2);
 * addTwo; // 2
 * addTwo + 5; // 7
 * addTwo(3); // 5
 * addTwo(3)(5); // 10
 * ```
 * 
 * We can assume any number being passed in will be valid whole number.
 */

function test() {
    Test.expect(add(1) == 1);
    Test.expect(add(1)(2) == 3);
    Test.expect(add(1)(2)(3) == 6);
}


//Part One

function add(n) {
    // Let the currying begin!
    // This refers to the function 
    // the function will keep its "Static Value"
    if( typeof this.counter == 'undefined' ) {
        this.counter = 0;
    }
    this.counter += parseInt(n);
    return this.counter; 
}

// console.log(add(3)) // 3
// console.log(add(2)) // 5
// console.log(add(6)) // 11

//Part 2.

// TODO How to execute function one after another 
// add(5)(3); //8

// Better
function hasPairWithSum2(arr, sum){
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++){
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

hasPairWithSum2([6,4,3,2,1,7], 9)