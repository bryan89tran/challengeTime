/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let i;
    let longestPal = '';
    let currentPal = '';

    for(i = 0; i < s.length; i+=1){
        
        let current = i;
        let next = i+1;
        let previous = i-1;
        let lengthOfPal = 0;
        let isPalEven = false;
        let isPalOdd = false;

            while(s[previous] === s[next] && s[next] !== undefined){
                lengthOfPal+=1;
                previous-=1;
                next+=1;
                isPalEven = true;
            }
            
            if(!isPalEven){
                while(s[current] === s[next] && s[next] !== undefined){
                    lengthOfPal+=1;
                    next+=1;
                    current-=1;
                    isPalOdd = true;
                }
            }

        if(isPalEven) {
            currentPal = s.slice(previous+1, next);
        }
        else if (isPalOdd) {
            currentPal = s.slice(current+1, next);
        }

        if(currentPal.length > longestPal.length){
            longestPal = currentPal;
        }

    }
    if (longestPal.length === 0) {
        return s[0] ? s[0] : "";
    } 
    else {
        return longestPal;
    }
};

// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("a"));
// console.log(longestPalindrome("ac"));
// console.log(longestPalindrome(""));
console.log(longestPalindrome("bb"));