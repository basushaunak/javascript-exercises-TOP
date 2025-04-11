const reverseString = function(string) {
    let reverseString = "";
    let len = string.length;
    for (let i = (len-1); i >= 0; i--){
      reverseString += string[i];
    };
    return reverseString;

};

// Do not edit below this line
module.exports = reverseString;
