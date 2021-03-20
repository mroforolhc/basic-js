module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = String(options.addition) !== 'undefined' ? options.addition + '' : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  let newAddition = addition + '';
  if (additionRepeatTimes > 1) {
    newAddition = newAddition + additionSeparator;
    newAddition = newAddition.repeat(additionRepeatTimes).slice(0, additionSeparator.length * -1);
  }

  let newStr = str + '';
  if (repeatTimes > 1) {
    newStr = newStr + newAddition + separator;
    newStr = newStr.repeat(repeatTimes).slice(0, separator.length * -1);
  } else {
    newStr = newStr + newAddition;
  }

  return newStr;
};
  