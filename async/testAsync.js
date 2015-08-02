/*jslint node: true */
"use strict";
console.log("hi");
var async = require("async");

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

// callback takes two params, err and transformed
async.map(inputArr, function square(item, callback) {
  costlyOperation(item);
  callback(null, item * item);
}, function(err, results) {
  if (err) {
    console.log("Error occurred");
  }
  else {
    console.log(results);
  }
});

console.log("Squaring done");

// callback takes one param err
async.each(inputArr, function output(item, callback) {
  console.log("input : " + item);
  callback("errrrrrrrrrr");
}, function(err) {
  if (err) {
    console.log("Error occurred" + err);
  }
  else {
    console.log("Completed processing all elements");
  }
});

console.log("Hello World");