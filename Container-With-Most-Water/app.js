/**
 * @param {number[]} height
 * @return {number}
 */
var mawidthArea = function (arr) {

    let count = 0;

    for (var i = 0; i < arr.length; i++) {

        for (var j = i+1; j < arr.length; j++) {

            // width is the difference i and j; aka width;
            let width = j - i;

            // lowest of current indexes 
            let height  =  arr[j] > arr[i] ? arr[i]: arr[j];

            //  lowest of height times indexes
            let total = width * height;

            if( total > count){
                count = total;
            }


        }

    }

    return count;
};
                //   0  1  2  3  4  5  6  7  8
console.log(mawidthArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // === Output: 49

