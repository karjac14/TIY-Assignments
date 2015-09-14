var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc


test('getting sum of multiples of 3', function(){
  expect(tres).to.exist;
  expect(tres(10)).to.equal(18);
  expect(tres(20)).to.equal(63);
  expect(tres(50)).to.equal(408);
}); // END test 3s

test('getting sum of multiples of 5', function(){
  expect(cinco).to.exist;
  expect(cinco(10)).to.equal(5);
  expect(cinco(20)).to.equal(30);
  expect(cinco(50)).to.equal(225);
});


test('getting sum of multiples of 3 and 5', function(){
  expect(multiple).to.exist;
  expect(multiple(10)).to.equal(23);
  expect(multiple(20)).to.equal(63);
  expect(multiple(50)).to.equal(453);
  expect(multiple(1000)).to.equal(200003);
}); // END test 3s and 5s


test('getting a list of multiples of 3', function(){
  expect(mtres).to.exist;
  expect(mtres(10)).to.deep.equal([3,6,9]);
  expect(mtres(20)).to.deep.equal([3,6,9,12,15,18]);
  expect(mtres(50)).to.deep.equal([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48]);
});

test('getting a list of multiples of 5', function(){
  expect(mcinco).to.exist;
  expect(mcinco(10)).to.deep.equal([5]);
  expect(mcinco(20)).to.deep.equal([5,10,15]);
  expect(mcinco(50)).to.deep.equal([5,10,15,20,25,30,35,40,45]);
});


function mtres (num) {
  var arr3 =[];
  for (var i=3; i<num; i++){
    if(i % 3 == 0 ){
      arr3.push(i);
    }
}
    return arr3;
}



function mcinco (num) {
  var arr5 =[];
  for (var i=5; i<num; i++){
    if(i % 5 == 0 ){
      arr5.push(i);
    }
}
    return arr5;
}

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
    if((i % 3 === 0) || (i % 5 === 0) ){
      if (i % 15 !== 0){
      sum = sum + i;
    }
    }
  }
return sum;
}
