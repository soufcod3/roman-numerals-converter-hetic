(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["agm-awesome-utils-tutorial"] = {}));
})(this, (function (exports) { 'use strict';

  const romanNumberConverter = arabicNumber => {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let roman = "";
    for (let key in romanNumerals) {
      while (arabicNumber >= romanNumerals[key]) {
        roman += key;
        arabicNumber -= romanNumerals[key];
      }
    }
    return roman;
  };

  exports.romanNumberConverter = romanNumberConverter;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
