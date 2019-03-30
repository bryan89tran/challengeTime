/**
 * @param  { Array  } strs
 * @return { String }
 */

const longestCommonPrefix = (strs) => {
    //All prefix must match
    //Loop through strs
    //Then store the same keys;
    let i, string = "", isSameLetter = true, pointer = 0;
    let outerLoop = strs[0].length;
    let innerLoop = strs.length - 1;

    if (strs.length === 0) {
        return string;
    }

    for (i = 0; i <= outerLoop; i += 1) {
        if (!isSameLetter) break;

        let j;

        for (j = 0; j < innerLoop; j += 1) {
            let currentLetter = strs[j][i];
            let nextLetter = strs[j + 1][i];

            if (currentLetter !== nextLetter) {
                isSameLetter = false;
                break;
            }
        }
        if (isSameLetter) {
            pointer += 1;
        }
    }

    if (!strs[0].slice(0, pointer)) {
        return ''
    } else {
        return strs[0].slice(0, pointer);
    }

};

// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""
// console.log(longestCommonPrefix([""]));    // ""

module.exports = longestCommonPrefix;