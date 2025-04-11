//   C = (Fahrenheit - 32) × 5/9
const convertToCelsius = function(fahrenheit) {
  return Math.round((((fahrenheit - 32)*5) / 9)*10)/10;
};

//   F = (9/5 * Celsius) + 32
const convertToFahrenheit = function(celsius) {  
  return Math.round((((9*celsius)/5) + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
