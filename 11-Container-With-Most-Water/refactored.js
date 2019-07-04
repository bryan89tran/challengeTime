/**
 * @param {number[]} height
 * @return {number}
 */
var mawidthArea = function (height) {
    let width = height.length -1;
    let pTwo = height.length -1;
    let count = 0;
    let pOne = 0;

    while(width >= 1){
        let minH = Math.min(height[pOne], height[pTwo])

        if( height[pOne] <= height[pTwo]){
            pOne += 1
        } else {
            pTwo -= 1;
        }

        let total = width * minH;
        width-= 1

        count = total > count ? total : count;

    }

    return count;
};
                    //   0  1  2  3  4  5  6  7  8
console.log(mawidthArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // === Output: 49

