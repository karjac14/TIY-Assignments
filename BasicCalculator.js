console.assert(add(0, 0) === 0, "Asserting value of 0");
console.assert(add(0, 1) === 1, "Asserting value of 1");
console.assert(add(0, 2), "Addition");
console.assert(add(0, 3), "Addition");
console.assert(add(0, 4), "Addition");
console.assert(add(0, 5), "Addition");
console.assert(add(0, 6), "Addition");
console.assert(add(0, 7), "Addition");
console.assert(add(0, 8), "Addition");
console.assert(add(0, 9), "Addition");
console.assert(add(1, 0), "Addition");
console.assert(add(1, 1), "Addition");
console.assert(add(1, 2), "Addition");
console.assert(add(1, 3), "Addition");
console.assert(add(1, 4), "Addition");
console.assert(add(1, 5), "Addition");
console.assert(add(1, 6), "Addition");
console.assert(add(1, 7), "Addition");
console.assert(add(1, 8), "Addition");
console.assert(add(1, 9), "Addition");
console.assert(add(2, 0), "Addition");
console.assert(add(2, 1), "Addition");
console.assert(add(2, 2), "Addition");
console.assert(add(2, 3), "Addition");
console.assert(add(2, 4), "Addition");
console.assert(add(2, 5), "Addition");
console.assert(add(2, 6), "Addition");
console.assert(add(2, 7), "Addition");
console.assert(add(2, 8), "Addition");
console.assert(add(2, 9), "Addition");

console.assert(minus(0, 1) === -1, "Asserting value of -1");
console.assert(minus(5, 4) === 1, "Asserting value of 1");
console.assert(minus(8, 5) === 3, "Asserting value of 3");
console.assert(minus(9, 6) === 3, "Asserting value of 3");

console.assert(times(0, 7) === 0, "Asserting value of 0");
console.assert(times(1, 8) === 8, "Asserting value of 8");

console.assert(divide(9, 1) === 9, "Asserting value of 9");
console.assert(divide(8, 2) === 4, "Asserting value of 4");
console.assert(divide(5, 0) === Infinity, "Asserting value of infinity");

/**
 * @param {Number} A to add to B
 * @param {Number} B to add to A
 * @return {Number} sum of A and B
 */
function add(A,B){
  return A + B;
} // END add

function minus(A,B) {
  return A-B;
}

function times (A,B) {
  return A*B;
}

function divide (A,B) {
  return A/B;
}
