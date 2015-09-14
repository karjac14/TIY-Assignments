// Put `items.json` in your `APIGymnastics` directory...
var items = require('items.json');


// TODO: Setup mocha and chai...

var test = require('mocha').it;
    expect = require('chai').expect;

test('this is the easy one', function(){
  expect(Array.isArray(items)).to.be.true; // What.
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

  expect(items.length).to.equal(25); // It's haunting me now...
});

test('finding the average price', function(){
  var yourAnswer = "start with `items`; use `Array` methods";

  expect( average(items) ).to.be.closeTo(23.63, 0.01);
});

test('finding that perfect $15 item', function(){

  expect( pricedBetween(items, 14, 18) ).to.deep.equal([ "1970s Coors Banquet Glass Beer Pitcher", "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
"Hand Painted Colorful Feather Glass" ]);
});
  /**
   * @param {Array} items to search through
   * @return {Array} of `names` with `price` between `min` and `max` USD
   */

function average (list) {
    //var allprices = [];
    var total = 0;
    for (var i in list){
        total = total + (list[i].price);
    }
    return total/(items.length);
}

function pricedBetween (list) {
    var all15 = [];
    for (var i in list){
      if (list[i].price > 14 && list[i].price < 18)
        all15.push(list[i].title)
    }
    return all15;
}



test('pond hopping', function(){
  expect( /* your answer */ ).to.deep.equal({
    name: "1970s Schlitz Malt Liquor Glass Beer Pitcher",
    price: 18.00
  });
});

test('just wood or _reclaimed_ wood?', function(){
  var actual = wooden(items); // Who defined `wooden`...? Oh.

  expect( actual ).to.deep.equal( /* an Array of String names... */ );
});

test('this is just SEO bait, I know it...', function(){
  var actual = octomatter(items); // Just one way to do it... Plus, "octomatter"!

  expect(actual).to.deep.equal(/* Look, I can't do _everything_ for you! */);
});

test('true craftsmen... women... people. Birds?', function(){
  expect(makerSellers(items)).to.equal(18);
});
