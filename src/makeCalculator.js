'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;
  const calculator = {
    operate(callback, number) {
      if (typeof callback === 'function') {
        result = callback(result, number);
      }

      return this;
    },

    getResult() {
      return result;
    },

    add(a, b) {
      return a + b;
    },

    subtract(a, b) {
      return a - b;
    },

    multiply(a, b) {
      return a * b;
    },

    divide(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        return a;
      }
    },

    reset() {
      result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
