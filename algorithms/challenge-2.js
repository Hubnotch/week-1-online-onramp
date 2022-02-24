function divisible(a) {
  return a.filter((element) => element % 2 === 0 && element > 15).length;
}

module.exports = divisible;
