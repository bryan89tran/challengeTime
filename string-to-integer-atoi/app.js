/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    //Math.pow(2, 32)
    //ignore white space
    let trimmed = str.trim();
    let i = 0;
    let newStr = '';
    let isNegative = false;
    if (trimmed[0] === "-" || trimmed[0] === "+") {
        //continue with numbers if there is number;
        //if is number do stuff
        if (trimmed[i] === "-") {
            isNegative = true;
        }
        i = 1;
        newStr += trimmed[0]
    }
    for (i; i < str.length; i += 1) {
        if (isNaN(trimmed[i])) {
            break;
        }
        else {
            newStr += trimmed[i];
            if (newStr.length > 10) {
                if (isNegative) {
                    return -Math.pow(2, 31);
                }
                return Math.pow(2, 31);
            }
        }
    }

    if (newStr.length === 0) {
        return ~~newStr;
    }
    else {
        if (isNaN(+newStr)) {
            return 0;
        }
        else {
            return +newStr;
        }
    }
}

module.exports = myAtoi;