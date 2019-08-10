/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    
    let sum;
    let firstPointer = 0;
    let secondPointer = 1
    let length = nums.length;
    while(sum !== target) {
        sum = nums[firstPointer] + nums[secondPointer];

        if(sum === target) {
            return [firstPointer, secondPointer];
        }

        secondPointer += 1;

        if(secondPointer === length) {
            firstPointer +=1;
            secondPointer = firstPointer + 1;
        }

    }

    return [firstPointer, secondPointer];
};

module.exports = twoSum;

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([0,4,3,0], 0));
// console.log(twoSum([-3,4,3,90], 0));
// console.log(twoSum([-1,-2,-3,-4,-5], -8));
console.log(twoSum([150,24,79,50,88,345,3], 200));


/**
    // Almost worked with every 

    function ABS_INT(n) {
        return (n ^ (n >> 31)) - (n >> 31);
    }

    const twoSum = function(nums, target) {
    
    let sum;
    let start = 0;
    let end = nums.length - 1;
    while(sum !== target) {
        sum = nums[start] + nums[end];
        if(sum === target) {
            return [start, end];
        }
        if (ABS_INT(sum) > ABS_INT(target)) {
            end -=1;
        }
        if (ABS_INT(sum) < ABS_INT(target)) {
             start += 1;
        }
    }

    return [start, end];
}
 */