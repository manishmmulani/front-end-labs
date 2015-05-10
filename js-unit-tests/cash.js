/*jslint node:true*/
"use strict";
var C = {
  getCash: function(totalCash, payable) {
    return totalCash - payable;
  }
};

module.exports = C;
