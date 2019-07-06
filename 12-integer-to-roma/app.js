/**
 * @param {number} num
 * @return {string}
 */

/**
    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
 */

// 1500 'MD'
// 1600 'MDC'
// 1700 'MDCC'
// 1800 'MDCCC'
// 1900 'MCM'

// After M is figured out
// Current string is 'M'
// 500 'D'
// 600 'DC'
// 700 'DCC'
// 800 'DCCC'
// 900 'CM'

// 500 % 500 === 000 'D'
// 600 % 500 === 100 'DC'
// 700 % 500 === 200 'DCC'
// 800 % 500 === 300 'DCCC'
// 900 % 500 === 400 'CM'

// 5 % 5 === 0 'D'
// 6 % 5 === 1 'DC'
// 7 % 5 === 2 'DCC'
// 8 % 5 === 3 'DCCC'
// 9 % 5 === 4 'CM'

// 1600 === 'MDC'

var intToRoman = function (num) {
  let rtnString = "";

  while (num > 0) {


    if (num >= 1000) {

      let dividedOfM = Math.floor(num / 1000);

      num = num - 1000;
      rtnString += "M";

    }


    else if (num >= 500) {

      let tempNum = Math.floor(num / 100);
      let modOfD = tempNum % 5;
      let romanSymBase = "D";
      let romanSymSingle = "C";
      let romanSymNext = "M";

      let currentMulti = 100

      if (modOfD === 4) {
        rtnString += romanSymSingle + romanSymNext;
        num -= (9 * currentMulti);
      }
      else {
        rtnString += romanSymBase + romanSymSingle.repeat(modOfD);
        num -= ((5 + modOfD) * currentMulti);
      }

    }
    else if (num >= 100) {

      let tempNum = Math.floor(num / 100);
      let modOfC = tempNum % 5;

      let romanSymBase = "C";
      let romanSymNext = "D";

      let currentMulti = 100;

      if (modOfC === 4) {
        rtnString += romanSymBase + romanSymNext;
        num -= (4 * currentMulti);
      }
      else {
        rtnString += romanSymBase.repeat(modOfC);
        num -= (modOfC * currentMulti);
      }

    }
    else if (num >= 50) {

      let tempNum = Math.floor(num / 10);
      let modOfD = tempNum % 5;
      let romanSymBase = "L";
      let romanSymSingle = "X";
      let romanSymNext = "C";

      let currentMulti = 10

      if (modOfD === 4) {
        rtnString += romanSymSingle + romanSymNext;
        num -= (9 * currentMulti);
      }

      else {
        rtnString += romanSymBase + romanSymSingle.repeat(modOfD);
        num -= ((5 + modOfD) * currentMulti);
      }

    }
    else if (num >= 10) {

      let tempNum = Math.floor(num / 10);
      let modOfC = tempNum % 5;

      let romanSymBase = "X";
      let romanSymNext = "L";

      let currentMulti = 10;

      if (modOfC === 4) {
        rtnString += romanSymBase + romanSymNext;
        num -= (4 * currentMulti);
      }
      else {
        rtnString += romanSymBase.repeat(modOfC);
        num -= (modOfC * currentMulti);
      }

    }
    else if (num >= 5) {

      let tempNum = Math.floor(num / 1);
      let modOfD = tempNum % 5;
      let romanSymBase = "V";
      let romanSymSingle = "I";
      let romanSymNext = "X";

      let currentMulti = 1

      if (modOfD === 4) {
        rtnString += romanSymSingle + romanSymNext;
        num -= (9 * currentMulti);
      }

      else {
        rtnString += romanSymBase + romanSymSingle.repeat(modOfD);
        num -= ((5 + modOfD) * currentMulti);
      }

    }
    else if (num >= 1) {

      let tempNum = Math.floor(num / 1);
      let modOfC = tempNum % 5;

      let romanSymBase = "I";
      let romanSymNext = "V";

      let currentMulti = 1;

      if (modOfC === 4) {
        rtnString += romanSymBase + romanSymNext;
        num -= (4 * currentMulti);
      }
      else {
        rtnString += romanSymBase.repeat(modOfC);
        num -= (modOfC * currentMulti);
      }

    }

  }

  return rtnString;

};

// console.log(intToRoman(1600)) //MDC
// console.log(intToRoman(1100)) //MC
// console.log(intToRoman(1550)) //MDL
// console.log(intToRoman(1660)) //MDCLX
// console.log(intToRoman(60)) //LX
// console.log(intToRoman(40)) //XL

module.exports = intToRoman;