
//  0 0 0 0 0 
// 16 8 4 2 1

//      0 0 0 0 1   = 1
//      0 0 0 1 0   = 2
//      0 0 0 1 1   = 3
//      0 0 1 0 1   = 5
//      0 0 1 0 0   = 4
//      0 0 1 1 0   = 6
//      0 0 1 1 1   = 7
//      0 1 0 0 0   = 8
//      0 1 0 0 1   = 9
//      0 1 0 1 0   = 10
//      0 1 0 1 1   = 11
//      0 1 1 0 0   = 12
//      0 1 1 0 1   = 13
//      0 1 1 1 0   = 14
//      0 1 1 1 1   = 15
//      1 0 0 0 0   = 16 
//      1 0 0 0 1   = 17
//      1 0 0 1 0   = 18
//      1 0 0 1 1   = 19 
//      1 0 1 0 0   = 20
//      1 0 1 0 1   = 21
//      1 0 1 1 0   = 22
//      1 0 1 1 1   = 23
//      1 1 0 0 0   = 24
//      1 1 0 0 1   = 25
//      1 1 0 1 0   = 26
//      1 1 0 1 1   = 27
//      1 1 1 0 0   = 28
//      1 1 1 0 1   = 29
//      1 1 1 1 0   = 30
//      1 1 1 1 1   = 31
//    1 0 0 0 0 0   = 32

//     // 0 0 1 1 1   = 7
//     // 1 1 1 0 0   = 28

//                                          7 << 5

//    1024   512  256  128  64 16  8  4  2  1  = base 2
//      10     9    8    7   6  5  4  3  2  1  = index 
//       0     0    1    1   1  0  0  0  0  0  = 448

//       10000000000000000000000000000000
// 10000000000000000000000000000000
// 11111111111111111111111111111110
function bin_to_dec(bstr) {
    return parseInt((bstr + '')
        .replace(/[^01]/gi, ''), 2);
}

// console.log(bin_to_dec("00000101")); // 5

// console.log(bin_to_dec("11111010")); // -5 but need to fix function for this

// Understanding Negative numbers

//  Simple 8 bit
//  5 into bit is 00000101
// -5 into bit is 11111010

//   1    2   3    4    5   6   7   8   Number of bits
//   1    1   1    1    1   0   1   0   Binary
//   |    |   |    |    |   |   |   |
//-128 + 64 + 32 + 16 + 8 + 0 + 2 + 1 = -5    converted back into base 10 to view


function ABS_INT(n) {
    return (n ^ (n >> 31)) - (n >> 31);
}

// Ranges for negatives are -2147483648, 2147483647 in base 10
// The left most bit is the 32 bit which is for subtraction to use for negative numbers

// 32 bits
// 10000000000000000000000000000000    01111111111111111111111111111111
//          -2147483648                            2147483647

//  9 in bits 00000000000000000000000000001001 
// -9 in bits 11111111111111111111111111110111

// >> sign-propagating right shift
// Base 10  -9
// Base  2  11111111111111111111111111110111
// Operand   (-9 >> 31)
// Base 10  -1
// Base  2   11111111111111111111111111111111 
//
// Explanation in Base 10 (-2147483648 + 2147483647) = -1


// ^ XOR
// Base 10  -9
// Base  2  11111111111111111111111111110110
// Operand  -9 ^ -1
// Base 10  
// Base  2
//
// Explanation 
//         Base 2                       Base 10
// 11111111111111111111111111111111 === -1
// 11111111111111111111111111110111 === -9
// 00000000000000000000000000001000 === 8

// -2147483648 + 2147483638

//          ABS_INT(-9)
//  (-9 ^ (-9 >> 31)) - (-9 >> 31)
//  (-9 ^ -1) - (-1)
//  (8) - (-1)
//  (9)
