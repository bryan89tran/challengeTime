/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   let array = [...nums1, ...nums2].sort((a, b) => a - b);
   //if array.length is odd then single number
   if(array.length % 2 === 0){
        return (((array[array.length / 2] + array[(array.length / 2) - 1])) / 2).toFixed(1);
   }
   // else arry.length is even then take 2 and average
   else {
       return (array[Math.floor(array.length / 2)]);
   }
};

//console.log(findMedianSortedArrays([1, 3], [2]));
//console.log(findMedianSortedArrays([1, 2],[3, 4]));
//console.log(findMedianSortedArrays([3], [-2,-1]));