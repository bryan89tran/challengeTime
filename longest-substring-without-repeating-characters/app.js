/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var i, subString = "", count = 0;
    if(s.length === 1){
        return 1;
    }
    for(i = 0; i < s.length; i+=1) {

        if(count > ((s.length -1) - i)) {
            return count;
        }
        var j;
        for(j = i; j < s.length; j+=1){

            if(subString.indexOf(s[j]) < 0){
                subString+=s[j]; 
                if(count < subString.length){
                    count = subString.length;
                }
            }
            else {
                subString = "";
                break;
            }
        }
        
    }

    return count;
};

console.log(lengthOfLongestSubstring("aab"));