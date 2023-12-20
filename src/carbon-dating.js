const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

const rateConstant = Math.LN2 / HALF_LIFE_PERIOD;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;

  sampleActivityValue = Number.parseFloat(sampleActivity);

  if (sampleActivityValue > 0 && sampleActivityValue <= MODERN_ACTIVITY) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityValue) / rateConstant);
  }

  return false;
}

module.exports = {
  dateSample
};
