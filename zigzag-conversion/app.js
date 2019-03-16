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


    
    let isSpread = true; 















    let string = '';

    let arr = [];
    arr[0] = s.split('').splice(0, numRows);
    // arr

   //length = 10
   // 3 rows 

   let noSpaces = false;

   let twoDeminArry = [];

   let counter = 0;
    
    for(let i = 0; i < s.length; i++) {

        if( !noSpaces){
            twoDeminArry[counter] = s.split('').splice(i , numRows)
            noSpaces= true;
            i += numRows;
            counter++;
            


        }else{
            let newArr = new Array(numRows);
            
            for(var j = 0; j < newArr.length; j++){
                newArr[i] = '';
            }

            twoDeminArry[counter] = newArr;
            counter++;

        }
// twoDeminArry

    }
   
    // twoDeminArry
    

    



    let threeDem =
        [
            ['P', 'A', 'Y'], ['', 'P', ''],
            ['A', 'L', 'I'], ['', 'S', ''],
            ['H', 'I', 'R',], ['', 'I', ''],
            ['N', 'G', '']
        ]

    let fiveDem =
        [
            ['P', 'A', 'Y','P','A'], ['', '','', 'L', ''],
            ['', '', 'I', '', ''], ['', 'S', '', '', ''],
            ['H', 'I', 'R', 'I', 'N'], ['', '', '','G', '']
        ];

        let mainArrayPosition = 0;
        let miniArrayPosition = 0;

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


    //P     H
    //A   S I
    //Y  I  R
    //P L   I G
    //A     N



    // P   A   H   N
    // A P L S I I G
    // Y   I   R



    //P     I    N
    //A   L S  I G
    //Y A   H R
    //P     I
    return string;
};


console.log(convert("PAYPALISHIRING", 3)); //"PAHNAPLSIIGYIR" 
// console.log(convert("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"