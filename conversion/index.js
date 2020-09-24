const getPrimeFactor = require("./primeFactor");
const getFizzBuzz = require("./fizzBuzz");
const convert = require("./convert");

function Conversion(input) {
  this.arabic = convert.toArabic(input);
  this.roman = convert.toRoman(this.arabic);
  this.fizzBuzz = getFizzBuzz(this.arabic);
  this.primeFactors = getPrimeFactor(this.arabic);
}

module.exports = (input) => new Conversion(input);
