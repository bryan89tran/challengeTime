/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

    // String and numbers of rows
    // Split the String into an array
    // Loop through the array items and skip by 3 when boolean is true
    // boolean is set to when item is at second index of smaller array;
    // Next iternation will be spread

    let twoDeminArry = [];
    let isSpread = true; 
    let mainArrayPosition = 0;
    let miniArrayPosition = (numRows -1) - 1;
    
    for(let i = 0; i < s.length; i+=1) {

        if(isSpread){
            twoDeminArry[mainArrayPosition] = s.split('').splice(i , numRows)
            isSpread = false;
            i += (numRows-1);
        } 
        else {
            twoDeminArry[mainArrayPosition] = new Array(numRows);
            twoDeminArry[mainArrayPosition][miniArrayPosition] = s[i];
            miniArrayPosition-=1;
        }

        if(miniArrayPosition < 1) {
            miniArrayPosition = (numRows -1) - 1;
            isSpread = true;
        }
        mainArrayPosition+=1;
    }

    let rtnString = '';

    for(let j = 0; j < numRows; j+=1) {
        for(var l = 0; l < twoDeminArry.length; l+=1) {
            if(twoDeminArry[l][j] !== undefined){
                rtnString += twoDeminArry[l][j];
            }
        }
    }
    
    return rtnString;
};
    
// PRE WORK
// Pseudo code 
    
// P   A   H   N
// A P L S I I G
// Y   I   R
let threeNumRows =
    [
        ['P', 'A', 'Y'], ['', 'P', ''],
        ['A', 'L', 'I'], ['', 'S', ''],
        ['H', 'I', 'R',], ['', 'I', ''],
        ['N', 'G', '']
    ];

//P     I    N
//A   L S  I G
//Y A   H R
//P     I
let fourNumRows = 
    [

    ];


//P     H
//A   S I
//Y  I  R
//P L   I G
//A     N
let fiveNumRows =
    [
        ['P', 'A', 'Y','P','A'], ['', '','', 'L', ''],
        ['', '', 'I', '', ''], ['', 'S', '', '', ''],
        ['H', 'I', 'R', 'I', 'N'], ['', '', '','G', '']
    ];

    // Set empty of numRows = [, , , , ];
    // twoDeminArry[mainArrayPosition][miniArrayPosition] = s[i];

    // TODO 2 things
    // Set Spread to true
    // and reposition miniArrayPosition

    // spread is true
        // spread from current i to number of rows
        // set spread to false
        // I is incremented to the numRow
    
    // spread is false
        //i now lands on the first spots of spaces
        //i will now increment +1 only
        //set new emty array to num rows ['', '','', '', '']
        // s[i] === 'L'
        // counter = (numRow - 1) - 1;
        // s[i][counter] = 'L
        // twoDeminArry[mainArrayPosition][miniArrayPosition] = s[i];
        // twoDeminArry[1][3] = s[i];
        //set value of i to counter. 


// console.log(convert("PAYPALISHIRING", 3)); //"PAHNAPLSIIGYIR" 
// console.log(convert("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"