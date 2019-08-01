/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    
    let listOne = l1, listTwo = l2, total = 0, isCarriedOne = false, currNode;
    const headNode;

    while(listOne || listTwo || isCarriedOne) {
       
        const numberOne = listOne ? parseInt(listOne.val) : 0;
        const numberTwo = listTwo ? parseInt(listTwo.val) : 0;
        let sum = numberOne + numberTwo;

        if(isCarriedOne) {
            sum += 1;
            isCarriedOne = false;
        }

        if(sum >= 10) {
            sum -= 10;
            isCarriedOne = true;
        }

        const newNode = new ListNode(sum);

        if (!headNode) {
            headNode = newNode;
            currNode = newNode;
        } else {
            currNode.next = newNode;
            currNode = newNode;
        }

        if(listOne) {
            listOne = listOne.next;
        } 
        
        if(listTwo) {
            listTwo = listTwo.next;
        }
    }

    return headNode;
};

module.exports = addTwoNumbers;

// let firstNumber = createNodes([2,4,3]);
// let secondNumber = createNodes([5,6,4]);

// let firstNumber = createNodes([1,8]);
// let secondNumber = createNodes([0]);

// let firstNumber = createNodes([5]);
// let secondNumber = createNodes([5]);  // [0,1]

// console.log(addTwoNumbers(firstNumber, secondNumber));
