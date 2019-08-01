/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const ListNode = function(val) {
    this.val = val;
    this.next = null;
}

/**
 * Creates nodes
 *
 * @param  {Number[]}  numberArray  Array of numbers
 * @return {ListNode}
 */

module.exports.createNodes = function(numberArray) {
    var headNode, currNode, i;

    for (i = 0; i < numberArray.length; i += 1) {
        var newNode = new ListNode(numberArray[i]);
        if (!headNode) {
            headNode = newNode;
            currNode = newNode;
        } else {
            currNode.next = newNode;
            currNode = newNode;
        }
    }

    return headNode;
}
