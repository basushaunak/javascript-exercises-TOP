const fibonacci = function(idx) {
    let index = Number(idx);
    if(isNaN(index)){
        return "OOPS";
    }
    if(index !== Math.floor(index) || index < 0 ){
        return "OOPS";
    }
    let sequenceOne = 1;
    let sequenceTwo = 1;
    let sequenceThree = 0;
    if(index === 1 || index == 2){
        return 1;
    }
    for(let i = 3; i <= index ; i++){
        sequenceThree = sequenceOne + sequenceTwo;
        sequenceOne = sequenceTwo;
        sequenceTwo = sequenceThree;
    }
    return sequenceThree;
};

// Do not edit below this line
module.exports = fibonacci;
