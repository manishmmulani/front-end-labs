// No strict definition
// things that are slow

// for loop running for 100 times is blocking
// console.log isn't slow
// network requests are slow
// image requests are slow

// Keeping things that are slow out of the call stack - makes it non-blocking

$("button").click( function() {

  $.getSync({
    url : "http://myapp/service/transService/getAllTrades",
    param : {startDate : "2014-01-01", endDate : "2015-05-20"}
  });

  showTrades();

  $.getSync({
    url : "http://myapp/service/posService/getAllPositions",
    param : {startDate : "2014-01-01", endDate : "2015-05-20"}
  });

  showPositions();

  $.getSync({
    url : "http://myapp/service/refService/getStaff",
    param : {}
  });

  showStaff();
}

// if ajax was synchronous, it would block the call stack, make the page
// renderless