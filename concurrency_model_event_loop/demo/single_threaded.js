console.log("first");

setTimeout(function timeout() {
    console.log("second");
}, 0);

console.log("third");

// JS is single threaded
// It has a single call stack
// It can do only one thing at a time

// Asynchronous behaviour is possible through Web APIs provided by browser
// C++ APIs by Node
// http://latentflip/loupe

// Web API + Callback Queue + Event Loop
// Event loop checks call stack, if that's empty, it dequeues message (callback) from Queue


//IMAGE - http://www.appsdev.is.ed.ac.uk/blog/wp-content/uploads/2015/03/Event-loop.png