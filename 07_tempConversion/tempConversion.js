const ftoc = function (a) {
  let result = (a - 32) * 0.5556;
  let formattedResult = Number(result.toFixed(1) == 0.0 ? 0 : result.toFixed(1));
  return formattedResult;
};

const ctof = function (a) {
  let result = a * 1.8 + 32;
  let formattedResult = Number(result.toFixed(1) == 0.0 ? 0 : result.toFixed(1));
  return formattedResult;
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
