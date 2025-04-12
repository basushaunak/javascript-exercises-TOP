function getAge (birth,death){
    return death ? death-birth : (new Date().getFullYear()) - birth;

};

const findTheOldest = function(peopleArray) {
    const outputArray = peopleArray.toSorted((current,next)=>
    getAge(current.yearOfBirth,current.yearOfDeath) - getAge(next.yearOfBirth, next.yearOfDeath))
    return outputArray[outputArray.length-1];
};


// Do not edit below this line
module.exports = findTheOldest;
