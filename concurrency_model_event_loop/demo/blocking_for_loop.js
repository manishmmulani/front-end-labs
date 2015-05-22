// Render Queue over CallBack Queue
// Render Queue - Browser rendering engine will repaint the UI in each frame
// (60 frames per second) whenever call stack is empty
// But browser is constrained by what you are doing in javascript
// Browser can't render till you have code in javascript.
// i.e JS could be updating the DOM (adding rows in the table)
// and browser can't interferee the above operation and render partial table.

function operation(i) {
  //delay();
  console.log(i);
}


var array = [1,2,3,4];

//Code 1 - Blocking
array.forEach(operation);

//Code 2 - Non Blocking
function asyncForEach(array, callBack) {
  array.forEach(function(i) {
    setTimeout(callBack, 0);
  })
}

asyncForEach(array, operation);

// Aim should be keep call stack empty for a friendly UI
// Solution : Asynchronous Callbacks

// setTimeout : time = 1000ms  it's the minimum time after which callback will be executed.
