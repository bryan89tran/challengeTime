function factorial(x) {
  if (x < 0) return;
  if (x === 0) return 1;
  return x * factorial(x - 1);
}
// console.log(factorial(3));
// 6

const romanNumOnes = ["I", "X", "C", "M"];
const romanNumFives = ["V", "L", "D"];

var intToRoman = function (num, rtnRoman = "") {

  if (num >= 1000) {
    rtnRoman += "M";
    num -= 1000
  }
  
  else if (num >= 500) {
    let tempNum = num / 100;
    let modOf = ~~(tempNum % 5);

    if (modOf === 4) {
      rtnRoman += "CM";
    }
    else {
      rtnRoman += "D" + "C".repeat(modOf);
    }
    num -= ((5 + modOf) * 100);

  }
  else if (num >= 100) {
    let tempNum = num / 100;
    let modOf = ~~(tempNum % 5);

    if (modOf === 4) {
      rtnRoman += "CD";
    }
    else {
      rtnRoman += "C".repeat(modOf);
    }
    num -= modOf * 100;

  }
  else if (num >= 50) {
    let tempNum = num / 10;
    let modOf = ~~(tempNum % 5);

    if (modOf === 4) {
      rtnRoman += "XC";
    }
    else {
      rtnRoman += "L" + "X".repeat(modOf);
    }
    num -= ((5 + modOf) * 10);

  }
  else if (num >= 10) {
    let tempNum = num / 10;
    let modOf = ~~(tempNum % 5);

    if (modOf === 4) {
      rtnRoman += "XL";
    }
    else {
      rtnRoman += "X".repeat(modOf);
    }
    num -= modOf * 10;

  }
  else if (num >= 5) {
    let tempNum = num / 1;
    let modOf = ~~(tempNum % 5);

    if (modOf === 4) {
      rtnRoman += "IX";
    }
    else {
      rtnRoman += "V" + "I".repeat(modOf);
    }
    num -= ((5 + modOf) * 1);

  }
  else if (num >= 1) {
    let tempNum = num / 1;
    let modOf = ~~(tempNum % 5);

    if (modOf === 4) {
      rtnRoman += "IV";
    }
    else {
      rtnRoman += "I".repeat(modOf);
    }
    num -= modOf * 1;

  }

  if (num <= 0) {
    return rtnRoman;
  }

  return intToRoman(num, rtnRoman);
};

// console.log(intToRoman(1600)) // MDC
// console.log(intToRoman(1900))    // MCM
// console.log(intToRoman(1800))    // MDCCC
console.log(intToRoman(1994))    // MCMXCIV


module.exports = intToRoman;

// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return (fib(n - 1) + fib(n - 2));
// }

// console.log(fib(3));
//   1 2 3 4 5 6 7
// 0 1 1 2 3 5 8 13 21 34 55 89 144

    //                              (5)
    //                  (3)          5            (2)                           
    //          (2)      4      (1)          (1)   3   (1)     
    //      (1)  3               2            2         1  
    //       2       1       1     0       1    0
    //     1    0




    //                 4
    //         3               2
    //     2        1       1       0
    // 1       0




    //             3
    //     2               1
    // 1       0
