var test = require('mocha').it,
  assert = require('chai').assert;
/*
test('toEnglish: `0` to `9`', function(){
  assert.isDefined(toEnglish);
  assert.isFunction(toEnglish);
  assert.equal(toEnglish(0), "zero");
  assert.equal(toEnglish(1), "one");
  assert.equal(toEnglish(2), "two");
  assert.equal(toEnglish(5), "five");
  assert.equal(toEnglish(6), "six");
  assert.equal(toEnglish(8), "eight");
  assert.equal(toEnglish(9), "nine");
  // et cetera, et cetera, et cetera...
}); // END test(toEnglish)

test('toEnglish: `10` to `20`', function(){
  assert.equal(toEnglish(10), "ten");
  assert.equal(toEnglish(11), "eleven");
  assert.equal(toEnglish(12), "twelve");
  assert.equal(toEnglish(13), "thirteen");
  assert.equal(toEnglish(14), "fourteen");
  assert.equal(toEnglish(15), "fifteen");
  assert.equal(toEnglish(16), "sixteen");
  assert.equal(toEnglish(17), "seventeen");
  assert.equal(toEnglish(18), "eighteen");
  assert.equal(toEnglish(19), "nineteen");
  assert.equal(toEnglish(20), "twenty");
}); // END test(toEnglish)

test('toEnglish: `21` to `30`', function(){
  // this is where `toEnglish` starts to get interesting...
  assert.equal(toEnglish(21), "twenty one");
  assert.equal(toEnglish(23), "twenty three");
  assert.equal(toEnglish(25), "twenty five");
  assert.equal(toEnglish(29), "twenty nine");
  assert.equal(toEnglish(29), "twenty nine");
  assert.equal(toEnglish(29), "twenty nine");
}); // END test(toEnglish)
/*
/**
 * @param {Number} value to convert to English number word
 * @return {String} representing `value` in English
 */
function toCheck(value){
    var raw = value.toFixed(2);
    var str = raw.toString();
    var i = str.length;        //position ####.#X
    var cents = "& " + str[str.length-2] + str[str.length-1] + "/100s";
    var j = (str.length - 4);  //position ###X.##
    var k = (str.length - 5);  //position ##X#.##
    var l = (str.length - 6);  //position X##.##
    var m = (str.length - 7);  //position X###.##
    var tens1= str[j];
    var tens = str[k]+str[j];
    var hundreds = str[l];
    var thousands = str[m];
    var ones ="";
    if (k === -1 && l === -2 && m === -3){
    switch (tens1) {
        case "1":
        tens = "one ";
        break;
        case "2":
        tens = "two ";
        break;
        case "3":
        tens = "three ";
        break;
        case "4":
        tens = "four ";
        break;
        case "5":
        tens = "five ";
        break;
        case "6":
        tens = "six ";
        break;
        case "7":
        tens = "seven ";
        break;
        case "8":
        tens = "eight ";
        break;
        case "9":
        tens = "nine ";
        break;
      }
    } else if (str[k] === "1"){
      switch (tens)  {
        case "10":
        tens = "ten ";
        break;
        case "11":
        tens = "eleven ";
        break;
        case "12":
        tens = "twelve ";
        break;
        case "13":
        tens = "thirteen ";
        break;
        case "14":
        tens = "fourteen ";
        break;
        case "15":
        tens = "fifteen ";
        break;
        case "16":
        tens = "sixteen ";
        break;
        case "17":
        tens = "seventeen ";
        break;
        case "18":
        tens = "eighteen ";
        break;
        case "19":
        tens = "nineteen ";
        break;
        case "00":
        tens = "";
        break;
      }
    } else if (str[k]+str[j] === "00"){
        tens = "";
    } else if (str[k]+str[j] === "20"){
        tens = "twenty";
    } else if (str[k] === "2" && str[j] != "0"){
        tens = "twenty " + num(str[j]);
    } else if (str[k]+str[j] === "30"){
        tens = "thirty";
    } else if (str[k] === "3" && str[j] != "0"){
        tens = "thirty " + num(str[j]);
    } else if (str[k]+str[j] === "40"){
        tens = "forty";
    } else if (str[k] === "4" && str[j] != "0"){
        tens = "forty " + num(str[j]);
    } else if (str[k]+str[j] === "50"){
        tens = "fifty";
    } else if (str[k] === "5" && str[j] != "0"){
        tens = "fifty " + num(str[j]);
    } else if (str[k]+str[j] === "60"){
        tens = "sixty";
    } else if (str[k] === "6" && str[j] != "0"){
        tens = "sixty " + num(str[j]);
    } else if (str[k]+str[j] === "70"){
        tens = "seventy";
    } else if (str[k] === "7" && str[j] != "0"){
        tens = "seventy " + num(str[j]);
    } else if (str[k]+str[j] === "80"){
        tens = "eighty";
    } else if (str[k] === "8" && str[j] != "0"){
        tens = "eighty " + num(str[j]);
    } else if (str[k]+str[j] === "90"){
        tens = "ninety";
    } else if (str[k] === "9" && str[j] != "0"){
        tens = "ninety " + num(str[j]);
    }
if (l > -1){
    switch (hundreds){
      case "1":
      hundreds = "one hundred ";
      break;
      case "2":
      hundreds = "two hundred ";
      break;
      case "3":
      hundreds = "three hundred ";
      break;
      case "4":
      hundreds = "four hundred ";
      break;
      case "5":
      hundreds = "five hundred ";
      break;
      case "6":
      hundreds = "six hundred ";
      break;
      case "7":
      hundreds = "seven hundred ";
      break;
      case "8":
      hundreds = "eight hundred ";
      break;
      case "9":
      hundreds = "nine hundred ";
      break;
      case "0":
      hundreds = "";
      break;
    }
  }
  if (m > -1){
      switch (thousands){
        case "1":
        thousands = "one thousand, "
        break;
        case "2":
        thousands = "two thousand, ";
        break;
        case "3":
        thousands = "three thousand, ";
        break;
        case "4":
        thousands = "four thousand, ";
        break;
        case "5":
        thousands = "five thousand, ";
        break;
        case "6":
        thousands = "six thousand, ";
        break;
        case "7":
        thousands = "seven thousand, ";
        break;
        case "8":
        thousands = "eight thousand, ";
        break;
        case "9":
        thousands = "nine thousand, ";
      }
    }
if (value < 99.99){
return tens+cents;
} else if (value < 999.99 && value >99.99 ) {
return hundreds+tens+cents;
} else if (value < 9999.99 && value >999.99 ){
return thousands+hundreds+tens+cents;
}
}

//console.log (toEnglish(Number(01.45))

function num (digit) {
  switch (digit) {
      case "1":
      return "one ";
      break;
      case "2":
      return "two ";
      break;
      case "3":
      return "three ";
      break;
      case "4":
      return "four ";
      break;
      case "5":
      return "five ";
      break;
      case "6":
      return "six ";
      break;
      case "7":
      return "seven ";
      break;
      case "8":
      return "eight ";
      break;
      case "9":
      return "nine ";
}
}

test('BEAST MODE: toCheck', function(){
  assert.isFunction(toCheck);
  assert.equal(toCheck(1.23), "one & 23/100s");
  assert.equal(toCheck(12.34), "twelve & 34/100s");
  assert.equal(toCheck(17.44), "seventeen & 44/100s");
  assert.equal(toCheck(97.56), "ninety seven & 56/100s");
  assert.equal(toCheck(123.45), "one hundred twenty three & 45/100s");
  assert.equal(toCheck(1234.56), "one thousand, two hundred thirty four & 56/100s");
  assert.equal(toCheck(4000.00), "four thousand, & 00/100s");
  // you might need to try some values in between...
}); // END test(BEAST MODE)
