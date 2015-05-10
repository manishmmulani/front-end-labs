/*jslint node:true, mocha:true*/
"use strict";
var assert = require("assert"); // node.js core module

describe("Array", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal(-1, [1, 2, 3].indexOf(4)); // 4 is not present in this array so indexOf returns -1
    });
  });
});

var C = require("../cash.js");

describe("Cash Register", function() {
  describe("Module C", function() {
    it("Should have getCash Method", function() {
      assert.equal(typeof C, "object");
      assert.equal(typeof C.getCash, "function");
    });

    describe("getCash method", function() {
      it("Should return 300 for inputs 500, 200", function() {
        assert(C.getCash(500, 200), 300);
      })
    })
  });
});
