const repeatString = function (x, y) {
  let result = y < 0 ? "ERROR" : "";
  for (let i = 0; i < y; i++) {
    result += x;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
