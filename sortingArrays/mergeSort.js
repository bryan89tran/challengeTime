//https://www.youtube.com/watch?v=aVL9z3L-eRA

const merge = function(left, right) {
    var result = [];
    var lLen = left.length;
    var rLen = right.length;
    var l = 0;
    var r = 0;

    while(l < lLen && r < rLen) {
        if(left[l] < right[r]) {
            result.push(left[l]);
            l+=1;
        }
        else {
            result.push(right[r]);
            r+=1;
        }
    }
    // console.log("merge", result.concat(left.slice(l).concat(right.slice(r))));
    // return result.concat(left.slice(l).concat(right.slice(r))); 

    return [...result, ...left.slice(l), ...right.slice(r)];
}

var mergeSort = function(arr) {
    var len = arr.length;
    if(len < 2) {
        return arr;
    }

    var mid = Math.floor(len/2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);

    console.log("mid", mid);
    console.log("left", left);
    console.log("right", right);

    return merge(mergeSort(left), mergeSort(right));
}

var arr = [6,5,3,1,8,7,2,4];

// console.log(arr)
// console.log();
// console.log(mergeSort(arr));

var a = [];
for(var i = 0; i < 10; i+=1) {
    a[i] = Math.floor(Math.random() * 100 + 1);
}


console.log(a)
console.log();
console.log(mergeSort(a));