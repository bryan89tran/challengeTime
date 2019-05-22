/**
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

const largestPalOne = function () {
  console.time("largestPalOne");

  let firstNum = 999;
  const collection = [];

  while (firstNum > 900) {

    let secondNum = 999;

    while (secondNum > 900) {

      let total = firstNum * secondNum;
      let stringOfNum = total.toString();

      if (stringOfNum === stringOfNum.split('').reverse('').join('')) {
        // console.log("firstNum :", firstNum, "secondNum :", secondNum);
        collection.push(total);
      }

      secondNum -= 1;
    }

    firstNum -= 1;
  }

  console.timeEnd("largestPalOne");

  return Math.max(...collection);
}

const largestPalTwo = function () {
  console.time("largestPalTwo");

  let firstNum = 999;
  let lowestPossible = 100;
  const collection = [];

  while (firstNum > lowestPossible) {

    let secondNum = 999;

    while (secondNum > lowestPossible) {

      let total = firstNum * secondNum;
      let stringOfNum = total.toString();

      if (stringOfNum === stringOfNum.split('').reverse('').join('')) {
        lowestPossible = Math.min(firstNum, secondNum);
        // console.log("firstNum :", firstNum, "secondNum :", secondNum);
        collection.push(total);

      }

      secondNum -= 1;
    }

    firstNum -= 1;
  }

  console.timeEnd("largestPalTwo");

  return Math.max(...collection);

}

largestPalOne();
largestPalTwo();