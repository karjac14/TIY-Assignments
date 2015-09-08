var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc


test('getting a list of multiples of 3', function(){
  expect(tres).to.exist;
  expect(tres(10)).to.equal(18);
  expect(tres(20)).to.equal(63);
  expect(tres(50)).to.equal(408);
}); // END test 3s

test('getting a list of multiples of 5', function(){
  expect(cinco).to.exist;
  expect(cinco(10)).to.equal(5);
  expect(cinco(20)).to.equal(30);
  expect(cinco(50)).to.equal(225);
});


test('getting a list of multiples of 3 and 5', function(){
  expect(multiple).to.exist;
  expect(multiple(10)).to.equal(23);
  expect(multiple(20)).to.equal(93);
  expect(multiple(50)).to.equal(633);
  expect(multiple(1000)).to.equal(266333);
}); // END test 3s and 5s


function tres (num) {
  var sum = 0;
  for (var i=3; i<num; i++){
    if(i % 3 == 0 ){
      sum = sum + i;
    }
  }
return sum;
}

function cinco (num) {
  var sum = 0;
  for (var i=5; i<num; i++){
    if(i % 5 == 0 ){
      sum = sum + i;
    }
  }
return sum;
}


function multiple (num) {
  var sum = 0;
  for (var i = 3; i < num; i++){
    if((i % 3 === 0) || (i % 5 === 0)){
      sum = sum + i;
    }
  }
return sum;
}



function multiple (num) {
  var sum;
  for (var i=0; i<num; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum = sum + i;
    }
  }
return sum;
}
