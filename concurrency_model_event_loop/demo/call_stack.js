function third() {
    console.log("third");
}

function second() {
    console.log("second");
    third();
    console.log("fourth");
}

function first() {
    console.log("first");
    second();
    console.log("fifth");
}

first();

// call stack tells you where you are in the program

function foo() {
  foo();
}
foo();

// chrome would through stack size exceeded after limit of 16000