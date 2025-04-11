const add = function(num1, num2) {
  return (num1 + num2);
	
};

const subtract = function(num1, num2) {
	return (num1 - num2)
};

const sum = function(array) {
	return array.reduce((total,num)=>total+=num,0);
};

const multiply = function(array) {
  let multiplication = 1;
  for (i = 0;i<array.length;i++){
    multiplication = multiplication*array[i];
  }
  return multiplication;
};

const power = function(num,exp) {
  return num ** exp;
	
};

const factorial = function(num) {
  if(num === 0 || num === 1){
    return 1;
  }
  let fact = 1;
  for(let i = num;i>0;i--){
    fact = fact*i;
  }
  return fact;	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
