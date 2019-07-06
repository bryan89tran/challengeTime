/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const arr = s.split('');

    const obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    const newArr = arr.reduce((acc, item, i) => {

        const num = obj[item]
        let modNum = acc;
        while(modNum > 1) {
            modNum %= 10;
        }

        if (modNum === 1) {
            if (item === 'V' || item === 'X') {
                console.log('===')
                return acc + (obj[item] - 2);
            }
            else if (item === 'L' || item === 'C') {
                console.log('===')
                return acc + (obj[item] - 20);
            }
            else if (item === 'D' || item === 'M') {
                console.log('===')
                return acc + (obj[item] - 200);
            }
        }
        
        return acc + num;

    }, 0);

    return newArr;

};


// TODO Current file is not working properly

// console.log(romanToInt('III'));      // 4
// console.log(romanToInt('IV'));      // 4
// console.log(romanToInt('IX'));      // 9
// console.log(romanToInt('LVIII'));   // 58
// console.log(romanToInt('XC'));         // 90

// console.log(romanToInt('MCMXCIV')); // 1994
         //1000, 100, 1000, 10 , 100, 1, 5
               //console.log(100 % 1000)
                //1100 