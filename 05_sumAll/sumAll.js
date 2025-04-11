const sumAll = function(startInteger, stopInteger) {
    if(startInteger <= 0 || stopInteger <= 0 || startInteger !== Math.floor(startInteger)|| 
       stopInteger !== Math.floor(stopInteger) || typeof startInteger !== "number" || typeof stopInteger !== "number"){
        return "ERROR";
    }
    let startNum = startInteger;
    let endNum = stopInteger;
    let total = 0;
    if (startInteger > stopInteger){
        startNum = stopInteger;
        endNum = startInteger;
    }
    for (let i=startNum; i<=endNum;i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
