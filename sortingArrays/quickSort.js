//https://www.youtube.com/watch?v=aVL9z3L-eRA

var quickSort = function(arr) {
    if(arr.length === 0) {
        return [];
    }

    var left = [];
    var right = [];
    var pivot = arr[0];

    for(var i = 1; i < arr.length; i +=1) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }

    }

    // return  quickSort(left).concat(pivot,quickSort(right));
    return [...quickSort(left), pivot, ...quickSort(right)];
}

var a = [];
for(var i = 0; i < 10; i+=1) {
    a[i] = Math.floor(Math.random() * 100 + 1);
}

console.log(a)
console.log();
console.log(quickSort(a));

