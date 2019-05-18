/**
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

const largestPal = function () {

  let firstNum = 999;
  let secondNum = 999;

}
999 x 999
999 x 998
999 x 997
999 x 996
999 x 995
999 x 994
999 x 993
999 x 992
999 x 991
999 x 990
998 x 990
998 x 999
998 x 998
998 x 997
998 x 996
998 x 995
998 x 994
998 x 993
998 x 992
998 x 991
998 x 990
997 x 999

998 x 998
998 x 997
997 x 997
997 x 996
// console.log(largestPal());


/**
const largestPal = function () {

  let firstNum = 999;
  let secondNum = 999;

  while (firstNum > 100) {

    let i;
    for (i = 0; i < 2; i += 1) {
      let total = firstNum * secondNum;
      let sumString = total.toString();

      if (sumString === sumString.split('').reverse('').join('')) {
        console.log(firstNum, secondNum);
        return total;
      }

      secondNum -= 1;
    }

    firstNum -= 1;
  }
}
 */

// 999 x 999
// 999 x 998
// 999 x 997
// 999 x 996
// 999 x 995
// 999 x 994
// 999 x 993
// 999 x 992
// 999 x 991
// 999 x 990
// 998 x 990
// 998 x 999
// 998 x 998
// 998 x 997
// 998 x 996
// 998 x 995
// 998 x 994
// 998 x 993
// 998 x 992
// 998 x 991
// 998 x 990
// 997 x 999
// .........

// 990 x 999
// ...
// 989 x 999

const largestPalOne = function () {

  let firstNum = 999;

  while (firstNum > 100) {

    let secondNum = 999;

    while (secondNum > 990) {

      let total = firstNum * secondNum;
      let stringOfNum = total.toString();
      //   console.log(stringOfNum)


      if (stringOfNum === stringOfNum.split('').reverse('').join('')) {
        // console.log('straight', stringOfNum)
        // console.log('reverse', stringOfNum.split('').reverse().join())
        console.log("firstNum :", firstNum, "secondNum :", secondNum);
        return total;
      }

      secondNum -= 1;
    }

    firstNum -= 1;
  }
}


console.log(largestPalOne());