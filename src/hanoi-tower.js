
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const solutionNumbers = [];
  for (let i = 0; i < disksNumber; i++) {
    if (solutionNumbers.length) 
      solutionNumbers.push(solutionNumbers[solutionNumbers.length - 1] * 2);
    else solutionNumbers.push(1);
  }

  const turns = solutionNumbers.reduce((prev, curr) => prev + curr, 0);
  const seconds = Math.floor(3600 / turnsSpeed * turns);

  return {turns, seconds};
};
