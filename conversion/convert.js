const numerals = {
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
  I: 1,
};

const toRoman = (num) => {
  const romanNumeralsArray = Object.keys(numerals);

  if (typeof num === "number" || typeof num === "string") {
    num = Number(num);

    let result = "";

    if (num > 0) {
      romanNumeralsArray.forEach((romNum) => {
        const romNumVal = numerals[romNum];
        const x = Math.floor(num / romNumVal);
        num -= x * romNumVal;

        result += romNum.repeat(x);
      });
    }

    return result ? result : "Please provide positive number.";
  }

  return "Invalid Arabic Numerals";
};

const toArabic = (input) => {
  if (typeof input === "number") return input;

  if (typeof input !== "string" || !input.length)
    return "Invalid Roman Numerals";

  input = input.toUpperCase();
  const romNumericals = [];
  const twoLettersRomNum = input.match(/(CM)|(CD)|(XC)|(XL)|(IX)|(IV)/g);

  twoLettersRomNum &&
    twoLettersRomNum.filter((item) => {
      romNumericals.push(item);
      input = input.replace(item, "");
    });

  romNumericals.push(...input);

  const result = romNumericals
    .map((item) => numerals[item])
    .reduce((num1, num2) => num1 + num2);

  return result ? result : "Invalid Roman Numerals";
};

module.exports.toArabic = toArabic;
module.exports.toRoman = toRoman;
