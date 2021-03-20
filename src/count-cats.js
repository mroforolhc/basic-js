module.exports = function countCats(matrix) {
  const reducer = (prev, curr) => prev + curr.filter((el) => el === '^^').length;
  return matrix.reduce(reducer, 0);
};
