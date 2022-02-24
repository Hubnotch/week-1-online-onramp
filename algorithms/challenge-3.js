function isDivisbleByN(arr, n) {
  return arr.filter((element) => element % n === 0);
}

module.exports = isDivisbleByN;
