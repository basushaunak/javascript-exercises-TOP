const removeFromArray = function(...args) {
    let array = args[0];
    let arrayOut = [];
    for (let i = 1; i< args.length;i++){
        arrayOut = array.filter((item)=>item !== args[i]);
        array = arrayOut;
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
