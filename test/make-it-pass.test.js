var test = require('tape'); // assign the tape library to the variable "test"

function sum (a, b) {
  return a+b;
}

function sub (a, b) {
  return a-b;
}
test('sum should return the addition of two numbers', function (t) {
  t.equal(3, sum(1, 2)); // make this test pass by completing the add function!
  t.end();
});

test('sub should return the sub of two numbers', function (t) {
  t.equal(1, sub(2, 1)); // make this test pass by completing the sub function!
  t.end();
});