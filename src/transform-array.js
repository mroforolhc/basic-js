module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error;

  const newArr = [];
  let isDel, isDouble = false;

  arr.forEach((el) => {
    switch (el) {
      case '--discard-next':
        isDel = true;
        break;
      case '--discard-prev':
        if (newArr.length && newArr[newArr.length - 1] !== 'del') newArr.pop();
        break;
      case '--double-next':
        isDouble = true;
        break;
      case '--double-prev':
        if (newArr.length && newArr[newArr.length - 1] !== 'del') newArr.push(newArr[newArr.length - 1]);
        break;
      
      default:
        if (isDouble) {
          newArr.push(el, el);
          isDouble = false;
        } else if (isDel) {
          newArr.push('del');
          isDel = false;
        } else newArr.push(el);
        break;
    }
  });

  return newArr.filter((el) => el !== 'del');
};