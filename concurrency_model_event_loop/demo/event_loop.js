$.on("button", "click", function() {
   console.log("button clicked");
});

setTimeout(function() {
    console.log("Timeout occurred");
}, 5000);

console.log("Hi");