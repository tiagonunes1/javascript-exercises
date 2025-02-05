const sumAll = function (min, max) {
  if (min > max) {
    const temp;
    temp = min;
    min = max;
    max = temp;
  }

  const array =
    typeof min != "number" || typeof max != "number" || min < 0 || max < 0
      ? "ERROR"
      : [...Array(max - min + 1).keys()].map((i) => i + min);

  const sum =
    array === "ERROR"
      ? array
      : array.reduce((partialSum, a) => partialSum + a, 0);

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
