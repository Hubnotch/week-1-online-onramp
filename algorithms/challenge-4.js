function highestSum(x, y) {
  let xSum = x.reduce((total, item) => total + item, 0);
  let ySum = y.reduce((total, item) => total + item, 0);
  return xSum > ySum ? xSum : ySum;
}

module.exports = highestSum;
