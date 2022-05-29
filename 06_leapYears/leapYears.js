const leapYears = function (year) {
  const result = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);  
  return result;
};

// Do not edit below this line
module.exports = leapYears;
