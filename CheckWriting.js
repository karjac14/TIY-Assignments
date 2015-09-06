var test = require('mocha').it,
  assert = require('chai').assert;

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

/**
 * @param {Number} value to convert to English number word
 * @return {String} representing `value` in English
 */
function toEnglish(value){
    var word = "";
    if (value <= 20) {
      switch (value) {
        case 0:
        word = "zero";
        break;
        case 1:
        word ="one";
        break;
        case 2:
        word ="two";
        break;
        case 3:
        word ="three";
        break;
        case 4:
        word ="four";
        break;
        case 5:
        word ="five";
        break;
        case 6:
        word ="six";
        break;
        case 7:
        word ="seven";
        break;
        case 8:
        word ="eight";
        break;
        case 9:
        word ="nine";
        break;
        case 10:
        word ="ten";
        break;
        case 11:
        word ="eleven";
        break;
        case 12:
        word ="twelve";
        break;
        case 13:
        word ="thirteen";
        break;
        case 14:
        word ="fourteen";
        break;
        case 15:
        word ="fifteen";
        break;
        case 16:
        word ="sixteen";
        break;
        case 17:
        word ="seventeen";
        break;
        case 18:
        word ="eighteen";
        break;
        case 19:
        word ="nineteen";
        break;
        case 20:
        word ="twenty";
        break;
      }
    } else if (value <=29 && value >20 ){
      word = "twenty" + " " + ones(value[1]);
    }
    return word;
}
  // start simply and refactor...
 function ones (one) {
   switch (one) {
     case 1:
     return "one";
     break;
     return "two";
     break;
     case 3:
     return "three";
     break;
     case 4:
     return "four";
     break;
     case 5:
     return "five";
     break;
     case 6:
     return "six";
     break;
     case 7:
     return "seven";
     break;
     case 8:
     return "eight";
     break;
     case 9:
     return "nine";
     break;
 }

}

/*test('BEAST MODE: toCheck', function(){
  assert.isFunction(toCheck);
  assert.equal(toCheck(1.23), "one & 23/100s");
  assert.equal(toCheck(12.34), "twelve & 34/100s");
  assert.equal(toCheck(123.45), "one hundred twenty three & 45/100s");
  assert.equal(toCheck(1234.56), "one thousand, two hundred thirty four & 56/100s");
  // you might need to try some values in between...
}); // END test(BEAST MODE)
*/
