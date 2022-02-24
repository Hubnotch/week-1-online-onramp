function replaceDivisible(x, y) {
  let result = [];
  x.forEach((element) => {
    if (element % y === 0) result.push("isDivisible");
    else result.push(element);
  });
  return result;
}

module.exports = replaceDivisible;
