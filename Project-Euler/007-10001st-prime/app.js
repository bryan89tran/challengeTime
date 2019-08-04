/**
 * Find the nth number of prime
 *
 * @param  {Number} spot nth spot to find the prime
 * @return {Number} 
 */

const prime = function(spot) {
    let primeNumSeen = 0;
    let number = 2;

    while(primeNumSeen < spot) {
            let isPrimeNum = true;
            for(let i = 2; i < number; i+=1) {
                if(number % i === 0) {
                    isPrimeNum = false;
                    break;
                }
            }

            if(isPrimeNum) {
                primeNumSeen += 1;
            }
            
            number += 1;
    }

    return number - 1;
    
}

// console.log(prime(2)); // 3
// console.log(prime(3)); // 5
// console.log(prime(6)); // 13
console.log(prime(10001)); // 13


const isPrime = function(number) {
    let isPrimeNum = true;

    for(let i = 2; i < number; i+=1) {
        if(number % i === 0) {
            isPrimeNum = false;
            break;
        }
    }

    if(isPrimeNum) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(isPrime(4));