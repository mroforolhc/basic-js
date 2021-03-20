const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const k = 0.693 / HALF_LIFE_PERIOD;

  if (typeof sampleActivity === 'string' && sampleActivity.trim().length 
      && !isNaN(sampleActivity) && +sampleActivity > 0 && +sampleActivity < 15) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k);
  }

  return false;
};
