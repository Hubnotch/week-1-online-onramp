function noOfElements(x, y, z) {
  return x.filter((element) => element >= y && element <= z).length;
}

module.exports = noOfElements;
