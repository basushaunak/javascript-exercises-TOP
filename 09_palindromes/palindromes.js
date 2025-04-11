const palindromes = function (inputString) {
    let processedString = inputString.toLowerCase().replace(/[^\w]/g, '');
    let halfLength = processedString.length/2;
    let maxIndex = processedString.length -1 ;
    for(let i = 0; i<=halfLength;i++){
        if(processedString[i] !== processedString[maxIndex-i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
