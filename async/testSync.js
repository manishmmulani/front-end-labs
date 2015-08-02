/*jslint node: true */
"use strict";
console.log("hi");

var inputArr = [];
for (var i = 0; i < 10; i++) {
  inputArr.push(i);
}

function costlyOperation(item) {
  var j = 0;
  for (var i = 0; i < 1000000000; i++) {
    j += 1;
  }
  console.log(item + j);
}

var results = [];
for (var i = 0; i < inputArr.length; i++) {
  costlyOperation(inputArr[i]);
  results.push(inputArr[i] * inputArr[i]);
}
console.log(results);

console.log("Squaring done");

for (var i = 0; i < inputArr.length; i++) {
  console.log("input : " + inputArr[i]);
}

console.log("Hello World");